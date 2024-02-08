# Image-Gallery-TailwindCss

This simple Image Gallery Project is made using tailwind css.

In Order to use Tailwind CSS we need to setup this first.

- Initialize npm with

```
npm init -y
```

- Install Tailwind

```
npm install -D tailwindcss
```

- run

```
npx tailwindcss init
```

- Modify the extension path in tailwind.config.js

  > content: [".{html,js}"]

- Make folder src/input.css and paste the following :

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Start the Tailwind CLI build process

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

- Start using Tailwind in your HTML

```
 <link href="./output.css" rel="stylesheet">
```
