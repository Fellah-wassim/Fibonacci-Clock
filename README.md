# Fibonacci Clock App

A **Fibonacci Clock** built with **React** and **TypeScript**. The clock visualizes time using a unique Fibonacci sequence representation where squares of different colors correspond to hours, minutes, and their overlaps. This interactive clock also lets users adjust time in increments of 5 minutes using dynamic buttons.

## Table of Contents

- [Features](#features)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)

## Features

- **Unique Fibonacci Time Representation**: The Fibonacci sequence is used to represent hours and minutes visually using colored boxes.
- **Dynamic Time Adjustment**: Users can change the time with "Next" and "Back" buttons that adjust time by 5 minutes.
- **Random Representation**: Time can be randomly represented in different valid Fibonacci number combinations.
- **Color Coding**:
  - **Blue**: Represents both hours and minutes (overlap).
  - **Green**: Represents minutes only.
  - **Red**: Represents hours only.
- **Responsive Design**: The clock layout adjusts to screen sizes.
- **Styled with CSS Grid**: For clear box layout representation.

## How It Works

The app calculates the current time by breaking it down into hours and minutes. It then maps these values to the Fibonacci sequence \`[1, 1, 2, 3, 5]\` using a random valid representation of time. Each square in the clock is color-coded according to whether it represents hours, minutes, or both.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Fellah-wassim/Fibonacci-Clock.git
   cd Fibonacci-Clock
   ```

2. **Install dependencies:**

   Make sure you have **Node.js** installed. Then, run the following:

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Visit the app** at \`http://localhost:3000\` in your browser.

## Usage

- Upon starting the app, you will see a grid of squares representing the current time in Fibonacci format.
- The current time will be displayed in standard digital format.
- Use the **Next 5 mins** and **Back 5 mins** buttons to adjust the time. The boxes and their colors will update accordingly.

## Technologies

- **React**: UI library for building the application.
- **TypeScript**: For static typing and catching errors during development.
- **CSS**: For components styling.
- **JavaScript/TypeScript utilities**: For calculating valid Fibonacci number representations and assigning colors to the boxes.
