## Poke-crow

This is a sample project that display list of pokemon, category and other related informations.

## Getting Started

First, run the development server:

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

One known issue is that one of the APIs used in the project, the get pokemon by type/category is not paginated, causing all the pokemon retrieved at once and a custom logic is written to perform the pagination feature locally. This is a potential performance and usability issues with large datasets.

## Deploy on Vercel

The deployment is done with vercel which automatically handles the deployment anytime a push is made to the main branch of this repo
