import { defineConfig } from "vitepress";
export default defineConfig({
  title: 'BoXueDuoCai',
  description: "BoXueDuoCai's blog",
  lastUpdated: true,
  locales: {
    root: {
      label: 'Chinese',
      lang: 'zh',

      themeConfig: {
        nav: [
          // { text: '', link: '/zh/' },
          // { text: '', link: '/zh/' },
          // { text: '', link: '/zh/' },
          // { text: '', link: '/zh/' },
          // { text: '', link: '/zh/' },
          { text: '学习资源', link: '/zh/' },
          // { text: 'mc', link: '/zh/' },
          { text: 'Maths', link: '/zh/' },
          { text: '编程', link: '/zh/programming/' },
          { text: "首页", link: "/" },
          { text: 'Github', link: "https://github.com/BoXueDuoCai/" },
          // {
          //   text: 'Dropdown Menu',
          //   items: [
          //     { text: 'Item A', link: '/item-1' },
          //     { text: 'Item B', link: '/item-2' },
          //     { text: 'Item C', link: '/item-3' },
          //   ],
          // },
    
          // ...
        ],
    
        sidebar: {
          '/zh/':[
            {
              collapsed: true,
              items: [
                { text: '简介', link: '/zh/' },
              ],
            },
          ],
          '/zh/programming/': [
            {
              text: '编程',
              collapsed: true,
              items: [
                { text: '简介', link: '/zh/programming/' },
              ],
            },
          ],
          // '/zh/test/':[
          //   {
          //     text: '测试',
          //     collapsed: true,
          //     items: [
          //       { text: 'Test', link: '/zh/test/test' },
          //       {
          //         text: '测试2级',
          //         items: [
          //           { text: '测试2级内容', link: '/zh/test/test' },
          //         ],
          //       },
          //     ],
          //   },
          // ],
        },
        lastUpdated: {
          text: "最后更新",
          formatOptions: {
              dateStyle: "medium",
              timeStyle: "short"
          }
        },
        docFooter: {
            prev: "上一页",
            next: "下一页"
        },
        search: {
            provider: "local",
        },
        externalLinkIcon: true
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    }
  },

});


// import { defineConfig } from "vitepress";


// export default defineConfig({
//     srcDir: "src",
//     lang: "zh-Hans",
//     title: "BoXueDuoCai",
//     description: "boxueduocai的个人博客",
//     // sitemap: {
//     //     hostname: "https://boxueduocai.github.io"
//     // },
//     themeConfig: {
//         // https://vitepress.dev/reference/default-theme-config
//         nav: [
//             { text: 'Example', link: '/example' },
//         //     { text: "首页", link: "/" },
//         //     { text: "开始使用", link: "/guide/introduction", activeMatch: "/guide" },
//         //     { text: "开发文档", link: "/docs/introduction", activeMatch: "/docs" }
//         ],
//         sidebar: [
//           {
//             text: '测试',
//             items: [
//               { text: 'Example', link: '/example' },
//               // ...
//             ],
//           },
//         ],
//         // sidebar: [
//         //     {
//         //         text: "开始使用",
//         //         collapsed: false,
//         //         items: [
//         //             { text: "介绍", link: "/guide/introduction" },
//         //             { text: "安装", link: "/guide/install" },
//         //             { text: "插件", link: "/guide/plugins" }
//         //         ]
//         //     },
//         //     {
//         //         text: "开发文档",
//         //         collapsed: false,
//         //         items: [
//         //             { text: "开始你的第一个插件", link: "/docs/introduction" },
//         //             { text: "LiteLoader API", link: "/docs/liteloader-api" },
//         //             { text: "Web Components", link: "/docs/web-components" },
//         //             { text: "自定义协议方案", link: "/docs/protocol-scheme" }
//         //         ]
//         //     }
//         // ],
//         // editLink: {
//         //     pattern: "https://github.com/LiteLoaderQQNT/LiteLoaderQQNT.github.io/edit/main/src/:path",
//         //     text: "在GitHub上编辑此页面"
//         // },
//         lastUpdated: {
//             text: "最后更新",
//             formatOptions: {
//                 dateStyle: "medium",
//                 timeStyle: "short"
//             }
//         },
//         docFooter: {
//             prev: "上一页",
//             next: "下一页"
//         },
//         search: {
//             provider: "local",
//         },
//         footer: {
//             // message: "赞助：<a href='https://afdian.net/a/mojinran'>爱发电</a></br>基于 <a href='https://github.com/LiteLoaderQQNT/LiteLoaderQQNT/blob/main/LICENSE'>MIT</a> 许可发布",
//             copyright: "版权所有 © 2024 <a href='https://github.com/BoXueDuoCai'>BoXueDuoCai</a>"
//         },
//         externalLinkIcon: true
//     }
// });
