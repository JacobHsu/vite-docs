import{o as n,c as s,d as e,e as a}from"./app.a2203fca.js";const t='{"title":"功能","description":"","frontmatter":{"title":"功能"},"headers":[{"level":2,"title":"NPM 依赖解析和预构建","slug":"npm-dependency-resolving-and-pre-bundling"},{"level":2,"title":"模块热重载","slug":"hot-module-replacement"},{"level":2,"title":"TypeScript","slug":"typescript"},{"level":3,"title":"客户端类型","slug":"client-types"},{"level":2,"title":"Vue","slug":"vue"},{"level":2,"title":"JSX","slug":"jsx"},{"level":2,"title":"CSS","slug":"css"},{"level":3,"title":"@import 内联和变基","slug":"import-inlining-and-rebasing"},{"level":3,"title":"PostCSS","slug":"postcss"},{"level":3,"title":"CSS Modules","slug":"css-modules"},{"level":3,"title":"CSS 预处理器","slug":"css-pre-processors"},{"level":2,"title":"静态资源处理","slug":"static-assets"},{"level":2,"title":"JSON","slug":"json"},{"level":2,"title":"Glob 导入","slug":"glob-import"},{"level":3,"title":"globEager 导入","slug":"glob-import"},{"level":2,"title":"WebAssembly","slug":"webassembly"},{"level":2,"title":"Web Worker","slug":"web-workers"},{"level":2,"title":"构建优化","slug":"build-optimizations"},{"level":3,"title":"CSS 代码分割","slug":"css-code-splitting"},{"level":3,"title":"预加载指令生成","slug":"preload-directives-generation"},{"level":3,"title":"异步 Chunk 加载优化","slug":"async-chunk-loading-optimization"}],"relativePath":"guide/features.md","lastUpdated":1627354936992}',o={},l=e("h1",{id:"features"},[e("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),a(" 功能")],-1),c=e("p",null,"对非常基础的使用来说，使用 Vite 开发和使用一个静态文件服务器并没有太大区别。然而，Vite 还通过原生 ESM 导入提供了许多主要用于打包场景的增强功能。",-1),p=e("h2",{id:"npm-dependency-resolving-and-pre-bundling"},[e("a",{class:"header-anchor",href:"#npm-dependency-resolving-and-pre-bundling","aria-hidden":"true"},"#"),a(" NPM 依赖解析和预构建")],-1),u=e("p",null,"原生 ES 导入不支持下面这样的裸模块导入：",-1),r=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"import"),a(),e("span",{class:"token punctuation"},"{"),a(" someMethod "),e("span",{class:"token punctuation"},"}"),a(),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'my-dep'"),a("\n")])])],-1),i=e("p",null,"上面的代码会在浏览器中抛出一个错误。Vite 将会检测到所有被加载的源文件中的此类裸模块导入，并执行以下操作:",-1),k=e("ol",null,[e("li",null,[e("p",null,[e("a",{href:"./dep-pre-bundling.html"},"预构建"),a(" 它们以加快页面加载速度，并将 CommonJS / UMD 转换为 ESM 格式。预构建这一步由 "),e("a",{href:"http://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"},"esbuild"),a(" 执行，这使得 Vite 的冷启动时间比任何基于 JavaScript 的打包器都要快得多。")])]),e("li",null,[e("p",null,[a("重写导入为合法的 URL，例如 "),e("code",null,"/node_modules/.vite/my-dep.js?v=f3sf2ebd"),a(" 以便浏览器能够正确导入它们。")])])],-1),d=e("p",null,[e("strong",null,"依赖是强缓存的")],-1),m=e("p",null,[a("Vite 通过 HTTP 头来缓存请求得到的依赖，所以如果你想要编辑或调试一个依赖，请跟随 "),e("a",{href:"./dep-pre-bundling.html#浏览器缓存"},"这里"),a(" 的步骤。")],-1),g=e("h2",{id:"hot-module-replacement"},[e("a",{class:"header-anchor",href:"#hot-module-replacement","aria-hidden":"true"},"#"),a(" 模块热重载")],-1),h=e("p",null,[a("Vite 提供了一套原生 ESM 的 "),e("a",{href:"./api-hmr.html"},"HMR API"),a("。 具有 HMR 功能的框架可以利用该 API 提供即时、准确的更新，而无需重新加载页面或清除应用程序状态。Vite 内置了 HMR 到 "),e("a",{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-vue",target:"_blank",rel:"noopener noreferrer"},"Vue 单文件组件（SFC）"),a(" 和 "),e("a",{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-react-refresh",target:"_blank",rel:"noopener noreferrer"},"React Fast Refresh"),a(" 中。也通过 "),e("a",{href:"https://github.com/JoviDeCroock/prefresh/tree/main/packages/vite",target:"_blank",rel:"noopener noreferrer"},"@prefresh/vite"),a(" 对 Preact 实现了官方集成。")],-1),f=e("p",null,[a("注意，你不需要手动设置这些 —— 当你通过 "),e("a",{href:"./"},[e("code",null,"create-vite")]),a(" 创建应用程序时，所选模板已经为你预先配置了这些。")],-1),b=e("h2",{id:"typescript"},[e("a",{class:"header-anchor",href:"#typescript","aria-hidden":"true"},"#"),a(" TypeScript")],-1),y=e("p",null,[a("Vite 天然支持引入 "),e("code",null,".ts"),a(" 文件。")],-1),v=e("p",null,[a("Vite 仅执行 "),e("code",null,".ts"),a(" 文件的转译工作，并 "),e("strong",null,"不"),a(" 执行任何类型检查。并假设类型检查已经被你的 IDE 或构建过程接管了（你可以在构建脚本中运行 "),e("code",null,"tsc --noEmit"),a(" 或者安装 "),e("code",null,"vue-tsc"),a(" 然后运行 "),e("code",null,"vue-tsc --noEmit"),a(" 来对你的 "),e("code",null,"*.vue"),a(" 文件做类型检查）。")],-1),w=e("p",null,[a("Vite 使用 "),e("a",{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer"},"esbuild"),a(" 将 TypeScript 转译到 JavaScript，约是 "),e("code",null,"tsc"),a(" 速度的 20~30 倍，同时 HMR 更新反映到浏览器的时间小于 50ms。")],-1),S=e("p",null,[a("注意因为 "),e("code",null,"esbuild"),a(" 只执行转译工作而不含类型信息，所以它不支持 TypeScript 的特定功能例如常量枚举和隐式 “type-only” 导入。你必须在你的 "),e("code",null,"tsconfig.json"),a(" 中的 "),e("code",null,"compilerOptions"),a(" 里设置 "),e("code",null,'"isolatedModules": true'),a("，这样 TS 才会警告你哪些功能无法与独立编译模式一同工作。")],-1),j=e("h3",{id:"client-types"},[e("a",{class:"header-anchor",href:"#client-types","aria-hidden":"true"},"#"),a(" 客户端类型")],-1),C=e("p",null,[a("Vite 默认的类型定义是写给它的 Node.js API 的。要将其补充到一个 Vite 应用的客户端代码环境中，请添加一个 "),e("code",null,"d.ts"),a(" 声明文件：")],-1),_=e("div",{class:"language-typescript"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},'/// <reference types="vite/client" />'),a("\n")])])],-1),V=e("p",null,[a("同时，你也可以将 "),e("code",null,"vite/client"),a(" 添加到 "),e("code",null,"tsconfig"),a(" 中的 "),e("code",null,"compilerOptions.types"),a(" 下：")],-1),x=e("div",{class:"language-json"},[e("pre",null,[e("code",null,[e("span",{class:"token punctuation"},"{"),a("\n  "),e("span",{class:"token property"},'"compilerOptions"'),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"{"),a("\n    "),e("span",{class:"token property"},'"types"'),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"vite/client"'),e("span",{class:"token punctuation"},"]"),a("\n  "),e("span",{class:"token punctuation"},"}"),a("\n"),e("span",{class:"token punctuation"},"}"),a("\n")])])],-1),R=e("p",null,"这将会提供以下类型定义补充：",-1),M=e("ul",null,[e("li",null,[a("资源导入 (例如：导入一个 "),e("code",null,".svg"),a(" 文件)")]),e("li",null,[e("code",null,[a("import."),e("wbr"),a("meta.env")]),a(" 上 Vite 注入的环境变量的类型定义")]),e("li",null,[e("code",null,[a("import."),e("wbr"),a("meta.hot")]),a(" 上的 "),e("a",{href:"./api-hmr.html"},"HMR API"),a(" 类型定义")])],-1),E=e("h2",{id:"vue"},[e("a",{class:"header-anchor",href:"#vue","aria-hidden":"true"},"#"),a(" Vue")],-1),W=e("p",null,"Vite 为 Vue 提供第一优先级支持：",-1),A=e("ul",null,[e("li",null,[a("Vue 3 单文件组件支持："),e("a",{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-vue",target:"_blank",rel:"noopener noreferrer"},"@vitejs/plugin-vue")]),e("li",null,[a("Vue 3 JSX 支持："),e("a",{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx",target:"_blank",rel:"noopener noreferrer"},"@vitejs/plugin-vue-jsx")]),e("li",null,[a("Vue 2 支持："),e("a",{href:"https://github.com/underfin/vite-plugin-vue2",target:"_blank",rel:"noopener noreferrer"},"underfin/vite-plugin-vue2")])],-1),P=e("h2",{id:"jsx"},[e("a",{class:"header-anchor",href:"#jsx","aria-hidden":"true"},"#"),a(" JSX")],-1),J=e("p",null,[e("code",null,".jsx"),a(" 和 "),e("code",null,".tsx"),a(" 文件同样开箱即用。JSX 的转译同样是通过 "),e("a",{href:"https://esbuild.github.io",target:"_blank",rel:"noopener noreferrer"},"esbuild"),a("，默认为 React 16 风格。期望在 esbuild 中支持 React 17 风格的 JSX 请看 "),e("a",{href:"https://github.com/evanw/esbuild/issues/334",target:"_blank",rel:"noopener noreferrer"},"这里"),a("。")],-1),L=e("p",null,[a("Vue 用户应使用官方提供的 "),e("a",{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx",target:"_blank",rel:"noopener noreferrer"},"@vitejs/plugin-vue-jsx"),a(" 插件，它提供了 Vue 3 特性的支持，包括 HMR，全局组件解析，指令和插槽。")],-1),I=e("p",null,[a("如果不是在 React 或 Vue 中使用 JSX，自定义的 "),e("code",null,"jsxFactory"),a(" 和 "),e("code",null,"jsxFragment"),a(" 可以使用 "),e("a",{href:"/config/#esbuild"},[e("code",null,"esbuild"),a(" 选项")]),a(" 进行配置。例如对 Preact：")],-1),U=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"// vite.config.js"),a("\n"),e("span",{class:"token keyword"},"export"),a(),e("span",{class:"token keyword"},"default"),a(),e("span",{class:"token punctuation"},"{"),a("\n  esbuild"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"{"),a("\n    jsxFactory"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token string"},"'h'"),e("span",{class:"token punctuation"},","),a("\n    jsxFragment"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token string"},"'Fragment'"),a("\n  "),e("span",{class:"token punctuation"},"}"),a("\n"),e("span",{class:"token punctuation"},"}"),a("\n")])])],-1),F=e("p",null,[a("更多细节详见 "),e("a",{href:"https://esbuild.github.io/content-types/#jsx",target:"_blank",rel:"noopener noreferrer"},"esbuild 文档"),a(".")],-1),H=e("p",null,[a("你可以使用 "),e("code",null,"jsxInject"),a("（这是一个仅在 Vite 中使用的选项）为 JSX 注入 helper，以避免手动导入：")],-1),O=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"// vite.config.js"),a("\n"),e("span",{class:"token keyword"},"export"),a(),e("span",{class:"token keyword"},"default"),a(),e("span",{class:"token punctuation"},"{"),a("\n  esbuild"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"{"),a("\n    jsxInject"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token template-string"},[e("span",{class:"token template-punctuation string"},"`"),e("span",{class:"token string"},"import React from 'react'"),e("span",{class:"token template-punctuation string"},"`")]),a("\n  "),e("span",{class:"token punctuation"},"}"),a("\n"),e("span",{class:"token punctuation"},"}"),a("\n")])])],-1),N=e("h2",{id:"css"},[e("a",{class:"header-anchor",href:"#css","aria-hidden":"true"},"#"),a(" CSS")],-1),T=e("p",null,[a("导入 "),e("code",null,".css"),a(" 文件将会把内容插入到 "),e("code",null,"<style>"),a(" 标签中，同时也带有 HMR 支持。也能够以字符串的形式检索处理后的、作为其模块默认导出的 CSS。")],-1),X=e("h3",{id:"import-inlining-and-rebasing"},[e("a",{class:"header-anchor",href:"#import-inlining-and-rebasing","aria-hidden":"true"},"#"),a(),e("code",null,"@import"),a("内联和变基")],-1),z=e("p",null,[a("Vite 通过 "),e("code",null,"postcss-import"),a(" 预配置支持了 CSS "),e("code",null,"@import"),a(" 内联，Vite 的路径别名也遵从 CSS "),e("code",null,"@import"),a("。换句话说，所有 CSS "),e("code",null,"url()"),a(" 引用，即使导入的文件在不同的目录中，也总是自动变基，以确保正确性。")],-1),D=e("p",null,[a("Sass 和 Less 文件也支持 "),e("code",null,"@import"),a(" 别名和 URL 变基（具体请参阅 "),e("a",{href:"#css-pre-processors"},"CSS Pre-processors"),a("）。")],-1),G=e("h3",{id:"postcss"},[e("a",{class:"header-anchor",href:"#postcss","aria-hidden":"true"},"#"),a(" PostCSS")],-1),B=e("p",null,[a("如果项目包含有效的 PostCSS 配置 (任何受 "),e("a",{href:"https://github.com/postcss/postcss-load-config",target:"_blank",rel:"noopener noreferrer"},"postcss-load-config"),a(" 支持的格式，例如 "),e("code",null,"postcss.config.js"),a(")，它将会自动应用于所有已导入的 CSS。")],-1),q=e("h3",{id:"css-modules"},[e("a",{class:"header-anchor",href:"#css-modules","aria-hidden":"true"},"#"),a(" CSS Modules")],-1),K=e("p",null,[a("任何以 "),e("code",null,".module.css"),a(" 为后缀名的 CSS 文件都被认为是一个 "),e("a",{href:"https://github.com/css-modules/css-modules",target:"_blank",rel:"noopener noreferrer"},"CSS modules 文件"),a("。导入这样的文件会返回一个相应的模块对象：")],-1),Q=e("div",{class:"language-css"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"/* example.module.css */"),a("\n"),e("span",{class:"token selector"},".red"),a(),e("span",{class:"token punctuation"},"{"),a("\n  "),e("span",{class:"token property"},"color"),e("span",{class:"token punctuation"},":"),a(" red"),e("span",{class:"token punctuation"},";"),a("\n"),e("span",{class:"token punctuation"},"}"),a("\n")])])],-1),Y=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"import"),a(" classes "),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./example.module.css'"),a("\ndocument"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"getElementById"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'foo'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),a("className "),e("span",{class:"token operator"},"="),a(" classes"),e("span",{class:"token punctuation"},"."),a("red\n")])])],-1),Z=e("p",null,[a("CSS modules 行为可以通过 "),e("a",{href:"/config/#css-modules"},[e("code",null,"css.modules"),a(" 选项")]),a(" 进行配置。")],-1),$=e("p",null,[a("如果 "),e("code",null,"css.modules.localsConvention"),a(" 设置开启了 camelCase 格式变量名转换（例如 "),e("code",null,"localsConvention: 'camelCaseOnly'"),a("），你还可以使用按名导入。")],-1),nn=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"// .apply-color -> applyColor"),a("\n"),e("span",{class:"token keyword"},"import"),a(),e("span",{class:"token punctuation"},"{"),a(" applyColor "),e("span",{class:"token punctuation"},"}"),a(),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./example.module.css'"),a("\ndocument"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"getElementById"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'foo'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),a("className "),e("span",{class:"token operator"},"="),a(" applyColor\n")])])],-1),sn=e("h3",{id:"css-pre-processors"},[e("a",{class:"header-anchor",href:"#css-pre-processors","aria-hidden":"true"},"#"),a(" CSS 预处理器")],-1),en=e("p",null,[a("由于 Vite 的目标仅为现代浏览器，因此建议使用原生 CSS 变量和实现 CSSWG 草案的 PostCSS 插件（例如 "),e("a",{href:"https://github.com/jonathantneal/postcss-nesting",target:"_blank",rel:"noopener noreferrer"},"postcss-nesting"),a("）来编写简单的、符合未来标准的 CSS。")],-1),an=e("p",null,[a("话虽如此，但 Vite 也同时提供了对 "),e("code",null,".scss"),a(", "),e("code",null,".sass"),a(", "),e("code",null,".less"),a(", "),e("code",null,".styl"),a(" 和 "),e("code",null,".stylus"),a(" 文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖：")],-1),tn=e("div",{class:"language-bash"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"# .scss and .sass"),a("\n"),e("span",{class:"token function"},"npm"),a(),e("span",{class:"token function"},"install"),a(" -D sass\n\n"),e("span",{class:"token comment"},"# .less"),a("\n"),e("span",{class:"token function"},"npm"),a(),e("span",{class:"token function"},"install"),a(" -D "),e("span",{class:"token function"},"less"),a("\n\n"),e("span",{class:"token comment"},"# .styl and .stylus"),a("\n"),e("span",{class:"token function"},"npm"),a(),e("span",{class:"token function"},"install"),a(" -D stylus\n")])])],-1),on=e("p",null,[a("如果是用的是单文件组件，可以通过 "),e("code",null,'<style lang="sass">'),a("（或其他预处理器）自动开启。")],-1),ln=e("p",null,[a("Vite 为 Sass 和 Less 改进了 "),e("code",null,"@import"),a(" 解析，以保证 Vite 别名也能被使用。另外，"),e("code",null,"url()"),a(" 中的相对路径引用的，与根文件不同目录中的 Sass/Less 文件会自动变基以保证正确性。")],-1),cn=e("p",null,[a("由于 Stylus API 限制，"),e("code",null,"@import"),a(" 别名和 URL 变基不支持 Stylus。")],-1),pn=e("p",null,[a("你还可以通过在文件扩展名前加上 "),e("code",null,".module"),a(" 来结合使用 CSS modules 和预处理器，例如 "),e("code",null,"style.module.scss"),a("。")],-1),un=e("h2",{id:"static-assets"},[e("a",{class:"header-anchor",href:"#static-assets","aria-hidden":"true"},"#"),a(" 静态资源处理")],-1),rn=e("p",null,"导入一个静态资源会返回解析后的 URL：",-1),kn=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"import"),a(" imgUrl "),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./img.png'"),a("\ndocument"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"getElementById"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'hero-img'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),a("src "),e("span",{class:"token operator"},"="),a(" imgUrl\n")])])],-1),dn=e("p",null,"添加一些特殊的查询参数可以更改资源被引入的方式：",-1),mn=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"// 显式加载资源为一个 URL"),a("\n"),e("span",{class:"token keyword"},"import"),a(" assetAsURL "),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./asset.js?url'"),a("\n")])])],-1),gn=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"// 以字符串形式加载资源"),a("\n"),e("span",{class:"token keyword"},"import"),a(" assetAsString "),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./shader.glsl?raw'"),a("\n")])])],-1),hn=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"// 加载为 Web Worker"),a("\n"),e("span",{class:"token keyword"},"import"),a(" Worker "),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./worker.js?worker'"),a("\n")])])],-1),fn=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"// 在构建时 Web Worker 内联为 base64 字符串"),a("\n"),e("span",{class:"token keyword"},"import"),a(" InlineWorker "),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./worker.js?worker&inline'"),a("\n")])])],-1),bn=e("p",null,[a("更多细节请见 "),e("a",{href:"./assets.html"},"静态资源处理"),a("。")],-1),yn=e("h2",{id:"json"},[e("a",{class:"header-anchor",href:"#json","aria-hidden":"true"},"#"),a(" JSON")],-1),vn=e("p",null,"JSON 可以被直接导入 —— 同样支持具名导入：",-1),wn=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"// 导入整个对象"),a("\n"),e("span",{class:"token keyword"},"import"),a(" json "),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./example.json'"),a("\n"),e("span",{class:"token comment"},"// 对一个根字段使用具名导入 —— 有效帮助 treeshaking！"),a("\n"),e("span",{class:"token keyword"},"import"),a(),e("span",{class:"token punctuation"},"{"),a(" field "),e("span",{class:"token punctuation"},"}"),a(),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./example.json'"),a("\n")])])],-1),Sn=e("h2",{id:"glob-import"},[e("a",{class:"header-anchor",href:"#glob-import","aria-hidden":"true"},"#"),a(" Glob 导入")],-1),jn=e("p",null,[a("Vite 支持使用特殊的 "),e("code",null,[a("import."),e("wbr"),a("meta.glob")]),a(" 函数从文件系统导入多个模块：")],-1),Cn=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"const"),a(" modules "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token keyword"},"import"),e("span",{class:"token punctuation"},"."),a("meta"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"glob"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'./dir/*.js'"),e("span",{class:"token punctuation"},")"),a("\n")])])],-1),_n=e("p",null,"以上将会被转译为下面的样子：",-1),Vn=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"// vite 生成的代码"),a("\n"),e("span",{class:"token keyword"},"const"),a(" modules "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token punctuation"},"{"),a("\n  "),e("span",{class:"token string"},"'./dir/foo.js'"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token operator"},"=>"),a(),e("span",{class:"token keyword"},"import"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'./dir/foo.js'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),a("\n  "),e("span",{class:"token string"},"'./dir/bar.js'"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token operator"},"=>"),a(),e("span",{class:"token keyword"},"import"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'./dir/bar.js'"),e("span",{class:"token punctuation"},")"),a("\n"),e("span",{class:"token punctuation"},"}"),a("\n")])])],-1),xn=e("p",null,[a("你可以遍历 "),e("code",null,"modules"),a(" 对象的 key 值来访问相应的模块：")],-1),Rn=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"for"),a(),e("span",{class:"token punctuation"},"("),e("span",{class:"token keyword"},"const"),a(" path "),e("span",{class:"token keyword"},"in"),a(" modules"),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token punctuation"},"{"),a("\n  modules"),e("span",{class:"token punctuation"},"["),a("path"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"then"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"mod"),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token operator"},"=>"),a(),e("span",{class:"token punctuation"},"{"),a("\n    console"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"log"),e("span",{class:"token punctuation"},"("),a("path"),e("span",{class:"token punctuation"},","),a(" mod"),e("span",{class:"token punctuation"},")"),a("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),a("\n"),e("span",{class:"token punctuation"},"}"),a("\n")])])],-1),Mn=e("p",null,[a("匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以使用 "),e("code",null,[a("import."),e("wbr"),a("meta.globEager")]),a(" 代替：")],-1),En=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"const"),a(" modules "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token keyword"},"import"),e("span",{class:"token punctuation"},"."),a("meta"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"globEager"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'./dir/*.js'"),e("span",{class:"token punctuation"},")"),a("\n")])])],-1),Wn=e("p",null,"以上会被转译为下面的样子：",-1),An=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token comment"},"// vite 生成的代码"),a("\n"),e("span",{class:"token keyword"},"import"),a(),e("span",{class:"token operator"},"*"),a(),e("span",{class:"token keyword"},"as"),a(" __glob__0_0 "),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./dir/foo.js'"),a("\n"),e("span",{class:"token keyword"},"import"),a(),e("span",{class:"token operator"},"*"),a(),e("span",{class:"token keyword"},"as"),a(" __glob__0_1 "),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./dir/bar.js'"),a("\n"),e("span",{class:"token keyword"},"const"),a(" modules "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token punctuation"},"{"),a("\n  "),e("span",{class:"token string"},"'./dir/foo.js'"),e("span",{class:"token operator"},":"),a(" __glob__0_0"),e("span",{class:"token punctuation"},","),a("\n  "),e("span",{class:"token string"},"'./dir/bar.js'"),e("span",{class:"token operator"},":"),a(" __glob__0_1\n"),e("span",{class:"token punctuation"},"}"),a("\n")])])],-1),Pn=e("p",null,"请注意：",-1),Jn=e("ul",null,[e("li",null,"这只是一个 Vite 独有的功能而不是一个 Web 或 ES 标准"),e("li",null,[a("该 Glob 模式会被当成导入标识符：必须是相对路径（以 "),e("code",null,"./"),a(" 开头）或绝对路径（以 "),e("code",null,"/"),a(" 开头，相对于项目根目录解析）。")]),e("li",null,[a("Glob 匹配是使用 "),e("code",null,"fast-glob"),a(" 来实现的 —— 阅读它的文档来查阅 "),e("a",{href:"https://github.com/mrmlnc/fast-glob#pattern-syntax",target:"_blank",rel:"noopener noreferrer"},"支持的 Glob 模式"),a("。")])],-1),Ln=e("h3",{id:"glob-import"},[e("a",{class:"header-anchor",href:"#glob-import","aria-hidden":"true"},"#"),a(" globEager 导入")],-1),In=e("p",null,[a("vue-vben-admin/src/router/"),e("a",{href:"https://github.com/anncwb/vue-vben-admin/blob/main/src/router/routes/index.ts",target:"_blank",rel:"noopener noreferrer"},"routes/index.ts"),a(),e("a",{href:"https://github.com/JacobHsu/vue-vite-admin/commit/54c01966ac57baa24fc17eea38b7870d7b997abc",target:"_blank",rel:"noopener noreferrer"},"commit")],-1),Un=e("div",{class:"language-ts"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"const"),a(" modules "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token keyword"},"import"),e("span",{class:"token punctuation"},"."),a("meta"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"globEager"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string"},"'./modules/**/*.ts'"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n\nObject"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"keys"),e("span",{class:"token punctuation"},"("),a("modules"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"forEach"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),a("key"),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token operator"},"=>"),a(),e("span",{class:"token punctuation"},"{"),a("\n  "),e("span",{class:"token keyword"},"const"),a(" mod "),e("span",{class:"token operator"},"="),a(" modules"),e("span",{class:"token punctuation"},"["),a("key"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"."),e("span",{class:"token keyword"},"default"),a(),e("span",{class:"token operator"},"||"),a(),e("span",{class:"token punctuation"},"{"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),a("\n  "),e("span",{class:"token keyword"},"const"),a(" modList "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token builtin"},"Array"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"isArray"),e("span",{class:"token punctuation"},"("),a("mod"),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token operator"},"?"),a(),e("span",{class:"token punctuation"},"["),e("span",{class:"token operator"},"..."),a("mod"),e("span",{class:"token punctuation"},"]"),a(),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"["),a("mod"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},";"),a("\n  routeModuleList"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"push"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"..."),a("modList"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},";"),a("\n\n"),e("span",{class:"token keyword"},"export"),a(),e("span",{class:"token keyword"},"const"),a(" asyncRoutes "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token punctuation"},"["),e("span",{class:"token operator"},"..."),a("routeModuleList"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},";"),a("\n\n"),e("span",{class:"token comment"},"// Basic routing without permission"),a("\n"),e("span",{class:"token keyword"},"export"),a(),e("span",{class:"token keyword"},"const"),a(" basicRoutes "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token punctuation"},"["),a("RootRoute"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token operator"},"..."),a("mainOutRoutes"),e("span",{class:"token punctuation"},","),a(),e("span",{class:"token operator"},"..."),a("asyncRoutes"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},";"),a("\n")])])],-1),Fn=e("h2",{id:"webassembly"},[e("a",{class:"header-anchor",href:"#webassembly","aria-hidden":"true"},"#"),a(" WebAssembly")],-1),Hn=e("p",null,[a("预编译的 "),e("code",null,".wasm"),a(" 文件可以直接被导入 —— 默认导出一个函数，返回值为所导出 wasm 实例对象的 Promise：")],-1),On=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"import"),a(" init "),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./example.wasm'"),a("\n\n"),e("span",{class:"token function"},"init"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"then"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"exports"),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token operator"},"=>"),a(),e("span",{class:"token punctuation"},"{"),a("\n  exports"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"test"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),a("\n"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),a("\n")])])],-1),Nn=e("p",null,[e("code",null,"init"),a(" 函数还可以将传递给 "),e("code",null,"WebAssembly.instantiate"),a(" 的导入对象作为其第二个参数：")],-1),Tn=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token function"},"init"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),a("\n  imports"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"{"),a("\n    "),e("span",{class:"token function-variable function"},"someFunc"),e("span",{class:"token operator"},":"),a(),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token operator"},"=>"),a(),e("span",{class:"token punctuation"},"{"),a("\n      "),e("span",{class:"token comment"},"/* ... */"),a("\n    "),e("span",{class:"token punctuation"},"}"),a("\n  "),e("span",{class:"token punctuation"},"}"),a("\n"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"then"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),a(),e("span",{class:"token operator"},"=>"),a(),e("span",{class:"token punctuation"},"{"),a("\n  "),e("span",{class:"token comment"},"/* ... */"),a("\n"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),a("\n")])])],-1),Xn=e("p",null,[a("在生产构建当中，体积小于 "),e("code",null,"assetInlineLimit"),a(" 的 "),e("code",null,".wasm"),a(" 文件将会被内联为 base64 字符串。否则，它们将作为资源复制到 "),e("code",null,"dist"),a(" 目录中，并按需获取。")],-1),zn=e("h2",{id:"web-workers"},[e("a",{class:"header-anchor",href:"#web-workers","aria-hidden":"true"},"#"),a(" Web Worker")],-1),Dn=e("p",null,[a("一个 web worker 脚本可以直接通过添加一个 "),e("code",null,"?worker"),a(" 或 "),e("code",null,"?sharedworker"),a(" 查询参数来导入。默认导出一个自定义的 worker 构造器：")],-1),Gn=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"import"),a(" MyWorker "),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./worker?worker'"),a("\n\n"),e("span",{class:"token keyword"},"const"),a(" worker "),e("span",{class:"token operator"},"="),a(),e("span",{class:"token keyword"},"new"),a(),e("span",{class:"token class-name"},"MyWorker"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),a("\n")])])],-1),Bn=e("p",null,[a("Worker 脚本也可以使用 "),e("code",null,"import"),a(" 语句来替代 "),e("code",null,"importScripts()"),a(" —— 注意，在开发过程中，这依赖于浏览器原生支持，目前只在 Chrome 中适用，而在生产版本中，它已经被编译掉了。")],-1),qn=e("p",null,[a("默认情况下，worker 脚本将在生产构建中编译成单独的 chunk。如果你想将 worker 内联为 base64 字符串，请添加 "),e("code",null,"inline"),a(" 查询参数：")],-1),Kn=e("div",{class:"language-js"},[e("pre",null,[e("code",null,[e("span",{class:"token keyword"},"import"),a(" MyWorker "),e("span",{class:"token keyword"},"from"),a(),e("span",{class:"token string"},"'./worker?worker&inline'"),a("\n")])])],-1),Qn=e("h2",{id:"build-optimizations"},[e("a",{class:"header-anchor",href:"#build-optimizations","aria-hidden":"true"},"#"),a(" 构建优化")],-1),Yn=e("blockquote",null,[e("p",null,"下面所罗列的功能会自动应用为构建过程的一部分，除非你想禁用它们，否则没有必要显式配置。")],-1),Zn=e("h3",{id:"css-code-splitting"},[e("a",{class:"header-anchor",href:"#css-code-splitting","aria-hidden":"true"},"#"),a(" CSS 代码分割")],-1),$n=e("p",null,[a("Vite 会自动地将一个异步 chunk 模块中使用到的 CSS 代码抽取出来并为其生成一个单独的文件。这个 CSS 文件将在该异步 chunk 加载完成时自动通过一个 "),e("code",null,"<link>"),a(" 标签载入，该异步 chunk 会保证只在 CSS 加载完毕后再执行，避免发生 "),e("a",{href:"https://en.wikipedia.org/wiki/Flash_of_unstyled_content#:~:text=A%20flash%20of%20unstyled%20content,before%20all%20information%20is%20retrieved.",target:"_blank",rel:"noopener noreferrer"},"FOUC"),a(" 。")],-1),ns=e("p",null,[a("如果你更倾向于将所有的 CSS 抽取到一个文件中，你可以通过设置 "),e("a",{href:"/config/#build-csscodesplit"},[e("code",null,"build.cssCodeSplit")]),a(" 为 "),e("code",null,"false"),a(" 来禁用 CSS 代码分割。")],-1),ss=e("h3",{id:"preload-directives-generation"},[e("a",{class:"header-anchor",href:"#preload-directives-generation","aria-hidden":"true"},"#"),a(" 预加载指令生成")],-1),es=e("p",null,[a("Vite 会为入口 chunk 和它们在打包出的 HTML 中的直接引入自动生成 "),e("code",null,'<link rel="modulepreload">'),a(" 指令。")],-1),as=e("h3",{id:"async-chunk-loading-optimization"},[e("a",{class:"header-anchor",href:"#async-chunk-loading-optimization","aria-hidden":"true"},"#"),a(" 异步 Chunk 加载优化")],-1),ts=e("p",null,"在实际项目中，Rollup 通常会生成 “共用” chunk —— 被两个或以上的其他 chunk 共享的 chunk。与动态导入相结合，会很容易出现下面这种场景：",-1),os=e("p",null,[e("img",{src:"/vite-docs/assets/graph.8f2f36b7.png",alt:"graph"})],-1),ls=e("p",null,[a("在无优化的情境下，当异步 chunk "),e("code",null,"A"),a(" 被导入时，浏览器将必须请求和解析 "),e("code",null,"A"),a("，然后它才能弄清楚它也需要共用 chunk "),e("code",null,"C"),a("。这会导致额外的网络往返：")],-1),cs=e("div",{class:"language-"},[e("pre",null,[e("code",null,"Entry ---\x3e A ---\x3e C\n")])],-1),ps=e("p",null,[a("Vite 将使用一个预加载步骤自动重写代码，来分割动态导入调用，以实现当 "),e("code",null,"A"),a(" 被请求时，"),e("code",null,"C"),a(" 也将 "),e("strong",null,"同时"),a(" 被请求：")],-1),us=e("div",{class:"language-"},[e("pre",null,[e("code",null,"Entry ---\x3e (A + C)\n")])],-1),rs=e("p",null,[e("code",null,"C"),a(" 也可能有更深的导入，在未优化的场景中，这会导致更多的网络往返。Vite 的优化会跟踪所有的直接导入，无论导入的深度如何，都能够完全消除不必要的往返。")],-1);o.render=function(e,a,t,o,is,ks){return n(),s("div",null,[l,c,p,u,r,i,k,d,m,g,h,f,b,y,v,w,S,j,C,_,V,x,R,M,E,W,A,P,J,L,I,U,F,H,O,N,T,X,z,D,G,B,q,K,Q,Y,Z,$,nn,sn,en,an,tn,on,ln,cn,pn,un,rn,kn,dn,mn,gn,hn,fn,bn,yn,vn,wn,Sn,jn,Cn,_n,Vn,xn,Rn,Mn,En,Wn,An,Pn,Jn,Ln,In,Un,Fn,Hn,On,Nn,Tn,Xn,zn,Dn,Gn,Bn,qn,Kn,Qn,Yn,Zn,$n,ns,ss,es,as,ts,os,ls,cs,ps,us,rs])};export default o;export{t as __pageData};
