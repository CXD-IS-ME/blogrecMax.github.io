import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "介绍及安装",
        icon: "pen-to-square",
        prefix: "介绍及安装/",
        children: [
          { text: "介绍及安装", icon: "pen-to-square", link: "jieShaoAnZhuang" }
        ],
      },
      {
        text: "基类",
        icon: "pen-to-square",
        prefix: "基类/",
        children: [
          { text: "基类", icon: "pen-to-square", link: "article8" }
        ],
      },
      {
        text: "模型",
        icon: "pen-to-square",
        prefix: "模型/",
        children: [
          { text: "模型", icon: "pen-to-square", link: "article7" }
        ],
      },
      {
        text: "路由",
        icon: "pen-to-square",
        prefix: "路由/",
        children: [
          { text: "路由", icon: "pen-to-square", link: "route" }
        ],
      },
      {
        text: "restful风格",
        icon: "pen-to-square",
        prefix: "restful风格/",
        children: [
          { text: "restful风格", icon: "pen-to-square", link: "restful" }
          
        ],
      },
      {
        text: "api",
        icon: "pen-to-square",
        prefix: "api/",
        children: [
          { text: "增", icon: "pen-to-square", link: "add" },
          { text: "删", icon: "pen-to-square", link: "delete" },
          { text: "查", icon: "pen-to-square", link: "look" },
          { text: "改", icon: "pen-to-square", link: "update" }, 
          { text: "模糊查", icon: "pen-to-square", link: "read" },
          { text: "登录", icon: "pen-to-square", link: "login" },
        ],
      },
       {
        text: "验证器",
        icon: "pen-to-square",
        prefix: "验证器/",
        children: [
          { text: "规则验证器", icon: "pen-to-square", link: "article6" },
          { text: "注解验证器", icon: "pen-to-square", link: "article9" }
        ],
      },
      {
        text: "中间件",
        icon: "pen-to-square",
        prefix: "中间件/",
        children: [
          { text: "中间件", icon: "pen-to-square", link: "zhongJianJian" }
          
        ],
      },
      {
        text: "跨域",
        icon: "pen-to-square",
        prefix: "跨域/",
        children: [
          { text: "跨域", icon: "pen-to-square", link: "kuaYu" }
        ],
      },
      {
        text: "扩展",
        icon: "pen-to-square",
        prefix: "扩展/",
        children: [
          { text: "扩展", icon: "pen-to-square", link: "plugin" }
        ],
      },
      {
        text: "处理",
        icon: "pen-to-square",
        prefix: "处理/",
        children: [
          { text: "异常处理", icon: "pen-to-square", link: "errordiss" },
          { text: "日志处理", icon: "pen-to-square", link: "rizhi" },
          { text: "图像处理", icon: "pen-to-square", link: "pict" }
        ],
      },
      {
        text: "打包",
        icon: "pen-to-square",
        prefix: "打包/",
        children: [
          { text: "打包", icon: "pen-to-square", link: "article10" }
        ],
      },
    ],
  },
  {
    text: "GitHub",
    icon: "book",
    link: "https://github.com/CXD-IS-ME/blogHexo.github.io.git",
  },
]);
