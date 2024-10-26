# Utube - YouTube Clone

This project is a YouTube clone built using **React** and **Redux Toolkit**. It replicates the basic functionalities of YouTube, such as displaying videos, navigation, and watching video details. The app is fully responsive, providing a seamless user experience on both desktop and mobile devices.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- **Home Page**: Displays a list of videos.
- **Search Functionality**: Search and display relevant videos.
- **Video Playback**: Play videos in a video player.
- **Redux State Management**: Manage the app's state with Redux Toolkit.
- **Responsive UI**: Built with Tailwind CSS, making the design fully responsive across devices.

## Folder Structure

Here’s a breakdown of the folder structure of the project:

```
UTUBE
│
├── public/                 # Public assets
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── About.js        # About page component
│   │   ├── Buttonlist.js   # List of buttons for navigation or filtering
│   │   ├── Buttons.js      # Individual button component
│   │   ├── Header.js       # Header component with branding
│   │   ├── Home.js         # Main home component
│   │   ├── MainContainer.js# Container for main content
│   │   ├── Sidebar.js      # Sidebar navigation component
│   │   ├── VideoCard.js    # Video card component displaying each video
│   │   ├── VideoContainer.js # Container for video cards
│   │   ├── Watch.js        # Video player page component
│   │
│   ├── redux/              # Redux configuration
│   │   ├── constant.js     # Redux constants
│   │   ├── slice.js        # Redux slice for state management
│   │   ├── store.js        # Redux store configuration
│   │
│   ├── App.css             # Main CSS for styling
│   ├── App.js              # Main app component
│   ├── index.css           # Global styles
│   ├── index.js            # Entry point for React app
│
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Ni1esh-Yadav/Utube---YouTube-Clone.git
   cd utube
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run start
   ```

   The app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. **Browse Videos**: On the home page, browse a list of videos in a grid layout.
2. **Watch Video**: Click on a video to view it in the video player with additional details.
3. **Navigate**: Use the sidebar for easy navigation.
4. **Search Videos**: Use the search functionality to find specific videos.
5. **Responsive Design**: Enjoy a responsive experience across different screen sizes, making it suitable for both mobile and desktop use.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **Redux Toolkit**: State management library.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
