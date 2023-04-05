import{e as n}from"./app.044a4b86.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="_16-vuex-\u4E2D\u5404\u4E2A\u5C5E\u6027\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_16-vuex-\u4E2D\u5404\u4E2A\u5C5E\u6027\u7684\u4F7F\u7528" aria-hidden="true">#</a> 16_Vuex \u4E2D\u5404\u4E2A\u5C5E\u6027\u7684\u4F7F\u7528</h1><p>\u4ECA\u5929\u7684\u5B66\u4E60\u56F4\u7ED5\u4E00\u5F20\u56FE\u7247\u5C55\u5F00(\u56FE\u7247\u5F15\u7528\u81EA Vuex \u5B98\u65B9\u6587\u6863)\uFF0C\u5F53\u6211\u4EEC\u7684\u9879\u76EE\u6BD4\u8F83\u5927\u65F6\uFF0CVuex \u4E3A\u6211\u4EEC\u5728\u53EF\u4EE5\u5728\u7EC4\u4EF6\u5916\u90E8\u7BA1\u7406\u72B6\u6001\u63D0\u4F9B\u4E86\u6761\u4EF6 <img src="https://img-blog.csdnimg.cn/20200221204510133.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNzA5Mjky,size_16,color_FFFFFF,t_70" alt="\u56FE\u7247\u5F15\u7528\u81EAVuex\u5B98\u65B9\u6587\u6863"></p><p><strong>\u4E00\u3001 State</strong> \xA0\xA0\xA0\xA0\xA0\xA0\u3010<strong>\u89E3\u91CA</strong>\u3011<strong>\u72B6\u6001</strong>\u7684\u610F\u601D\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u8FD9\u91CC\u5C31\u662F\u5B58\u653E\u72B6\u6001\u7684\u5730\u65B9\uFF0C\u7B80\u5355\u6765\u8BF4\uFF0C\u5C31\u662F<strong>\u5B58\u653E\u4F60\u9700\u8981\u5171\u4EAB\u7684\u67D0\u4E9B\u53D8\u91CF\u7684\u5730\u65B9</strong> \xA0\xA0\xA0\xA0\xA0\xA0\u3010<strong>\u4F7F\u7528</strong>\u3011\u5F53\u6211\u4EEC\u5728 state \u4E2D\u8BBE\u7F6E\u4E86\u76F8\u5E94\u7684\u53D8\u91CF\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u6765\u5F15\u7528\u5B83\u4EEC\u4E86\uFF0C\u4E4B\u524D\u8BF4\u8FC7\uFF0C\u5F53\u6211\u4EEC\u5B89\u88C5\u4E86 Vuex \u540E\uFF0C\u4F1A\u5728\u5168\u5C40\u751F\u6210\u4E00\u4E2A store \u5BF9\u8C61\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A store \u5BF9\u8C61\u6765\u8BBF\u95EE\u6211\u4EEC\u7684\u53D8\u91CF\uFF0C\u5982</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>couter \u6211\u5DF2\u7ECF\u5728 state \u4E2D\u6DFB\u52A0\u4E86\u5B83\u7684\u503C \xA0\xA0\xA0\xA0\xA0\xA0\u3010<strong>\u76F8\u5173\u77E5\u8BC6</strong>\u3011 <strong>State \u5355\u4E00\u72B6\u6001\u6811</strong>(Single Source of Truth)\u53C8\u53EB\u505A<strong>\u5355\u4E00\u6570\u636E\u6E90</strong>\uFF0C\u4E5F\u5C31\u662F\u8BF4 Vuex \u4E2D\u5EFA\u8BAE\u6211\u4EEC\u5728 Store \u4E2D\u5B58\u653E\u4E00\u4E2A Store \u5BF9\u8C61\u7684\u5B9E\u4F8B\uFF0C\u8FD9\u4E2A\u5B9E\u4F8B\u5C31\u662F\u6570\u636E\u6E90\uFF0C\u5982\u679C\u6570\u636E\u6E90\u7279\u522B\u591A\uFF0C\u5C31\u4E0D\u5BB9\u6613\u8FDB\u884C\u540E\u671F\u7684\u7EF4\u62A4\u548C\u7BA1\u7406\uFF0C\u6240\u4EE5\u6700\u597D\u53EA\u6709\u4E00\u4E2A Store \u5B9E\u4F8B\uFF0C\u8FD9\u5C31\u53EB\u505A\u5355\u4E00\u72B6\u6001\u6811 <strong>\u4E8C\u3001 Mutations</strong> \xA0\xA0\xA0\xA0\xA0\xA0\u3010<strong>\u89E3\u91CA</strong>\u3011<strong>\u8F6C\u53D8\u3001\u6539\u53D8</strong>\u7684\u610F\u601D\uFF0C\u548C Vue \u5B9E\u4F8B\u4E2D\u7684 methods \u5C5E\u6027\u5DEE\u4E0D\u591A\uFF0C<strong>\u4E3B\u8981\u5B58\u653E\u7684\u662F\u5904\u7406\u6570\u636E\u7684\u5404\u4E2A\u65B9\u6CD5</strong> \xA0\xA0\xA0\xA0\xA0\xA0\u3010<strong>\u4F7F\u7528</strong>\u3011\u5728 Mutations \u4E2D\u5B9A\u4E49\u7684\u5404\u4E2A\u51FD\u6570\u90FD\u4F1A\u6709\u4E00\u4E2A\u53C2\u6570 state\uFF0C\u7528\u6765\u83B7\u53D6\u76F8\u5E94\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u901A\u8FC7 state \u8C03\u7528 state \u4E2D\u5B58\u50A8\u7684\u6570\u636E\uFF0C\u8FDB\u884C\u76F8\u5E94\u8F6C\u5316\uFF0C\u6BD4\u5982\u5F53\u6211\u4EEC\u5728\u4E00\u4E2A\u6309\u94AE\u4E2D\u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6\u8C03\u7528\u7684\u90A3\u4E2A\u51FD\u6570\u65F6\uFF0C\u51FD\u6570\u4E2D\u9700\u8981\u4F7F\u7528<code>this.$store.commit(Mutations\u4E2D\u7684\u51FD\u6570\u540D);</code>\u6765\u8C03\u7528 Mutations \u4E2D\u7684\u51FD\u6570\u8FDB\u884C\u5904\u7406\uFF0C\u5728 commit \u4E2D\u8FD8\u53EF\u4EE5\u540C\u65F6\u63D0\u4EA4\u4E00\u4E2A\u5BF9\u8C61\u4EA4\u7531 Mutations \u5904\u7406\uFF0C\u4F8B\u5982</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7B2C\u4E00\u79CD\u98CE\u683C</span>
<span class="token function">addStu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1005</span><span class="token punctuation">,</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;lzx&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">20</span>
 <span class="token punctuation">}</span>
 <span class="token comment">//payload</span>
 <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;addStu&#39;</span><span class="token punctuation">,</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u7B2C\u4E8C\u79CD\u98CE\u683C</span>
