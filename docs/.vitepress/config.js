import {
  defineConfig
} from 'vitepress';
import markdownItKatex from 'markdown-it-katex';





const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
  'mjx-container',
  'mjx-assistive-mml',
];


// https://vitepress.dev/reference/site-config
export default defineConfig({

  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  // 由于vitepress编译生成静态html文件时，无法识别插件生成的特殊标签，故需在编译时进行处理，将特殊标签定位自定义标签，防止编译报错
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  },

  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css',
      crossorigin: ''
    }],
    [
      'link',
      {
        rel: 'icon',
        href: '/image/favicon.png'
      },
    ],
  ],
  
  lang: 'zh-CN',
  title: '2023招新',
  build: {
    rollupOptions: {
      external: ['axios'],
    },
  },

  themeConfig: {
    siteTitle: '微光工作室',
    logo: '/image/favicon.png',
    // https://vitepress.dev/reference/default-theme-config

    //导航栏
    nav: [{
        text: '招新说明',
        link: '/md/招新说明.md',
      },
      {
        text: '日常基础',
        activeMatch: '/md/日常基础/',
        items: [{
            text: '日常-01：什么是计算机？',
            link: '/md/日常基础/日常-01：什么是计算机？.md'
          },
          {
            text: '日常-02：markdown',
            link: '/md/日常基础/日常-02：markdown.md'
          },
          {
            text: '日常-03：数据的表示',
            link: '/md/日常基础/日常-03：数据的表示.md'
          },
          {
            text: '日常-04：IDE编程前的准备',
            link: '/md/日常基础/日常-04：IDE编程前的准备.md'
          },
          {
            text: '日常-05：了解linux',
            link: '/md/日常基础/日常-05：了解linux.md'
          },
          {
            text: '日常-06：代码管理',
            link: '/md/日常基础/日常-06：代码管理.md'
          },
          {
            text: '日常-07：loafer想打派(网络)',
            link: '/md/日常基础/日常-07：loafer想打派(网络).md'
          },
        ]
      },
      {
        text: 'C语言',
        items: [{
            text: 'C语言简介',
            link: '/md/C语言/',
          },
          {
            text: 'C基础',
            items: [{
                text: 'C Basis-01 Hello,world!',
                link: '/md/C语言/C Basis-01 Hello,world!.md'
              },
              {
                text: 'C Basis-02 来邂逅语句吧',
                link: '/md/C语言/C Basis-02 来邂逅语句吧.md'
              },
              {
                text: 'C Basis-03 神秘密文',
                link: '/md/C语言/C Basis-03 神秘密文.md'
              },
              {
                text: 'C Basis-04 赢不了的游戏',
                link: '/md/C语言/C Basis-04 赢不了的游戏.md'
              },
            ]
          },
          {
            text: 'C项目',
            items: [{
                text: 'C Project- 00 Manual',
                link: '/md/C语言/C Project- 00 Manual.md'
              },
              {
                text: 'C Project-01  Stack',
                link: '/md/C语言/C Project-01  Stack.md'
              },
              {
                text: 'C project-02 Management and Testing',
                link: '/md/C语言/C project-02 Management and Testing.md'
              },
              {
                text: 'C project-03 The Last',
                link: '/md/C语言/C project-03 The Last.md'
              },
            ]
          },
          {
            text: 'C进阶',
            items: [{
              text: 'C 进阶-动态内存分配器',
              link: '/md/C语言/C 进阶-动态内存分配器.md'
            },
          ]
          },
        ]
      },
      {
        text: '前端',
        items: [{
            text: '前端简介',
            link: '/md/前端/',
          },
          {
            text: '前端-01 Welcome！',
            link: '/md/前端/前端-01 Welcome！.md'
          },
          {
            text: '前端-02 第三个“剑客”',
            link: '/md/前端/前端-02 第三个“剑客”.md'
          },
          {
            text: '前端-03 前后端通信',
            link: '/md/前端/前端-03 前后端通信.md'
          },
          {
            text: '前端-04 初识框架',
            link: '/md/前端/前端-04 初识框架.md'
          },
        ]
      },
      {
        text: '后端',
        items: [{
            text: '后端简介',
            link: '/md/后端/',
          },
          {
            text: 'JAVA',
            items: [{
                text: 'Java-01：基础',
                link: '/md/后端/Java01.md'
              },
              {
                text: 'Java-02：语言特性',
                link: '/md/后端/Java02.md'
              },
              {
                text: 'Java-03：异常，网络',
                link: '/md/后端/Java03.md'
              },
            ]
          },
          {
            text: 'GO',
            items: [{
                text: 'GO-01：level0',
                link: '/md/后端/Go语言基础-level0.md'
              },
              {
                text: 'GO-02：level1',
                link: '/md/后端/Go语言基础-level1.md'
              },

            ]
          },
          {
            text: '后端综合',
            items: [{
                text: '综合项目-数据库',
                link: '/md/后端/后端综合数据库出题.md'
              },
              {
                text: '综合项目-项目实践',
                link: '/md/后端/后端综合项目出题.md'
              },
            ]
          }
        ]
      },
      {
        text: '机器学习',
        items: [{
            text: '机器学习简介',
            link: '/md/机器学习/',
          },
          {
            text: '机器学习方向-01：入门理论基础',
            link: '/md/机器学习/机器学习方向-01：入门理论基础.md'
          },
          {
            text: '机器学习方向-02：梯度下降实践',
            link: '/md/机器学习/机器学习方向-02：梯度下降实践.md'
          },
          {
            text: '机器学习方向-03：文本分类',
            link: '/md/机器学习/机器学习方向-03：文本分类'
          },
          {
            text: '机器学习方向-04：大语言模型GPT',
            link: '/md/机器学习/机器学习方向-04：大语言模型GPT'
          },
        ]
      },
      {
        text: '光点计划',
        link: 'http://lab.glimmer.org.cn'
      },
    ],

    //侧边栏
    sidebar: {
      '/md/日常基础/': [{
        text: '日常基础',
        items: [{
            text: '日常-01：什么是计算机？',
            link: '/md/日常基础/日常-01：什么是计算机？.md'
          },
          {
            text: '日常-02：markdown',
            link: '/md/日常基础/日常-02：markdown.md'
          },
          {
            text: '日常-03：数据的表示',
            link: '/md/日常基础/日常-03：数据的表示.md'
          },
          {
            text: '日常-04：IDE编程前的准备',
            link: '/md/日常基础/日常-04：IDE编程前的准备.md'
          },
          {
            text: '日常-05：了解linux',
            link: '/md/日常基础/日常-05：了解linux.md'
          },
          {
            text: '日常-06：代码管理',
            link: '/md/日常基础/日常-06：代码管理.md'
          },
          {
            text: '日常-07：loafer想打派(网络)',
            link: '/md/日常基础/日常-07：loafer想打派(网络)'
          },
        ]
      }],

      '/md/C语言/': [{
        text: 'C语言',
        items: [{
            text: 'C语言简介',
            link: '/md/C语言/',
          },
          {
            text: 'C基础',
            items: [{
                text: 'C Basis-01 Hello,world!',
                link: '/md/C语言/C Basis-01 Hello,world!.md'
              },
              {
                text: 'C Basis-02 来邂逅语句吧',
                link: '/md/C语言/C Basis-02 来邂逅语句吧.md'
              },
              {
                text: 'C Basis-03 神秘密文',
                link: '/md/C语言/C Basis-03 神秘密文.md'
              },
              {
                text: 'C Basis-04 赢不了的游戏',
                link: '/md/C语言/C Basis-04 赢不了的游戏.md'
              },
            ]
          },
          {
            text: 'C项目',
            items: [{
                text: 'C Project- 00 Manual',
                link: '/md/C语言/C Project- 00 Manual.md'
              },
              {
                text: 'C Project-01  Stack',
                link: '/md/C语言/C Project-01  Stack.md'
              },
              {
                text: 'C project-02 Management and Testing',
                link: '/md/C语言/C project-02 Management and Testing.md'
              },
              {
                text: 'C project-03 The Last',
                link: '/md/C语言/C project-03 The Last.md'
              },
            ]
          },
          {
            text: 'C进阶',
            items: [{
              text: 'C 进阶-动态内存分配器',
              link: '/md/C语言/C 进阶-动态内存分配器.md'
            },
          ]
          },
        ]
      }],

      '/md/前端/': [{
        text: '前端',
        link: '/md/前端/',
        items: [{
            text: '前端-01 Welcome！',
            link: '/md/前端/前端-01 Welcome！.md'
          },
          {
            text: '前端-02 第三个“剑客”',
            link: '/md/前端/前端-02 第三个“剑客”.md'
          },
          {
            text: '前端-03 前后端通信',
            link: '/md/前端/前端-03 前后端通信.md'
          },
          {
            text: '前端-04 初识框架',
            link: '/md/前端/前端-04 初识框架.md'
          },
        ]
      }],

      '/md/后端/': [{
        text: '后端',

        items: [{
            text: '后端简介',
            link: '/md/后端/',
          },
          {
            text: 'JAVA',
            items: [{
                text: 'Java-01：基础',
                link: '/md/后端/Java01.md'
              },
              {
                text: 'Java-02：语言特性',
                link: '/md/后端/Java02.md'
              },
              {
                text: 'Java-03：异常，网络',
                link: '/md/后端/Java03.md'
              },
            ]
          },
          {
            text: 'GO',
            items: [{
                text: 'GO-01：level0',
                link: '/md/后端/Go语言基础-level0.md'
              },
              {
                text: 'GO-02：level1',
                link: '/md/后端/Go语言基础-level1.md'
              },
            ]
          },
          {
            text: '后端综合',
            items: [{
                text: '综合项目-数据库',
                link: '/md/后端/后端综合数据库出题.md'
              },
              {
                text: '综合项目-项目实践',
                link: '/md/后端/后端综合项目出题.md'
              },
            ]
          }
        ]
      }],

      '/md/机器学习/': [{
        text: '机器学习',
        link: '/md/机器学习/',
        items: [{
            text: '机器学习方向-01：入门理论基础',
            link: '/md/机器学习/机器学习方向-01：入门理论基础.md'
          },
          {
            text: '机器学习方向-02：梯度下降实践',
            link: '/md/机器学习/机器学习方向-02：梯度下降实践.md'
          },
          {
            text: '机器学习方向-03：文本分类',
            link: '/md/机器学习/机器学习方向-03：文本分类'
          },
          {
            text: '机器学习方向-04：大语言模型GPT',
            link: '/md/机器学习/机器学习方向-04：大语言模型GPT'
          },


        ]
      }],
    },

  },
}, )
