# Tailwind CSS

## Setup

Source: https://tailwindcss.com/docs/guides/create-react-app

Create React App (CRA)

```
yarn create react-app APP_NAME
```

Install Tailwind

```
yarn add tailwindcss@npm:@tailwindcss/postcss7-compat@tailwindcss/postcss7-compat postcss@^7autoprefixer@^9
```

Install and configure CRACO

```
yarn add @craco/craco
```

> CRA doesnt allow PostCSS override, install CRACO to configure Tailwind

In `package.json`, update all scripts except for `eject` to use `craco` instead of `react-scripts`

```json
{
  // ...
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  }
}
```

Create `craco.config.js` at the root of the project and add the `tailwindcss` and `autoprefixer` as PostCSS plugins

```js
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
```

Generate a `tailwind.config.js` file

```
yarn exec tailwindcss init
```

In `tailwind.config.js`, configure the `purge` option with the paths to all of your components so Tailwind can tree-shake unused styls in prod builds

```diff
// tailwind.config.js
module.exports = {
-  purge: [],
+ purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Include Tailwind in your CSS by opening `./src/index.css`

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now you can start your app

## Adding Base Styles

Best practices for adding your own global base styles on top of Tailwind.

Source: https://tailwindcss.com/docs/adding-base-styles
