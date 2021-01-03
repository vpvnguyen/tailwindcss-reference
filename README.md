# tailwindcss-reference

Experimental sandbox for React + tailwindcss

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

## Configuring Variants

Source: https://tailwindcss.com/docs/configuring-variants

Configure, enable, and override `variants` in `tailwind.config.js`

```js
// tailwind.config.js
module.exports = {
  variants: {
    extend: {
      backgroundColor: ["active"],
      // ...
      borderColor: ["focus-visible", "first"],
      // ...
      textColor: ["visited"],
    },
  },
};
```

Default Configuration

Source: https://tailwindcss.com/docs/hover-focus-and-other-states

```js
// Default configuration
module.exports = {
  // ...
  variants: {
    accessibility: ["responsive", "focus-within", "focus"],
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    animation: ["responsive"],
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundClip: ["responsive"],
    backgroundColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    backgroundImage: ["responsive"],
    backgroundOpacity: [
      "responsive",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: ["responsive"],
    borderColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    borderOpacity: [
      "responsive",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidth: ["responsive"],
    boxShadow: ["responsive", "group-hover", "focus-within", "hover", "focus"],
    boxSizing: ["responsive"],
    clear: ["responsive"],
    container: ["responsive"],
    cursor: ["responsive"],
    display: ["responsive"],
    divideColor: ["responsive", "dark"],
    divideOpacity: ["responsive"],
    divideStyle: ["responsive"],
    divideWidth: ["responsive"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    fontFamily: ["responsive"],
    fontSize: ["responsive"],
    fontSmoothing: ["responsive"],
    fontStyle: ["responsive"],
    fontVariantNumeric: ["responsive"],
    fontWeight: ["responsive"],
    gap: ["responsive"],
    gradientColorStops: ["responsive", "dark", "hover", "focus"],
    gridAutoColumns: ["responsive"],
    gridAutoFlow: ["responsive"],
    gridAutoRows: ["responsive"],
    gridColumn: ["responsive"],
    gridColumnEnd: ["responsive"],
    gridColumnStart: ["responsive"],
    gridRow: ["responsive"],
    gridRowEnd: ["responsive"],
    gridRowStart: ["responsive"],
    gridTemplateColumns: ["responsive"],
    gridTemplateRows: ["responsive"],
    height: ["responsive"],
    inset: ["responsive"],
    justifyContent: ["responsive"],
    justifyItems: ["responsive"],
    justifySelf: ["responsive"],
    letterSpacing: ["responsive"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive", "group-hover", "focus-within", "hover", "focus"],
    order: ["responsive"],
    outline: ["responsive", "focus-within", "focus"],
    overflow: ["responsive"],
    overscrollBehavior: ["responsive"],
    padding: ["responsive"],
    placeContent: ["responsive"],
    placeItems: ["responsive"],
    placeSelf: ["responsive"],
    placeholderColor: ["responsive", "dark", "focus"],
    placeholderOpacity: ["responsive", "focus"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    ringColor: ["responsive", "dark", "focus-within", "focus"],
    ringOffsetColor: ["responsive", "dark", "focus-within", "focus"],
    ringOffsetWidth: ["responsive", "focus-within", "focus"],
    ringOpacity: ["responsive", "focus-within", "focus"],
    ringWidth: ["responsive", "focus-within", "focus"],
    rotate: ["responsive", "hover", "focus"],
    scale: ["responsive", "hover", "focus"],
    skew: ["responsive", "hover", "focus"],
    space: ["responsive"],
    stroke: ["responsive"],
    strokeWidth: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    textDecoration: [
      "responsive",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    textOpacity: [
      "responsive",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    textOverflow: ["responsive"],
    textTransform: ["responsive"],
    transform: ["responsive"],
    transformOrigin: ["responsive"],
    transitionDelay: ["responsive"],
    transitionDuration: ["responsive"],
    transitionProperty: ["responsive"],
    transitionTimingFunction: ["responsive"],
    translate: ["responsive", "hover", "focus"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive", "focus-within", "focus"],
  },
};
```

## Extracting Components

Source: https://tailwindcss.com/docs/extracting-components

Dealing with duplication and keeping utility-first projects maintainable.

### Rules

- NO: Don't rely on CSS classes to extract complex components
- YES: Create a template partial or JavaScript component

### Extracting component classes with @apply

Use Tailwind's @apply directive to easily extract common utility patterns to CSS component classes.

```html
<button class="btn-indigo">Click me</button>

<style>
  .btn-indigo {
    @apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
  }
</style>
```

Custom component styles with the @layer components { ... } directive to tell Tailwind what layer those styles belong to:

```js
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-blue {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
```

### Writing a component plugin

Source: https://tailwindcss.com/docs/extracting-components

Publish your Tailwind components as a library or make it easier to share components across multiple projects.

```js
// tailwind.config.js
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const buttons = {
        ".btn": {
          padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
          borderRadius: theme("borderRadius.md"),
          fontWeight: theme("fontWeight.600"),
        },
        ".btn-indigo": {
          backgroundColor: theme("colors.indigo.500"),
          color: theme("colors.white"),
          "&:hover": {
            backgroundColor: theme("colors.indigo.600"),
          },
        },
      };

      addComponents(buttons);
    }),
  ],
};
```
