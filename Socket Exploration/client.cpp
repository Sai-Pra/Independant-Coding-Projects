#include <iostream>
#include <fstream>
#include <winsock2.h>

int main() {
    WSADATA wsaData;
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
        std::cerr << "WSAStartup failed" << std::endl;
        return 1;
    }

    SOCKET clientSocket;
    struct sockaddr_in serverAddr;

    // Create socket
    clientSocket = socket(AF_INET, SOCK_STREAM, 0);
    if (clientSocket == INVALID_SOCKET) {
        std::cerr << "Socket creation error" << std::endl;
        WSACleanup();
        return 1;
    }

    // Connect to the server (localhost)
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_port = htons(12345);  // Port number
    serverAddr.sin_addr.s_addr = inet_addr("127.0.0.1");  // Loopback address
    if (connect(clientSocket, (struct sockaddr*)&serverAddr, sizeof(serverAddr)) == SOCKET_ERROR) {
        std::cerr << "Connection error" << std::endl;
        closesocket(clientSocket);
        WSACleanup();
        return 1;
    }

    // Open the file to send
    std::ifstream inputFile("turtle.jpg", std::ios::binary);

    if (!inputFile.is_open()) {
        std::cerr << "File open error" << std::endl;
        closesocket(clientSocket);
        WSACleanup();
        return 1;
    }

    // Send file contents
    char buffer[1024];
    while (!inputFile.eof()) {
        inputFile.read(buffer, sizeof(buffer));
        ssize_t bytesRead = static_cast<ssize_t>(inputFile.gcount());
        send(clientSocket, buffer, static_cast<int>(bytesRead), 0);
    }

    // Close socket and file
    closesocket(clientSocket);
    WSACleanup();
    inputFile.close();

    return 0;
}
