# twinmacro-emotion-example-app

## Setup

- Install React:

```
yarn create create-react-app my-app

```

- Install twin.macro, tailwindcss, emotion:

```
yarn add twin.macro tailwindcss @emotion/react @emotion/styled
```

- Install CRACO:
  > `create-react-app` doesn't allow you to edit its babel settings by default. To add our settings we have to hook in our babel-configuration somewhere. There were times where you had to eject from create-react-app for this, but luckily nowadays there are plenty of solutions.
  > One of these solutions is CRACO which stands for "Create React App Configuration Override"

```
yarn add @craco/craco
```

- Create `craco.config.js` and add:

```js
// craco.config.js
module.exports = {
  babel: {
    plugins: [
      "babel-plugin-macros",
      [
        "@emotion/babel-plugin-jsx-pragmatic",
        {
          export: "jsx",
          import: "__cssprop",
          module: "@emotion/react",
        },
      ],
      [
        "@babel/plugin-transform-react-jsx",
        {
          pragma: "__cssprop",
          pragmaFrag: "React.Fragment",
        },
      ],
    ],
  },
};
```

- Add to `package.json`:

```json
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  }
}
```

- Initialize `tailwind.config.js`:

```
yarn tailwindcss init --full
```

- Configure Tailwind to remove unused styles in production:

```js
// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  ...
};
```

- Add the global styles:
  > Twin uses the same preflight base styles as Tailwind to smooth over cross-browser inconsistencies.
  > The GlobalStyles import adds these base styles along with some @keyframes for the animation classes and some global css that makes the ring classes and box-shadows work.

```jsx
// src/index.js
import React from "react";
import { render } from "react-dom";
import { GlobalStyles } from "twin.macro";
import App from "./App";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
```
