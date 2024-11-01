# The Portal

The Portal is a dynamic news portal website built with Angular and styled using TailwindCSS, featuring real-time news content sourced from [The New York Times API](https://developer.nytimes.com/apis). With a clean, user-friendly layout, it offers a seamless reading experience across devices. Key features include:

- Top Stories: Stay updated with the most important news at a glance.
- Latest News: Discover the newest articles across all categories.
- News Sections: Explore a variety of sections catering to different interests.
- Search: Find specific articles or topics quickly and easily.

Please visit the live demo [here](https://the-portal-seven.vercel.app/)

## Deployment

I deployed this project on [Vercel](https://vercel.com/) using the Angular framework preset and override the build command with:

```bash
node -r dotenv/config mynode.js; ng build
```

That command will run the _mynode.js_ file that I use to setting up the environment for the API Key for this project. Please read [this article](https://medium.com/@lara.delrio333/deploy-an-angular-project-in-vercel-with-secret-environment-variables-74323925712d) for more details.

## Clone this project

To set up The Portal on your local machine, follow these steps:

1. **Clone the repository**:

```bash
git clone https://github.com/Zulfaabam/the-portal.git
cd the-portal
```

2. **Install dependencies**:

   Make sure you have Node.js installed, then run:

```bash
npm install
```

3. **Set up the New York Times API**:
   - Go to The New York Times Developer portal and sign up for an API key.
   - Create a .env file in the root directory of the project and add your API key:

```bash
NG_APP_NYT_API_KEY=your-api-key
```

4. **Run the application**:

```bash
npm start
```

The application should now be running on <http://localhost:4200>.

This project is now ready to explore and customize!

## Build

Run `node -r dotenv/config mynode.js; ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
