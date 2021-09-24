import{o as n,c as s,a}from"./app.a9a86f7e.js";const e='{"title":"服务端渲染","description":"","frontmatter":{"title":"服务端渲染"},"headers":[{"level":2,"title":"示例项目","slug":"example-projects"},{"level":2,"title":"源码结构","slug":"source-structure"},{"level":2,"title":"情景逻辑","slug":"conditional-logic"},{"level":2,"title":"设置开发服务器","slug":"setting-up-the-dev-server"},{"level":2,"title":"生产环境构建","slug":"building-for-production"},{"level":2,"title":"生成预加载指令","slug":"generating-preload-directives"},{"level":2,"title":"预渲染 / SSG","slug":"pre-rendering--ssg"},{"level":2,"title":"SSR 外部化","slug":"ssr-externals"},{"level":2,"title":"SSR 专有插件逻辑","slug":"ssr-specific-plugin-logic"},{"level":2,"title":"SSR Target","slug":"ssr-target"}],"relativePath":"guide/ssr.md","lastUpdated":1632477447541}',t={},p=a('<h1 id="server-side-rendering"><a class="header-anchor" href="#server-side-rendering" aria-hidden="true">#</a> 服务端渲染</h1><div class="warning custom-block"><p class="custom-block-title">实验性</p><p>SSR 支持还处于试验阶段，你可能会遇到 bug 和不受支持的用例。请考虑你可能承担的风险。</p></div><div class="tip custom-block"><p class="custom-block-title">注意</p><p>SSR 特别指支持在 Node.js 中运行相同应用程序的前端框架（例如 React、Preact、Vue 和 Svelte），将其预渲染成 HTML，最后在客户端进行注水化处理。如果你正在寻找与传统服务器端框架的集成，请查看 <a href="./backend-integration.html">后端集成指南</a>。</p><p>下面的指南还假定你在选择的框架中有使用 SSR 的经验，并且只关注特定于 Vite 的集成细节。</p></div><div class="warning custom-block"><p class="custom-block-title">Low-level API</p><p>这是一个底层 API，是为库和框架作者准备的。如果你的目标是构建一个应用程序，请确保优先查看 <a href="https://github.com/vitejs/awesome-vite#ssr" target="_blank" rel="noopener noreferrer">Vite SSR 章节</a> 中更上层的 SSR 插件和工具。也就是说，大部分应用都是基于 Vite 的底层 API 之上构建的。</p></div><div class="tip custom-block"><p class="custom-block-title">帮助</p><p>如果你有疑问，可以到社区 <a href="https://discord.gg/PkbxgzPhJv" target="_blank" rel="noopener noreferrer">Discord 的 Vite #ssr 频道</a>，这里会帮到你。</p></div><h2 id="example-projects"><a class="header-anchor" href="#example-projects" aria-hidden="true">#</a> 示例项目</h2><p>Vite 为服务端渲染（SSR）提供了内建支持。这里的 Vite 范例包含了 Vue 3 和 React 的 SSR 设置示例，可以作为本指南的参考：</p><ul><li><a href="https://github.com/vitejs/vite/tree/main/packages/playground/ssr-vue" target="_blank" rel="noopener noreferrer">Vue 3</a></li><li><a href="https://github.com/vitejs/vite/tree/main/packages/playground/ssr-react" target="_blank" rel="noopener noreferrer">React</a></li></ul><h2 id="source-structure"><a class="header-anchor" href="#source-structure" aria-hidden="true">#</a> 源码结构</h2><p>一个典型的 SSR 应用应该有如下的源文件结构：</p><div class="language-"><pre><code>- index.html\n- src/\n  - main.js          # 导出环境无关的（通用的）应用代码\n  - entry-client.js  # 将应用挂载到一个 DOM 元素上\n  - entry-server.js  # 使用某框架的 SSR API 渲染该应用\n</code></pre></div><p><code>index.html</code> 将需要引用 <code>entry-client.js</code> 并包含一个占位标记供给服务端渲染时注入：</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--ssr-outlet--&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/src/entry-client.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>你可以使用任何你喜欢的占位标记来替代 <code>&lt;!--ssr-outlet--&gt;</code>，只要它能够被正确替换。</p><h2 id="conditional-logic"><a class="header-anchor" href="#conditional-logic" aria-hidden="true">#</a> 情景逻辑</h2><p>如果需要执行 SSR 和客户端间情景逻辑，可以使用：</p><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">SSR</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ... 仅在服务端执行的逻辑</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>这是在构建过程中被静态替换的，因此它将允许对未使用的条件分支进行摇树优化。</p><h2 id="setting-up-the-dev-server"><a class="header-anchor" href="#setting-up-the-dev-server" aria-hidden="true">#</a> 设置开发服务器</h2><p>在构建 SSR 应用程序时，你可能希望完全控制主服务器，并将 Vite 与生产环境脱钩。因此，建议以中间件模式使用 Vite。下面是一个关于 <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">express</a> 的例子：</p><p><strong>server.js</strong></p><div class="language-js"><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><br><br><br><br><br><br><br><br><br></div><pre><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> createServer<span class="token operator">:</span> createViteServer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;vite&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n  <span class="token comment">// 以中间件模式创建 vite 应用，这将禁用 Vite 自身的 HTML 服务逻辑</span>\n  <span class="token comment">// 并让上级服务器接管控制</span>\n  <span class="token comment">//</span>\n  <span class="token comment">// 如果你想使用 Vite 自己的 HTML 服务逻辑（将 Vite 作为</span>\n  <span class="token comment">// 一个开发中间件来使用），那么这里请用 &#39;html&#39;</span>\n  <span class="token keyword">const</span> vite <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createViteServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    server<span class="token operator">:</span> <span class="token punctuation">{</span> middlewareMode<span class="token operator">:</span> <span class="token string">&#39;ssr&#39;</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token comment">// 使用 vite 的 Connect 实例作为中间件</span>\n  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vite<span class="token punctuation">.</span>middlewares<span class="token punctuation">)</span>\n\n  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 服务 index.html - 下面我们来处理这个问题</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><p>这里 <code>vite</code> 是 <a href="./api-javascript.html#vitedevserver">ViteDevServer</a> 的一个实例。<code>vite.middlewares</code> 是一个 <a href="https://github.com/senchalabs/connect" target="_blank" rel="noopener noreferrer">Connect</a> 实例，它可以在任何一个兼容 connect 的 Node.js 框架中被用作一个中间件。</p><p>下一步是实现 <code>*</code> 处理程序供给服务端渲染的 HTML：</p><div class="language-js"><pre><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> url <span class="token operator">=</span> req<span class="token punctuation">.</span>originalUrl\n\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 1. 读取 index.html</span>\n    <span class="token keyword">let</span> template <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>\n      path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token string">&#39;utf-8&#39;</span>\n    <span class="token punctuation">)</span>\n\n    <span class="token comment">// 2. 应用 vite HTML 转换。这将会注入 vite HMR 客户端，</span>\n    <span class="token comment">//    同时也会从 Vite 插件应用 HTML 转换。</span>\n    <span class="token comment">//    例如：@vitejs/plugin-react-refresh 中的 global preambles</span>\n    template <span class="token operator">=</span> <span class="token keyword">await</span> vite<span class="token punctuation">.</span><span class="token function">transformIndexHtml</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> template<span class="token punctuation">)</span>\n\n    <span class="token comment">// 3. 加载服务器入口。vite.ssrLoadModule 将自动转换</span>\n    <span class="token comment">//    你的 ESM 源码使之可以在 Node.js 中运行！无需打包</span>\n    <span class="token comment">//    并提供类似 HMR 的根据情况随时失效。</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> vite<span class="token punctuation">.</span><span class="token function">ssrLoadModule</span><span class="token punctuation">(</span><span class="token string">&#39;/src/entry-server.js&#39;</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 4. 渲染应用的 HTML。这假设 entry-server.js 导出的 `render`</span>\n    <span class="token comment">//    函数调用了适当的 SSR 框架 API。</span>\n    <span class="token comment">//    例如 ReactDOMServer.renderToString()</span>\n    <span class="token keyword">const</span> appHtml <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>\n\n    <span class="token comment">// 5. 注入渲染后的应用程序 HTML 到模板中。</span>\n    <span class="token keyword">const</span> html <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;!--ssr-outlet--&gt;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> appHtml<span class="token punctuation">)</span>\n\n    <span class="token comment">// 6. 返回渲染后的 HTML。</span>\n    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/html&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 如果捕获到了一个错误，让 vite 来修复该堆栈，这样它就可以映射回</span>\n    <span class="token comment">// 你的实际源码中。</span>\n    vite<span class="token punctuation">.</span><span class="token function">ssrFixStacktrace</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p><code>package.json</code> 中的 <code>dev</code> 脚本也应该相应地改变，使用服务器脚本：</p><div class="language-diff"><pre><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &quot;scripts&quot;: {\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   &quot;dev&quot;: &quot;vite&quot;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   &quot;dev&quot;: &quot;node server&quot;\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> }\n</span></span></code></pre></div><h2 id="building-for-production"><a class="header-anchor" href="#building-for-production" aria-hidden="true">#</a> 生产环境构建</h2><p>为了将 SSR 项目交付生产，我们需要：</p><ol><li>正常生成一个客户端构建；</li><li>再生成一个 SSR 构建，使其通过 <code>require()</code> 直接加载，这样便无需再使用 Vite 的 <code>ssrLoadModule</code>；</li></ol><p><code>package.json</code> 中的脚本应该看起来像这样：</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node server&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;build:client&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build --outDir dist/client&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;build:server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vite build --outDir dist/server --ssr src/entry-server.js &quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>注意使用 <code>--ssr</code> 标志表明这将会是一个 SSR 构建。同时需要指定 SSR 的入口。</p><p>接着，在 <code>server.js</code> 中，通过 <code>process.<wbr>env.NODE_ENV</code> 条件分支，需要添加一些用于生产环境的特定逻辑：</p><ul><li><p>使用 <code>dist/client/index.html</code> 作为模板，而不是根目录的 <code>index.html</code>，因为前者包含了到客户端构建的正确资源链接。</p></li><li><p>使用 <code>require(&#39;./dist/server/entry-server.js&#39;)</code> ，而不是 <code>await vite.ssrLoadModule(&#39;/src/entry-server.js&#39;)</code>（前者是 SSR 构建后的最终结果）。</p></li><li><p>将 <code>vite</code> 开发服务器的创建和所有使用都移到 dev-only 条件分支后面，然后添加静态文件服务中间件来服务 <code>dist/client</code> 中的文件。</p></li></ul><p>可以在此参考 <a href="https://github.com/vitejs/vite/tree/main/packages/playground/ssr-vue" target="_blank" rel="noopener noreferrer">Vue</a> 和 <a href="https://github.com/vitejs/vite/tree/main/packages/playground/ssr-react" target="_blank" rel="noopener noreferrer">React</a> 的设置范例。</p><h2 id="generating-preload-directives"><a class="header-anchor" href="#generating-preload-directives" aria-hidden="true">#</a> 生成预加载指令</h2><p><code>vite build</code> 支持使用 <code>--ssrManifest</code> 标志，这将会在构建输出目录中生成一份 <code>ssr-manifest.json</code>：</p><div class="language-diff"><pre><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> &quot;build:client&quot;: &quot;vite build --outDir dist/client&quot;,\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &quot;build:client&quot;: &quot;vite build --outDir dist/client --ssrManifest&quot;,\n</span></span></code></pre></div><p>上面的脚本将会为客户端构建生成 <code>dist/client/ssr-manifest.json</code>（是的，该 SSR 清单是从客户端构建生成而来，因为我们想要将模块 ID 映射到客户端文件上）。清单包含模块 ID 到它们关联的 chunk 和资源文件的映射。</p><p>为了利用该清单，框架需要提供一种方法来收集在服务器渲染调用期间使用到的组件模块 ID。</p><p><code>@vitejs/plugin-vue</code> 支持该功能，开箱即用，并会自动注册使用的组件模块 ID 到相关的 Vue SSR 上下文：</p><div class="language-js"><pre><code><span class="token comment">// src/entry-server.js</span>\n<span class="token keyword">const</span> ctx <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token keyword">await</span> vueServerRenderer<span class="token punctuation">.</span><span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span>\n<span class="token comment">// ctx.modules 现在是一个渲染期间使用的模块 ID 的 Set</span>\n</code></pre></div><p>我们现在需要在 <code>server.js</code> 的生产环境分支下读取该清单，并将其传递到 <code>src/entry-server.js</code> 导出的 <code>render</code> 函数中。这将为我们提供足够的信息，来为异步路由相应的文件渲染预加载指令！查看 <a href="https://github.com/vitejs/vite/blob/main/packages/playground/ssr-vue/src/entry-server.js" target="_blank" rel="noopener noreferrer">示例代码</a> 获取完整示例。</p><h2 id="pre-rendering--ssg"><a class="header-anchor" href="#pre-rendering--ssg" aria-hidden="true">#</a> 预渲染 / SSG</h2><p>如果预先知道某些路由所需的路由和数据，我们可以使用与生产环境 SSR 相同的逻辑将这些路由预先渲染到静态 HTML 中。这也被视为一种静态站点生成（SSG）的形式。查看 <a href="https://github.com/vitejs/vite/blob/main/packages/playground/ssr-vue/prerender.js" target="_blank" rel="noopener noreferrer">示例渲染代码</a> 获取有效示例。</p><h2 id="ssr-externals"><a class="header-anchor" href="#ssr-externals" aria-hidden="true">#</a> SSR 外部化</h2><p>许多依赖都同时提供 ESM 和 CommonJS 文件。当运行 SSR 时，提供 CommonJS 构建的依赖关系可以从 Vite 的 SSR 转换/模块系统进行 “外部化”，从而加速开发和构建。例如，并非去拉取 React 的预构建的 ESM 版本然后将其转换回 Node.js 兼容版本，用 <code>require(&#39;react&#39;)</code> 代替会更有效。它还大大提高了 SSR 包构建的速度。</p><p>Vite 基于以下策略执行自动化的 SSR 外部化:</p><ul><li><p>如果一个依赖的解析 ESM 入口点和它的默认 Node 入口点不同，它的默认 Node 入口可能是一个可以外部化的 CommonJS 构建。例如，<code>vue</code> 将被自动外部化，因为它同时提供 ESM 和 CommonJS 构建。</p></li><li><p>否则，Vite 将检查包的入口点是否包含有效的 ESM 语法 - 如果不包含，这个包可能是 CommonJS，将被外部化。例如，<code>react-dom</code> 将被自动外部化，因为它只指定了唯一的一个 CommonJS 格式的入口。</p></li></ul><p>如果这个策略导致了错误，你可以通过 <code>ssr.external</code> 和 <code>ssr.noExternal</code> 配置项手动调整。</p><p>在未来，这个策略将可能得到改进，将去探测该项目是否有启用 <code>type: &quot;module&quot;</code>，这样 Vite 便可以在 SSR 期间通过动态 <code>import()</code> 导入兼容 Node 的 ESM 构建依赖来实现外部化依赖项。</p><div class="warning custom-block"><p class="custom-block-title">使用别名</p><p>如果你为某个包配置了一个别名，为了能使 SSR 外部化依赖功能正常工作，你可能想要使用的别名应该指的是实际的 <code>node_modules</code> 中的包。<a href="https://classic.yarnpkg.com/en/docs/cli/add/#toc-yarn-add-alias" target="_blank" rel="noopener noreferrer">Yarn</a> 和 <a href="https://pnpm.js.org/en/aliases" target="_blank" rel="noopener noreferrer">pnpm</a> 都支持通过 <code>npm:</code> 前缀来设置别名。</p></div><h2 id="ssr-specific-plugin-logic"><a class="header-anchor" href="#ssr-specific-plugin-logic" aria-hidden="true">#</a> SSR 专有插件逻辑</h2><p>一些框架，如 Vue 或 Svelte，会根据客户端渲染和服务端渲染的区别，将组件编译成不同的格式。可以向以下的插件钩子中，给 Vite 传递额外的 <code>ssr</code> 参数来支持根据情景转换：</p><ul><li><code>resolveId</code></li><li><code>load</code></li><li><code>transform</code></li></ul><p><strong>示例：</strong></p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mySSRPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;my-ssr&#39;</span><span class="token punctuation">,</span>\n    <span class="token function">transform</span><span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span> id<span class="token punctuation">,</span> ssr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>ssr<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 执行 ssr 专有转换...</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="ssr-target"><a class="header-anchor" href="#ssr-target" aria-hidden="true">#</a> SSR Target</h2><p>SSR 构建的默认目标为 node 环境，但你也可以让服务运行在 Web Worker 上。每个平台的打包条目解析是不同的。你可以将<code>ssr.target</code> 设置为 <code>webworker</code>，以将目标配置为 Web Worker。</p>',60);t.render=function(a,e,t,o,c,r){return n(),s("div",null,[p])};export default t;export{e as __pageData};