# JAMming Out With Static Site Generators

By Zeke & Kyle

Available at https://static-gen-presentation.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/1995aa09-f8f2-44e2-b978-37f523b63e8c/deploy-status)](https://app.netlify.com/sites/static-gen-presentation/deploys)

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
