# ecommerce-redux-app

Purpose of making this project is to get started with Redux Toolkit, NextJs 14, TypeScript
https://redux.js.org/usage/nextjs

Main assumptions:
Integrate App Router Architecture (NextJs 14.2.4) and Redux. Based on the architecture of the App Router we have these general recommendations for appropriate use of Redux:
-- No global stores - Because the Redux store is shared across requests, it should not be defined as a global variable. Instead, the store should be created per request.
-- React Server Compontents should nto read or write the Redux store - RSCs cannot use hooks or context. They aren't meant to be stateful. Having an RSC read or write values from a global store violates the architecture of the Next.js App Router.
-- The store should only contain mutable data

Single Page Applications (SPAs) don't execute on the server and therefore can define stores as global variables. SPAs don't need to worry about RSCs since they don't exist in SPAs. And singleton stores can store whatever data you want.

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
