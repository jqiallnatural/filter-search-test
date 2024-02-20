# Coding Interview Question:
## Background:
You are tasked with building a simple feature for a web application using React and TypeScript. The feature involves displaying a list of items fetched from an API and implementing a search functionality to filter items based on user input. The list should update in real-time as the user types in the search box.

## Requirements:
React Component Structure: Design and implement the main React component (ItemList) that holds the state for the items fetched from the API and the current search query. Use functional components and hooks.

## TypeScript Usage:
Define TypeScript interfaces or types for the item structure (assume each item has an id, name, and description) and the component props and state where applicable.

## Fetching Data:
Implement a function to fetch items from a mock API (you can use a static array as your data source for this exercise). Display a loading state until the data is fetched.

## Search Functionality:
Implement a search feature that filters the displayed list of items based on the user's input in a search box. The filtering should be case-insensitive and can match any part of the item's name or description.

## Displaying Items:
Render the list of items in a simple format (e.g., a list or a table). Each item should display its name and description. When the search box is used, only items matching the query should be displayed.

## Error Handling:
Implement basic error handling for the API request and display a user-friendly message if the data fetch fails.

## Bonus (if time permits):
Add simple styling to your components using CSS-in-JS or a CSS framework of your choice.
Implement debounce in the search input to reduce the number of re-renders as the user types.
## Guidelines:
You can use a code editor of your choice with a simple React TypeScript boilerplate set up.
Comment your code where necessary to explain your logic or any assumptions you make.
Focus on readability, simplicity, and adherence to React best practices.
This question covers various essential aspects, such as component design, state management, TypeScript typing, data fetching, and user input handling, providing a comprehensive overview of the candidate's skills. The bonus tasks offer insights into the candidate's knowledge of performance optimization and styling in React applications.
