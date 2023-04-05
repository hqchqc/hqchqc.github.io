import{o as t,c as e,a as s,d as n,t as p,F as o,e as a}from"./app.044a4b86.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const l={},c=s("h1",{id:"_02-mvvm\u3001\u63D2\u503C\u64CD\u4F5C\u53CA\u7ED1\u5B9A\u5C5E\u6027",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_02-mvvm\u3001\u63D2\u503C\u64CD\u4F5C\u53CA\u7ED1\u5B9A\u5C5E\u6027","aria-hidden":"true"},"#"),n(" 02_MVVM\u3001\u63D2\u503C\u64CD\u4F5C\u53CA\u7ED1\u5B9A\u5C5E\u6027")],-1),i=s("strong",null,"- \u4EC0\u4E48\u662F MVVM",-1),u=s("br",null,null,-1),k=n(" Model\u2013view\u2013viewmodel\uFF0C\u5B83\u662F\u4E00\u79CD\u8F6F\u4EF6\u67B6\u6784\u6A21\u5F0F\uFF08\u5176\u5B9E\u6211\u4E5F\u4E0D\u7406\u89E3\uFF0C\u5927\u6982\u5C31\u662F\u6570\u636E\u548C\u89C6\u56FE\u76F8\u5206\u79BB\u5427\uFF09 "),b=s("strong",null,"- Vue \u4E2D\u7684 MVVM",-1),m=s("br",null,null,-1),g=s("img",{src:"https://img-blog.csdnimg.cn/20200207185500355.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNzA5Mjky,size_16,color_FFFFFF,t_70",alt:""},null,-1),d=s("br",null,null,-1),v=n(" \u5982\u4E0A\u56FE\uFF0CModel \u6A21\u578B\u5BF9\u89C6\u56FE View \u4E2D\u7684 DOM \u8FDB\u884C\u4E8B\u4EF6\u76D1\u542C\uFF0C\u89C6\u56FE View \u4E2D\u7684 DOM \u7684\u6570\u636E\u4E0E Model \u6A21\u578B\u8FDB\u884C\u7ED1\u5B9A\u3002 "),y=s("strong",null,"- \u63D2\u503C\u64CD\u4F5C",-1),h=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#container&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">&#39;\u63D2\u503C\u64CD\u4F5C\u76F8\u5173 v-once\u64CD\u4F5C \u53EA\u663E\u793A\u4E00\u6B21&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;&lt;h1 style=&quot;color:red;&quot;&gt;v-html\u64CD\u4F5C \u89E3\u6790html&lt;/h1&gt;&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u63D2\u503C\u64CD\u4F5C\u76F8\u5173 v-text\u64CD\u4F5C \u4E0D\u7075\u6D3B&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;\u63D2\u503C\u64CD\u4F5C\u76F8\u5173 v-pre\u64CD\u4F5C \u4E0D\u89E3\u6790&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">cloak</span><span class="token operator">:</span><span class="token string">&#39;\u63D2\u503C\u64CD\u4F5C\u76F8\u5173 v-cloak\u64CD\u4F5C \u4E0D\u95EA\u52A8&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol><li><p>v-once\uFF1A\u5143\u7D20\u548C\u6307\u4EE4\u53EA\u6E32\u67D3\u4E00\u6B21\uFF0C\u4E0D\u4F1A\u968F\u7740\u6570\u636E\u7684\u6539\u53D8\u800C\u6539\u53D8\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;h1 v-once&gt;message&lt;/h1&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2. v-html\uFF1A\u53EF\u4EE5\u89E3\u6790HTML\u5143\u7D20

	\`\`\`javascript
\`&lt;h1 v-html = &#39;url&#39;&gt;&lt;/h1&gt;\`
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,3),_={start:"3"},q=a('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;h1 v-text = &#39;name&#39;&gt;aa&lt;/h1&gt;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>',1),w=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>4. v-pre: \u4E0D\u89E3\u6790\uFF0C\u539F\u5C01\u4E0D\u52A8\u7684\u663E\u793A
	\`\`\`javascript
 \`&lt;h1 v-pre&gt;{{age}}&lt;/h1&gt; \`
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="5"><li><code>v-cloak</code>:\u4E0D\u4F1A\u95EA\u52A8\uFF0C\u5728 vue \u89E3\u6790\u4E4B\u524D div \u4E2D\u4F1A\u6709\u6B64\u5C5E\u6027\uFF0C\u89E3\u6790\u4E4B\u540E\uFF0C\u6B64\u5C5E\u6027\u6D88\u5931</li></ol><p>\u6CE8\uFF1A\u4EE5\u4E0A script \u6807\u7B7E\u52A0\u4E86\u5EF6\u65F6\u51FD\u6570\uFF0C\u662F\u4E3A\u4E86\u8BA9 <code>v-cloak</code> \u7684\u529F\u80FD\u66F4\u597D\u7684\u5C55\u793A</p><p><strong>- \u7ED1\u5B9A\u5C5E\u6027</strong> \u4EE5\u4E0A\u65B9\u6CD5\u90FD\u662F\u9488\u5BF9\u503C\u800C\u8FDB\u884C\u7684\u6539\u53D8\uFF0C\u90A3\u4E48\u6709\u6CA1\u6709\u4E00\u79CD\u662F\u9488\u5BF9\u5C5E\u6027\u7684\u5462\uFF0C\u7B54\u6848\u5C31\u662F\u6709\u7684\uFF0C\u5C31\u662F v-bind : \u52A8\u6001\u7ED1\u5B9A \uFF0C\u4F8B\u5982\u53EF\u4EE5\u52A8\u6001\u7ED1\u5B9A img \u6807\u7B7E\u7684 src \u5C5E\u6027\u7B49\u7B49 \u6709\u4E24\u79CD\u8BED\u6CD5\uFF1A</p><ol><li>\u5BF9\u8C61\u8BED\u6CD5\uFF0C\u5373\u7C7B\u7684\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F8B\u5982</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Document<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
        <span class="token punctuation">.</span>active<span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span>cyan<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span>actives<span class="token punctuation">{</span>
            font<span class="token operator">-</span>size<span class="token operator">:</span> 10em<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p v<span class="token operator">-</span>bind<span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;{active:isClass,actives:isActives}&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button v<span class="token operator">-</span>on<span class="token operator">:</span>click <span class="token operator">=</span> <span class="token string">&#39;change&#39;</span><span class="token operator">&gt;</span>\u53D8\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;./vue.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
        <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#container&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">isClass</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
                <span class="token literal-property property">isActives</span><span class="token operator">:</span><span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function-variable function">change</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>isClass <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isClass<span class="token punctuation">;</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>isActives <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isActives<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><ol start="2"><li>\u6570\u7EC4\u8BED\u6CD5\uFF0C\u5373\u7C7B\u7684\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F8B\u5982</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Document<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
        <span class="token punctuation">.</span>active<span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span>cyan<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span>actives<span class="token punctuation">{</span>
            font<span class="token operator">-</span>size<span class="token operator">:</span> 10em<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;getClass()&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;./vue.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
        <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">&#39;\u6570\u7EC4\u8BED\u6CD5&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">active</span><span class="token operator">:</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">actives</span><span class="token operator">:</span><span class="token string">&#39;actives&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token function-variable function">getClass</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>active<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>actives<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>v-bind \u7684\u8BED\u6CD5\u7CD6\u5F62\u5F0F\u662F\u7701\u7565\u524D\u9762\u7684 v-bind\uFF0C\u4FDD\u7559\u4E00\u4E2A\uFF1A v-on \u7684\u8BED\u6CD5\u7CD6\u5F62\u5F0F\u662F\u628A v-on: \u66FF\u6362\u6210 @</p><hr><p>\u5B66\u4E60\u4E86\u4EE5\u4E0A\u5185\u5BB9\uFF0C\u6709\u4E00\u4E2A\u6848\u4F8B\u9700\u8981\u5B9E\u73B0 \uFF1A\u70B9\u51FB\u5217\u8868\u4E2D\u7684\u4EFB\u610F\u4E00\u9879\uFF0C\u4F7F\u5F97\u90A3\u4E00\u9879\u6240\u5728\u7684 li \u6807\u7B7E\u53D8\u8272\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Document<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
        <span class="token punctuation">.</span>change <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> cyan<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;container&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&#39;(attr,index) in movies&#39;</span> v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token operator">=</span><span class="token string">&#39;color(index)&#39;</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&#39;{change:index == status}&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>attr<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;./vue.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
        <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#container&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">movies</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u6D77\u738B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u9EC4\u4EBA\u5927\u773C\u840C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6D77\u7EF5\u5B9D\u5B9D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u8FDB\u51FB\u7684\u5DE8\u4EBA&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function-variable function">color</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> index<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,12);function x(j,f){return t(),e(o,null,[c,s("p",null,[i,u,k,b,m,g,d,v,y,n(" Mustache\uFF08\u80E1\u5B50/\u80E1\u987B\uFF09\u8BED\u6CD5\uFF0C\u4E5F\u53EB\u53CC\u5927\u62EC\u53F7\u8BED\u6CD5"+p()+" \uFF0C\u5927\u62EC\u53F7\u4E2D\u95F4\u4E0D\u4EC5\u53EF\u4EE5\u5199\u53D8\u91CF\u4E5F\u53EF\u4EE5\u5199\u7B80\u5355\u8868\u8FBE\u5F0F\u3002 \u4E0B\u9762\u662F\u4E00\u4E9B\u5E38\u7528\u7684\u63D2\u503C\u64CD\u4F5C,\u603B\u7684 script \u4EE3\u7801\u5982\u4E0B\uFF1A",1)]),h,s("ol",_,[s("li",null,[n("v-text: \u548C"+p()+"\u529F\u80FD\u7C7B\u4F3C\uFF0C\u5C55\u793A\u6587\u672C\u4E00\u822C\u4E0D\u7528\uFF0C\u56E0\u4E3A\u4E0D\u591F\u7075\u6D3B\uFF0C\u4F1A\u8986\u76D6\u6807\u7B7E\u91CC\u9762\u7684\u5185\u5BB9",1),q])]),w],64)}var F=r(l,[["render",x]]);export{F as default};
