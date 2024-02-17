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

- Everytime you start for development it is quite anoying to run CLI cmd, instead do this

> navigate to package.json and inside scripts add folowing json

```
"build": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
```

- Now when we have to start program, run only

```
npm run build
```

- In other terminal, Start live server with

```
npm run start
```
