# Bouncy Ball Simulator

The "Bouncy Ball Simulator" is an interactive browser-based application that simulates the movement of a ball on a grid-based board. The ball bounces off walls and interacts with various elements on the board, providing a dynamic and engaging experience. This project is implemented using JavaScript, HTML, and CSS.

## Features

### 1. Dynamic Board Representation:
- The board is represented as a 2D grid, where each cell can have different types of content:
  - `"X"`: Walls that the ball cannot pass through.
  - `"Y"`: Special cells that alter the ball's direction upon contact.
  - `"1"`: The current position of the ball.
  - `"0"`: Empty cells the ball can move through.

### 2. Real-Time Ball Movement:
- The ball starts at a predefined position and moves across the board in one of several possible directions.
- Movement is recalculated every 200 milliseconds, creating a smooth and continuous simulation.

### 3. Interaction with the Board:
- **Wall Collision**: When the ball encounters a wall (`"X"`), it bounces back in a random new direction.
- **Special Cells**: On hitting a special cell (`"Y"`), the ball changes direction, avoiding reversing its previous trajectory. The `"Y"` cell turns into an empty cell (`"0"`) after contact.
- **Empty Cells**: The ball moves freely through empty cells (`"0"`) and updates its position dynamically.

### 4. Visual Display:
- The grid is rendered using HTML and styled with CSS for a clean and visually appealing layout.
- Different cell types are represented by distinct colors:
  - Walls are black.
  - Special cells are yellow.
  - The ball is red.
  - Empty cells are white.

### 5. Design:
- The application is designed to fit various screen sizes and features a centered layout for optimal viewing.
- Spacious game-themed app background

### 6. Customization and Scalability:
- The initial configuration of the board can be easily modified in the JavaScript code, allowing for custom layouts.
- The direction logic can be expanded or refined for more complex interactions.

## Summary

The "Bouncy Ball Simulator" is a simple yet captivating application that demonstrates concepts like grid-based logic, collision detection, and interactive animations. Ideal for learning or entertainment, it offers a solid foundation for building more advanced simulations or games.
