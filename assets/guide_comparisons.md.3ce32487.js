import{o as e,c as r,a as t}from"./app.66abc2b9.js";const a='{"title":"与其它非打包解决方案比较","description":"","frontmatter":{"title":"与其它非打包解决方案比较"},"headers":[{"level":2,"title":"Snowpack","slug":"snowpack"},{"level":2,"title":"WMR","slug":"wmr"},{"level":2,"title":"@web/dev-server","slug":"webdev-server"}],"relativePath":"guide/comparisons.md","lastUpdated":1627267695102}',o={},l=t('<h1 id="comparisons-with-other-no-bundler-solutions"><a class="header-anchor" href="#comparisons-with-other-no-bundler-solutions" aria-hidden="true">#</a> 与其它非打包解决方案比较</h1><h2 id="snowpack"><a class="header-anchor" href="#snowpack" aria-hidden="true">#</a> Snowpack</h2><p><a href="https://www.snowpack.dev/" target="_blank" rel="noopener noreferrer">Snowpack</a> 也是一个与 Vite 十分类似的非构建式原生 ESM 开发服务器。除了不同的实现细节外，这两个项目在技术上比传统工具有很多共同优势。Vite 的依赖预构建也受到了 Snowpack v1（现在是 <a href="https://github.com/snowpackjs/snowpack/tree/main/esinstall" target="_blank" rel="noopener noreferrer"><code>esinstall</code></a>）的启发。这两个项目之间的一些主要区别是：</p><p><strong>生产构建</strong></p><p>Snowpack 的默认构建输出是未打包的：它将每个文件转换为单独的构建模块，然后将这些模块提供给执行实际绑定的不同“优化器”。这么做的好处是，你可以选择不同终端打包器，以适应不同需求（例如 webpack, Rollup，甚至是 ESbuild），缺点是体验有些支离破碎 —— 例如，<code>esbuild</code> 优化器仍然是不稳定的，Rollup 优化器也不是官方维护，而不同的优化器又有不同的输出和配置。</p><p>为了提供更流畅的体验，Vite 选择了与单个打包器（Rollup）进行更深入的集成。Vite 还支持一套 <a href="./api-plugin.html">通用插件 API</a> 扩展了 Rollup 的插件接口，开发和构建两种模式都适用。</p><p>由于构建过程的集成度更高，Vite 支持目前在 Snowpack 构建优化器中不可用的多种功能：</p><ul><li><a href="./build.html#multi-page-app">多页面应用支持</a></li><li><a href="./build.html#library-mode">库模式</a></li><li><a href="./features.html#css-code-splitting">自动分割 CSS 代码</a></li><li><a href="./features.html#async-chunk-loading-optimization">预优化的异步 chunk 加载</a></li><li><a href="./features.html#dynamic-import-polyfill">对动态导入自动 polyfill</a></li><li>官方 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer">兼容模式插件</a> 打包为现代/传统两种产物，并根据浏览器支持自动交付正确的版本。</li></ul><p><strong>更快的依赖预构建</strong></p><p>Vite 使用 <a href="https://esbuild.github.io/" target="_blank" rel="noopener noreferrer">esbuild</a> 而不是 Rollup 来进行依赖预构建。这为开发服务器冷启动和依赖项失活的重新构建方面带来了显著的性能改进。</p><p><strong>Monorepo 支持</strong></p><p>Vite 能够支持 monorepo，我们已经有用户成功地将 Vite 与基于 Yarn, Yarn 2 和 PNPM 的 monorepo 一起使用。</p><p><strong>CSS 预处理器支持</strong></p><p>Vite 为 Sass and Less 提供了更精细化的支持，包括改进 <code>@import</code> 解析（可使用别名与 npm 依赖）和 <a href="./features.html#import-inlining-and-rebasing">提供 <code>url()</code> 内联引入与变基</a>。</p><p><strong>Vue 第一优先级支持</strong></p><p>Vite 最初是作为 <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a> 开发工具的未来基础而创建的。尽管 Vite 2.0 版本完全不依赖于任何框架，但官方 Vue 插件仍然对 Vue 的单文件组件格式提供了第一优先级的支持，涵盖了所有高级特性，如模板资源引用解析、<code>&lt;script setup&gt;</code>，<code>&lt;style module&gt;</code>，自定义块等等。除此之外，Vite 还对 Vue 单文件组件提供了细粒度的 HMR。举个例子，更新一个单文件组件的 <code>&lt;template&gt;</code> 或 <code>&lt;style&gt;</code> 会执行不重置其状态的热更新。</p><h2 id="wmr"><a class="header-anchor" href="#wmr" aria-hidden="true">#</a> WMR</h2><p>Preact 团队的 <a href="https://github.com/preactjs/wmr" target="_blank" rel="noopener noreferrer">WMR</a> 提供了类似的特性集，而 Vite 2.0 对 Rollup 插件接口的支持正是受到了它的启发。</p><p>WMR 主要是为了 <a href="https://preactjs.com/" target="_blank" rel="noopener noreferrer">Preact</a> 项目而设计，并为其提供了集成度更高的功能，比如预渲染。就使用范围而言，它更加贴合于 Preact 框架，与 Preact 本身一样强调紧凑的大小。如果你正在使用 Preact，那么 WMR 可能会提供更好的体验。</p><h2 id="webdev-server"><a class="header-anchor" href="#webdev-server" aria-hidden="true">#</a> @web/dev-server</h2><p><a href="https://modern-web.dev/docs/dev-server/overview/" target="_blank" rel="noopener noreferrer">@web/dev-server</a>（曾经是 <code>es-dev-server</code>）是一个伟大的项目，基于 koa 的 Vite 1.0 开发服务器就是受到了它的启发。</p><p><code>@web/dev-server</code> 适用范围不是很广。它并未提供官方的框架集成，并且需要为生产构建手动设置 Rollup 配置。</p><p>总的来说，与 <code>@web/dev-server</code> 相比，Vite 是一个更注重自身/更高层面的工具，旨在提供开箱即用的工作流。话虽如此，但 <code>@web</code> 这个项目群包含了许多其他的优秀工具，也可以使 Vite 用户受益。</p>',23);o.render=function(t,a,o,n,p,i){return e(),r("div",null,[l])};export default o;export{a as __pageData};
