# Roadmap

This is an evolving roadmap / checklist / manifesto for the [GladeJS](https://gladejs.com) project.

## Framework
 - ✅&nbsp; [Marko](https://markojs.com) and [Eleventy](https://www.11ty.dev) "pages" generating fully server-rendered static HTML, CSS & JS at build time
 - ✅&nbsp; Development mode with Live server using [Browsersync](https://www.browsersync.io) & performant file watching using [Chokidar](https://github.com/paulmillr/chokidar)
   - 🚧&nbsp; Create a Pull Request for ["@marko/rollup"](https://github.com/marko-js/rollup) to get the full Hot-Reload working \[[#6](https://github.com/gladejs/gladejs/issues/6)\]
 - ✅&nbsp; Various graph representations of the JS bundle content & sizes using this [Visualizer plugin](https://github.com/btd/rollup-plugin-visualizer)
 - 🚧&nbsp; Detailed report of the whole website filesizes repartition & performance budget objectives \[[#7](https://github.com/gladejs/gladejs/issues/7)\]
 - 🚧&nbsp; Automated & interactive install script, with guided updates to the Rollup config file
 - 🚧&nbsp; Clear and to the point error messages & warnings instead of cryptic stacktraces \[[#8](https://github.com/gladejs/gladejs/issues/8)\]

## JS Bundle
 - ✅&nbsp; Support modern browsers with "module" script tags containing each page JS inlined and using standard imports
 - 🚧&nbsp; Support legacy browsers with "nomodule" script tags pointing to the full bundle file transpiled by [Babel](https://babeljs.io) / [Bublé](https://buble.surge.sh/guide/) ? \[[#9](https://github.com/gladejs/gladejs/issues/9)\]
 - ✅&nbsp; [Configurable bundle chunking](https://github.com/gladejs/rollup/blob/9d21bc77d3a34a29f02c5a7a654cf4aefadfa529/dist/gladejs-rollup.js#L81) (default: "project" for components, "markojs" for the engine, "modules" for the rest)
 - ✅&nbsp; Install & import NPM packages with the official "node-resolve" & "commonjs" Rollup plugins
 - ✅&nbsp; Mangle & compress all JS code in Production using this ["Terser" plugin](https://github.com/TrySound/rollup-plugin-terser)

## CSS Files
 - ✅&nbsp; Compile SASS & LESS, then funnel everything into one file using this ["PostCSS" plugin](https://github.com/egoist/rollup-plugin-postcss)
   - ✅&nbsp; Minify all CSS code in Production using the included ["CSS nano"](https://cssnano.co) support
   - 🚧&nbsp; Improve support for [PostCSS plugins](https://www.postcss.parts) (install & configure a few by default)
 - 🚧&nbsp; Configurably split the styles afterward (per page, "@" rule or auto-magically)
 - 🚧&nbsp; Inline the critical and above-the-fold styles ; load the others asynchronously

## HTML Pages
 - ✅&nbsp; Eleventy's support for [layouts](https://www.11ty.dev/docs/layouts/), [permalinks](https://www.11ty.dev/docs/permalinks/), [collections](https://www.11ty.dev/docs/collections/), [pagination](https://www.11ty.dev/docs/pagination/), [filters](https://www.11ty.dev/docs/filters/) & [shortcodes](https://www.11ty.dev/docs/shortcodes/) on top of ...
 - ✅&nbsp; [9 template languages](https://www.11ty.dev/docs/languages/) to pre-process the HTML and Markdown docs (with custom tags, à la [MDX](https://mdxjs.com) )
 - ✅&nbsp; [List all Marko "pages"](https://github.com/gladejs/rollup/blob/9d21bc77d3a34a29f02c5a7a654cf4aefadfa529/dist/gladejs-rollup.js#L66) from a single folder for the Rollup input, ignoring "components" sub-folders
 - ✅&nbsp; [Render each template](https://github.com/gladejs/rollup/blob/9d21bc77d3a34a29f02c5a7a654cf4aefadfa529/dist/gladejs-rollup.js#L38) with the CSS styles, client-side JS, page path Id & env variables as globals
 - ✅&nbsp; Minify all HTML code in Production using ["html-minifier"](https://github.com/kangax/html-minifier) correctly configured

## Data & Assets
 - ✅&nbsp; Advanced [JSON & JS data cascade](https://www.11ty.dev/docs/data-cascade/) (with optional support for [YAML, TOML, CSV, etc ...](https://www.11ty.dev/docs/data-custom/) )
 - ✅&nbsp; Inline or copy binary assets (cutoff at 7 kb by default) using the official "url" Rollup plugin
   - ✅&nbsp; Support publishing websites with a "publicPath" prefix for assets (JS & CSS paths are relative)
   - 🚧&nbsp; Extend the "url" plugin config to support WEPB, Fonts, video formats, 3D model formats, etc ...
 - ✅&nbsp; Automatic asset pulling using a [Marko compiler "transform" hook](https://github.com/gladejs/rollup/blob/9d21bc77d3a34a29f02c5a7a654cf4aefadfa529/tags/asset-transformer.js#L6) on all tags "src" attribute :
   - ✅&nbsp; Pull relative assets with ".PATH" --> src="./path/image.png" or src="../../path/logo.svg"
   - 🚧&nbsp; Pull project assets with "\~/DIR" --> src="\~/assets/image.png" or src="\~/static/logo.svg"
   - 🚧&nbsp; Pull NodeJS assets with "~NAME" --> src="~package/dist/assets/image.jpg"
   - 🚧&nbsp; Pull remote assets with "@URL" --> src="@https://placekitten.com/200/300"
 - 🚧&nbsp; Support the ".raw" extension to copy files blindly (e.g.; robots.txt.raw, .htaccess.raw, CNAME.raw)
 - ✅&nbsp; Compress text files larger than 1 kb as GZIP & Brotli archives in Production using this [GZIP plugin](https://github.com/kryops/rollup-plugin-gzip)

## Components
 - 🚧&nbsp; Simplify the HTML HEAD tag meta configuration with a "glade-html-head" component and clear documentation
 - 🚧&nbsp; Handle media compression, resizing, cropping and formats in the "glade-image" & "glade-video" components
 - 🚧&nbsp; Support for Web Workers / "off the main thread" JS (not sure about the API yet, but many solutions exist)
 - 🚧&nbsp; Service Worker integration (I'm keeping that one secret so nobody steals it before I can give it for free)
 - 🚧&nbsp; Marko tag libraries and/or clear guidelines for popular solutions :
   - User Interface : Bootstrap, Material Design, ...
   - Data Management : Redux, Apollo GraphQL, ...
   - Web Deployment : GitHub, Netlify, Vercel, ...
   - Headless CMS : Contentful, WordPress, ...

## Wish List
 - Marko v5.0 and TypeScript support
 - Proper end-to-end sourcemaps for JS & CSS files
 - Support for [Web Components](https://www.webcomponents.org) (might just work, to be tested)
 - Support for [CSS Modules](https://github.com/css-modules/css-modules) or some way of localizing styles per component
 - Complete absence of Marko JS code in the output if no client-side hydration is required
 - Tools & documentation for unit testing components, performance tracing, source linting, ... what else ?
