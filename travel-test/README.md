# Travel App Test

## Getting Started

- Ensure you have [node installed](https://nodejs.org/en/) on your machine
- Ensure [npm or yarn](https://treehouse.github.io/installation-guides/mac/node-mac.html) is installed (Mac guide)
- Clone the repository on your local environment
- From your terminal, `cd` into `travel-test`
- Run `npm install` to install all dependencies
- Run `npm start` to start the local server on [http://localhost:3000](http://localhost:3000)

## Running Tests

- From your terminal, run `npm run test`
- Only core business logic tests were added in this test

## Features

- Adds and updates existing bookings in cart (See real-time updates to app-level state with [Redux DevTools Chrome Extension](https://github.com/reduxjs/redux-devtools))
- Clicking on an experience loads its details in overlay
- Booking an experience triggers a toast notification
- Cart icon changes if any booking is added to cart
- Responsive from desktop to mobile
- Fetches device specific images to decrease image payload sizes
- Images lazy loaded on scroll; dummy placeholders shown until images load fully
- Overlay component only loaded when requested via code splitting
- Accessibility: captioned images with alt, figures, semantic HTML
- Typescript used to catch errors during development while enhancing developer experience
- Scalable folder structure for components, styling and reusuable themes

## If I had more time

- Cypress E2E + React Testing Library integration tests
- Placeholder for texts
- Achieve near perfect scores on Chrome lighthouse audit metrics
