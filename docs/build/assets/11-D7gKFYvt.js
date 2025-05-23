import{jsx as o,jsxs as r,Fragment as a}from"react/jsx-runtime";import{u as i}from"../client-entry.js";import"react-dom/client";import"react";const p={title:"数组sort()详解",categories:"笔记",date:"2023-4-15 00:08:45",tags:["笔记"],cover:"/cover/b.jpg"},m="数组 sort()语法：arr.sort([compareFunction])compareFunction 这个参数是可填可不填的语法：arr.sort([compareFunction])compareFunction 这个参数是可填可不填的compareFunction 是一个函数,用来指定按",u=[{id:"数组-sort",text:"数组 sort()",depth:1},{id:"默认排序",text:"默认排序",depth:2},{id:"升序",text:"升序",depth:2}];function t(e){const n={a:"a",blockquote:"blockquote",br:"br",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",span:"span",strong:"strong",...i(),...e.components},{Image:c}=n;return c||function(){throw new Error("Expected component `Image` to be defined: you likely forgot to import, pass, or provide it.")}(),r(a,{children:[r(n.h1,{id:"数组-sort",children:[o(n.a,{className:"header-anchor",href:"#数组-sort",children:o(n.span,{className:"icon icon-link"})}),"数组 sort()"]}),`
`,r(n.blockquote,{children:[`
`,o(n.p,{children:"语法：arr.sort([compareFunction])"}),`
`]}),`
`,o(n.p,{children:"compareFunction 这个参数是可填可不填的"}),`
`,r(n.blockquote,{children:[`
`,o(n.p,{children:"语法：arr.sort([compareFunction])"}),`
`]}),`
`,r(n.ol,{children:[`
`,o(n.li,{children:"compareFunction 这个参数是可填可不填的"}),`
`,o(n.li,{children:"compareFunction 是一个函数,用来指定按某种顺序进行排列的函数。"}),`
`,o(n.li,{children:"如果省略，元素按照转换为的字符串的各个字符的 Unicode 位点进行排序。"}),`
`,o(n.li,{children:"该排序方法会改变原始数组"}),`
`]}),`
`,r(n.h2,{id:"默认排序",children:[o(n.a,{className:"header-anchor",href:"#默认排序",children:o(n.span,{className:"icon icon-link"})}),"默认排序"]}),`
`,r(n.h2,{id:"升序",children:[o(n.a,{className:"header-anchor",href:"#升序",children:o(n.span,{className:"icon icon-link"})}),"升序"]}),`
`,r(n.blockquote,{children:[`
`,r(n.p,{children:[o(n.strong,{children:"原理"}),":sort()里面的函数返回值如果大于 0，则 a、b 交换位置；（数组原本位置为 a 在 b 的前面）",o(n.br,{}),`
如果返回值小于 0，则 a、b 不交换位置；`,o(n.br,{}),`
如果返回值等于 0，则 a、b 的位置不变。`]}),`
`]}),`
`,o(c,{src:"hbs/image-20230715175809486.png",alt:"image-20230715175809486",isPreview:!0})]})}function b(e={}){const{wrapper:n}={...i(),...e.components};return n?o(n,{...e,children:o(t,{...e})}):t(e)}export{b as default,p as frontmatter,m as mdInfo,u as toc};
