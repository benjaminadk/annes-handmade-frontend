## 💎 Anne's Handmade

Handmade jewelry made with love.

## Table of Contents

- [Anne's Handmade](#annes-handmade)
- [Frontend Features](#frontend-features)
  - [Next.js](#next.js)
  - [Styled Components](#styled-components)
  - [Product Search](#product-search)
  - [Payment Processing](#payment-processing)
  - [Pagination](#pagination)
  - [Admin Dashboard](#admin-dashboard)
- [Backend Features](#backend-features)
  - [Apollo Server](#apollo-server)
  - [Prisma Database](#prisma-database)
  - [Email Service](#email-service)
  - [Permission System](#permission-system)
- [Testing](#testing)
- [Deployment](#deployment)

## Frontend Features

### Next.js

A server-side-rendered _React_ application built with _Next.js_.

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-01.png" width="800">

### Styled Components

_Styled Components_ addresses the styling needs of the entire site.

- A theme object is supplied to the `ThemeProvider` component. Green is the primary color, with black and pink highlights. Various grey tones are used add subtle emphasis. `Raleway` is the primary font, with `Charmonman` used sparingly.

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-08.png" width="800">

- Animation created with `keyframes` helper function. When a category is hovered an overlay describing the category slides into view. There is also an enlargement and popout effect.

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-09.gif" width="400">

- Password input component which displays the quality of the password as it is typed. Using regular expressions and a scoring algorithm to calculate props sent to a styled component.

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-10.gif" width="400">

### Product Search

Product search built with _Downshift_ and _Apollo_ Queries.

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-03.gif" width="800">

### Payment Processing

Credit card payments are processed with _Stripe Checkout_ and the _Stripe API_.

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-04.gif" width="800">

### Pagination

Query parameters used to paginate and categorize catalog of products. Allows adjustable results per page and the ability to to narrow catalog by bead type or product type.

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-05.png" width="800">

### Admin Dashboard

Admin has ability to add/edit/delete products, including uploading images and toggling shipped status. _React Tables_ helps sort, filter and organize inventory and sales data.

- Sales data sorted by the number of items per order. Provides a toggle button for shipped status and a link to the order on _Stripe_. Sub-table containing list of ordered items is open.

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-06.png" width="800">

- Inventory data filtered by products containing the test "buddha" with a product type of "Necklace" and a bead type of "Black Onyx". The optional update product sub-table is open where any product information or image can be changed by the admin.

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-07.png" width="800">

## Backend Features

### Apollo Server

Built with _GraphQL_. Playground helps test Queries and Mutations and is available on the backend at `/graphql`

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-02.png" width="800">

### Prisma Database

Seeded in development via _Google Sheets API_. All product data is persisted in a spreadsheet. This adds flexibility and convenience to the development process.

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-12.png" width="800">

### Email Service

Emails are sent to customers with a "Thank You" and order invoice when a transaction is complete. Users also recieve emails when they signup or request a new password. Emails are templated with _MJML_ and sent with _Nodemailer_ and _SendGrid_.

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-11.png" width="400">

### Permission System

Use resolver composition, _JSON Web Tokens_, cookies and user roles to control how users interact with the application. Users fall into three categories: unauthenticated, authenticated and admin. If user does not have permissions required for an operation an error thrown and displayed in the UI.

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-14.png" width="800">

## Testing

Tests are run with _Jest_ and _Enzyme_. Much of the testing consists of using `MockedProvider` from _React Apollo_ to supply fake data to various components. Components are then mounted in the test environment to ensure they render and function correctly. To JSON snapshots are kept and used to test the components, making sure that each new test matches the previous snapshot.

<img src="https://s3-us-west-1.amazonaws.com/shopping-site/assets/readme-13.png" width="800">

## Deployment

The site is deployed in three parts to _Heroku_. The database, the backend and the frontend each stand alone and work in concert. As changes are made in development and committed to _GitHub_ source control they first go through _Travis_, a continous integration service. The application is built and tested. As long as there are no errors and all tests pass the new code is deployed to _Heroku_ where it is updated. This system helps keep serious bugs from making their way into production.
