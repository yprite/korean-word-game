# Korean Syllable Matching Game

Welcome to the **Korean Syllable Matching Game**! This is an educational web-based game where players match Korean syllables with their correct English (or Japanese) transliterations. It's designed to help users practice reading Korean syllables in a fun and interactive way.

## 🎮 Game Overview

In this game, you’ll be shown a random Korean syllable, and your goal is to select the correct pronunciation from three options. The game is timed, and you can set your preferred time and total number of questions at the start.

![Game Screenshot](./images/screenshot.png)

> **Note**: The game is hosted on Amazon S3 and supports integration with Google AdSense for ads.

## 📖 How to Play

1. **Set Up**: At the start screen, set the time (in seconds) and the total number of questions.
2. **Start the Game**: Press the **Start** button to begin.
3. **Answer Questions**: For each question, you will see a Korean syllable and three possible transliterations. Click on the correct answer.
4. **Feedback**: After each selection, you’ll receive feedback on whether your choice was correct or not.
5. **Score Tracking**: Your score, time remaining, and the total questions are displayed throughout the game.
6. **End Game**: Once you finish all questions or time runs out, you can click **Return to Start** to restart the game.

## 🌟 Features

- **Customizable Settings**: Choose your game duration and number of questions.
- **Real-Time Feedback**: Get instant feedback after each answer.
- **Score Tracking**: Track your correct answers throughout the game.
- **Responsive Layout**: The game is optimized for various screen sizes.
- **Google Ad Integration**: Supports Google AdSense for monetization.

## 📷 Screenshots

You can add screenshots to help users understand the game better. Here’s an example of how to link images:

![Start Screen](./images/start-screen.png)
![Game Screen](./images/game-screen.png)

## 🚀 Getting Started

### Prerequisites

- Make sure you have a web server (such as Amazon S3) to host the HTML, CSS, and JavaScript files.
- Optional: Set up Google AdSense to add ads to your game.

### Hosting on Amazon S3

1. Upload all game files (HTML, CSS, JavaScript) to your S3 bucket.
2. Enable public access for the bucket or configure a CloudFront distribution if desired.
3. Access your game through the S3 public URL or CloudFront distribution.

### Clone the Repository

To make a local copy of the project:

```bash
git clone https://github.com/yourusername/korean-syllable-game.git
cd korean-syllable-game
