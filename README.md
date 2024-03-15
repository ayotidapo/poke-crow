## Poke-crow

This is a sample project that display list of pokemon, category and other related informations.

## Getting Started

After cloning the repo, cd into poke-crow directory and do npm install

then, run this for development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Issues

One known issue is that one of the APIs used in the project, the get pokemon by type/category does not support pagination, causing all the pokemon retrieved at once but a custom logic is written in place of that in this project to perform the pagination feature. This is a potential performance and usability issues with large datasets.

## Deployment on Vercel

The deployment is done with vercel which automatically handles the deployment anytime a push is made to the main branch of this repo