<span class="token function">jianCoun</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;resolveNum&#39;</span><span class="token punctuation">,</span>
    num<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u4F20\u4E86\u4E00\u4E2A info \u5BF9\u8C61\uFF0C\u8FD9\u4E2A info \u5BF9\u8C61\u5C31\u88AB\u53EB\u505A<strong>payload</strong>,\u8D1F\u8F7D\u3001\u8F7D\u8377\u7684\u610F\u601D\uFF0C\u540C\u65F6\u6211\u4EEC\u53EF\u4EE5\u8FD9\u4E48\u5904\u7406(students \u662F state \u4E2D\u7684\u4E00\u4E2A\u6570\u7EC4)\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">addStu</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>info</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>students<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C<strong>\u5728 Vuex \u4E2D\u540C\u6837\u6709\u50CF Vue \u4E2D\u6570\u7EC4\u7684\u6709\u4E9B\u65B9\u6CD5\u4E00\u6837\u4E0D\u662F\u54CD\u5E94\u5F0F\u7684</strong>\uFF0C\u56E0\u4E3A<strong>Vuex \u4E2D store \u72B6\u6001\u7684\u66F4\u65B0\u552F\u4E00\u65B9\u5F0F\u662F\u63D0\u4EA4 Mutations</strong>,\u6BD4\u5982<code>state.info[&#39;address&#39;] = &#39;LiShui&#39;</code>\u5728 info \u5BF9\u8C61\u4E2D\u6DFB\u52A0\u5C5E\u6027 address\uFF0C\u503C\u4E3A\u2018LiShui&#39;,\u6211\u4EEC\u5E94\u8BE5\u8FD9\u6837<code>Vue.set(state.info,&#39;address&#39;,&#39;LiShui&#39;);</code>\u8FD8\u6709\u4E00\u4E2A<code>delete state.info.age;</code>\u4E5F\u4E0D\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u5E94\u8BE5\u4FEE\u6539\u4E3A<code>Vue.delete(state.info,&#39;age&#39;);</code>\u603B\u4E4B\uFF0C\u6211\u4EEC\u5FC5\u987B\u9075\u5B88\u4E00\u4E9B\u89C4\u5219\u624D\u80FD\u505A\u5230\u54CD\u5E94\u5F0F\uFF1A<strong>1. \u63D0\u524D\u5728 store \u4E2D\u521D\u59CB\u5316\u597D\u6240\u9700\u7684\u5C5E\u6027\uFF1B2.\u5F53\u7ED9 state \u4E2D\u7684\u5BF9\u8C61\u6DFB\u52A0\u65B0\u7684\u5C5E\u6027\u65F6\u4F7F\u7528<code>Vue.set</code>\u6216\u662F\u7528\u65B0\u5BF9\u8C61\u7ED9\u5C31\u5BF9\u8C61\u91CD\u65B0\u8D4B\u503C\u7684\u65B9\u5F0F\u8FDB\u884C</strong></p><p><strong>\u4E09\u3001 Getters</strong><br> \xA0\xA0\xA0\xA0\xA0\xA0\u3010<strong>\u89E3\u91CA</strong>\u3011<strong>\u83B7\u5F97\u3001\u5F97\u5230</strong>\u7684\u610F\u601D,\u548C Vue \u5B9E\u4F8B\u4E2D\u7684 computed \u5C5E\u6027\u5DEE\u4E0D\u591A\uFF0C\u662F\u5BF9\u6570\u636E\u8FDB\u884C\u8F6C\u5316\u7684\u5730\u65B9 \xA0\xA0\xA0\xA0\xA0\xA0\u3010<strong>\u4F7F\u7528</strong>\u3011\u540C\u6837\uFF0C\u5728 getters \u4E2D\u5B9A\u4E49\u7684\u5404\u4E2A\u51FD\u6570\u90FD\u6709\u4E00\u4E2A state \u53C2\u6570\uFF0C\u9664\u6B64\u4E4B\u5916\u8FD8\u6709\u4E00\u4E2A geter \u53C2\u6570\uFF0C\u53EF\u4EE5\u83B7\u5F97\u81EA\u5DF1 getter \u4E0B\u7684\u5176\u5B83\u51FD\u6570\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">moreAge</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">.</span>students<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token operator">=&gt;</span>s<span class="token punctuation">.</span>age<span class="token operator">&gt;</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">numAge</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span><span class="token keyword">get</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> get<span class="token punctuation">.</span>moreAge<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8C03\u7528\u4E5F\u5F88\u7B80\u5355</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>moreAge<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
 <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>numAge<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u540C\u6837\u7684\u8C03\u7528\u7684\u65F6\u5019\u4E5F\u53EF\u4EE5\u4F20\u5165\u53C2\u6570\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>   <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span><span class="token function">whatAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5904\u7406\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">whatAge</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token parameter">age</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">.</span>students<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token operator">=&gt;</span>s<span class="token punctuation">.</span>age<span class="token operator">&gt;</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u79CD\u7528\u6CD5\u6CE8\u610F\u4E00\u4E0B\uFF0C\u548C\u7075\u6D3B\uFF0C<strong>\u8FD4\u56DE\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570</strong><br><strong>\u56DB\u3001 Actions</strong><br> \xA0\xA0\xA0\xA0\xA0\xA0\u3010<strong>\u89E3\u91CA</strong>\u3011<strong>\u884C\u52A8\u3001\u884C\u4E3A</strong>\u7684\u610F\u601D\uFF0C\u5728\u8FD9\u91CC\u7F16\u5199\u6211\u4EEC\u7684\u5F02\u6B65\u4EE3\u7801\uFF0C\u7531\u6700\u5F00\u59CB\u7684\u90A3\u5F20\u56FE\u7247\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\uFF0C\u5F53\u4F60\u6709\u4E00\u4E9B\u5F02\u6B65\u8BF7\u6C42\u65F6\u5982\u679C\u6211\u4EEC\u5728 Mutations \u4E2D\u5904\u7406\uFF0C\u6211\u4EEC\u7684 Devtools \u6CA1\u529E\u597D\u5F88\u597D\u7684\u8DDF\u8E2A\u8FD9\u4E2A\u64CD\u4F5C\u4EC0\u4E48\u65F6\u5019\u4F1A\u5F88\u597D\u7684\u5B8C\u6210\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728 Actions \u4E2D\u7F16\u5199\u6211\u4EEC\u7684\u5F02\u6B65\u4EE3\u7801<br> \xA0\xA0\xA0\xA0\xA0\xA0\u3010<strong>\u4F7F\u7528</strong>\u3011\u76F4\u63A5\u8D34\u4EE3\u7801\u5427\uFF0C\u4E00\u4E0B\u662F\u8C03\u7528\u90A3\u7AEF\u7684\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">changeStu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 1. \u8FD9\u79CD\u65B9\u5F0F\u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u4EE5\u4F20\u51FD\u6570\uFF0C\u4F46\u662F\u5982\u679C\u6709\u5176\u4ED6\u53C2\u6570\u5C31\u4E0D\u597D\u7528\u4E86</span>
      <span class="token comment">// this.$store.dispatch(&#39;changeStu&#39;, () =&gt; {</span>
      <span class="token comment">//   console.log(&#39;ok&#39;);</span>
      <span class="token comment">// })</span>

      <span class="token comment">// 2.\u65E2\u6709\u51FD\u6570\u53C8\u6709\u5176\u4ED6\u53C2\u6570 \u4F46\u662F\u4E0D\u591F\u4F18\u96C5</span>
      <span class="token comment">// this.$store.dispatch(&#39;changeStu&#39;,{</span>
      <span class="token comment">//   message:&#39;hello actions&#39;,</span>
      <span class="token comment">//   succeed(){</span>
      <span class="token comment">//     console.log(&#39;\u5DF2\u5B8C\u6210&#39;);</span>
      <span class="token comment">//   }</span>
      <span class="token comment">// })</span>

      <span class="token comment">//3. Promise</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;changeStu&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;hello actions&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u91CC\u9762\u5DF2\u7ECF\u5B8C\u6210\u4E86&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u4EE5\u4E0B\u662F\u5904\u7406\u90A3\u7AEF\u4EE3\u7801\uFF0C\u4E5F\u5C31\u662F actions \u4E2D\u7684\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token comment">// context \u4E0A\u4E0B\u6587</span>
        <span class="token function">changeStu</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>payload</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;changeStu&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;11111&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token comment">// setTimeout(()=&gt;{</span>

            <span class="token comment">//     console.log(payload);</span>
            <span class="token comment">//     context.commit(&#39;changeStu&#39;);</span>
            <span class="token comment">//     console.log(payload.message);</span>
            <span class="token comment">//     payload.succeed();</span>

            <span class="token comment">// },1000)</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><strong>\u4E94\u3001 Modules</strong><br> \xA0\xA0\xA0\xA0\xA0\xA0\u3010<strong>\u89E3\u91CA</strong>\u3011 <strong>\u6A21\u5757</strong>\u7684\u610F\u601D\uFF0CVue \u4F7F\u7528\u7684\u662F\u5355\u4E00\u72B6\u6001\u6570\uFF0C\u90A3\u4E48\u4E5F\u610F\u5473\u7740\u5F88\u591A\u72B6\u6001\u90FD\u4F1A\u4EA4\u7ED9 Vuex \u6765\u7BA1\u7406\uFF0C\u5F53\u5E94\u7528\u53D8\u5F97\u975E\u5E38\u590D\u6742\u65F6\uFF0Cstore \u5BF9\u8C61\u5C31\u6709\u53EF\u80FD\u53D8\u5F97\u76F8\u5F53\u81C3\u80BF\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CVuex \u5141\u8BB8\u6211\u4EEC\u5C06 store \u5206\u5272\u6210\u6A21\u5757\uFF0C\u800C\u6BCF\u4E00\u4E2A\u6A21\u5757\u62E5\u6709\u81EA\u5DF1\u7684 state mutations actions getters \xA0\xA0\xA0\xA0\xA0\xA0<br> \u3010<strong>\u4F7F\u7528</strong>\u3011\u4EE3\u7801\u5982\u4E0B\uFF1A \u8C03\u7528\u7AEF\u7684\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>a<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;updataName&quot;</span><span class="token operator">&gt;</span>\u4FEE\u6539\u540D\u5B57<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>aUpdateName<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>bUpdateName<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>cUpdateName<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;AsyncUpdataName&quot;</span><span class="token operator">&gt;</span>\u5F02\u6B65\u4FEE\u6539\u540D\u5B57<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>methods \u4E2D\u7684\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">updataName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;updateName&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;JYQ&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">AsycUpdataName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;AsycUpdateName&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>module \u4E2D\u7684\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token literal-property property">modules</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token literal-property property">a</span><span class="token operator">:</span> moduleA<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> moduleA <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;beanBag&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">updateName</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>name <span class="token operator">=</span> payload<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">aUpdateName</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">bUpdateName</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> getter<span class="token punctuation">.</span>aUpdateName <span class="token operator">+</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">cUpdateName</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getter<span class="token punctuation">,</span> rootState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> getter<span class="token punctuation">.</span>bUpdateName <span class="token operator">+</span> rootState<span class="token punctuation">.</span>counter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">AsyncUpdateName</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&quot;updateName&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;hqc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,28);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};
