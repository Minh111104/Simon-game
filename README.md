# Simon-game
This project is a web-based implementation of the classic **Simon Game**. The goal of the game is to remember and reproduce a pattern of colors that the game generates, with the pattern getting progressively longer and more complex with each round.

## Table of Contents
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Credits](#credits)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simon-game.git

2. Open the project folder:
    ```bash
    cd simon-game

3. Open `index.html` in your browser to play the game.

## How to Play
- Open the game and press any key to start.
- The game will display a pattern of colors. Each color button will light up and play a sound.
- You need to click the colored buttons in the exact order the game shows.
- The game pattern will grow after each round, and your goal is to remember the sequence correctly.
- If you make a mistake, the game will end, and you can start over by pressing any key again.

## Project Structure
   ```bash
    simon-game/
    │
    ├── index.html          # The main HTML file that holds the game's structure
    ├── game.js             # JavaScript file for the game logic
    ├── styles.css          # CSS file for game styling
    └── sounds/             # Folder to store sound files for each color
        ├── red.mp3
        ├── green.mp3
        ├── blue.mp3
        └── yellow.mp3
```

## Features
- Dynamic color sequences that increase in length after each successful round.
- Audio feedback for each button click.
- Visual feedback with animations when buttons are pressed.
- Game-over screen when the player makes a mistake.
- Responsive design that adjusts to different screen sizes.

## Technologies Used
- **HTML**: For the structure of the game.
- **CSS**: For styling the game interface.
- **JavaScript**: For game logic and interactivity.
- **jQuery**: For handling events and animations easily.
- **Google Fonts**: Used the "Press Start 2P" font for a retro feel.

## Credits
I learn to build this from Dr. Angela's _The Complete 2024 Web Development Bootcamp_ on Udemy.
