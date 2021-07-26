import{o as e,c as r,d as t,e as l}from"./app.a2203fca.js";const a='{"title":"Vite 2.0 发布了","description":"","frontmatter":{"sidebar":false,"title":"Vite 2.0 发布了"},"headers":[{"level":2,"title":"2.0 带来了什么","slug":"whats-new-in-2-0"},{"level":3,"title":"多框架支持","slug":"framework-agnostic-core"},{"level":3,"title":"全新插件机制和 API","slug":"new-plugin-format-and-api"},{"level":3,"title":"基于 esbuild 的依赖预打包","slug":"esbuild-powered-dep-pre-bundling"},{"level":3,"title":"更好的 CSS 支持","slug":"first-class-css-support"},{"level":3,"title":"服务端渲染（SSR）支持","slug":"server-side-rendering-ssr-support"},{"level":3,"title":"旧浏览器支持","slug":"opt-in-legacy-browser-support"},{"level":2,"title":"尝试一下！","slug":"give-it-a-try"}],"relativePath":"blog/announcing-vite2.md","lastUpdated":1627281282077}',i={},n=t("h1",{id:"announcing-vite-2-0"},[t("a",{class:"header-anchor",href:"#announcing-vite-2-0","aria-hidden":"true"},"#"),l(" Vite 2.0 发布了")],-1),s=t("p",{style:{"text-align":"center"}},[t("img",{src:"/vite-docs/logo.svg",style:{height:"200px"}})],-1),o=t("p",null,"今天我们很高兴地宣布，Vite 2.0 正式发布了！",-1),p=t("p",null,[l("Vite（法语意思是 “快”，发音为 "),t("code",null,"/vit/"),l("，类似 veet）是一种全新的前端构建工具。你可以把它理解为一个开箱即用的开发服务器 + 打包工具的组合，但是更轻更快。Vite 利用浏览器 "),t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer"},"原生的 ES 模块支持"),l(" 和用来编译到原生语言的开发工具（如 "),t("a",{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"},"esbuild"),l("）来提供一个快速且现代的开发体验。")],-1),u=t("p",null,[l("想知道 Vite 有多快？看看这个"),t("a",{href:"https://twitter.com/amasad/status/1355379680275128321",target:"_blank",rel:"noopener noreferrer"},"视频比较"),l("， 在 "),t("a",{href:"http://Repl.it",target:"_blank",rel:"noopener noreferrer"},"Repl.it"),l(" 上从零启动一个基于 Vite 的 React 应用，浏览器页面加载完毕的时候，基于 CRA（"),t("code",null,"create-react-app"),l("）的应用甚至还没有安装完依赖。")],-1),d=t("p",null,[l("如果你还没听说过 Vite 到底是什么，可以到 "),t("a",{href:"/guide/why.html"},"这里"),l(" 了解一下项目的设计初衷。如果你想要了解 Vite 跟其它一些类似的工具有什么区别，可以参考这里的 "),t("a",{href:"/guide/comparisons.html"},"对比"),l("。")],-1),h=t("h2",{id:"whats-new-in-2-0"},[t("a",{class:"header-anchor",href:"#whats-new-in-2-0","aria-hidden":"true"},"#"),l(" 2.0 带来了什么")],-1),c=t("p",null,"Vite 1.0 虽然之前进入了 RC 阶段，但在发布之前我们决定进行一次彻底的重构来解决一些设计缺陷。所以 Vite 2.0 其实是 Vite 的第一个稳定版本。2.0 带来了大量的改进：",-1),g=t("h3",{id:"framework-agnostic-core"},[t("a",{class:"header-anchor",href:"#framework-agnostic-core","aria-hidden":"true"},"#"),l(" 多框架支持")],-1),f=t("p",null,[l("设计 Vite 的初衷是为了 "),t("a",{href:"https://github.com/vuejs/vue-dev-server",target:"_blank",rel:"noopener noreferrer"},"探索黑客原型项目以更好的支持 Vue 单文件组件"),l("。Vite 1 则是这个想法的延续，并在此基础上增加了对 HMR 支持。")],-1),v=t("p",null,[l("但 2.0 基于之前的经验提供了一个更稳定灵活的内部架构，从而可以完全通过插件机制来支持任意框架。现在 Vite 提供 "),t("a",{href:"https://github.com/vitejs/vite/tree/main/packages/create-vite",target:"_blank",rel:"noopener noreferrer"},"官方的 Vue, React, Preact, Lit Element 项目模版"),l("，而 Svelte 社区也在开发 Vite 整合方案。")],-1),b=t("h3",{id:"new-plugin-format-and-api"},[t("a",{class:"header-anchor",href:"#new-plugin-format-and-api","aria-hidden":"true"},"#"),l(" 全新插件机制和 API")],-1),m=t("p",null,[l("Vite 2.0 受 "),t("a",{href:"https://github.com/preactjs/wmr",target:"_blank",rel:"noopener noreferrer"},"WMR"),l(" 的启发采用了基于 Rollup 插件 API 的设计。"),t("a",{href:"https://vite-rollup-plugins.patak.dev/",target:"_blank",rel:"noopener noreferrer"},"很多 Rollup 插件可以跟 Vite 直接兼容"),l("。插件可以在使用 Rollup 插件钩子之外使用一些额外的 Vite 特有的 API 来处理一些打包中不存在的需求，比如区分开发与生产环境 ，或是自定义热更新处理。")],-1),S=t("p",null,[l("Vite 的 "),t("a",{href:"/guide/api-javascript.html"},"程序化 API"),l(" 也得到了大幅改进 - 已经有不少用户在开发基于 Vite 的上层框架，Nuxt 团队也已经在 Nuxt 3 中验证了初步整合的可行性。")],-1),V=t("h3",{id:"esbuild-powered-dep-pre-bundling"},[t("a",{class:"header-anchor",href:"#esbuild-powered-dep-pre-bundling","aria-hidden":"true"},"#"),l(" 基于 esbuild 的依赖预打包")],-1),w=t("p",null,"由于 Vite 是一个基于 原生 ESM 开发服务器，所以它需要进行依赖预打包以减少浏览器请求的数量，并进行 CommonJS 到 ESM 的转换。在之前版本中 Vite 是用 Rollup 来完成的，而在 2.0 中切换到了 esbuild，这使得依赖预打包的速度快了几十倍。作为参考，在 M1 芯片的 Macbook Pro 上，冷启动一个具有大量依赖项（如 React Meterial UI）的测试应用，之前需要 28 秒，而现在只需要约 1.5 秒。从 webpack 或其它打包工具迁移到 Vite 应该也会有类似的速度改善。",-1),k=t("h3",{id:"first-class-css-support"},[t("a",{class:"header-anchor",href:"#first-class-css-support","aria-hidden":"true"},"#"),l(" 更好的 CSS 支持")],-1),R=t("p",null,"Vite 将 CSS 看作模块系统中的一等公民，并且内置了以下支持：",-1),j=t("ul",null,[t("li",null,[t("strong",null,"强化路径解析"),l("：CSS 中的 @import 和 url() 路径都通过 Vite 的路径解析器来解析，从而支持 alias 和 npm 依赖。")]),t("li",null,[t("strong",null,"自动 URL 改写"),l("：所有 url() 路径都会被自动改写从而确保在开发和构建中都指向正确的文件路径。")]),t("li",null,[t("strong",null,"CSS 代码分割"),l("：构建时每一个被分割的 JS 文件都会自动生成一个对应的 CSS 文件，当被请求时，该文件会自动与 JS 文件并行加载。")])],-1),_=t("h3",{id:"server-side-rendering-ssr-support"},[t("a",{class:"header-anchor",href:"#server-side-rendering-ssr-support","aria-hidden":"true"},"#"),l(" 服务端渲染（SSR）支持")],-1),y=t("p",null,[l("Vite 2.0 提供 "),t("a",{href:"/guide/ssr.html"},"实验性的 SSR 支持"),l("。Vite 提供一个灵活的 API 来在 Node.js 中高效率地直接加载 ESM 源码（并且同样有精准的更新而不需要打包）。提供 CommonJS 版本的依赖会在 SSR 时自动被跳过转换直接加载。生产环境下，服务器可以和 Vite 完全解耦。基于 Vite SSR 的架构也可以很方便的做静态预渲染（SSG)。")],-1),M=t("p",null,"Vite SSR 会作为一个底层功能，而我们期待看到更高层级的框架在此基础上的应用。",-1),C=t("h3",{id:"opt-in-legacy-browser-support"},[t("a",{class:"header-anchor",href:"#opt-in-legacy-browser-support","aria-hidden":"true"},"#"),l(" 旧浏览器支持")],-1),P=t("p",null,[l("Vite 默认只支持原生支持 ESM 的现代浏览器，但可以通过官方的 "),t("a",{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-legacy",target:"_blank",rel:"noopener noreferrer"},"@vitejs/plugin-legacy"),l(" 来支持旧浏览器。legacy 插件会自动额外生成一个针对旧浏览器的包，并且在 html 中插入根据浏览器 ESM 支持来选择性加载对应包的代码（类似 vue-cli 的 modern mode）。")],-1),A=t("h2",{id:"give-it-a-try"},[t("a",{class:"header-anchor",href:"#give-it-a-try","aria-hidden":"true"},"#"),l(" 尝试一下！")],-1),E=t("p",null,"功能是很多，但试一下其实很简单。用以下命令，一下就可以搭起一个基于 vite 的项目（确保你的 Node.js 版本 >=12）：",-1),I=t("div",{class:"language-bash"},[t("pre",null,[t("code",null,[t("span",{class:"token function"},"npm"),l(" init @vitejs/app\n")])])],-1),x=t("p",null,[l("然后，你可以阅读 "),t("a",{href:"/guide/"},"指引文档"),l(" 了解 Vite 提供了哪些开箱即用的功能，也可以在 "),t("a",{href:"https://github.com/vitejs/vite",target:"_blank",rel:"noopener noreferrer"},"GitHub"),l(" 上查看源码，关注我们的 "),t("a",{href:"https://twitter.com/vite_js",target:"_blank",rel:"noopener noreferrer"},"Twitter"),l(" 以了解最新的进展，或与其他 Vite 用户在 "),t("a",{href:"http://chat.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},"Discord"),l(" 上一起讨论。")],-1);i.render=function(t,l,a,i,J,N){return e(),r("div",null,[n,s,o,p,u,d,h,c,g,f,v,b,m,S,V,w,k,R,j,_,y,M,C,P,A,E,I,x])};export default i;export{a as __pageData};
