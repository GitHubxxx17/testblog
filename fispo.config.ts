import type { ThemeConfig } from "@fispo/particle";
import { preloaderPlugin } from "@fispo/plugin-preloader";
import { defineConfig } from "fispo-core";

export default defineConfig({
  base: "/testblog",
  title: "fispo的个人博客",
  author: "fispo",
  description: "学无止境",
  notFoundImg: "/404.png",
  themeConfig: {
    navMenus: [
      {
        title: "首页",
        path: "/",
        icon: "home",
      },
      {
        title: "标签",
        path: "/tag",
        icon: "tag",
      },
      {
        title: "分类",
        path: "/category",
        icon: "folder-open",
      },
      {
        title: "关于",
        path: "/about",
        icon: "heart",
      },
    ],
  },
  preloader: true,
  plugins: [preloaderPlugin()],
});
