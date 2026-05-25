<a id="readme-top"></a>

<br />
<div align="center">
<h3 align="center">Car Search Exercise</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#potential-improvements">Potential Improvements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project was developed as part of a technical recruitment process. It features a single UI page displaying data from a list of cars. Features included in this project:

- Dynamic config-based filtering system;
- Search bar
- Pagination

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![Tailwind][Tailwind.css]][Tailwind-url]
- [![Typescript][Typescript.js]][Typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

# Run the App:

Clone the repository:

`git clone https://github.com/Boxer-boxer/car-search-app.git`

Navigate to the project directory:

`cd car-search-app`

Install the dependencies:

`npm install`

Start the local development server:

`npm run dev`

The application will be available at:

`http://localhost:3000`

# Run tests

Running unit and integration tests:

`npm run test`

### Prerequisites

- Node.js v20+
- A package manager such as npm

## Usage

This project is rather simple, the UI will contain a single search bar, a filtering menu and a rudimentar pagination system.

The search bar will return any cars items with properties matching the input string. (i.e. Make, Model, Year, Horsepower, etc.)

The Filtering menu is config based, this means it adapts to the dataset being used (i.e. if there was no Model property available in the dataset, the filtering menu wouldn't have a model
dropdown). There are some limitations to this system at the moment, i.e. the properties used need to be mapped to a UI config to determinate which type of filtering should be applied to it
(i.e. should a number property be a range? a input? The make and model fields have a hardcoded depedency, etc.)\*.
Updating the filter values will update the car list in real time.

There's a pagination system that allows the user to navigate the UI with more ease\*.

\*Read more in <a href="#potential-improvements">Potential Improvements</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Potential Improvements

- Filtering Make and Model - Even though most of the filtering system is config based, there is an exception in the Make and Model fields. I thought it wouldn't make much sense for the user to be able to see
  a dropdown with multiple Models available after selecting a specific Make. So I implemented a hardcoded dependency to only display models beloging to a selected make (if a make is selected).
  'Why wasn't this developed to follow the rest of the config-based architecture?" To put it bluntly, because this is not a product that will be used in real life and more a showcase of my technical skills, so I made the decision to go with something functional over spending multiple hours implementing something that would be admitedly more impressive but with very little actual use.

- URL based filtering system - The filtering / search / pagination systems in this app are 100% state based. The dataset provided isn't very long and as such it didn't make sense to me to develop complex request systems with a URL based filter string (i.e. ?yearStart='1960'&yearEnd='2020'). Of course, IRL and especially dealing with real life datasets that may contain thousands of entries, I would rather implement a proper url filtering system to allow users to share / reload their page without having to reset the entirety of their UI. But for the given purpose of this app and the goal I'm trying to achieve, a simpler low-maintenance state based filtering system seemed like the best bet.

- Useful Pagination system - The Pagination system is extremely rudimentary. Currently it's just characterized by a handle of buttons at the end of the page the user can use to 'travel' to a given point in the dataset. There's a lot of improvement that could be done here (input to let users select how many items per page to display, a "next" and "previous" button etc.). At the present this system isn't doing much more than making the UI a little lighter.

- Performance improvements - One question that may come up while looking at this repo is "Why is there so little done in the way of performance?" and really there is very little done for performance in this implementation, i.e. there's barely any memoization going on. There's 3 reasons for this:
  1 - React is already very good at dealing with performance on its own;
  2 - As mentioned the dataset used was very small, so performance would probably not be an issue on it's own and using performance-heavy solutions on such a small dataset could actually be more expensive than just letting React handle it on its own (which brings us to...);
  3 - Personally, I believe in improving performance as we hit bottlenecks (or ideally just before). Over the years I've seen many developers fall in the pitfalls of never-ending performance enhancements which often results in multiple layers of abstraction and code bases that are very hard to maintain/read and often with more vectors for bugs. I prefer to apply performance heavy solutions as we meet the need for them rather than spending dev resources on a hypothetical scenario that may not happen.

- More unit / integration testing - The current testing system is still somewhat limited and there could be more tests on it.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png

<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind.css]: https://img.shields.io/badge/tailwind-css-000000?style=for-the-badge&logo=tailwind-css&logoColor=#00bcff
[Tailwind-url]: http://tailwindcss.com/
[Typescript.js]: https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
