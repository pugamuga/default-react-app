## Tailwind, react-router-dom, gh-pages already installed

- Added default NavBar and HeroIcons
- Added cuctom fonts
  - 1 step: in index.css add path like: @import url('https://fonts.googleapis.com/css2?family=Rubik+Distressed&display=swap');
  - 2 step: in tailwind.config.js in fontFamaly add name and discription, like in "testFont"
- Added react-spring

## For gh-pages:

add in package.json: "homepage": "https://{github user name}.github.io/{repo name}",

next step:
in terminal: git remote add origin https://{github user name}.github.io/{repo name}.git

for deploying page: npm run deploy
