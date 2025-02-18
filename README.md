# Recipe Website with Portion Adjuster

## Overview
This project demonstrates my web development skills by building a small, kitchen-related website using React and Material-UI (MUI). The main feature is a dynamic recipe portion adjuster, allowing users to scale ingredient quantities based on servings. The design was inspired by user-friendly recipe sites such as [einfachbacken.de](https://www.einfachbacken.de).

Unfortunately, I could only take 3 days to build it under the two-week deadline. The project showcases basic recipe website functionality, and I especially learned a lot while working on the portion adjuster.

---

## Tools and Technologies Used

- **React**: Used to build the interactive components and overall structure of the site.
- **Material-UI (MUI)**: Customized components to create a responsive, user-friendly interface.
- **JavaScript**: For implementing interactive functionality, particularly in the portion adjuster.
- **CSS (styled with MUI's `sx` prop)**: Used for styling and layout adjustments.

---

## Features

- **Basic Frontend Development**: Demonstrating my ability to create a simple yet functional website.
- **Portion Adjuster**: Allows users to adjust ingredient amounts dynamically by changing the number of servings.
- **Ingredient List**: Displays the list of ingredients for the recipe, sourced from [tatyanaseverydayfood.com](https://www.tatyanaseverydayfood.com).

---

## Challenges & Solutions

Throughout this project, I encountered several challenges, especially when working with React components and styling with MUI. Here’s a summary of some of the difficulties and how I overcame them:

- **Portion Adjuster**: I created a custom portion adjuster using React. This was a particularly challenging task, but it helped me learn more about JavaScript functions, state management, and handling dynamic inputs.
- **Layout Issues**: Initially, the website layout wasn’t responsive as expected. After checking error messages and debugging, I used ChatGPT to troubleshoot and learn how to correctly apply styles (e.g., using the `sx` prop for MUI components). The responsiveness would still need more time.
- **Learning Resources**: For some issues, I turned to resources like ChatGPT, which helped me understand mistakes, improve my JavaScript skills, and find better solutions. I made sure to check error messages first and confirm the issue before seeking help.

---

## Time Constraints

Given that I had only 3 days to dedicate to this project, I wasn’t able to complete all the features I had initially planned. With more time and a deeper understanding of web development, I would have added features such as the recipe instructions with adjusted ingredients, additional card components, and used a .json file to customize the content of the cards.

---

## Key Takeaways

This project has been an invaluable learning experience. It helped me further understand React, JavaScript, and how to build dynamic websites. The portion adjuster component, in particular, taught me a lot about handling user input and dynamic updates.

Though I am still learning web development, I am proud of the results and confident that I am improving my skills with each project.

---

## Files Included

- **`App.jsx`**: Main file that renders the entire website.
- **`components/PortionAdjuster.jsx`**: Custom component for adjusting recipe portions.
- **`components/SearchAppBar.jsx`**: Search bar component using MUI's AppBar and styled components.
- **`components/RatingContainer.jsx`**: Custom component for displaying ratings (controllable).
- **`components/LeftContainer.jsx`**: Custom component for the left side content.
- **`components/RightContainer.jsx`**: Custom component for the right side content.

---

## How to Run the Project

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to launch the project in your browser.

---

## Help Used

- **ChatGPT**: Used for debugging and troubleshooting JavaScript issues. Example of prompt used: I am building a recipe website with basic functionalities and recipe adjuster, I am receiving an error message (copy paste of error message) and I can't figure out where I made the mistake. Explain the mistake and how to fix it but don't give me the code.
