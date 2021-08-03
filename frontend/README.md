# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# App functionality

## All books pagе

Here you will find all books created. Links are in color Deep Purple/Amber

## Details

Here you will find information about a book, including title, author, description, year of publishing, rating (number from 1 to 10), image, link to buy it from online shop (not required). If you have created the book, you will see buttons for editing and deleting the book.

## Comments

On each book details after the information about the book, you will find section with comments. If you are logged, you wiil see a form for creating comment. If you have created comment, you will see buttons for editing and removing it.

## Edit 

You can access this page only if you are the owner (there is a route guard and backend validation). All fields will be filled with information for the book.

## Search

You can search by three criteria: title, author and year of publishing. Forms for entering keyword are seperated in tabs.

## Backend

You can find the backend here: 

