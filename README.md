## Available Scripts

In the project directory, you can run:

### `npm install`

Install all dependencies from the package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

View App.js file for all routes

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Deployment

### `npm run build` 
### Upload build to S3:
### http://giddy-test-react-app.s3-website.us-east-2.amazonaws.com/

## Font Instructions

* Check App.css for font imports of FontSize.min.css and SlateIvyFonts.min.css
To view minified files, refactor them but do not save them. Minified improves load speed.

## Project Notes:

* Add any new Routes to App.js
* Add any new reusable components to the relevant folder inside /src/components/
* Each Route and Components should have its own css file whose name starts with the relevant name
* For components and their css files, use CamelCase
* Folder names stay lowercase and dash separated 

## Folder Tree

- [**public**](public)
- [**src**](src)
    - [**assets**](src/assets)
        - [**articles**](src/assets/articles)
            - [**images**](src/assets/articles/images)
    - [**components**](src/components)
        - [**article-components**](src/components/article-components)
            - [**FullWidthHero**](src/components/article-components/FullWidthHero)
            - [**RelatedArticles**](src/components/article-components/RelatedArticles)
        - [**footer-components**](src/components/footer-components)
            - [**main-footer**](src/components/footer-components/main-footer)
        - [**nav-bar-components**](src/components/nav-bar-components)
            - [**main-nav**](src/components/nav-bar-components/main-nav)
    - [**context**](src/context)
    - [**routes**](src/routes)
        - [**Fisher-Article**](src/routes/Fisher-Article)
        - [**MSNBC-Article**](src/routes/MSNBC-Article)