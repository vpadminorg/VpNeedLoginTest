import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.LrnWxy0G.js";const g=JSON.parse('{"title":"资源处理","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/asset-handling.md","filePath":"zh/guide/asset-handling.md","lastUpdated":1733926276000}'),t={name:"zh/guide/asset-handling.md"},n=e(`<h1 id="asset-handling" tabindex="-1">资源处理 <a class="header-anchor" href="#asset-handling" aria-label="Permalink to &quot;资源处理 {#asset-handling}&quot;">​</a></h1><h2 id="referencing-static-assets" tabindex="-1">引用静态资源 <a class="header-anchor" href="#referencing-static-assets" aria-label="Permalink to &quot;引用静态资源 {#referencing-static-assets}&quot;">​</a></h2><p>所有的 Markdown 文件都会被编译成 Vue 组件，并由 <a href="https://cn.vitejs.dev/guide/assets.html" target="_blank" rel="noreferrer">Vite</a> 处理。可以<strong>并且应该</strong>使用相对路径来引用资源：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">An image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">./image.png</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>可以在 Markdown 文件、主题中的 <code>*.vue</code> 组件、样式和普通的 <code>.css</code> 文件中引用静态资源，可以使用绝对路径 (基于项目根目录) 或者相对路径 (基于文件系统)。后者类似于 Vite、Vue CLI 或者 webpack 的 <code>file-loader</code> 的行为。</p><p>常见的图像，媒体和字体文件会被自动检测并视作资源。</p><div class="tip custom-block"><p class="custom-block-title">通过链接引用的文件不会视作资源</p><p>在 Markdown 内，通过链接引用的 PDF 或者其他文档不会被自动视作资源。要使这些文件可用，你必须手动将其放在项目的 <a href="#the-public-directory"><code>public</code></a> 目录内。</p></div><p>所有引用的资源，包括那些使用绝对路径的，都会在生产构建过程中被复制到输出目录，并使用哈希文件名。从未使用过的资源将不会被复制。小于 4kb 的图像资源将会采用 base64 内联——这可以通过 <a href="./../reference/site-config#vite"><code>vite</code></a> 配置选项进行配置。</p><p>所有<strong>静态</strong>路径引用，包括绝对路径，都应基于你的工作目录的结构。</p><h2 id="the-public-directory" tabindex="-1">public 目录 <a class="header-anchor" href="#the-public-directory" aria-label="Permalink to &quot;public 目录 {#the-public-directory}&quot;">​</a></h2><p>有时可能需要一些静态资源，但这些资源没有直接被 Markdown 或主题组件直接引用，或者你可能想以原始文件名提供某些文件，像 <code>robots.txt</code>，favicons 和 PWA 图标这样的文件。</p><p>可以将这些文件放置在<a href="./routing#source-directory">源目录</a>的 <code>public</code> 目录中。例如，如果项目根目录是 <code>./docs</code>，并且使用默认源目录位置，那么 public 目录将是 <code>./docs/public</code>。</p><p>放置在 <code>public</code> 中的资源将按原样复制到输出目录的根目录中。</p><p>请注意，应使用根绝对路径来引用放置在 <code>public</code> 中的文件——例如，<code>public/icon.png</code> 应始终在源代码中使用 <code>/icon.png</code> 引用。</p><h2 id="base-url" tabindex="-1">根 URL <a class="header-anchor" href="#base-url" aria-label="Permalink to &quot;根 URL {#base-url}&quot;">​</a></h2><p>如果站点没有部署在根 URL 上，则需要在 <code>.vitepress/config.js</code> 中设置 <code>base</code> 选项。例如，如果计划将站点部署到 <code>https://foo.github.io/bar/</code>，则 <code>base</code> 应设置为 <code>&#39;/bar/&#39;</code>(它应始终以斜杠开头和结尾)。</p><p>所有静态资源路径都会被自动处理，来适应不同的 <code>base</code> 配置值。例如，如果 markdown 中有一个对 <code>public</code> 中的资源的绝对引用：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">An image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">/image-inside-public.png</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>在这种情况下，更改 <code>base</code> 配置值时，<strong>无需</strong>更新该引用。</p><p>但是如果你正在编写一个主题组件，它动态地链接到资源，例如一个图片，它的 <code>src</code> 基于主题配置：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">theme.logoPath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>在这种情况下，建议使用 VitePress 提供的 <a href="./../reference/runtime-api#withbase"><code>withBase</code> helper</a> 来包括路径：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { withBase, useData } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">withBase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(theme.logoPath)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,23),h=[n];function l(p,d,k,r,o,c){return a(),i("div",null,h)}const u=s(t,[["render",l]]);export{g as __pageData,u as default};
