# React Quote Generator

This is a dark-themed, fully responsive Quote Generator built with React. The app allows users to select a quote category and generate random quotes using the Quotable API. Categories that have no quotes or only one quote are automatically filtered out to prevent errors or repeated results. The app ensures that pressing the "New Quote" button always gives a working and meaningful result.

## Features

* Dark modern user interface
* Fully responsive layout for mobile, tablet, laptop, and desktop
* Random quote generator functionality
* Dynamic category list fetched from the Quotable API
* Automatically filters categories that are empty or have only one quote
* Stable behavior with fallback handling
* Smooth and reliable user experience

## Tech Stack

* React
* JavaScript (ES6)
* CSS for styling and responsiveness
* Quotable API

## How It Works

The app fetches available quote categories from the Quotable API. It then filters out categories that are unusable by checking the `quoteCount` value. Only categories that have more than one available quote are kept. When the user selects a category and presses the **New Quote** button, the application requests a random quote from that category and updates the UI.

## Important Behavior

* Categories with `quoteCount` less than or equal to one are removed so they do not break the app
* Ensures that the **New Quote** button always works correctly

## Installation and Running the Project

1. Clone the project repository
2. Install dependencies using `npm install`
3. Start the development server using `npm start`
4. Open the application in your browser at `http://localhost:3000`

## API Used

This project uses the [Quotable API](https://github.com/lukePeavey/quotable) to fetch categories and quotes. Tags endpoint provides available categories. Random quote endpoint returns random quotes based on selected tag.

## Future Improvements Ideas

* Add ability to copy a quote to clipboard
* Add "Share on Twitter" or social sharing features
* Add a favorites list stored in localStorage
* Add light and dark theme switching
* Add animations when quotes change

## Acknowledgements

Quotes are provided by the [Quotable API](https://github.com/lukePeavey/quotable).

## License

This project is free to use for learning and personal development.