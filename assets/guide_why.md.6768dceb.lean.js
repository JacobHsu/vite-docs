import{o as e,c as l,d as r,e as t}from"./app.348a6f9e.js";const a='{"title":"为什么选 Vite","description":"","frontmatter":{"title":"为什么选 Vite"},"headers":[{"level":2,"title":"现实问题","slug":"the-problems"},{"level":3,"title":"缓慢的服务器启动","slug":"slow-server-start"},{"level":3,"title":"缓慢的更新","slug":"slow-updates"},{"level":2,"title":"为什么生产环境仍需打包","slug":"why-bundle-for-production"},{"level":3,"title":"为何不用 ESBuild 打包？","slug":"why-not-bundle-with-esbuild"},{"level":2,"title":"Vite 与 X 的区别是？","slug":"how-is-vite-different-from-x"}],"relativePath":"guide/why.md","lastUpdated":1627281162746}',n={},i=r("h1",{id:"why-vite"},[r("a",{class:"header-anchor",href:"#why-vite","aria-hidden":"true"},"#"),t(" 为什么选 Vite")],-1),o=r("h2",{id:"the-problems"},[r("a",{class:"header-anchor",href:"#the-problems","aria-hidden":"true"},"#"),t(" 现实问题")],-1),s=r("p",null,"在浏览器支持 ES 模块之前，JavaScript 并没有提供的原生机制让开发者以模块化的方式进行开发。这也正是我们对 “打包” 这个概念熟悉的原因：使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件。",-1),u=r("p",null,[t("时过境迁，我们见证了诸如 "),r("a",{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},"webpack"),t("、"),r("a",{href:"https://rollupjs.org",target:"_blank",rel:"noopener noreferrer"},"Rollup"),t(" 和 "),r("a",{href:"https://parceljs.org/",target:"_blank",rel:"noopener noreferrer"},"Parcel"),t(" 等工具的变迁，它们极大地改善了前端开发者的开发体验。")],-1),d=r("p",null,"然而，当我们开始构建越来越大型的应用时，需要处理的 JavaScript 代码量也呈指数级增长。包含数千个模块的大型项目相当普遍。我们开始遇到性能瓶颈 —— 使用 JavaScript 开发的工具通常需要很长时间（甚至是几分钟！）才能启动开发服务器，即使使用 HMR，文件修改后的效果也需要几秒钟才能在浏览器中反映出来。如此循环往复，迟钝的反馈会极大地影响开发者的开发效率和幸福感。",-1),h=r("p",null,"Vite 旨在利用生态系统中的新进展解决上述问题：浏览器开始原生支持 ES 模块，且越来越多 JavaScript 工具使用编译型语言编写。",-1),p=r("h3",{id:"slow-server-start"},[r("a",{class:"header-anchor",href:"#slow-server-start","aria-hidden":"true"},"#"),t(" 缓慢的服务器启动")],-1),c=r("p",null,"当冷启动开发服务器时，基于打包器的方式启动必须优先抓取并构建你的整个应用，然后才能提供服务。",-1),f=r("p",null,[t("Vite 通过在一开始将应用中的模块区分为 "),r("strong",null,"依赖"),t(" 和 "),r("strong",null,"源码"),t(" 两类，改进了开发服务器启动时间。")],-1),b=r("ul",null,[r("li",null,[r("p",null,[r("strong",null,"依赖"),t(" 大多为在开发时不会变动的纯 JavaScript。一些较大的依赖（例如有上百个模块的组件库）处理的代价也很高。依赖也通常会存在多种模块化格式（例如 ESM 或者 CommonJS）。")]),r("p",null,[t("Vite 将会使用 "),r("a",{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"},"esbuild"),t(),r("a",{href:"./dep-pre-bundling.html"},"预构建依赖"),t("。Esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍。")])]),r("li",null,[r("p",null,[r("strong",null,"源码"),t(" 通常包含一些并非直接是 JavaScript 的文件，需要转换（例如 JSX，CSS 或者 Vue/Svelte 组件），时常会被编辑。同时，并不是所有的源码都需要同时被加载（例如基于路由拆分的代码模块）。")]),r("p",null,[t("Vite 以 "),r("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer"},"原生 ESM"),t(" 方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。")]),r("p",null,[r("img",{src:"/vueuse-docs/assets/bundler.37740380.png",alt:"基于打包器的开发服务器"})]),r("p",null,[r("img",{src:"/vueuse-docs/assets/esm.3070012d.png",alt:"基于 ESM 的开发服务器"})])])],-1),g=r("h3",{id:"slow-updates"},[r("a",{class:"header-anchor",href:"#slow-updates","aria-hidden":"true"},"#"),t(" 缓慢的更新")],-1),v=r("p",null,"基于打包器启动时，重建整个包的效率很低。原因显而易见：因为这样更新速度会随着应用体积增长而直线下降。",-1),m=r("p",null,[t("一些打包器的开发服务器将构建内容存入内存，这样它们只需要在文件更改时使模块图的一部分失活"),r("sup",null,[r("a",{href:"#footnote-1"},"[1]")]),t("，但它也仍需要整个重新构建并重载页面。这样代价很高，并且重新加载页面会消除应用的当前状态，所以打包器支持了动态模块热重载（HMR）：允许一个模块 “热替换” 它自己，而不会影响页面其余部分。这大大改进了开发体验 —— 然而，在实践中我们发现，即使采用了 HMR 模式，其热更新速度也会随着应用规模的增长而显著下降。")],-1),S=r("p",null,[t("在 Vite 中，HMR 是在原生 ESM 上执行的。当编辑一个文件时，Vite 只需要精确地使已编辑的模块与其最近的 HMR 边界之间的链失活"),r("sup",null,[r("a",{href:"#footnote-1"},"[1]")]),t("（大多数时候只是模块本身），使得无论应用大小如何，HMR 始终能保持快速更新。")],-1),w=r("p",null,[t("Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 "),r("code",null,"304 Not Modified"),t(" 进行协商缓存，而依赖模块请求则会通过 "),r("code",null,"Cache-Control: max-age=31536000,immutable"),t(" 进行强缓存，因此一旦被缓存它们将不需要再次请求。")],-1),V=r("p",null,"一旦你体验到 Vite 的神速，你是否愿意再忍受像曾经那样使用打包器开发就要打上一个大大的问号了。",-1),M=r("h2",{id:"why-bundle-for-production"},[r("a",{class:"header-anchor",href:"#why-bundle-for-production","aria-hidden":"true"},"#"),t(" 为什么生产环境仍需打包")],-1),E=r("p",null,"尽管原生 ESM 现在得到了广泛支持，但由于嵌套导入会导致额外的网络往返，在生产环境中发布未打包的 ESM 仍然效率低下（即使使用 HTTP/2）。为了在生产环境中获得最佳的加载性能，最好还是将代码进行 tree-shaking、懒加载和 chunk 分割（以获得更好的缓存）。",-1),J=r("p",null,[t("要确保开发服务器和生产环境构建之间的最优输出和行为一致并不容易。所以 Vite 附带了一套 "),r("a",{href:"./features.html#build-optimizations"},"构建优化"),t(" 的 "),r("a",{href:"./build.html"},"构建命令"),t("，开箱即用。")],-1),k=r("h3",{id:"why-not-bundle-with-esbuild"},[r("a",{class:"header-anchor",href:"#why-not-bundle-with-esbuild","aria-hidden":"true"},"#"),t(" 为何不用 ESBuild 打包？")],-1),y=r("p",null,[t("虽然 "),r("code",null,"esbuild"),t(" 快得惊人，并且已经是一个在构建库方面比较出色的工具，但一些针对构建 "),r("em",null,"应用"),t(" 的重要功能仍然还在持续开发中 —— 特别是代码分割和 CSS 处理方面。就目前来说，Rollup 在应用打包方面更加成熟和灵活。尽管如此，当未来这些功能稳定后，我们也不排除使用 "),r("code",null,"esbuild"),t(" 作为生产构建器的可能。")],-1),H=r("h2",{id:"how-is-vite-different-from-x"},[r("a",{class:"header-anchor",href:"#how-is-vite-different-from-x","aria-hidden":"true"},"#"),t(" Vite 与 X 的区别是？")],-1),R=r("p",null,[t("你可以查看 "),r("a",{href:"./comparisons.html"},"比较"),t(" 章节获取更多细节，了解 Vite 与同类工具的异同。")],-1),x=r("small",{class:"cn-footnote"},[r("br"),r("strong",{class:"title"},"译者注"),r("a",{id:"footnote-1"}),t("[1] 暂以意译方式呈现。 ")],-1);n.render=function(r,t,a,n,C,_){return e(),l("div",null,[i,o,s,u,d,h,p,c,f,b,g,v,m,S,w,V,M,E,J,k,y,H,R,x])};export default n;export{a as __pageData};
