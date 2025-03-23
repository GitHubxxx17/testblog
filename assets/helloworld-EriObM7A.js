import { j as jsxRuntimeExports } from "./client-entry-N66xgvsN.js";
const frontmatter = {
  "title": "hello world",
  "categories": "test",
  "date": "2025-03-07 10:00:00",
  "tags": ["test"],
  "cover": "/cover/a.jpg"
};
const mdInfo = "hello worldasdaaa";
const toc = [{
  "id": "hello-world",
  "text": "hello world",
  "depth": 1
}, {
  "id": "asd",
  "text": "asd",
  "depth": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "hello-world",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#hello-world",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "hello world"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "asd",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#asd",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "asd"]
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "aaa"
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default,
  frontmatter,
  mdInfo,
  toc
};
