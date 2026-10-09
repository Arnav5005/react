# React Project Setup

React is a JavaScript library for building user interfaces. A React application
is often an SPA (single-page application), but React can also be used for
server-rendered and statically generated applications.

## The Four Common Ways to Start a React Project

| Metric / Feature | 1. CDN Links | 2. Vite | 3. Next.js / Meta-frameworks | 4. Create React App (CRA) |
| :--- | :--- | :--- | :--- | :--- |
| Primary use case | Proofs of concept and quick tests | Modern client-side SPAs | Full-stack production applications | None; deprecated |
| Requires Node.js / npm | No | Yes | Yes | Yes |
| Build architecture | None; runs in the browser | Native ESM in development; Rollup-based production build | Framework-managed build and server tooling | Webpack + Babel |
| Development startup | Instant; files load from a CDN | Near-instant, usually under a second | Fast, depending on the project | Slower, especially as the app grows |
| Routing support | Manual | Optional; add `react-router` when needed | Built-in file-system or framework routing | Add `react-router` separately |
| SEO capabilities | Poor for most applications | Limited by default; add prerendering or SSR when needed | Excellent options through SSR/SSG | Limited because it is client-rendered by default |
| Best choice when | Experimenting without a build setup | Learning React or building a client-side SPA | You need routing, server rendering, data loading, or SEO | Maintaining an existing legacy project |

### 1. CDN Links

CDN means **Content Delivery Network**. Add React and ReactDOM scripts to an
HTML page and use `React.createElement()` without installing Node.js.

`React.createElement()` accepts:

1. The element type, for example `'h1'`
2. Props, for example `{ className: 'title' }`
3. The children or content, for example `'Hello world'`

This approach is useful for small experiments, but it becomes difficult to
organize and optimize as the application grows.

### 2. Vite: The Modern Client-Side Standard

Vite is a fast toolchain for building client-side React applications. It uses
native ES modules during development and produces an optimized production
bundle.

```bash
npm create vite@latest
cd <project-name>
npm install
npm run dev
```

The generated starter may contain an `assets` folder, `App.css`, and
`index.css`. Delete them only if the application does not use them, and remove
their imports as well. Keep files that are still needed by the project.

### 3. Next.js and Other Meta-Frameworks

For a modern production application, a meta-framework can provide routing,
data loading, server-side rendering (SSR), static site generation (SSG), and
other production features.

- **Next.js** is a common choice for full-stack applications that need strong
  SEO, server rendering, or server-side data fetching.
- **React Router v7** can also be used as a framework when its routing and data
  APIs fit the application.

### 4. Create React App (CRA): The Legacy Method

Create React App was a popular way to bootstrap React applications, but it is
officially deprecated. Do not use it for a new project unless a course,
existing codebase, or specific constraint requires it.

Older CRA projects commonly use:

```bash
npx create-react-app <project-name>
npm start
```

CRA uses Webpack and Babel behind the scenes. In an existing CRA project, files
such as `setupTests.js`, `reportWebVitals.js`, `logo.svg`, and test or CSS files
can be removed only when they are not used; remove their imports too.

## `npm` and `npx`

- **npm** means Node Package Manager. It installs packages and runs scripts
  declared in `package.json`.
- **npx** runs a package executable without requiring a global installation.

## Useful React Conventions

1. Name React components and component files with **PascalCase**, for example
   `StudentCard.jsx`.
2. Name regular functions and variables with **camelCase**, for example
   `formatStudentName`.
3. Use `.jsx` when a JavaScript file contains JSX. `.js` also works in many
   toolchains, so follow the convention used by the project.
4. `rafce` creates a common functional-component template when the ES7+ React
   Snippets extension is installed. It is not built into React.
