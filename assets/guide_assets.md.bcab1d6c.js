import{o as s,c as a,a as n}from"./app.66abc2b9.js";const e='{"title":"静态资源处理","description":"","frontmatter":{"title":"静态资源处理"},"headers":[{"level":2,"title":"将资源引入为 URL","slug":"importing-asset-as-url"},{"level":3,"title":"显式 URL 引入","slug":"explicit-url-imports"},{"level":3,"title":"将资源引入为字符串","slug":"importing-asset-as-string"},{"level":3,"title":"导入脚本作为 Worker","slug":"importing-script-as-a-worker"},{"level":3,"title":"public 目录","slug":"the-public-directory"},{"level":2,"title":"new URL(url, import.meta.url)","slug":"new-url-url-import-meta-url"}],"relativePath":"guide/assets.md","lastUpdated":1627267695098}',t={},p=n('<h1 id="static-asset-handling"><a class="header-anchor" href="#static-asset-handling" aria-hidden="true">#</a> 静态资源处理</h1><ul><li>相关: <a href="./build.html#public-base-path">公共基础路径</a></li><li>相关: <a href="/config/#assetsinclude"><code>assetsInclude</code> 配置项</a></li></ul><h2 id="importing-asset-as-url"><a class="header-anchor" href="#importing-asset-as-url" aria-hidden="true">#</a> 将资源引入为 URL</h2><p>服务时引入一个静态资源会返回解析后的公共路径：</p><div class="language-js"><pre><code><span class="token keyword">import</span> imgUrl <span class="token keyword">from</span> <span class="token string">&#39;./img.png&#39;</span>\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;hero-img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> imgUrl\n</code></pre></div><p>例如，<code>imgUrl</code> 在开发时会是 <code>/img.png</code>，在生产构建后会是 <code>/assets/img.2d8efhg.png</code>。</p><p>行为类似于 Webpack 的 <code>file-loader</code>。区别在于导入既可以使用绝对公共路径（基于开发期间的项目根路径），也可以使用相对路径。</p><ul><li><p><code>url()</code> 在 CSS 中的引用也以同样的方式处理。</p></li><li><p>如果 Vite 使用了 Vue 插件，Vue SFC 模板中的资源引用都将自动转换为导入。</p></li><li><p>常见的图像、媒体和字体文件类型被自动检测为资源。你可以使用 <a href="/config/#assetsinclude"><code>assetsInclude</code> 选项</a> 扩展内部列表。</p></li><li><p>引用的资源作为构建资源图的一部分包括在内，将生成散列文件名，并可以由插件进行处理以进行优化。</p></li><li><p>较小的资源体积小于 <a href="/config/#build-assetsinlinelimit"><code>assetsInlineLimit</code> 选项值</a> 则会被内联为 base64 data URL。</p></li></ul><h3 id="explicit-url-imports"><a class="header-anchor" href="#explicit-url-imports" aria-hidden="true">#</a> 显式 URL 引入</h3><p>未被包含在内部列表或 <code>assetsInclude</code> 中的资源，可以使用 <code>?url</code> 后缀显式导入为一个 URL。这十分有用，例如，要导入 <a href="https://houdini.how/usage" target="_blank" rel="noopener noreferrer">Houdini Paint Worklets</a> 时：</p><div class="language-js"><pre><code><span class="token keyword">import</span> workletURL <span class="token keyword">from</span> <span class="token string">&#39;extra-scalloped-border/worklet.js?url&#39;</span>\n<span class="token constant">CSS</span><span class="token punctuation">.</span>paintWorklet<span class="token punctuation">.</span><span class="token function">addModule</span><span class="token punctuation">(</span>workletURL<span class="token punctuation">)</span>\n</code></pre></div><h3 id="importing-asset-as-string"><a class="header-anchor" href="#importing-asset-as-string" aria-hidden="true">#</a> 将资源引入为字符串</h3><p>资源可以使用 <code>?raw</code> 后缀声明作为字符串引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> shaderString <span class="token keyword">from</span> <span class="token string">&#39;./shader.glsl?raw&#39;</span>\n</code></pre></div><h3 id="importing-script-as-a-worker"><a class="header-anchor" href="#importing-script-as-a-worker" aria-hidden="true">#</a> 导入脚本作为 Worker</h3><p>脚本可以通过 <code>?worker</code> 或 <code>?sharedworker</code> 后缀导入为 web worker。</p><div class="language-js"><pre><code><span class="token comment">// 在生产构建中将会分离出 chunk</span>\n<span class="token keyword">import</span> Worker <span class="token keyword">from</span> <span class="token string">&#39;./shader.js?worker&#39;</span>\n<span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-js"><pre><code><span class="token comment">// sharedworker</span>\n<span class="token keyword">import</span> SharedWorker <span class="token keyword">from</span> <span class="token string">&#39;./shader.js?sharedworker&#39;</span>\n<span class="token keyword">const</span> sharedWorker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SharedWorker</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-js"><pre><code><span class="token comment">// 内联为 base64 字符串</span>\n<span class="token keyword">import</span> InlineWorker <span class="token keyword">from</span> <span class="token string">&#39;./shader.js?worker&amp;inline&#39;</span>\n</code></pre></div><p>查看 <a href="./features.html#web-workers">Web Worker 小节</a> 获取更多细节。</p><h3 id="the-public-directory"><a class="header-anchor" href="#the-public-directory" aria-hidden="true">#</a> <code>public</code>目录</h3><p>如果你有下列这些资源：</p><ul><li>不会被源码引用（例如 <code>robots.txt</code>）</li><li>必须保持原有文件名（没有经过 hash）</li><li>...或者你压根不想引入该资源，只是想得到其 URL。</li></ul><p>那么你可以将该资源放在指定的 <code>public</code> 目录中，它应位于你的项目根目录。该目录中的资源在开发时能直接通过 <code>/</code> 根路径访问到，并且打包时会被完整复制到目标目录的根目录下。</p><p>目录默认是 <code>&lt;root&gt;/public</code>，但可以通过 <a href="/config/#publicdir"><code>publicDir</code> 选项</a> 来配置。</p><p>请注意：</p><ul><li>引入 <code>public</code> 中的资源永远应该使用根绝对路径 —— 举个例子，<code>public/icon.png</code> 应该在源码中被引用为 <code>/icon.png</code>。</li><li><code>public</code> 中的资源不应该被 JavaScript 文件引用。</li></ul><h2 id="new-url-url-import-meta-url"><a class="header-anchor" href="#new-url-url-import-meta-url" aria-hidden="true">#</a> new URL(url, import.<wbr>meta.url)</h2><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.&lt;wbr/&gt;meta" target="_blank" rel="noopener noreferrer">import.<wbr>meta.url</a> 是一个 ESM 的原生功能，会暴露当前模块的 URL。将它与原生的 <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL" target="_blank" rel="noopener noreferrer">URL 构造器</a> 组合使用，在一个 JavaScript 模块中，通过相对路径我们就能得到一个被完整解析的静态资源 URL：</p><div class="language-js"><pre><code><span class="token keyword">const</span> imgUrl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&#39;./img.png&#39;</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span>\n\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;hero-img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> imgUrl\n</code></pre></div><p>这在现代浏览器中能够原生使用 - 实际上，Vite 并不需要在开发阶段处理这些代码！</p><p>这个模式同样还可以通过字符串模板支持动态 URL：</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">getImageUrl</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">./dir/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.png</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>href\n<span class="token punctuation">}</span>\n</code></pre></div><p>在生产构建时，Vite 才会进行必要的转换保证 URL 在打包和资源哈希后仍指向正确的地址。</p><div class="warning custom-block"><p class="custom-block-title">注意：无法在 SSR 中使用</p><p>如果你正在以服务端渲染模式使用 Vite 则此模式不支持，因为 <code>import.<wbr>meta.url</code> 在浏览器和 Node.js 中有不同的语义。服务端的产物也无法预先确定客户端主机 URL。</p></div>',35);t.render=function(n,e,t,o,r,c){return s(),a("div",null,[p])};export default t;export{e as __pageData};
