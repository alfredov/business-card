# Cabify Fronted Challenge

Hierarchy and structure:

    - packages
      - website // where is located the business card form
        - public
        - src
        - package.json
      - cabify-ui // where are located reusable components
        - index.js
        - components
        - package.json
    - .gitignore
    - package.json

This project is working as monorepo using `yarn workspaces` to handle/maintain easier reusable components, flexible to use in others project as well.


## ⚙️ How to run Web app locally(website)
Make sure that you have [Yarn](https://yarnpkg.com/en/) installed, then install dependecies:

```sh
yarn 
```

to finally run the app
```sh
yarn start
```

## 👾 Run ui components Playground(cabify-ui)

```sh
yarn ui
```
