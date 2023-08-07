import pygame
import random

# Initialize Pygame
pygame.init()

# Set up the game window
width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Tetris")

# Define colors
BLACK = (0, 0, 0)
CYAN = (0, 255, 255)
YELLOW = (255, 255, 0)
MAGENTA = (255, 0, 255)
GREEN = (0, 255, 0)
RED = (255, 0, 0)
ORANGE = (255, 165, 0)
BLUE = (0, 0, 255)

# Define block types and their corresponding colors
block_types = [
    [[1, 1, 1, 1]],  # I
    [[1, 1], [1, 1]],  # O
    [[1, 1, 0], [0, 1, 1]],  # Z
    [[0, 1, 1], [1, 1, 0]],  # S
    [[1, 1, 1], [0, 1, 0]],  # T
    [[1, 1, 1], [0, 0, 1]],  # L
    [[1, 1, 1], [1, 0, 0]]  # J
]
block_colors = [CYAN, YELLOW, MAGENTA, GREEN, RED, ORANGE, BLUE]

# Define block size and number of rows and columns
block_size = 30
rows = height // block_size
columns = width // block_size

# Initialize the grid
grid = [[BLACK] * columns for _ in range(rows)]

# Initialize the current block
current_block = random.choice(block_types)
current_color = random.choice(block_colors)
block_row = 0
block_column = columns // 2 - len(current_block[0]) // 2

# Initialize the score
score = 0

# Define the clock to control the game's frame rate
clock = pygame.time.Clock()

# Game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_DOWN:
                # Move the block down
                block_row += 1

            if event.key == pygame.K_LEFT:
                # Move the block to the left
                block_column -= 1

            if event.key == pygame.K_RIGHT:
                # Move the block to the right
                block_column += 1

            if event.key == pygame.K_UP:
                # Rotate the block
                current_block = list(zip(*reversed(current_block)))

    # Check if the block has reached the bottom or collided with another block
    if block_row + len(current_block) > rows or any(grid[block_row + r][block_column + c] != BLACK for r in range(len(current_block)) for c in range(len(current_block[0]))):
        # Add the current block to the grid
        for r in range(len(current_block)):
            for c in range(len(current_block[0])):
                if current_block[r][c]:
                    grid[block_row + r][block_column + c] = current_color

        # Check for completed rows and remove them
        completed_rows = [row for row in range(rows) if all(grid[row])]
        for row in completed_rows:
            del grid[row]
            grid.insert(0, [BLACK] * columns)
            score += 10

        # Generate a new block
        current_block = random.choice(block_types)
        current_color = random.choice(block_colors)
        block_row = 0
        block_column = columns // 2 - len(current_block[0]) // 2

    # Clear the screen
    screen.fill(BLACK)

    # Draw the grid
    for row in range(rows):
        for col in range(columns):
            pygame.draw.rect(screen, grid[row][col], (col * block_size, row * block_size, block_size, block_size))

    # Draw the current block
    for r in range(len(current_block)):
        for c in range(len(current_block[0])):
            if current_block[r][c]:
                pygame.draw.rect(screen, current_color, ((block_column + c) * block_size, (block_row + r) * block_size, block_size, block_size))

    # Update the display
    pygame.display.flip()

    # Limit the frame rate
    clock.tick(10)

# Quit the game
pygame.quit()
