import{_ as d,D as a,c as t,j as s,F as r,E as k,a as e,I as n,a4 as i,o as l,t as c}from"./chunks/framework.LrnWxy0G.js";const q=JSON.parse('{"title":"Using Vue in Markdown","description":"","frontmatter":{},"headers":[],"relativePath":"guide/using-vue.md","filePath":"en/guide/using-vue.md","lastUpdated":1733926276000}'),g={name:"guide/using-vue.md"},E=i('<h1 id="using-vue-in-markdown" tabindex="-1">Using Vue in Markdown <a class="header-anchor" href="#using-vue-in-markdown" aria-label="Permalink to &quot;Using Vue in Markdown&quot;">​</a></h1><p>In VitePress, each Markdown file is compiled into HTML and then processed as a <a href="https://vuejs.org/guide/scaling-up/sfc.html" target="_blank" rel="noreferrer">Vue Single-File Component</a>. This means you can use any Vue features inside the Markdown, including dynamic templating, using Vue components, or arbitrary in-page Vue component logic by adding a <code>&lt;script&gt;</code> tag.</p><p>It&#39;s worth noting that VitePress leverages Vue&#39;s compiler to automatically detect and optimize the purely static parts of the Markdown content. Static contents are optimized into single placeholder nodes and eliminated from the page&#39;s JavaScript payload for initial visits. They are also skipped during client-side hydration. In short, you only pay for the dynamic parts on any given page.</p><div class="tip custom-block"><p class="custom-block-title">SSR Compatibility</p><p>All Vue usage needs to be SSR-compatible. See <a href="./ssr-compat">SSR Compatibility</a> for details and common workarounds.</p></div><h2 id="templating" tabindex="-1">Templating <a class="header-anchor" href="#templating" aria-label="Permalink to &quot;Templating&quot;">​</a></h2><h3 id="interpolation" tabindex="-1">Interpolation <a class="header-anchor" href="#interpolation" aria-label="Permalink to &quot;Interpolation&quot;">​</a></h3><p>Each Markdown file is first compiled into HTML and then passed on as a Vue component to the Vite process pipeline. This means you can use Vue-style interpolation in text:</p><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ 1 + 1 }}</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-text"><pre><code>2</code></pre></div><h3 id="directives" tabindex="-1">Directives <a class="header-anchor" href="#directives" aria-label="Permalink to &quot;Directives&quot;">​</a></h3><p>Directives also work (note that by design, raw HTML is also valid in Markdown):</p><p><strong>Input</strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i in 3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{ i }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Output</strong></p>',16),u={class:"language-text"},y=i(`<h2 id="script-and-style" tabindex="-1"><code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> <a class="header-anchor" href="#script-and-style" aria-label="Permalink to &quot;\`&lt;script&gt;\` and \`&lt;style&gt;\`&quot;">​</a></h2><p>Root-level <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> tags in Markdown files work just like they do in Vue SFCs, including <code>&lt;script setup&gt;</code>, <code>&lt;style module&gt;</code>, etc. The main difference here is that there is no <code>&lt;template&gt;</code> tag: all other root-level content is Markdown. Also note that all tags should be placed <strong>after</strong> the frontmatter:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hello: world</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">## Markdown Content</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">The count is: {{ count }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$style.button&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;count++&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Increment&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bold</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Avoid <code>&lt;style scoped&gt;</code> in Markdown</p><p>When used in Markdown, <code>&lt;style scoped&gt;</code> requires adding special attributes to every element on the current page, which will significantly bloat the page size. <code>&lt;style module&gt;</code> is preferred when locally-scoped styling is needed in a page.</p></div><p>You also have access to VitePress&#39; runtime APIs such as the <a href="./../reference/runtime-api#usedata"><code>useData</code> helper</a>, which provides access to current page&#39;s metadata:</p><p><strong>Input</strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useData } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">page</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pre</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{ page }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pre</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/using-vue.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Using Vue in Markdown&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;frontmatter&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {},</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="using-components" tabindex="-1">Using Components <a class="header-anchor" href="#using-components" aria-label="Permalink to &quot;Using Components&quot;">​</a></h2><p>You can import and use Vue components directly in Markdown files.</p><h3 id="importing-in-markdown" tabindex="-1">Importing in Markdown <a class="header-anchor" href="#importing-in-markdown" aria-label="Permalink to &quot;Importing in Markdown&quot;">​</a></h3><p>If a component is only used by a few pages, it&#39;s recommended to explicitly import them where they are used. This allows them to be properly code-split and only loaded when the relevant pages are shown:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CustomComponent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;../components/CustomComponent.vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># Docs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a .md using a custom component</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">CustomComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">## More docs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span></code></pre></div><h3 id="registering-components-globally" tabindex="-1">Registering Components Globally <a class="header-anchor" href="#registering-components-globally" aria-label="Permalink to &quot;Registering Components Globally&quot;">​</a></h3><p>If a component is going to be used on most of the pages, they can be registered globally by customizing the Vue app instance. See relevant section in <a href="./extending-default-theme#registering-global-components">Extending Default Theme</a> for an example.</p><div class="warning custom-block"><p class="custom-block-title">IMPORTANT</p><p>Make sure a custom component&#39;s name either contains a hyphen or is in PascalCase. Otherwise, it will be treated as an inline element and wrapped inside a <code>&lt;p&gt;</code> tag, which will lead to hydration mismatch because <code>&lt;p&gt;</code> does not allow block elements to be placed inside it.</p></div>`,17),m={id:"using-components-in-headers",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#using-components-in-headers","aria-label":'Permalink to "Using Components In Headers <ComponentInHeader />"'},"​",-1),v=i(`<p>You can use Vue components in the headers, but note the difference between the following syntaxes:</p><table tabindex="0"><thead><tr><th>Markdown</th><th>Output HTML</th><th>Parsed Header</th></tr></thead><tbody><tr><td><pre><code> # text &lt;Tag/&gt; </code></pre></td><td><code>&lt;h1&gt;text &lt;Tag/&gt;&lt;/h1&gt;</code></td><td><code>text</code></td></tr><tr><td><pre><code> # text \`&lt;Tag/&gt;\` </code></pre></td><td><code>&lt;h1&gt;text &lt;code&gt;&amp;lt;Tag/&amp;gt;&lt;/code&gt;&lt;/h1&gt;</code></td><td><code>text &lt;Tag/&gt;</code></td></tr></tbody></table><p>The HTML wrapped by <code>&lt;code&gt;</code> will be displayed as-is; only the HTML that is <strong>not</strong> wrapped will be parsed by Vue.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The output HTML is accomplished by <a href="https://github.com/Markdown-it/Markdown-it" target="_blank" rel="noreferrer">Markdown-it</a>, while the parsed headers are handled by VitePress (and used for both the sidebar and document title).</p></div><h2 id="escaping" tabindex="-1">Escaping <a class="header-anchor" href="#escaping" aria-label="Permalink to &quot;Escaping&quot;">​</a></h2><p>You can escape Vue interpolations by wrapping them in a <code>&lt;span&gt;</code> or other elements with the <code>v-pre</code> directive:</p><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-pre</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{ will be displayed as-is }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>Output</strong></p><div class="escape-demo"><p>This <span>{{ will be displayed as-is }}</span></p></div><p>Alternatively, you can wrap the entire paragraph in a <code>v-pre</code> custom container:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: v-pre</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ This will be displayed as-is }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="escape-demo"><div><p>{{ This will be displayed as-is }}</p></div></div><h2 id="unescape-in-code-blocks" tabindex="-1">Unescape in Code Blocks <a class="header-anchor" href="#unescape-in-code-blocks" aria-label="Permalink to &quot;Unescape in Code Blocks&quot;">​</a></h2><p>By default, all fenced code blocks are automatically wrapped with <code>v-pre</code>, so no Vue syntax will be processed inside. To enable Vue-style interpolation inside fences, you can append the language with the <code>-vue</code> suffix, e.g. <code>js-vue</code>:</p><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`js-vue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Hello {{ 1 + 1 }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Hello 2</span></span></code></pre></div><p>Note that this might prevent certain tokens from being syntax highlighted properly.</p><h2 id="using-css-pre-processors" tabindex="-1">Using CSS Pre-processors <a class="header-anchor" href="#using-css-pre-processors" aria-label="Permalink to &quot;Using CSS Pre-processors&quot;">​</a></h2><p>VitePress has <a href="https://vitejs.dev/guide/features.html#css-pre-processors" target="_blank" rel="noreferrer">built-in support</a> for CSS pre-processors: <code>.scss</code>, <code>.sass</code>, <code>.less</code>, <code>.styl</code> and <code>.stylus</code> files. There is no need to install Vite-specific plugins for them, but the corresponding pre-processor itself must be installed:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># .scss and .sass</span></span>
<span class="line"><span>npm install -D sass</span></span>
<span class="line"><span></span></span>
<span class="line"><span># .less</span></span>
<span class="line"><span>npm install -D less</span></span>
<span class="line"><span></span></span>
<span class="line"><span># .styl and .stylus</span></span>
<span class="line"><span>npm install -D stylus</span></span></code></pre></div><p>Then you can use the following in Markdown and theme components:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sass&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.title</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="using-teleports" tabindex="-1">Using Teleports <a class="header-anchor" href="#using-teleports" aria-label="Permalink to &quot;Using Teleports&quot;">​</a></h2><p>VitePress currently has SSG support for teleports to body only. For other targets, you can wrap them inside the built-in <code>&lt;ClientOnly&gt;</code> component or inject the teleport markup into the correct location in your final page HTML through <a href="./../reference/site-config#postrender"><code>postRender</code> hook</a>.</p>`,28),C=i(`<details class="details custom-block"><summary>Details</summary></details><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ClientOnly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Teleport</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#modal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Teleport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ClientOnly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,2);function F(f,_,w,T,D,A){const p=a("ComponentInHeader"),h=a("ModalDemo");return l(),t("div",null,[E,s("div",u,[s("pre",null,[s("code",null,[(l(),t(r,null,k(3,o=>s("span",null,c(o)+" ",1)),64))])])]),y,s("h3",m,[e("Using Components In Headers "),n(p),e(),b]),v,n(h),C])}const B=d(g,[["render",F]]);export{q as __pageData,B as default};
