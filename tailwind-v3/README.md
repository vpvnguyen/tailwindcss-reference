# tailwind v3

## Setup

- Create project

```
npx create-react-app@next --scripts-version=@next --template=cra-template@next APP_NAME
```

- Install Tailwind

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Configure template paths

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Add Tailwind directives to your CSS

```
// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Start build process

```
npm run start
```
