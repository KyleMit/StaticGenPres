# JAMming Out With Static Site Generators

By Zeke & Kyle

## Built With


[11ty](https://www.11ty.io/)
[typed.js](https://github.com/mattboldt/typed.js/)
[reveal.js](https://github.com/hakimel/reveal.js/#markdown)
[reveal-md](https://github.com/webpro/reveal-md)


## Project Setup

* Install [Node.js & NPM](https://nodejs.org/en/download/)
* Run `npm install` in the project directory to install local dependencies
* Install eleventy globally

    ```bash
    npm i @11ty/eleventy -g
    ```

* Run `npm run serve` to run a local dev environment
* Access dev copy of the site at [localhost:8080](http://localhost:8080)

## NPM Scripts

```bash
npm run build             # runs `npx eleventy` to build the site
npm run serve             # builds site + serves `_site` directory
```
