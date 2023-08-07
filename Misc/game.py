import pygame
import sys

# Initialize Pygame
pygame.init()

# Set up the window
WINDOW_SIZE = (300, 300)
screen = pygame.display.set_mode(WINDOW_SIZE)
pygame.display.set_caption("Tic Tac Toe")

# Set up the game board
board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]

# Set up the colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# Set up the font
font = pygame.font.Font(None, 60)

# Draw the game board
def draw_board():
    screen.fill(WHITE)
    pygame.draw.line(screen, BLACK, (100, 0), (100, 300), 5)
    pygame.draw.line(screen, BLACK, (200, 0), (200, 300), 5)
    pygame.draw.line(screen, BLACK, (0, 100), (300, 100), 5)
    pygame.draw.line(screen, BLACK, (0, 200), (300, 200), 5)
    
    for row in range(3):
        for col in range(3):
            symbol = font.render(board[row][col], True, BLACK)
            x = col * 100 + 30
            y = row * 100 + 30
            screen.blit(symbol, (x, y))

# Check if the game is over
def game_over():
    # Check for a win
    for row in range(3):
        if board[row][0] == board[row][1] == board[row][2] and board[row][0] != ' ':
            return True
    for col in range(3):
        if board[0][col] == board[1][col] == board[2][col] and board[0][col] != ' ':
            return True
    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != ' ':
        return True
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != ' ':
        return True
    
    # Check for a tie
    for row in range(3):
        for col in range(3):
            if board[row][col] == ' ':
                return False
    return True

# Main game loop
turn = 'X'
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        elif event.type == pygame.MOUSEBUTTONDOWN:
            x, y = pygame.mouse.get_pos()
            row = y // 100
            col = x // 100
            if board[row][col] == ' ':
                board[row][col] = turn
                if turn == 'X':
                    turn = 'O'
                else:
                    turn = 'X'
    
    draw_board()
    pygame.display.update()
    
    if game_over():
        pygame.time.wait(1000)
        pygame.quit()
        sys.exit()
