"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const React = require("react");
const classNames = require("classnames");
const reactFontawesome = require("@fortawesome/react-fontawesome");
const reactRouter = require("react-router");
const server = require("react-dom/server");
const router = require("@remix-run/router");
const reactHelmetAsync = require("react-helmet-async");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
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
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "hello-world",
      children: [jsxRuntime.jsx(_components.a, {
        className: "header-anchor",
        href: "#hello-world",
        children: jsxRuntime.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "hello world"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "asd",
      children: [jsxRuntime.jsx(_components.a, {
        className: "header-anchor",
        href: "#asd",
        children: jsxRuntime.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "asd"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "aaa"
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const Route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter,
  mdInfo,
  toc
}, Symbol.toStringTag, { value: "Module" }));
const routes = [
  { path: "/post/helloworld", element: React.createElement(Route0), preload: () => Promise.resolve().then(() => Route0) }
];
const siteData = { "title": "fispo的个人博客", "description": "学无止境", "theme": "particle", "themeConfig": { "navMenus": [{ "title": "首页", "path": "/", "icon": "home" }, { "title": "标签", "path": "/tag", "icon": "tag" }, { "title": "分类", "path": "/category", "icon": "folder-open" }, { "title": "关于", "path": "/about", "icon": "heart" }], "banner": { "img": "/banner.png", "title": "", "subTitle": "" } }, "vite": {}, "author": "fispo", "avatar": "/avatar.jpg", "backgroundImg": "/bg.png", "root": "docs", "postDir": "post", "public": "public", "notFoundImg": "/404.png", "logo": "/logo.png" };
function formatDateToYYYYMMDD(dateStr) {
  const date2 = new Date(dateStr);
  const year = date2.getFullYear();
  const month = date2.getMonth() + 1;
  const day = date2.getDate();
  const formattedMonth = String(month).padStart(2, "0");
  const formattedDay = String(day).padStart(2, "0");
  return `${year}-${formattedMonth}-${formattedDay}`;
}
function sortByDate(arr) {
  return arr.sort((a, b) => {
    const dateA = new Date(a.date.replace(/-/g, "/"));
    const dateB = new Date(b.date.replace(/-/g, "/"));
    return Number(dateB) - Number(dateA);
  });
}
async function handleRoutes(routes2) {
  const articlesList = [];
  const tags2 = {};
  const categories = {};
  for await (const route of routes2) {
    const moduleInfo = await route.preload();
    articlesList.push({
      ...moduleInfo.frontmatter,
      date: formatDateToYYYYMMDD(moduleInfo.frontmatter.date),
      path: route.path,
      info: moduleInfo.mdInfo
    });
    moduleInfo.frontmatter.tags.forEach((tag) => {
      if (tags2[tag]) {
        tags2[tag].push(route.path);
      } else {
        tags2[tag] = [route.path];
      }
    });
    const category2 = moduleInfo.frontmatter.categories;
    if (category2) {
      if (categories[category2]) {
        categories[category2].push(route.path);
      } else {
        categories[category2] = [route.path];
      }
    }
  }
  return {
    articlesList,
    tags: tags2,
    categories
  };
}
const DataContext = React.createContext({});
const usePageData = () => {
  return React.useContext(DataContext);
};
const layout = "_layout_1obw2_1";
const styles$8 = {
  layout
};
const nav = "_nav_ixtzq_1";
const menus = "_menus_ixtzq_27";
const hide = "_hide_ixtzq_47";
const styles$7 = {
  nav,
  "blog-name": "_blog-name_ixtzq_12",
  menus,
  "nav-blue": "_nav-blue_ixtzq_40",
  hide
};
function debounce(func, delay) {
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(null, arguments);
    }, delay);
  };
}
const NAV_HEIGHT = 60;
function UseScroll() {
  let callbackList = [];
  let lastScrollTop = Math.ceil(0);
  let direction = "down";
  function bind() {
    const currentScrollTop = Math.ceil(window.scrollY);
    if (currentScrollTop > lastScrollTop) {
      direction = "down";
    } else {
      direction = "up";
    }
    lastScrollTop = currentScrollTop;
    callbackList.forEach((callback) => {
      callback(direction, currentScrollTop === 0);
    });
  }
  function init() {
    console.log("滚动模块初始化");
    const newBind = debounce(bind, 10);
    window.addEventListener("scroll", newBind);
  }
  function add(callback) {
    callbackList.push(callback);
  }
  function remove(removeFn) {
    const index = callbackList.findIndex((fn) => fn == removeFn);
    callbackList.splice(index, 1);
  }
  function destory() {
    callbackList = [];
    window.removeEventListener("scroll", bind);
  }
  function scrollToTarget(target, isSmooth) {
    const targetPadding = parseInt(
      window.getComputedStyle(target).paddingTop,
      10
    );
    const targetTop = target.getBoundingClientRect().top;
    let scrollTop = window.scrollY + targetTop + targetPadding;
    if (targetTop < 0) {
      scrollTop -= NAV_HEIGHT;
    }
    window.scrollTo({
      left: 0,
      top: scrollTop,
      behavior: isSmooth ? "smooth" : "auto"
    });
  }
  return {
    init,
    add,
    remove,
    destory,
    scrollToTarget
  };
}
const scrollManager = UseScroll();
function toCamelCase(str) {
  const parts = str.split("-");
  return "fa" + parts.map((part) => {
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join("");
}
const Icon = (props) => {
  const iconName = toCamelCase(props.icon || "spinner");
  const [icon, setIcon] = React.useState(null);
  React.useEffect(() => {
    try {
      import(
        /* @vite-ignore */
        "@fortawesome/free-solid-svg-icons"
      ).then((module2) => {
        if (module2[iconName]) setIcon(module2[iconName]);
      });
      import(
        /* @vite-ignore */
        "@fortawesome/free-brands-svg-icons"
      ).then((module2) => {
        if (module2[iconName]) setIcon(module2[iconName]);
      });
    } catch (e) {
      console.log(e);
    }
  }, [iconName]);
  return icon && /* @__PURE__ */ jsxRuntime.jsx(
    reactFontawesome.FontAwesomeIcon,
    {
      icon,
      className: classNames({
        ["fa-solid fa-spinner fa-spin"]: props.isSpin,
        ["fa-shake"]: props.shake
      })
    }
  );
};
function Nav(props) {
  const { title: title2 = "", menus: menus2 = [], navBlue = true } = props;
  const [isHide, setIsHide] = React.useState(false);
  const [isBlue, setIsBlue] = React.useState(true);
  React.useEffect(() => {
    setIsBlue(navBlue);
    const scroll = (direction) => {
      setIsHide(direction == "down");
    };
    scrollManager.add(scroll);
    return () => {
      scrollManager.remove(scroll);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "nav",
    {
      className: classNames(styles$7.nav, {
        [styles$7.hide]: isHide,
        [styles$7["nav-blue"]]: isBlue
      }),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$7["blog-name"], children: /* @__PURE__ */ jsxRuntime.jsx("a", { href: "#", children: title2 }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$7.menus, children: /* @__PURE__ */ jsxRuntime.jsx("ul", { children: menus2.map((items) => {
          return /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsxs("a", { href: items.path, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: items.icon }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: items.title })
          ] }) }, items.title);
        }) }) })
      ]
    }
  );
}
const homeLayout = "_homeLayout_n55af_1";
const loop = "_loop_n55af_22";
const info$2 = "_info_n55af_57";
const avatar = "_avatar_n55af_108";
const name = "_name_n55af_121";
const description$1 = "_description_n55af_126";
const styles$6 = {
  homeLayout,
  "home-info": "_home-info_n55af_16",
  loop,
  info: info$2,
  "home-posts-wrap": "_home-posts-wrap_n55af_77",
  "home-posts": "_home-posts_n55af_77",
  "home-card": "_home-card_n55af_89",
  "home-card-inner": "_home-card-inner_n55af_92",
  avatar,
  name,
  description: description$1,
  "friend-links": "_friend-links_n55af_131",
  "icon-links": "_icon-links_n55af_132",
  "icon-link": "_icon-link_n55af_132"
};
const post = "_post_1657o_1";
const category = "_category_1657o_19";
const date = "_date_1657o_33";
const description = "_description_1657o_36";
const styles$5 = {
  post,
  "category-and-date": "_category-and-date_1657o_19",
  category,
  date,
  description,
  "post-tags": "_post-tags_1657o_39",
  "go-post": "_go-post_1657o_48"
};
const colors = [
  "#03a9f4",
  "#00bcd4",
  "#00a596",
  "#ff7d73",
  "#00bcd4",
  "#ffa2c4"
];
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
const Post = (props) => {
  console.log(props);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$5.post, children: [
    /* @__PURE__ */ jsxRuntime.jsx("a", { href: props.path, children: /* @__PURE__ */ jsxRuntime.jsx("h2", { children: props.title }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$5["category-and-date"], children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: styles$5.category, children: /* @__PURE__ */ jsxRuntime.jsxs("a", { href: `/category/${props.categories}`, children: [
        /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "folder-open" }),
        props.categories
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsxs("span", { className: styles$5.date, children: [
        /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "calendar" }),
        props.date
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$5.description, children: /* @__PURE__ */ jsxRuntime.jsx("p", { dangerouslySetInnerHTML: { __html: props.info } }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$5["post-tags"], children: [
      /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "tags" }),
      props.tags.map((tag, index) => {
        return /* @__PURE__ */ jsxRuntime.jsx("span", { children: /* @__PURE__ */ jsxRuntime.jsx("a", { href: `/tag/${tag}`, style: { color: getRandomColor() }, children: tag }) }, index);
      })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("a", { href: props.path, className: styles$5["go-post"], children: "阅读全文" })
  ] });
};
function HomeLayout(props) {
  const { siteData: siteData2, title: title2, articlesList } = props.pageData;
  const { themeConfig, author, avatar: avatar2, description: description2 } = siteData2;
  const { banner } = themeConfig;
  console.log(themeConfig);
  const iconList = ["github", "qq", "envelope"];
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6.homeLayout, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntime.jsx("img", { src: banner.img, alt: "" }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6["home-info"], children: [
        Array.from({ length: 4 }).map((_, i) => {
          return /* @__PURE__ */ jsxRuntime.jsx("span", { className: styles$6.loop }, i);
        }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6.info, children: [
          /* @__PURE__ */ jsxRuntime.jsx("h1", { children: title2 }),
          /* @__PURE__ */ jsxRuntime.jsx("h3", { children: banner.subTitle })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6["home-posts-wrap"], children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$6["home-posts"], children: articlesList.map((article, index) => {
        return /* @__PURE__ */ React.createElement(Post, { ...article, key: index });
      }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$6["home-card"], children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6["home-card-inner"], children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$6.avatar, children: /* @__PURE__ */ jsxRuntime.jsx("img", { src: avatar2, alt: "avatar" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$6.name, children: author }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$6.description, children: description2 }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$6["icon-links"], children: iconList.map((item, index) => {
          return /* @__PURE__ */ jsxRuntime.jsx("span", { className: styles$6["icon-link"], children: /* @__PURE__ */ jsxRuntime.jsx("a", { href: "", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: item }) }) }, index);
        }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$6["friend-links"] })
      ] }) })
    ] })
  ] });
}
const footer = "_footer_dfym6_1";
const styles$4 = {
  footer,
  "footer-wrap": "_footer-wrap_dfym6_9"
};
const Footer = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx("footer", { className: styles$4.footer, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$4["footer-wrap"], children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      "© 2022 - 2024 ",
      props.title,
      " | @",
      props.author
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      "Based on the",
      " ",
      /* @__PURE__ */ jsxRuntime.jsx("a", { href: "https://github.com/GitHubxxx17/fispo", children: "Fispo Engine" }),
      "|",
      /* @__PURE__ */ jsxRuntime.jsx("a", { href: "https://github.com/GitHubxxx17/fispo", children: "Particle Theme" })
    ] })
  ] }) });
};
const Content = () => {
  console.log(routes);
  const routeElement = reactRouter.useRoutes(routes);
  return routeElement;
};
const articleLayout = "_articleLayout_1v93v_1";
const header = "_header_1v93v_9";
const info$1 = "_info_1v93v_12";
const styles$3 = {
  articleLayout,
  header,
  info: info$1
};
function convertDateString(dateStr) {
  const date2 = new Date(dateStr);
  const year = date2.getFullYear();
  const month = String(date2.getMonth() + 1).padStart(2, "0");
  const day = String(date2.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}
const ArticleLayout = (props) => {
  const { title: title2, frontmatter: frontmatter2 } = props.pageData;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$3.articleLayout, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$3.header, children: [
      /* @__PURE__ */ jsxRuntime.jsx("h1", { children: title2 }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$3.info, children: [
        /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "calendar" }),
          convertDateString(frontmatter2.date)
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: /* @__PURE__ */ jsxRuntime.jsxs("a", { href: `/category/${frontmatter2.categories}`, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "folder-open" }),
          frontmatter2.categories
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "tags" }),
          frontmatter2.tags.map((tag, index) => {
            return /* @__PURE__ */ jsxRuntime.jsx("a", { href: `/tag/${tag}`, children: /* @__PURE__ */ jsxRuntime.jsx("span", { style: { color: getRandomColor() }, children: tag }) }, index);
          })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(Content, {})
  ] });
};
const tags = "_tags_1cyzc_1";
const styles$2 = {
  tags,
  "categories-tags": "_categories-tags_1cyzc_4"
};
const articleCard = "_articleCard_7qrok_1";
const title = "_title_7qrok_9";
const time = "_time_7qrok_15";
const info = "_info_7qrok_23";
const styles$1 = {
  articleCard,
  title,
  time,
  info
};
const ArticleCard = (props) => {
  var _a;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$1.articleCard, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$1.time, children: props.date }),
    /* @__PURE__ */ jsxRuntime.jsx("a", { href: props.path, className: styles$1.title, children: /* @__PURE__ */ jsxRuntime.jsx("h3", { children: props.title }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$1.info, children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { children: /* @__PURE__ */ jsxRuntime.jsxs("a", { href: `/category/${props.categories}`, children: [
        /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "folder-open" }),
        props.categories
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
        /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "tags" }),
        (_a = props.tags) == null ? void 0 : _a.map((tag, index) => {
          return /* @__PURE__ */ jsxRuntime.jsx("a", { href: `/tag/${tag}`, children: /* @__PURE__ */ jsxRuntime.jsx("span", { style: { color: getRandomColor() }, children: tag }) }, index);
        })
      ] })
    ] })
  ] });
};
const Tags = (props) => {
  const { tags: tags2 = [], type, articleList, keyword } = props;
  const iconType = type === "tag" ? "tags" : "folder-open";
  const currBg = "linear-gradient(120deg, rgb(154, 187, 247) 0px, rgb(255, 187, 244) 100%)";
  const articles = React.useMemo(() => {
    if (!keyword) return [];
    if (type == "tag") {
      return articleList.filter((article) => {
        var _a;
        return (_a = article.tags) == null ? void 0 : _a.includes(keyword);
      });
    } else {
      return articleList.filter((article) => {
        return article.categories === keyword;
      });
    }
  }, [articleList]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$2.tags, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$2["categories-tags"], children: Object.entries(tags2).map(([tag], index) => {
      return /* @__PURE__ */ jsxRuntime.jsx("span", { children: /* @__PURE__ */ jsxRuntime.jsxs(
        "a",
        {
          href: `/${type}/${tag}`,
          style: {
            background: tag === keyword ? currBg : getRandomColor()
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: iconType }),
            tag
          ]
        }
      ) }, index);
    }) }),
    articles.map((article, index) => {
      return /* @__PURE__ */ React.createElement(ArticleCard, { ...article, key: index });
    })
  ] });
};
const customLayout = "_customLayout_taknp_1";
const styles = {
  customLayout
};
const CustomLayout = (props) => {
  const { pagePath, tags: tags2, categories, articlesList } = props.pageData;
  const pathList = pagePath.split("/").filter(Boolean);
  const type = pathList[0];
  const keyword = decodeURI(pathList.at(-1));
  const render2 = (type2) => {
    switch (type2) {
      case "tag":
        return /* @__PURE__ */ jsxRuntime.jsx(
          Tags,
          {
            type: "tag",
            tags: tags2,
            articleList: articlesList,
            keyword
          }
        );
      case "category":
        return /* @__PURE__ */ jsxRuntime.jsx(
          Tags,
          {
            type: "category",
            tags: categories,
            articleList: articlesList,
            keyword
          }
        );
      default:
        return;
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles.customLayout, children: render2(type) });
};
const Layout = (props) => {
  const { pageData } = props;
  const { pageType, siteData: siteData2 } = pageData;
  const { title: siteTitle, themeConfig, author } = siteData2;
  const { navMenus } = themeConfig;
  const isHomePage = pageType === "home";
  const isArticlePage = pageType === "article";
  console.log(pageData);
  const getCurrentLayout = () => {
    if (isHomePage) {
      return /* @__PURE__ */ jsxRuntime.jsx(HomeLayout, { pageData });
    } else if (isArticlePage) {
      return /* @__PURE__ */ jsxRuntime.jsx(ArticleLayout, { pageData });
    } else if (pageType === "custom") {
      return /* @__PURE__ */ jsxRuntime.jsx(CustomLayout, { pageData });
    } else {
      return /* @__PURE__ */ jsxRuntime.jsx("div", { children: "404" });
    }
  };
  React.useEffect(() => {
    scrollManager.init();
    return () => {
      scrollManager.destory();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$8.layout, children: [
    /* @__PURE__ */ jsxRuntime.jsx(Nav, { title: siteTitle, menus: navMenus, navBlue: !isHomePage }),
    getCurrentLayout(),
    /* @__PURE__ */ jsxRuntime.jsx(Footer, { author, title: siteTitle })
  ] });
};
async function initPageData(routePath) {
  const pathList = routePath.split("/").filter(Boolean);
  const isHomeOrCustom = pathList.length === 0 || siteData.themeConfig.navMenus.find(
    (item) => item.path == `/${pathList[0]}`
  );
  const { articlesList, tags: tags2, categories } = await handleRoutes(routes);
  sortByDate(articlesList);
  const getPageData = (pageType, frontmatter2, title2, toc2) => {
    return {
      pageType,
      siteData,
      frontmatter: frontmatter2,
      pagePath: routePath,
      title: title2,
      articlesList,
      tags: tags2,
      categories,
      toc: toc2
    };
  };
  if (isHomeOrCustom) {
    let bannerTitle = siteData.title;
    if (pathList.length == 1) {
      bannerTitle = siteData.themeConfig.navMenus.find(
        (item) => item.path == `/${pathList[0]}`
      ).title;
    } else if (pathList.length > 1) {
      bannerTitle = decodeURIComponent(pathList.at(-1));
    }
    return getPageData(routePath === "/" ? "home" : "custom", {}, bannerTitle);
  }
  const matched = reactRouter.matchRoutes(routes, routePath);
  if (matched) {
    const moduleInfo = await matched[0].route.preload();
    return getPageData(
      "article",
      moduleInfo.frontmatter,
      moduleInfo.frontmatter.title || "",
      moduleInfo.toc
    );
  }
  return getPageData("404", {}, "404");
}
function App() {
  const pageData = usePageData();
  return /* @__PURE__ */ jsxRuntime.jsx(React.Suspense, { fallback: /* @__PURE__ */ jsxRuntime.jsx("div", { children: "Loading..." }), children: /* @__PURE__ */ jsxRuntime.jsx(Layout, { pageData }) });
}
function StaticRouter({
  basename,
  children,
  location: locationProp = "/",
  future
}) {
  if (typeof locationProp === "string") {
    locationProp = reactRouter.parsePath(locationProp);
  }
  let action = router.Action.Pop;
  let location = {
    pathname: locationProp.pathname || "/",
    search: locationProp.search || "",
    hash: locationProp.hash || "",
    state: locationProp.state != null ? locationProp.state : null,
    key: locationProp.key || "default"
  };
  let staticNavigator = getStatelessNavigator();
  return /* @__PURE__ */ React__namespace.createElement(reactRouter.Router, {
    basename,
    children,
    location,
    navigationType: action,
    navigator: staticNavigator,
    future,
    static: true
  });
}
function getStatelessNavigator() {
  return {
    createHref,
    encodeLocation,
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    }
  };
}
function createHref(to) {
  return typeof to === "string" ? to : reactRouter.createPath(to);
}
function encodeLocation(to) {
  let href = typeof to === "string" ? to : reactRouter.createPath(to);
  href = href.replace(/ $/, "%20");
  let encoded = ABSOLUTE_URL_REGEX.test(href) ? new URL(href) : new URL(href, "http://localhost");
  return {
    pathname: encoded.pathname,
    search: encoded.search,
    hash: encoded.hash
  };
}
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
async function render(pagePath, helmetContext) {
  const pageData = await initPageData(pagePath);
  return server.renderToString(
    /* @__PURE__ */ jsxRuntime.jsx(reactHelmetAsync.HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsxRuntime.jsx(DataContext.Provider, { value: pageData, children: /* @__PURE__ */ jsxRuntime.jsx(StaticRouter, { location: pagePath, children: /* @__PURE__ */ jsxRuntime.jsx(App, {}) }) }) })
  );
}
exports.render = render;
exports.routes = routes;
