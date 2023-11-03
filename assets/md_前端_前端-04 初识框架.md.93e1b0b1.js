import{_ as e,o as a,c as t,Q as l}from"./chunks/framework.54af5271.js";const m=JSON.parse('{"title":"Web前端-04 初始框架","description":"","frontmatter":{},"headers":[],"relativePath":"md/前端/前端-04 初识框架.md","filePath":"md/前端/前端-04 初识框架.md"}'),r={name:"md/前端/前端-04 初识框架.md"},o=l('<p><img src="https://pic.imgdb.cn/item/64c4a5611ddac507cc058875.png" alt=""></p><h1 id="web前端-04-初始框架" tabindex="-1">Web前端-04 初始框架 <a class="header-anchor" href="#web前端-04-初始框架" aria-label="Permalink to &quot;Web前端-04 初始框架&quot;">​</a></h1><blockquote><p>难度系数：较难</p><p>首先祝贺能够走到这里的小伙伴，你们非常棒，通过前几道题的学习，相信你们已经掌握了丰富的前端知识了。接下来让我们再进一步吧！</p></blockquote><h2 id="part-0-题目宗旨" tabindex="-1">Part 0 题目宗旨 <a class="header-anchor" href="#part-0-题目宗旨" aria-label="Permalink to &quot;Part 0 题目宗旨&quot;">​</a></h2><p>这道题主要想带大家学习几个非常实用的东西</p><ol><li>前端框架</li><li>一种十分实用的前端开发方式——组件化开发</li><li>实现页面的路由刷新（局部刷新）</li></ol><blockquote><p>推荐使用框架: Vue，React，webpack</p></blockquote><h2 id="part-1-vue的使用" tabindex="-1">Part 1 Vue的使用 <a class="header-anchor" href="#part-1-vue的使用" aria-label="Permalink to &quot;Part 1 Vue的使用&quot;">​</a></h2><blockquote><p>大家前几道题所做出来的blog article页面相信还留着吧，我们这道题一言以蔽便是用组件开发来重构 blog article 的代码，提升代码可读性以及复用性，是不是听起来挺不错的呢，那么让我们马上开始吧！</p></blockquote><h3 id="step-1-学习vue" tabindex="-1">Step 1 学习Vue <a class="header-anchor" href="#step-1-学习vue" aria-label="Permalink to &quot;Step 1 学习Vue&quot;">​</a></h3><p>Tips：</p><ul><li><a href="https://v2.cn.vuejs.org/" target="_blank" rel="noreferrer">Vue 2官方文档</a></li><li>响应式数据优化dom操作</li><li>学习常用vue指令</li></ul><h3 id="step-2-使用vue-需提交" tabindex="-1">Step 2 使用Vue （需提交） <a class="header-anchor" href="#step-2-使用vue-需提交" aria-label="Permalink to &quot;Step 2 使用Vue （需提交）&quot;">​</a></h3><p>Tasks：</p><p>动手操作的部分来了，尝试使用vue来重构blog article页面吧！</p><h2 id="part-2-组件化开发" tabindex="-1">Part 2 组件化开发 <a class="header-anchor" href="#part-2-组件化开发" aria-label="Permalink to &quot;Part 2 组件化开发&quot;">​</a></h2><blockquote><p>这部分主要带大家在实践中学习组件操作的知识，</p></blockquote><h3 id="step-1-组件化入门-需提交" tabindex="-1">Step 1 组件化入门（需提交） <a class="header-anchor" href="#step-1-组件化入门-需提交" aria-label="Permalink to &quot;Step 1 组件化入门（需提交）&quot;">​</a></h3><p>说了这么多，我想先问大家一些问题</p><p>什么是组件化？组件化开发的优点？</p><h3 id="step-2-组件化开发实践-需提交" tabindex="-1">Step 2 组件化开发实践（需提交） <a class="header-anchor" href="#step-2-组件化开发实践-需提交" aria-label="Permalink to &quot;Step 2 组件化开发实践（需提交）&quot;">​</a></h3><h4 id="_1-初始化组件化开发项目" tabindex="-1">1.初始化组件化开发项目 <a class="header-anchor" href="#_1-初始化组件化开发项目" aria-label="Permalink to &quot;1.初始化组件化开发项目&quot;">​</a></h4><p>vue组件化开发从何入手呢？如何初始化项目？</p><blockquote><p>自行解读项目文档，了解如何将项目跑起来、如何进行项目最终的打包、组件所在的位置等。</p></blockquote><p>Tasks：</p><p>初始化项目目录的截图、项目运行效果截图</p><p>Tips :</p><ul><li>node.js npm</li><li>npm run serve启动项目</li><li>Vue cli/vue ui</li><li>善用搜索引擎解决问题</li></ul><p>初始化项目时请按照以下步骤配置，为Part3路由管理做好准备！</p><p><img src="https://pic.imgdb.cn/item/64e06bfe661c6c8e54bfa1d1.png" alt=""></p><p><img src="https://pic.imgdb.cn/item/64e06bfe661c6c8e54bfa1a8.png" alt=""></p><h4 id="_2-实践项目-需提交" tabindex="-1">2.实践项目（需提交） <a class="header-anchor" href="#_2-实践项目-需提交" aria-label="Permalink to &quot;2.实践项目（需提交）&quot;">​</a></h4><p><img src="https://pic.imgdb.cn/item/64df5dd3661c6c8e54eea743.png" alt=""></p><p>相信大家对这个页面一定都不陌生，这是我们的做题网站首页。</p><p>Tasks：</p><ol><li><strong>了解网页结构</strong>，对页面进行拆解，提前进行组件规划，叙述规划思路。</li><li>使用组件化开发复现这样一个页面。（图标、图片以及文字内容可随意更换）</li></ol><p>Tips：</p><ul><li>页面构成要素</li><li>组件的嵌套使用方式</li><li>父子组件之间的数据传输</li><li><a href="https://element.eleme.cn/#/zh-CN/component/installation" target="_blank" rel="noreferrer">vue组件库</a></li><li>npm run build打包项目</li></ul><h2 id="part-3-页面路由刷新" tabindex="-1">Part 3 页面路由刷新 <a class="header-anchor" href="#part-3-页面路由刷新" aria-label="Permalink to &quot;Part 3 页面路由刷新&quot;">​</a></h2><blockquote><p>你是否会觉得太多的html文件让人眼花缭乱了，若每个页面都要通过一个html文件来实现，一个大项目的前端页面实现将会非常麻烦且困难，有没有简单清晰又实用性强的页面管理方式呢？当然是有的，也就是这部分将要上手实践的页面路由管理（俗称页面局部刷新）。</p></blockquote><blockquote><ul><li><a href="https://www.emojiall.com/zh-hans" target="_blank" rel="noreferrer">Emoji</a></li></ul><p>打开上方的Emoji网站，尝试点击页面侧边栏，观察网址栏的变化，</p><p>这便是路由管理的效果，通过监测url的变化来进行页面的局部刷新。</p></blockquote><h3 id="step-1-学一学" tabindex="-1">Step 1 学一学 <a class="header-anchor" href="#step-1-学一学" aria-label="Permalink to &quot;Step 1 学一学&quot;">​</a></h3><blockquote><p>相信大家一定还记得Part 2中配置的router，这时候就要用上了</p></blockquote><p>Tips:</p><ul><li><a href="https://v3.router.vuejs.org/zh/" target="_blank" rel="noreferrer">Vue Router</a></li></ul><h3 id="step-2-实践-需提交" tabindex="-1">Step 2 实践（需提交） <a class="header-anchor" href="#step-2-实践-需提交" aria-label="Permalink to &quot;Step 2 实践（需提交）&quot;">​</a></h3><p>Task：</p><p>对Part 2中写好的页面进行进一步的优化，设置footer为总路由，为其中一些按钮添加点击事件，实现页面局部刷新功能。</p><p>Tips：</p><ul><li>npm run build打包项目</li></ul><h2 id="本题提交方式" tabindex="-1">本题提交方式 <a class="header-anchor" href="#本题提交方式" aria-label="Permalink to &quot;本题提交方式&quot;">​</a></h2><blockquote><p>收件邮箱：<a href="mailto:glimmer401@outlook.com" target="_blank" rel="noreferrer">glimmer401@outlook.com</a></p><p>主题格式： 学号-姓名-考核-前端-04</p><p>主题示例：2023090101012-张三-考核-前端-04</p><p>提交文件：存放 &#39;打包好的Vue代码 和 PDF文件&#39; 的压缩包</p></blockquote><h2 id="出题者q-a方式" tabindex="-1">出题者Q&amp;A方式 <a class="header-anchor" href="#出题者q-a方式" aria-label="Permalink to &quot;出题者Q&amp;A方式&quot;">​</a></h2><blockquote><p>QQ：1741049376</p><p>邮箱：1741049376@qq.com</p></blockquote>',54),i=[o];function p(c,u,h,n,s,d){return a(),t("div",null,i)}const q=e(r,[["render",p]]);export{m as __pageData,q as default};
