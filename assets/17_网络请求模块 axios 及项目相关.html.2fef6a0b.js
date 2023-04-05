import{e}from"./app.044a4b86.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const t={},s=e('<h1 id="_17-\u7F51\u7EDC\u8BF7\u6C42\u6A21\u5757-axios-\u53CA\u9879\u76EE\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#_17-\u7F51\u7EDC\u8BF7\u6C42\u6A21\u5757-axios-\u53CA\u9879\u76EE\u76F8\u5173" aria-hidden="true">#</a> 17_\u7F51\u7EDC\u8BF7\u6C42\u6A21\u5757 axios \u53CA\u9879\u76EE\u76F8\u5173</h1><p>\u5728\u5F00\u53D1\u9879\u76EE\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4E00\u5B9A\u4F1A\u4F7F\u7528\u5230\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u4F7F\u7528\u4E00\u4E2A\u5408\u9002\u7684\u7F51\u7EDC\u8BF7\u6C42\u6A21\u5757\u662F\u5F88\u91CD\u8981\u7684\uFF0C<strong>\u4E0D\u8BBA\u54EA\u4E00\u79CD\u7F51\u7EDC\u8BF7\u6C42\u65B9\u5F0F\u6211\u4EEC\u90FD\u9700\u8981\u81EA\u5DF1\u5C01\u88C5</strong>\uFF0C\u9632\u6B62\u9879\u76EE\u4EE3\u7801\u8FC7\u4E8E\u5E9E\u5927\u4E0D\u6613\u7BA1\u7406\uFF0C\u90A3\u4E48\u9009\u62E9\u4EC0\u4E48\u7F51\u7EDC\u6A21\u5757\u5F00\u53D1\u6211\u4EEC\u540E\u8FB9\u7684\u9879\u76EE\u5462\uFF1F</p><p><strong>\u53C2\u8003\u4E00</strong> \u3001Ajax\uFF0Cajax \u662F\u57FA\u4E8E XMLHttpRequest(XHR)\uFF0C\u4F46\u662F\u914D\u7F6E\u540E\u8C03\u7528\u8BE5\u65B9\u5F0F\u975E\u5E38\u6DF7\u4E71\uFF0C\u771F\u5B9E\u5F00\u53D1\u5F88\u5C11\u7528\uFF0C\u6240\u4EE5\u4E0D\u63A8\u8350 <strong>\u53C2\u8003\u4E8C</strong>\u3001 jQuery \u5C01\u88C5\u597D\u7684 Ajax\uFF0C\u76F8\u5BF9\u4E8E\u4F20\u7EDF\u7684 ajax \u6765\u8BF4\uFF0C\u4F7F\u7528 jQuery \u662F\u66F4\u6709\u4F18\u52BF\u7684\uFF0C\u4F46\u662F\u8FD9\u91CC\u4EA7\u751F\u4E00\u4E2A\u95EE\u9898\uFF0C\u5C31\u662F\u6211\u4EEC\u7684\u9879\u76EE\u662F\u91C7\u7528 Vue \u6765\u5199\u7684\uFF0C\u5728\u6574\u4E2A Vue \u6A21\u5757\u4E2D\u4ECE\u672A\u4F7F\u7528\u5230 jQuery\uFF0C\u610F\u5473\u7740\u4E3A\u4E86\u4E00\u4E2A\u7F51\u7EDC\u8BF7\u6C42\u8981\u5F15\u7528\u4E0A\u4E07\u884C\u7684\u4EE3\u7801\uFF0C\u8FD9\u662F\u4E0D\u5FC5\u8981\u7684\uFF0C\u6240\u4EE5\u4E0D\u63A8\u8350 <strong>\u53C2\u8003\u4E09</strong>\u3001\u5B98\u65B9\u5728 Vue1.x \u63A8\u51FA\u4E86 Vue-resource\uFF0C\u4F53\u79EF\u76F8\u5BF9\u4E8E jQuery \u6765\u8BF4\u6BD4\u8F83\u5C0F\uFF0C\u540C\u65F6\u662F\u5B98\u65B9\u63A8\u51FA\u7684\uFF0C\u4F46\u662F\u5728 Vue2.0 \u7248\u672C\u4EE5\u540E\uFF0CVue \u4F5C\u8005\u5C06\u5B83\u4ECE Vue \u4E2D\u53BB\u9664\u4E86\uFF0C\u5E76\u4E14\u4E5F\u8BF4\u4E0D\u4F1A\u518D\u66F4\u65B0\uFF0C\u8003\u8651\u5230\u9879\u76EE\u7684\u5B89\u5168\u6027\u548C\u4EE5\u540E\u7684\u7EF4\u62A4\u8FD9\u91CC\u4E0D\u63A8\u8350 <strong>\u53C2\u8003\u56DB</strong>\u3001Vue \u7684\u4F5C\u8005\u5728\u79FB\u9664 Vue-resource \u4E4B\u540E\uFF0C\u63A8\u8350\u4E86\u4E00\u4E2A\u7B2C\u4E09\u65B9\u7684\u6846\u67B6\uFF0C\u5C31\u662F axios\uFF0C\u5B83\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E2D\u53D1\u9001 XMLHttpRequest \u8BF7\u6C42\uFF0C\u53EF\u4EE5\u5728 node.js \u4E2D\u53D1\u9001 http \u8BF7\u6C42\uFF0C\u8FD9\u4E00\u70B9\u662F jQuery \u505A\u4E0D\u5230\u7684\uFF0C\u5B83\u652F\u6301 Promise API\uFF0C\u5B83\u652F\u6301\u62E6\u622A\u8BF7\u6C42\u548C\u76F8\u5E94\uFF0C\u5B83\u652F\u6301\u8F6C\u6362\u8BF7\u6C42\u548C\u76F8\u5E94\u6570\u636E\u5E76\u4E14\u652F\u6301\u591A\u79CD\u8BF7\u6C42\u65B9\u5F0F\uFF0C\u7EFC\u4E0A\uFF0C<strong>\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 axios</strong>OMG,\u4F60\u8FD8\u5728\u7B49\u4EC0\u4E48,\u7528\u5B83\uFF01\u7528\u5B83\uFF01\u7528\u5B83\uFF01</p>',3);function o(_,a){return s}var i=r(t,[["render",o]]);export{i as default};
