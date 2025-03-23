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
const mediumZoom = require("medium-zoom");
const reactHelmetAsync = require("react-helmet-async");
const server = require("react-dom/server");
const router = require("@remix-run/router");
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
const helloworld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter,
  mdInfo,
  toc
}, Symbol.toStringTag, { value: "Module" }));
const routes = [
  { path: "/post/helloworld", element: React.createElement(MDXContent), preload: () => Promise.resolve().then(() => helloworld) }
];
const siteData = { "base": "/testblog", "title": "fispo的个人博客", "description": "学无止境", "theme": "", "themeConfig": { "navMenus": [{ "title": "首页", "path": "/", "icon": "home" }, { "title": "标签", "path": "/tag", "icon": "tag" }, { "title": "分类", "path": "/category", "icon": "folder-open" }, { "title": "关于", "path": "/about", "icon": "heart" }], "banner": { "img": "/banner.png", "subtitle": "" }, "sidebar": { "enable": true, "hide": false, "position": "right", "card_author": { "enable": true, "description": "", "button": { "enable": true, "icon": "github", "text": "Follow me", "link": "" } }, "card_announcement": { "enable": true, "content": "" }, "card_recent_post": { "enable": true, "limit": 5, "sort": "date" }, "card_categories": { "enable": true, "limit": 10 }, "card_tags": { "enable": true, "limit": 10 }, "card_webinfo": { "enable": true, "post_count": true, "last_push_date": true, "run_time": true } }, "footer": { "message": "", "copyright": "" } }, "vite": { "base": "/testblog" }, "author": "fispo", "avatar": "/avatar.jpg", "backgroundImg": "/bg.png", "root": "docs", "postDir": "post", "build": "build", "public": "public", "notFoundImg": "/404.png", "logo": "/logo.png", "markdown": {}, "plugins": [{ "name": "fispo:plugin-perloader", "alias": { "@plugin-perloader": "D:\\Front-end\\ssg_learn\\blog\\node_modules\\@fispo\\plugin-preloader\\src\\Loading\\index.tsx" }, "preloader": "@plugin-perloader" }], "preloader": true, "deploy": { "repo": "https://github.com/GitHubxxx17/testblog.git", "branch": "gh-page" } };
function formatDateToYYYYMMDD(dateStr) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
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
  const tags = {};
  const categories = {};
  for await (const route of routes2) {
    const moduleInfo = await route.preload();
    articlesList.push({
      ...moduleInfo.frontmatter,
      date: formatDateToYYYYMMDD(moduleInfo.frontmatter.date),
      path: route.path,
      info: moduleInfo.mdInfo
    });
    moduleInfo.frontmatter.tags.forEach((tag2) => {
      if (tags[tag2]) {
        tags[tag2].push(route.path);
      } else {
        tags[tag2] = [route.path];
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
    tags,
    categories
  };
}
const DataContext = React.createContext({});
const usePageData = () => {
  return React.useContext(DataContext);
};
const nav = "_nav_14t1j_1";
const menus = "_menus_14t1j_27";
const hide = "_hide_14t1j_53";
const top = "_top_14t1j_57";
const styles$d = {
  nav,
  "blog-name": "_blog-name_14t1j_15",
  menus,
  hide,
  top
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
const EXTERNAL_URL_RE = /^(https?:|http:)?\/\//;
function addLeadingSlash(url) {
  return url.charAt(0) === "/" || url.startsWith("https") ? url : "/" + url;
}
function removeTrailingSlash(url) {
  return url.charAt(url.length - 1) === "/" ? url.slice(0, -1) : url;
}
function normalizeSlash(url) {
  return removeTrailingSlash(addLeadingSlash(url));
}
function withBase(url, base) {
  if (EXTERNAL_URL_RE.test(url)) {
    return url;
  }
  const normalizedBase = normalizeSlash(base);
  const normalizedUrl = addLeadingSlash(url);
  return normalizedBase ? `${normalizedBase}${normalizedUrl}` : normalizedUrl;
}
const checkDomReady = () => {
  return new Promise((resolve) => {
    if (document.readyState === "interactive" || document.readyState === "complete") {
      resolve(0);
    } else {
      document.addEventListener("DOMContentLoaded", resolve, { once: true });
    }
  });
};
const checkAllImagesLoaded = () => {
  const images = Array.from(document.querySelectorAll("img"));
  console.log(images);
  return Promise.all(
    images.map((img) => {
      return new Promise((resolve) => {
        let isResolved = false;
        const done = () => {
          if (isResolved) return;
          isResolved = true;
          resolve("loaded");
          cleanup();
        };
        const timeoutId = setTimeout(() => {
          if (isResolved) return;
          isResolved = true;
          console.warn(`图片加载超时: ${img.src}`);
          resolve("timeout");
          cleanup();
        }, 3e3);
        const cleanup = () => {
          clearTimeout(timeoutId);
          img.removeEventListener("load", done);
          img.removeEventListener("error", done);
        };
        if (img.complete) {
          done();
        } else {
          img.addEventListener("load", done);
          img.addEventListener("error", done);
        }
      });
    })
  );
};
const checkAllAssetsLoaded = async () => {
  await checkDomReady();
  console.log("dom节点加载完成");
  await checkAllImagesLoaded();
  console.log("图片资源加载完成");
};
const baseUrl = (url = "/") => {
  return withBase(url, siteData.base);
};
function removeBase(url) {
  const normalizedBase = normalizeSlash(siteData.base);
  const normalizedUrl = url.replace(normalizedBase, "") || "/";
  return normalizedUrl;
}
const Link = React.forwardRef((props, ref) => {
  const { href = "/", children, target, rel, ...rest } = props;
  const isExternal = EXTERNAL_URL_RE.test(href);
  const innerTarget = isExternal ? "_blank" : target;
  const innerRel = isExternal ? "noopener noreferrer" : rel;
  const withBaseUrl = isExternal ? href : baseUrl(href);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    {
      ref,
      href: withBaseUrl,
      target: innerTarget,
      rel: innerRel,
      ...rest,
      children
    }
  );
});
Link.displayName = "Link";
const Image = React.forwardRef((props, ref) => {
  const { src = "/", children, ...rest } = props;
  const isExternal = EXTERNAL_URL_RE.test(src);
  const withBaseUrl = isExternal ? src : baseUrl(src);
  return /* @__PURE__ */ jsxRuntime.jsx("img", { ref, src: withBaseUrl, ...rest, children });
});
Image.displayName = "Image";
function Nav(props) {
  const { title: title2 = "", menus: menus2 = [], children } = props;
  if (children) return children;
  const [isHide, setIsHide] = React.useState(false);
  const [isTop, setIsTop] = React.useState(true);
  React.useEffect(() => {
    const scroll = (direction, isTop2) => {
      setIsHide(direction == "down");
      setIsTop(isTop2);
    };
    scrollManager.add(scroll);
    return () => {
      scrollManager.remove(scroll);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "nav",
    {
      className: classNames(styles$d.nav, {
        [styles$d.hide]: isHide,
        [styles$d.top]: isTop
      }),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$d["blog-name"], children: /* @__PURE__ */ jsxRuntime.jsx(Link, { href: "#", children: title2 }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$d.menus, children: /* @__PURE__ */ jsxRuntime.jsx("ul", { children: menus2.map((items) => {
          return /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsxs(Link, { href: items.path, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: items.icon }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: items.title })
          ] }) }, items.title);
        }) }) })
      ]
    }
  );
}
const articleList = "_articleList_lrpq1_1";
const item = "_item_lrpq1_1";
const left$1 = "_left_lrpq1_16";
const right$1 = "_right_lrpq1_25";
const content$1 = "_content_lrpq1_31";
const meta$1 = "_meta_lrpq1_41";
const info = "_info_lrpq1_66";
const styles$c = {
  articleList,
  item,
  left: left$1,
  right: right$1,
  content: content$1,
  meta: meta$1,
  info,
  "content-tag": "_content-tag_lrpq1_71",
  "multiline-ellipsis": "_multiline-ellipsis_lrpq1_75"
};
const pagination = "_pagination_1rhmf_1";
const block = "_block_1rhmf_8";
const active$1 = "_active_1rhmf_21";
const number = "_number_1rhmf_28";
const styles$b = {
  pagination,
  block,
  active: active$1,
  number
};
function Pagination(props) {
  const { currentPage = 1, pageCount = 1, onChange } = props;
  const [selectPage, setSelectPage] = React.useState(currentPage);
  const renderPages = React.useMemo(() => {
    if (pageCount < 8) {
      return Array.from({ length: pageCount }).map((_, i) => i + 1);
    } else {
      const pages = [];
      let min = Math.max(selectPage - 2, 1);
      let max = Math.min(selectPage + 2, pageCount);
      if (selectPage - 2 <= 0) {
        max = 5;
      }
      if (selectPage + 2 >= pageCount) {
        min = pageCount - 4;
      }
      for (let i = min; i <= max; i++) {
        pages.push(i);
      }
      if (pages[0] != 1) {
        if (pages[0] > 2) {
          pages.unshift(0);
        }
        pages.unshift(1);
      }
      if (pages.at(-1) != pageCount) {
        if (pages.at(-1) < pageCount - 1) {
          pages.push(0);
        }
        pages.push(pageCount);
      }
      return pages;
    }
  }, [pageCount, selectPage]);
  const setPage = React.useCallback(
    (val) => {
      if (val < 1) val = 1;
      if (val > pageCount) val = pageCount;
      setSelectPage(val);
      onChange == null ? void 0 : onChange(val);
    },
    [onChange]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$b.pagination, children: [
    selectPage !== 1 && /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: classNames(styles$b.block),
        onClick: () => setPage(selectPage - 1),
        children: "<"
      }
    ),
    renderPages.map((val, index) => {
      if (val === 0) {
        return /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: classNames(styles$b.block),
            onClick: () => setPage(selectPage + (index == 1 ? -5 : 5)),
            title: `${index == 1 ? "后退 5 页" : "前进 5 页"}`,
            children: "···"
          },
          `${val}-${index}`
        );
      } else {
        return /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: classNames(styles$b.block, styles$b.number, {
              [styles$b.active]: val === selectPage
            }),
            onClick: () => {
              setPage(val);
            },
            children: val
          },
          `page-${val}`
        );
      }
    }),
    selectPage !== pageCount && /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: classNames(styles$b.block),
        onClick: () => setPage(selectPage + 1),
        children: ">"
      }
    )
  ] });
}
function ArticleList(props) {
  const { step = 5, children, filter } = props;
  if (children) return children;
  const [currentPage, setCurrentPage] = React.useState(1);
  const articleList2 = React.useMemo(
    () => props.articleList.map((aritcle) => {
      if ((filter == null ? void 0 : filter.type) == "tag" && !aritcle.tags.includes(filter == null ? void 0 : filter.keyword)) {
        return;
      }
      if ((filter == null ? void 0 : filter.type) == "category" && aritcle.categories !== (filter == null ? void 0 : filter.keyword)) {
        return;
      }
      return aritcle;
    }).filter(Boolean),
    [props.articleList, filter]
  );
  const currentArtcleList = React.useMemo(() => {
    return articleList2.slice((currentPage - 1) * step, currentPage * step);
  }, [currentPage]);
  const paginationOptions = {
    pageCount: Math.ceil(articleList2.length / step),
    currentPage,
    onChange: (page) => {
      setCurrentPage(page);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$c.articleList, children: currentArtcleList.map((item2, index) => {
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$c.item, children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$c.left, children: /* @__PURE__ */ jsxRuntime.jsx(Link, { href: item2.path, children: /* @__PURE__ */ jsxRuntime.jsx(Image, { src: item2.cover, alt: "" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$c.right, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$c.content, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Link, { href: item2.path, children: /* @__PURE__ */ jsxRuntime.jsx("h2", { children: item2.title }) }),
          /* @__PURE__ */ jsxRuntime.jsxs("p", { className: styles$c.meta, children: [
            /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "calendar-alt" }),
              "发表于 ",
              item2.date
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "inbox" }),
              /* @__PURE__ */ jsxRuntime.jsx(Link, { href: `/category/${item2.categories}`, children: item2.categories })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: styles$c["content-tag"], children: [
              /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "tag" }),
              item2.tags.map((tag2, index2) => {
                return /* @__PURE__ */ jsxRuntime.jsx(Link, { href: `/tag/${tag2}`, children: tag2 }, `${tag2}-${index2}`);
              })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "p",
            {
              className: classNames(
                styles$c.info,
                styles$c["multiline-ellipsis"]
              ),
              children: item2.info
            }
          )
        ] }) })
      ] }, `${item2.title}-${index}`);
    }) }),
    /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: articleList2.length && /* @__PURE__ */ jsxRuntime.jsx(Pagination, { ...paginationOptions }) })
  ] });
}
function HomeLayout(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(ArticleList, { articleList: props.pageData.articlesList });
}
const layout = "_layout_1g63m_1";
const header$1 = "_header_1g63m_9";
const main = "_main_1g63m_18";
const mainInner = "_mainInner_1g63m_24";
const mainLeft = "_mainLeft_1g63m_33";
const mainRight = "_mainRight_1g63m_38";
const sidebarLeft = "_sidebarLeft_1g63m_43";
const sidebarHide = "_sidebarHide_1g63m_47";
const styles$a = {
  layout,
  header: header$1,
  "not-home-page": "_not-home-page_1g63m_15",
  main,
  mainInner,
  mainLeft,
  mainRight,
  sidebarLeft,
  sidebarHide
};
const banner = "_banner_1hwpr_1";
const meta = "_meta_1hwpr_33";
const styles$9 = {
  banner,
  "banner-site-info": "_banner-site-info_1hwpr_20",
  "banner-site-title": "_banner-site-title_1hwpr_25",
  meta,
  "content-tag": "_content-tag_1hwpr_60",
  "not-home-page": "_not-home-page_1hwpr_64"
};
function Banner(props) {
  const {
    children,
    isHomePage,
    isArticlePage,
    title: title2,
    bannerData = { img: "" },
    articleData
  } = props;
  if (children) return children;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: classNames(styles$9.banner, {
        [styles$9["not-home-page"]]: !isHomePage
      }),
      style: {
        backgroundImage: `url(${baseUrl(isArticlePage ? articleData.cover : bannerData.img)})`
      },
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$9["banner-site-info"], children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$9["banner-site-title"], children: title2 }),
        isArticlePage && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$9.meta, children: [
          /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "calendar-alt" }),
            "发表于 ",
            formatDateToYYYYMMDD(articleData.date)
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "inbox" }),
            /* @__PURE__ */ jsxRuntime.jsx(Link, { href: `/category/${articleData.categories}`, children: articleData.categories })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs("span", { className: styles$9["content-tag"], children: [
            /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "tag" }),
            articleData.tags.map((tag2, index) => {
              return /* @__PURE__ */ jsxRuntime.jsx(Link, { href: `/tag/${tag2}`, children: tag2 }, `${tag2}-${index}`);
            })
          ] })
        ] })
      ] })
    }
  );
}
const footer = "_footer_iuxfi_1";
const footerInner = "_footerInner_iuxfi_8";
const styles$8 = {
  footer,
  footerInner,
  "framework-info": "_framework-info_iuxfi_32"
};
function Footer(props) {
  const { children } = props;
  if (children) return children;
  return /* @__PURE__ */ jsxRuntime.jsx("footer", { className: styles$8.footer, children: /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: styles$8.footerInner,
      style: {
        backgroundImage: `url(${baseUrl(props.footerImg)})`
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { children: "©2020 - 2023 By XXX17" }),
        /* @__PURE__ */ jsxRuntime.jsxs("p", { className: styles$8["framework-info"], children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: "框架" }),
          /* @__PURE__ */ jsxRuntime.jsx(Link, { href: "https://github.com/GitHubxxx17/fispo", children: "Fispo" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: "|" }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: "主题" }),
          /* @__PURE__ */ jsxRuntime.jsx(Link, { href: "https://github.com/GitHubxxx17/fispo", children: "fish-in-pool" })
        ] })
      ]
    }
  ) });
}
const sidebar = "_sidebar_18neh_1";
const stickyLayout = "_stickyLayout_18neh_8";
const styles$7 = {
  sidebar,
  stickyLayout
};
const card = "_card_5w79l_1";
const avatar = "_avatar_5w79l_12";
const author = "_author_5w79l_21";
const header = "_header_5w79l_75";
const list = "_list_5w79l_112";
const left = "_left_5w79l_118";
const right = "_right_5w79l_131";
const title = "_title_5w79l_137";
const time = "_time_5w79l_146";
const progress = "_progress_5w79l_155";
const content = "_content_5w79l_162";
const active = "_active_5w79l_178";
const styles$6 = {
  card,
  avatar,
  author,
  "author-name": "_author-name_5w79l_26",
  "author-description": "_author-description_5w79l_31",
  "author-data": "_author-data_5w79l_34",
  "follow-btn": "_follow-btn_5w79l_53",
  header,
  "card-announcement": "_card-announcement_5w79l_84",
  "card-article": "_card-article_5w79l_87",
  "card-list": "_card-list_5w79l_93",
  list,
  left,
  right,
  title,
  time,
  "card-toc": "_card-toc_5w79l_151",
  progress,
  content,
  active,
  "card-tag-cloud": "_card-tag-cloud_5w79l_187"
};
const AuthorCard = (props) => {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6.author, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$6.avatar, children: /* @__PURE__ */ jsxRuntime.jsx(Image, { src: props.avatar }) }),
    /* @__PURE__ */ jsxRuntime.jsx("h2", { className: styles$6["author-name"], children: props == null ? void 0 : props.author }),
    /* @__PURE__ */ jsxRuntime.jsx("p", { className: styles$6["author-description"], children: props == null ? void 0 : props.description }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6["author-data"], children: [
      /* @__PURE__ */ jsxRuntime.jsxs(Link, { href: "/", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "文章" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: props == null ? void 0 : props.articleNums })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(Link, { href: "/tag", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "标签" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: props == null ? void 0 : props.tagsNums })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(Link, { href: "/category", children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "分类" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: props == null ? void 0 : props.categorizeNums })
      ] })
    ] }),
    ((_a = props == null ? void 0 : props.button) == null ? void 0 : _a.enable) && /* @__PURE__ */ jsxRuntime.jsx("button", { className: styles$6["follow-btn"], children: /* @__PURE__ */ jsxRuntime.jsxs(Link, { href: (_b = props == null ? void 0 : props.button) == null ? void 0 : _b.link, target: "_blank", rel: "noreferrer", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: (_c = props == null ? void 0 : props.button) == null ? void 0 : _c.icon }),
      (_d = props == null ? void 0 : props.button) == null ? void 0 : _d.text
    ] }) })
  ] });
};
const AuthorCard$1 = React.memo(AuthorCard);
const AnnouncementCard = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6["card-announcement"], children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6.header, children: [
      /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: (props == null ? void 0 : props.icon) || "history", shake: true }),
      props == null ? void 0 : props.title
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("p", { children: props.content })
  ] });
};
const AnnouncementCard$1 = React.memo(AnnouncementCard);
const ArticleCard = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6["card-article"], children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6.header, children: [
      /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: (props == null ? void 0 : props.icon) || "history" }),
      props == null ? void 0 : props.title
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("ul", { className: styles$6.list, children: props == null ? void 0 : props.data.map((item2, index) => {
      return /* @__PURE__ */ jsxRuntime.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$6.left, children: /* @__PURE__ */ jsxRuntime.jsx(Link, { href: item2.path, children: /* @__PURE__ */ jsxRuntime.jsx(Image, { src: item2.cover, alt: "" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6.right, children: [
          /* @__PURE__ */ jsxRuntime.jsx(Link, { href: item2.path, children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: styles$6.title, children: item2.title }) }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: styles$6.time, children: item2.date })
        ] })
      ] }, `${item2.title}-${index}`);
    }) })
  ] });
};
const ArticleCard$1 = React.memo(ArticleCard);
const ListCard = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6["card-list"], children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6.header, children: [
      /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: (props == null ? void 0 : props.icon) || "folder-open" }),
      props == null ? void 0 : props.title
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("ul", { className: styles$6.list, children: Object.entries(props == null ? void 0 : props.data).slice(0, props == null ? void 0 : props.limit).map(([name, value], index) => {
      return /* @__PURE__ */ jsxRuntime.jsx("li", { children: props.hover ? /* @__PURE__ */ jsxRuntime.jsxs(Link, { href: `/category/${name}`, children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: name }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: Array.isArray(value) ? value.length : value })
      ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: name }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: Array.isArray(value) ? value.length : value })
      ] }) }, `${name}-${index}`);
    }) })
  ] });
};
const ListCard$1 = React.memo(ListCard);
const TocCard = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [progress2, setProgress] = React.useState(0);
  const tocList = React.useRef([]);
  const tocScroller = React.useRef(null);
  const newTocData = React.useMemo(() => {
    const serialNumberArr = [];
    return props.data.map((item2) => {
      if (item2.depth > serialNumberArr.length) {
        while (item2.depth > serialNumberArr.length) {
          serialNumberArr.push(1);
        }
      } else if (item2.depth < serialNumberArr.length) {
        while (item2.depth < serialNumberArr.length) {
          serialNumberArr.pop();
        }
        serialNumberArr[item2.depth - 1]++;
      } else {
        serialNumberArr[item2.depth - 1]++;
      }
      return { ...item2, serialNumber: serialNumberArr.join(".") };
    });
  }, [props]);
  const tocActive = React.useCallback(
    (index, isScrollIntoView = true) => {
      setActiveIndex(index);
      const targetItem = tocList.current[index];
      if (!isScrollIntoView && !targetItem && tocScroller.current.scrollHeight === tocScroller.current.offsetHeight)
        return;
      const itemTop = targetItem.offsetTop;
      const itemBottom = itemTop + targetItem.offsetHeight;
      const containerTop = tocScroller.current.scrollTop;
      const containerBottom = containerTop + tocScroller.current.offsetHeight;
      if (itemTop < containerTop || itemBottom > containerBottom) {
        targetItem.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    },
    []
  );
  React.useLayoutEffect(() => {
    let headers = [];
    const NAV_HEIGHT2 = 60;
    const isBottom = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight;
    let articleTop = 0;
    const scrollToToc = (direction) => {
      if (headers.length == 0) {
        headers = Array.from(document.getElementsByClassName("header-anchor"));
        articleTop = headers[0].parentElement.offsetTop;
      }
      let scrollTop = Math.ceil(window.scrollY);
      if (scrollTop > articleTop) {
        setProgress(
          Math.ceil(
            (scrollTop - articleTop) / (document.documentElement.scrollHeight - articleTop) * 100
          )
        );
      } else {
        setProgress(0);
      }
      if (isBottom) {
        tocActive(headers.length - 1);
        return;
      }
      if (direction == "up") {
        scrollTop += NAV_HEIGHT2;
      }
      for (let i = 0; i < headers.length; i++) {
        const currentAnchor = headers[i];
        const nextAnchor = headers[i + 1];
        const currentTop = currentAnchor.parentElement.offsetTop;
        if (!nextAnchor) {
          tocActive(i);
          break;
        }
        if (i === 0 && scrollTop < currentTop || scrollTop == 0) {
          tocActive(0);
          break;
        }
        const nextTop = nextAnchor.parentElement.offsetTop;
        if (currentTop <= scrollTop && scrollTop < nextTop) {
          tocActive(i);
          break;
        }
      }
    };
    scrollManager.add(scrollToToc);
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6["card-toc"], children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6.header, children: [
      /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
        /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: (props == null ? void 0 : props.icon) || "stream" }),
        props == null ? void 0 : props.title
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: styles$6.progress, children: progress2 })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$6.content, ref: tocScroller, children: /* @__PURE__ */ jsxRuntime.jsx("ul", { children: newTocData == null ? void 0 : newTocData.map(({ id, text, depth, serialNumber }, index) => {
      return /* @__PURE__ */ jsxRuntime.jsx(
        "li",
        {
          className: classNames({
            [styles$6.active]: index == activeIndex
          }),
          style: {
            marginLeft: `${(depth - 1) * 20}px`
          },
          children: /* @__PURE__ */ jsxRuntime.jsxs(
            Link,
            {
              ref: (el) => {
                if (el) {
                  tocList.current.push(el);
                }
              },
              href: `#${id}`,
              onClick: (e) => {
                e.preventDefault();
                const target = document.getElementById(id);
                if (target) {
                  scrollManager.scrollToTarget(target, true);
                }
                tocActive(index, false);
              },
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { children: `${serialNumber}. ` }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { children: text })
              ]
            }
          )
        },
        `${text}-${index}`
      );
    }) }) })
  ] });
};
const TocCard$1 = React.memo(TocCard);
const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 70;
  const minLightness = 30;
  const maxLightness = 70;
  const lightness = Math.floor(Math.random() * (maxLightness - minLightness + 1)) + minLightness;
  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };
  return hslToHex(hue, saturation, lightness);
};
const getRandomTextSize = (size) => {
  return `${Math.min(size, 20) / 20 + 1}rem`;
};
const TagCard = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6["card-tag"], children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$6.header, children: [
      /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: "tags" }),
      props == null ? void 0 : props.title
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$6["card-tag-cloud"], children: Object.entries(props.data).map(([tag2, tagArr], index) => {
      return /* @__PURE__ */ jsxRuntime.jsx("span", { children: /* @__PURE__ */ jsxRuntime.jsx(
        Link,
        {
          href: `tag/${tag2}`,
          style: {
            color: getRandomColor(),
            fontSize: getRandomTextSize(tagArr.length)
          },
          children: tag2
        }
      ) }, `${tag2}-${index}`);
    }) })
  ] });
};
const TagCard$1 = React.memo(TagCard);
function Card(props) {
  const {
    type,
    authorData,
    listData,
    articleData,
    tocData,
    announcementData,
    tagData
  } = props;
  const getContent = () => {
    switch (type) {
      case "author":
        return /* @__PURE__ */ jsxRuntime.jsx(AuthorCard$1, { ...authorData });
      case "announcement":
        return /* @__PURE__ */ jsxRuntime.jsx(AnnouncementCard$1, { ...announcementData });
      case "list":
        return /* @__PURE__ */ jsxRuntime.jsx(ListCard$1, { ...listData });
      case "article":
        return /* @__PURE__ */ jsxRuntime.jsx(ArticleCard$1, { ...articleData });
      case "toc":
        return /* @__PURE__ */ jsxRuntime.jsx(TocCard$1, { ...tocData });
      case "tag":
        return /* @__PURE__ */ jsxRuntime.jsx(TagCard$1, { ...tagData });
      default:
        return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$6.card, children: getContent() });
}
function Sidebar(props) {
  const { children, pageData, isArticlePage = false } = props;
  const { siteData: siteData2 } = pageData;
  const { sidebar: sidebar2 } = siteData2.themeConfig;
  const {
    card_author,
    card_categories,
    card_recent_post,
    card_announcement,
    card_tags,
    card_webinfo
  } = sidebar2;
  if (children) return children;
  const [isUp, setIsUp] = React.useState(false);
  React.useEffect(() => {
    const scroll = (direction) => {
      setIsUp(direction == "up");
    };
    scrollManager.add(scroll);
    return () => {
      scrollManager.remove(scroll);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$7.sidebar, children: [
    card_author.enable && /* @__PURE__ */ jsxRuntime.jsx(
      Card,
      {
        type: "author",
        authorData: {
          author: siteData2.author,
          avatar: siteData2.avatar,
          description: (card_author == null ? void 0 : card_author.description) || siteData2.description,
          articleNums: pageData.articlesList.length,
          tagsNums: Object.keys(pageData.tags).length,
          categorizeNums: Object.keys(pageData.categories).length,
          button: card_author.button
        }
      }
    ),
    card_announcement.enable && /* @__PURE__ */ jsxRuntime.jsx(
      Card,
      {
        type: "announcement",
        announcementData: {
          title: "公告",
          icon: "bullhorn",
          content: card_announcement.content
        }
      }
    ),
    !isArticlePage && card_categories.enable && /* @__PURE__ */ jsxRuntime.jsx(
      Card,
      {
        type: "list",
        listData: {
          title: "分类",
          data: pageData.categories,
          limit: card_categories.limit,
          hover: true
        }
      }
    ),
    !isArticlePage && card_tags.enable && /* @__PURE__ */ jsxRuntime.jsx(
      Card,
      {
        type: "tag",
        tagData: {
          title: "标签",
          data: pageData.tags
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: styles$7.stickyLayout,
        style: { top: isUp ? "70px" : "20px" },
        children: [
          isArticlePage && /* @__PURE__ */ jsxRuntime.jsx(
            Card,
            {
              type: "toc",
              tocData: {
                title: "目录",
                data: pageData.toc
              }
            }
          ),
          card_recent_post.enable && /* @__PURE__ */ jsxRuntime.jsx(
            Card,
            {
              type: "article",
              articleData: {
                title: "最新文章",
                data: pageData.articlesList.slice(0, card_recent_post.limit)
              }
            }
          ),
          !isArticlePage && card_webinfo.enable && /* @__PURE__ */ jsxRuntime.jsx(
            Card,
            {
              type: "list",
              listData: {
                title: "网站资讯",
                icon: "chart-line",
                data: {
                  "文章数目：": pageData.articlesList.length,
                  "已运行时间 :": `1 天`,
                  "最后更新时间 :": `2025-03-${(/* @__PURE__ */ new Date()).getDay()}`
                }
              }
            }
          )
        ]
      }
    )
  ] });
}
const Content = () => {
  const handleRoutes2 = React.useMemo(() => {
    return routes.map((route) => {
      return { ...route, path: baseUrl(route.path) };
    });
  }, [routes]);
  const routeElement = reactRouter.useRoutes(handleRoutes2);
  return routeElement;
};
const Content$1 = React.memo(Content);
const styles$5 = {
  "article-layout": "_article-layout_zsltx_1",
  "article-content": "_article-content_zsltx_10",
  "post-copyright": "_post-copyright_zsltx_103",
  "post-copyright-item": "_post-copyright-item_zsltx_125",
  "article-tag": "_article-tag_zsltx_138",
  "article-pagination": "_article-pagination_zsltx_158",
  "pagination-left": "_pagination-left_zsltx_166",
  "pagination-right": "_pagination-right_zsltx_167",
  "pagination-info": "_pagination-info_zsltx_171",
  "article-recommend": "_article-recommend_zsltx_183",
  "recommend-title": "_recommend-title_zsltx_186",
  "recommend-list": "_recommend-list_zsltx_191",
  "recommend-info": "_recommend-info_zsltx_203",
  "article-img-hover": "_article-img-hover_zsltx_214"
};
function ArticleLayout(props) {
  const { articlesList, pagePath, frontmatter: frontmatter2, categories, siteData: siteData2 } = props.pageData;
  const { title: title2, author: author2 } = siteData2;
  const [currIndex, setCurrIndex] = React.useState(0);
  const copyrightText = React.useMemo(() => {
    const locationObj = typeof location === "undefined" ? {
      href: "",
      origin: ""
    } : location;
    return [
      { meta: "文章作者：", value: /* @__PURE__ */ jsxRuntime.jsx(Link, { href: "", children: author2 }) },
      {
        meta: "文章链接：",
        value: /* @__PURE__ */ jsxRuntime.jsx(Link, { href: locationObj.href, children: locationObj.href })
      },
      {
        meta: "版权声明：",
        value: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          "本博客所有文章除特别声明外，均采用",
          /* @__PURE__ */ jsxRuntime.jsx(Link, { href: "https://creativecommons.org/licenses/by-nc-sa/4.0/", children: "CC BY-NC-SA 4.0" }),
          "许可协议。转载请注明来自",
          /* @__PURE__ */ jsxRuntime.jsx(Link, { href: locationObj.origin, children: title2 }),
          "！"
        ] })
      }
    ];
  }, []);
  const recmmendList = React.useMemo(() => {
    const category2 = frontmatter2.categories;
    return articlesList.filter((article) => {
      return categories[category2].includes(article.path) && decodeURI(article.path) !== decodeURI(pagePath);
    });
  }, [frontmatter2, articlesList]);
  React.useEffect(() => {
    setCurrIndex(
      articlesList.findIndex(
        (article) => decodeURI(article.path) === decodeURI(pagePath)
      )
    );
  }, [articlesList]);
  React.useLayoutEffect(() => {
    setTimeout(() => {
      mediumZoom(".article-img");
    }, 500);
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$5["article-layout"], children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$5["article-content"], children: /* @__PURE__ */ jsxRuntime.jsx(Content$1, {}) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$5["post-copyright"], children: copyrightText.map((item2, index) => {
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: styles$5["post-copyright-item"],
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: item2.meta }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { children: item2.value })
          ]
        },
        `post-copyright-${index}`
      );
    }) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$5["article-tag"], children: frontmatter2.tags.map((item2, index) => {
      return /* @__PURE__ */ jsxRuntime.jsx("span", { children: /* @__PURE__ */ jsxRuntime.jsx(Link, { href: `/tag/${item2}`, children: item2 }) }, `${item2}-${index}`);
    }) }),
    articlesList.length > 1 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$5["article-pagination"], children: [
      currIndex > 0 && /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: classNames(
            styles$5["pagination-left"],
            styles$5["article-img-hover"]
          ),
          children: /* @__PURE__ */ jsxRuntime.jsxs(Link, { href: articlesList[currIndex - 1].path, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Image, { src: articlesList[currIndex - 1].cover, alt: "" }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$5["pagination-info"], children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: "上一篇" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: articlesList[currIndex - 1].title })
            ] })
          ] })
        }
      ),
      currIndex < articlesList.length - 1 && /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: classNames(
            styles$5["pagination-right"],
            styles$5["article-img-hover"]
          ),
          children: /* @__PURE__ */ jsxRuntime.jsxs(Link, { href: articlesList[currIndex + 1].path, children: [
            /* @__PURE__ */ jsxRuntime.jsx(Image, { src: articlesList[currIndex + 1].cover, alt: "" }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$5["pagination-info"], children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: "下一篇" }),
              /* @__PURE__ */ jsxRuntime.jsx("span", { children: articlesList[currIndex + 1].title })
            ] })
          ] })
        }
      )
    ] }),
    recmmendList.length !== 0 && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$5["article-recommend"], children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$5["recommend-title"], children: "相关推荐" }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$5["recommend-list"], children: recmmendList.map((recmmend, index) => {
        return /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: styles$5["article-img-hover"],
            children: /* @__PURE__ */ jsxRuntime.jsxs(Link, { href: recmmend.path, children: [
              /* @__PURE__ */ jsxRuntime.jsx(Image, { src: recmmend.cover, alt: "" }),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$5["recommend-info"], children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { children: recmmend.date }),
                /* @__PURE__ */ jsxRuntime.jsx("span", { children: recmmend.title })
              ] })
            ] })
          },
          `${recmmend.title}-${index}`
        );
      }) })
    ] })
  ] });
}
const tag = "_tag_1k45l_1";
const tagItem = "_tagItem_1k45l_10";
const styles$4 = {
  tag,
  tagItem
};
function Tags(props) {
  const { tags = [] } = props;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$4.tag, children: Object.keys(tags).map((name, index) => {
    return /* @__PURE__ */ jsxRuntime.jsx(
      Link,
      {
        className: styles$4.tagItem,
        style: { color: getRandomColor() },
        href: `tag/${name}`,
        children: name
      },
      `${name}-${index}`
    );
  }) });
}
const category = "_category_1l5ig_1";
const styles$3 = {
  category
};
function Categories(props) {
  const { categories } = props;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$3.category, children: /* @__PURE__ */ jsxRuntime.jsx("ul", { children: Object.entries(categories).map(([name, value], index) => {
    return /* @__PURE__ */ jsxRuntime.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntime.jsx(Link, { href: `category/${name}`, children: name }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { children: `(${value.length})` })
    ] }, `${name}-${index}`);
  }) }) });
}
function CustomLayout(props) {
  const { pagePath, tags, articlesList, categories } = props.pageData;
  const pathList = pagePath.split("/").filter(Boolean);
  console.log(pathList);
  const type = pathList[0];
  if (type == "tag") {
    return pathList.length == 1 ? /* @__PURE__ */ jsxRuntime.jsx(Tags, { tags }) : /* @__PURE__ */ jsxRuntime.jsx(
      ArticleList,
      {
        articleList: articlesList,
        filter: { type: "tag", keyword: decodeURIComponent(pathList.at(-1)) }
      }
    );
  } else if (type === "category") {
    return pathList.length == 1 ? /* @__PURE__ */ jsxRuntime.jsx(Categories, { categories }) : /* @__PURE__ */ jsxRuntime.jsx(
      ArticleList,
      {
        articleList: articlesList,
        filter: {
          type: "category",
          keyword: decodeURIComponent(pathList.at(-1))
        }
      }
    );
  } else {
    return /* @__PURE__ */ jsxRuntime.jsx("div", {});
  }
}
const rightSide = "_rightSide_g11mb_1";
const styles$2 = {
  rightSide,
  "rightSide-settings": "_rightSide-settings_g11mb_8",
  "rightSide-item": "_rightSide-item_g11mb_14",
  "rightSide-hide": "_rightSide-hide_g11mb_30"
};
function localGetData(name) {
  if (typeof localStorage === "undefined") {
    return null;
  }
  const data = localStorage.getItem(name);
  if (data !== null) {
    return JSON.parse(data);
  } else {
    return null;
  }
}
function localSaveData(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}
const THEME = "THEME";
function RightSide(props) {
  const { setSideBarHide } = props;
  const [isTop, setIsTop] = React.useState(true);
  const [settingsIsHide, setSettingsIsHide] = React.useState(true);
  const rightSideSettings = React.useMemo(
    () => [
      {
        icon: "adjust",
        text: "深色和浅色模式切换",
        click: () => {
          const classList = document.documentElement.classList;
          if (classList.contains("dark")) {
            localSaveData(THEME, "light");
          } else {
            localSaveData(THEME, "dark");
          }
          classList.toggle("dark");
        }
      },
      {
        icon: "arrows-alt-h",
        text: "单栏和双栏的切换",
        click: () => {
          setSideBarHide();
        }
      }
    ],
    []
  );
  const rightSideOptions = React.useMemo(
    () => [
      {
        icon: "cog",
        text: "设置",
        isSpin: true,
        click: () => {
          setSettingsIsHide((pre) => !pre);
        }
      },
      {
        icon: "arrow-up",
        text: "回到顶部",
        click: () => {
          scrollManager.scrollToTarget(document.body, true);
        }
      }
    ],
    []
  );
  const setClassList = React.useCallback((isDark = false) => {
    const classList = document.documentElement.classList;
    if (isDark) {
      classList.add("dark");
    } else {
      classList.remove("dark");
    }
  }, []);
  const updateTheme = React.useCallback(() => {
    const theme = localGetData(THEME);
    setClassList(theme === "dark");
  }, []);
  React.useEffect(() => {
    const showRightSide = (_, isTop2) => {
      setIsTop(isTop2);
    };
    scrollManager.add(showRightSide);
    updateTheme();
    window.addEventListener("storage", updateTheme);
    return () => {
      scrollManager.remove(showRightSide);
      window.removeEventListener("storage", updateTheme);
    };
  }, []);
  const rightSideItemRender = React.useCallback(
    (item2, index) => {
      return /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: styles$2["rightSide-item"],
          title: item2.text,
          onClick: () => {
            var _a;
            (_a = item2.click) == null ? void 0 : _a.call(item2);
          },
          children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon: item2.icon, isSpin: item2 == null ? void 0 : item2.isSpin })
        },
        `${item2}-${index}`
      );
    },
    []
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: classNames(styles$2.rightSide, {
        [styles$2["rightSide-hide"]]: isTop
      }),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: classNames(styles$2["rightSide-settings"], {
              [styles$2["rightSide-hide"]]: settingsIsHide
            }),
            children: rightSideSettings.map(rightSideItemRender)
          }
        ),
        rightSideOptions.map(rightSideItemRender)
      ]
    }
  );
}
const notFoundLayout = "_notFoundLayout_18laa_1";
const notFoundImg = "_notFoundImg_18laa_15";
const errorInfo = "_errorInfo_18laa_30";
const styles$1 = {
  notFoundLayout,
  notFoundImg,
  errorInfo
};
const NotFoundLayout = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$1.notFoundLayout, children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles$1.notFoundImg, children: /* @__PURE__ */ jsxRuntime.jsx(Image, { src: props.notFoundImg, alt: "404" }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$1.errorInfo, children: [
      /* @__PURE__ */ jsxRuntime.jsx("h1", { children: "404" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { children: "页面没有找到" })
    ] })
  ] });
};
function Layout(props) {
  const { pageData } = props;
  const { pageType, title: title2, siteData: siteData2, frontmatter: frontmatter2 } = pageData;
  const { title: siteTitle, themeConfig } = siteData2;
  const { sidebar: sidebar2, navMenus, banner: banner2 } = themeConfig;
  const isHomePage = pageType === "home";
  const isArticlePage = pageType === "article";
  const is404 = pageType === "404";
  const [sidebarEnable, setSidebarEnable] = React.useState(() => {
    if (is404) return false;
    const hide2 = localGetData("sidebarHide");
    if (hide2 !== null) {
      return !hide2;
    }
    return sidebar2.enable;
  });
  const [sideBarHide, setSideBarHide] = React.useState(sidebar2.hide);
  const getCurrentLayout = () => {
    if (isHomePage) {
      return /* @__PURE__ */ jsxRuntime.jsx(HomeLayout, { pageData });
    } else if (isArticlePage) {
      return /* @__PURE__ */ jsxRuntime.jsx(ArticleLayout, { pageData });
    } else if (pageType === "custom") {
      return /* @__PURE__ */ jsxRuntime.jsx(CustomLayout, { pageData });
    } else {
      return /* @__PURE__ */ jsxRuntime.jsx(NotFoundLayout, { notFoundImg: siteData2.notFoundImg });
    }
  };
  React.useEffect(() => {
    scrollManager.init();
    const hide2 = localGetData("sidebarHide");
    if (hide2 !== null) {
      setSideBarHide(hide2);
    }
    return () => {
      scrollManager.destory();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: styles$a.layout,
      style: {
        backgroundImage: `url(${baseUrl(siteData2.backgroundImg)})`
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(reactHelmetAsync.Helmet, { children: /* @__PURE__ */ jsxRuntime.jsx("title", { children: isHomePage ? title2 : `${title2} | ${siteData2.title}` }) }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "header",
          {
            className: classNames(styles$a.header, {
              [styles$a["not-home-page"]]: !isHomePage
            }),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Nav, { title: siteTitle, menus: navMenus }),
              /* @__PURE__ */ jsxRuntime.jsx(
                Banner,
                {
                  isHomePage,
                  isArticlePage,
                  title: title2,
                  bannerData: banner2,
                  articleData: frontmatter2
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("main", { className: styles$a.main, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles$a.mainInner, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: styles$a.mainLeft,
              style: {
                width: sideBarHide ? "80%" : ""
              },
              children: getCurrentLayout()
            }
          ),
          sidebarEnable && /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: classNames(styles$a.mainRight, {
                [styles$a.sidebarLeft]: sidebar2.position === "left",
                [styles$a.sidebarHide]: sideBarHide
              }),
              children: /* @__PURE__ */ jsxRuntime.jsx(
                Sidebar,
                {
                  pageData,
                  isArticlePage
                }
              )
            }
          )
        ] }) }),
        !is404 && /* @__PURE__ */ jsxRuntime.jsx(
          RightSide,
          {
            pageData,
            setSideBarHide: () => {
              setSideBarHide((pre) => {
                if (sidebarEnable === false) {
                  setSidebarEnable(true);
                }
                localSaveData("sidebarHide", !pre);
                return !pre;
              });
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(Footer, { footerImg: banner2.img })
      ]
    }
  );
}
const loading = "_loading_y2833_1";
const finishLoading = "_finishLoading_y2833_78";
const styles = {
  loading,
  "loading-left-bg": "_loading-left-bg_y2833_8",
  "loading-right-bg": "_loading-right-bg_y2833_9",
  "spinner-box": "_spinner-box_y2833_15",
  "spinner-box-1": "_spinner-box-1_y2833_23",
  "spinner-box-2": "_spinner-box-2_y2833_24",
  "loading-text": "_loading-text_y2833_38",
  finishLoading
};
const Preloader = (props) => {
  const [hidden, setHidden] = React.useState(false);
  React.useEffect(() => {
    console.log("finishLoading", props.finishLoading);
    if (!props.finishLoading) return;
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1e3);
    return () => {
      clearTimeout(timer);
    };
  }, [props.finishLoading]);
  return !hidden && /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: classNames(styles.loading, {
        [styles.finishLoading]: props.finishLoading
      }),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles["loading-left-bg"] }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles["loading-right-bg"] }),
        !props.finishLoading && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: styles["spinner-box"], children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles["spinner-box-1"] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles["spinner-box-2"] }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: styles["loading-text"], children: "加载中···" })
        ] })
      ]
    }
  );
};
async function initPageData(routePath) {
  routePath = removeBase(routePath);
  const pathList = routePath.split("/").filter(Boolean);
  const isHomeOrCustom = pathList.length === 0 || siteData.themeConfig.navMenus.find(
    (item2) => item2.path == `/${pathList[0]}`
  );
  const { articlesList, tags, categories } = await handleRoutes(routes);
  sortByDate(articlesList);
  const getPageData = (pageType, frontmatter2, title2, toc2) => {
    return {
      pageType,
      siteData,
      frontmatter: frontmatter2,
      pagePath: routePath,
      title: title2,
      articlesList,
      tags,
      categories,
      toc: toc2
    };
  };
  if (isHomeOrCustom) {
    let bannerTitle = siteData.title;
    if (pathList.length == 1) {
      bannerTitle = siteData.themeConfig.navMenus.find(
        (item2) => item2.path == `/${pathList[0]}`
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
  const [finishLoading2, setFinishLoading] = React.useState(false);
  React.useEffect(() => {
    const unmountLoading = () => {
      checkAllAssetsLoaded().then(() => {
        setFinishLoading(true);
      });
    };
    unmountLoading();
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Preloader, { finishLoading: finishLoading2 }),
    /* @__PURE__ */ jsxRuntime.jsx(Layout, { pageData })
  ] });
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
  let location2 = {
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
    location: location2,
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
