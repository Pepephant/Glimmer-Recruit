import{_ as o,C as r,o as l,c,k as a,a as e,H as n,w as i,Q as s}from"./chunks/framework.9715f836.js";const x=JSON.parse('{"title":"C Project- 00 Manual","description":"","frontmatter":{},"headers":[],"relativePath":"md/C语言/C Project- 00 Manual.md","filePath":"md/C语言/C Project- 00 Manual.md"}'),d={name:"md/C语言/C Project- 00 Manual.md"},p=a("img",{src:"https://pic.imgdb.cn/item/64fdc2b6661c6c8e543d9600.png",alt:"C.png"},null,-1),h=a("h1",{id:"c-project-00-manual",tabindex:"-1"},[e("C Project- 00 Manual "),a("a",{class:"header-anchor",href:"#c-project-00-manual","aria-label":'Permalink to "C Project- 00 Manual"'},"​")],-1),u=a("code",null,"linux",-1),_=s('<p>前两个part没有题目，但是也请认真阅读。</p><h2 id="part-1-大型软件编程规范" tabindex="-1"><strong>Part 1 大型软件编程规范</strong> <a class="header-anchor" href="#part-1-大型软件编程规范" aria-label="Permalink to &quot;**Part 1 大型软件编程规范**&quot;">​</a></h2><p>虽然我们的项目代码量很小，但是编程规范仍然非常重要，不仅有利于我们检查你提交的代码，而且对你往后的职业发展具有重要意义。</p><p>这里可以通过一个案例让我们意识到编程规范的重要性。2018年9月19日，美国威斯康星州一位名叫Anthony Tong的 程序员在WTS Paradigm软件公司办公大楼枪击了4名同事，因为他无法忍受他的同事不为函数接口写注释、不遵守驼峰命名法、左花括号换行和强制更新版本等不规范做法。虽然这种过激行为必须受到法律的严惩，但是和不遵守编程规范的人一起写程序确实是一件非常痛苦的事情。遵守编程规范能提高代码可读性，便于代码维护，因此程序员一定要遵守编程规范。</p><p>虽然我们不会将此作为考核重点，但是遵守编程规范会给别人带来的愉悦的感觉。</p><h2 id="part-2-结构化设计" tabindex="-1"><strong>Part 2 结构化设计</strong> <a class="header-anchor" href="#part-2-结构化设计" aria-label="Permalink to &quot;**Part 2 结构化设计**&quot;">​</a></h2><p>结构化设计是克服开发大型程序的困难的最有效和最基本的方法。结构 化设计的概念最早是由荷兰计算机科学家狄克斯特拉于1969年提出的。软件的结构化设计就是基于分而 治之的思想，按照高内聚和松耦合原则进行的软件结构设计，其目的是使 软件具有良好的结构，从而使软件易于开发和维护。</p><p>软件的结构化通常表现为层次化、过程化和对象化等，可以统称为模块化。那么怎样理解模块呢？模块可大可小，它具有不同的粒度或层次。 从语句粒度上看，顺序结构、选择结构和循环结构就是程序的三种基本模 块。从过程粒度上看，一个函数就是一个模块。从对象粒度上看，一个对 象就是一个模块。从文件粒度上看，一个文件就是一个模块。如果从更高 的体系结构的层次上看，软件系统中的一层或一个子系统都是一个模块。</p><p>例如：在后面编写程序的时候，我们会要求多文件编程，你可以将底层数据结构接口声明在<code>stack.h</code>文件、将其定义放在相应的<code>stack.c</code>文件中，将计算器的具体实现放在<code>main.c</code>中。</p><h2 id="part-3-开始编程" tabindex="-1"><strong>Part 3 开始编程</strong> <a class="header-anchor" href="#part-3-开始编程" aria-label="Permalink to &quot;**Part 3 开始编程**&quot;">​</a></h2><p>编写一个程序，实现 <code>a + b</code> 计算</p><ul><li>可以从命令行输入单个表达式</li><li>也可以批量从文件导入表达式，将结果输入到另一文件</li></ul><h2 id="题目要求" tabindex="-1">题目要求 <a class="header-anchor" href="#题目要求" aria-label="Permalink to &quot;题目要求&quot;">​</a></h2><ul><li>正确的可执行的代码</li><li>回答题目中的问题时，表达自己的想法</li><li>良好的代码习惯（加分项）</li><li>代码运行的截图</li><li>请提交PDF文档</li></ul><h2 id="本题提交方式" tabindex="-1">本题提交方式 <a class="header-anchor" href="#本题提交方式" aria-label="Permalink to &quot;本题提交方式&quot;">​</a></h2><blockquote><p>收件邮箱：glimmer401@outlook.com</p><p>主题格式： 学号-姓名-考核-Cproject-00</p><p>主题示例：2023090101012-张三-考核-Cproject-00</p></blockquote><h2 id="出题人联系方式" tabindex="-1">出题人联系方式 <a class="header-anchor" href="#出题人联系方式" aria-label="Permalink to &quot;出题人联系方式&quot;">​</a></h2><blockquote><p>QQ：3193552916</p><p>邮箱：3193552916@qq.com</p></blockquote>',18);function m(P,C,b,f,q,k){const t=r("font");return l(),c("div",null,[p,h,a("blockquote",null,[a("p",null,[e("在开始做C项目之前，相信你已经完成了C语言基础部分或者你是具有C语言基础的佬佬。接下来你会一步一步、由简到繁地做出一个C项目，在这一过程中，你将会对C语言有更深入的理解、掌握编写大型程序的基本技能和思想、并为你将来学习C语言相关课程（数据结构和算法）打下坚实基础。"),a("strong",null,[n(t,{color:"red"},{default:i(()=>[e("温馨提示：c项目请在"),u,e("环境下完成。")]),_:1})])])]),_])}const j=o(d,[["render",m]]);export{x as __pageData,j as default};
