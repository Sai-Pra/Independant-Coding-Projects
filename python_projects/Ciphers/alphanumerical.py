from traceback import print_tb
from unicodedata import decimal



def flipToNumbers(stringToFlip):
    numList = list()
    for letter in stringToFlip:
        decimalVal = ord(letter.lower()) - 96
        if not(decimalVal <= 26 and decimalVal >= 1):
            print("INVALID")
            return 0
        numList.append(str(decimalVal) + ";")
    theString = ''.join(str(e) for e in numList)
    theString = theString[0: len(theString)-1]
    print(theString)

def flipToLetters(numToFlip):
    wordList = list()
    numList = list(numToFlip.split(";"))
    for num in numList:
        if not num.isdigit():
            print("Invalid Argument Entered")
            return 0
        decimalVal = int(num) + 96
        if not(decimalVal <= 122 and decimalVal >= 97):
            print("Invalid Argument Entered")
            return 0
        wordList.append(chr(decimalVal))
    print(''.join(str(e) for e in wordList))

word = input("Enter n to convert from letters to numbers, or l to convert from numbers to letters: ")

while not (word == "n" or word == "l"):
    word = input("Enter n to convert from letters to numbers, or l to convert from numbers to letters: ")

# mydict = {"e": cryption("e"), "d": cryption("d"), "b": bruteForce(askForInput())}

if(word == "n"):
    flipToNumbers(input("Enter string characters you want to convert: "))
elif(word == "l"):
    flipToLetters(input("Enter numbers you want to convert: "))
else:
    print("Not Valid Entry")
