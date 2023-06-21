## [Build With Assembly](https://assemblyhq.com/) Front-end Case Study

This is a time-boxed project, lasting 4-5 hours, for the [Build With Assembly](https://assemblyhq.com/) Software Engineer (Front-end) role. The goal is to set up a react application that allows users to search GitHub for both users and organizations. This document provides an outline of the setup process, dependencies, and my insights.

The application was written with [Typescript](https://www.typescriptlang.org/).

**Try the application** [**here**](https://bwa-fe-cs.vercel.app/) **🚀**

### Setup and Execution

Please make sure you have `npm` installed in order to run the commands in this list.

- Clone the repository by running `git clone https://github.com/osuobiem/bwa-fe-cs` if you're using git on the command line.
- Install the application dependencies by running `npm install` inside the project directory.
- Execute all test suites in the application by running `npm run test`.
- Start the application in development mode with `npm run dev`, and build the application for production using `npm run build`.

### Usage

- This is a very basic application, it just has a search bar and two radio buttons to switch between search categories. **User** is selected by default, switch to **Organization** if you want to search for an organization.
  <img width="1380" alt="Screenshot 2023-06-12 at 17 47 14" src="https://github.com/osuobiem/bwa-fe-cs/assets/46307395/d2497130-e7b8-414e-9454-29db3ad6831f">
- When you type into the search bar and click on the **Search** button to see the results. You can toggle between **grid** and **list** views for convenience.
  <img width="1439" alt="Screenshot 2023-06-12 at 17 57 46" src="https://github.com/osuobiem/bwa-fe-cs/assets/46307395/d465f81b-f9eb-4984-acf5-7e1425e98a06">
  <img width="1439" alt="Screenshot 2023-06-12 at 17 58 03" src="https://github.com/osuobiem/bwa-fe-cs/assets/46307395/79f80ee1-bae7-42c0-beaa-61262ec1663c">
  
- You can also pass a search keyword in the url like so `https://demo-url.com/{keyword}`

### Dependencies

The dependencies listed here are the major dependencies used in the application. To see a full list of all the dependencies (including derv dependencies) take a look at the [package.json](https://github.com/osuobiem/bwa-fe-cs/blob/main/package.json) file.

| Module                                                | Use                                                                                                                               | Version                                                                                                                                                                                                                       |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`vite`](https://vitejs.dev/)                         | Local development and bundling                                                                                                    | 4.3.9                                                                                                                                                                                                                         |
| [`react`](https://react.dev)                          | The main library of the application                                                                                               | 18.2.0                                                                                                                                                                                                                        |
| [`typescript`](https://www.typescriptlang.org/)       | The language used in the application                                                                                              | 5.0.2                                                                                                                                                                                                                         |
| [`axios`](https://axios-http.com)                     | Making requests to the API                                                                                                        | 1.4.0                                                                                                                                                                                                                         |
| [`react-query`](https://tanstack.com/query)           | Fetching, caching, synchronizing, and updating server state                                                                       | 3.39.3                                                                                                                                                                                                                        |
| [`styled-components`](https://styled-components.com/) | Flexible styling of components using a CSS-in-TS approach.                                                                        | 6.0.0-rc.3                                                                                                                                                                                                                    |
| [`msw`](https://mswjs.io/)                            | API mocking library, it intercepts requests on the network level.                                                                 | 1.2.2                                                                                                                                                                                                                         |
| [`ts-node`](https://www.npmjs.com/package/ts-node)    | TypeScript execution and REPL for node.js, used to run the application in the development environment.                            | 10.9.1                                                                                                                                                                                                                        |
| [`jest`](https://jestjs.io/)                          | For writing and executing tests to ensure the correctness and reliability of the code.                                            | 29.1.0                                                                                                                                                                                                                        |
| [`testing-library`](https://testing-library.com/)     | For testing components by simulating actual user actions and interactions with components. 3 modules from this library were used. | [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/): 5.16.5, [react](https://www.npmjs.com/package/@testing-library/react): 14.0.0, [user-event](https://testing-library.com/docs/ecosystem-user-event/): 14.4.3 |

### Thoughts

Due to time constraints, I was unable to incorporate some of the cool features I had intended to add. For instance, implementing result pagination, and writing more detailed tests. Additionally, integrating the powerful internationalization framework, [react-i18next](https://react.i18next.com/), was also left out.

In retrospect, I believe I could have improved certain aspects of the application. This includes writing tests for the [ResultList](https://github.com/osuobiem/bwa-fe-cs/blob/main/src/components/ResultList/ResultList.tsx) component, refining the API and msw handlers to handle various HTTP errors, and creating test cases to cover all scenarios. Furthermore, I feel that I rushed through the component styling and could have dedicated more time to thorough bug testing.
