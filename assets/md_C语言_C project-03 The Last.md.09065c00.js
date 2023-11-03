import{_ as a,o as s,c as o,Q as l}from"./chunks/framework.9715f836.js";const y=JSON.parse('{"title":"C project-03 The Last","description":"","frontmatter":{},"headers":[],"relativePath":"md/C语言/C project-03 The Last.md","filePath":"md/C语言/C project-03 The Last.md"}'),e={name:"md/C语言/C project-03 The Last.md"},n=l(`<img src="https://pic.imgdb.cn/item/64fdc2b6661c6c8e543d9600.png" alt="C.png"><h1 id="c-project-03-the-last" tabindex="-1">C project-03 The Last <a class="header-anchor" href="#c-project-03-the-last" aria-label="Permalink to &quot;C project-03 The Last&quot;">​</a></h1><blockquote><p>难度系数：困难</p><p>恭喜🎉🎉🎉，终于来到项目的最后一部分了，在这一部分，你将为你的计算器添加更多的运算功能，进一步完善你的计算器🧮🧮🧮。</p></blockquote><h2 id="part-0-调试模式" tabindex="-1"><strong>part 0 调试模式</strong> <a class="header-anchor" href="#part-0-调试模式" aria-label="Permalink to &quot;**part 0 调试模式**&quot;">​</a></h2><p>在前面实现计算器的时候，我们肯定是需要对计算器进行调试的，调试一种常用方法就是添加<code>printf</code>语句，而我们计算器是不需要这些<code>printf</code>语句的，否则就会有一些用户看起来奇怪的输出😖，当我们调试完成的时候，一句一句的将我们的调试语句注释掉，是不是过于浪费时间和低效率，现在，让我们来实现计算器的调试模式，让我们能够“一键”调试。</p><h3 id="任务" tabindex="-1"><strong>任务</strong> <a class="header-anchor" href="#任务" aria-label="Permalink to &quot;**任务**&quot;">​</a></h3><ul><li>给你的计算器添加调试模式，让你的计算器只需要在源代码文件添加一句语句，便可以进行调试打印（比如：正常模式是输入表达式，输出结果，调试模式是输入表达式，输出一些中间结果或者一些其他信息以便了解程序的运行状态。</li><li>利用<code>git</code>进行开发，新建一个分支用于调试模式的实现，完成后合并进入主分支，最后<code>push</code>到<code>github</code>仓库</li><li>用<code>makefile</code>进行编译</li></ul><h3 id="提示" tabindex="-1"><strong>提示</strong> <a class="header-anchor" href="#提示" aria-label="Permalink to &quot;**提示**&quot;">​</a></h3><ul><li>了解一下条件编译,<code>#ifdef</code>,<code>#else</code>,<code>#endif</code>等等</li></ul><h2 id="part-1-玩点不一样的😎" tabindex="-1"><strong>part 1 玩点不一样的😎</strong> <a class="header-anchor" href="#part-1-玩点不一样的😎" aria-label="Permalink to &quot;**part 1 玩点不一样的😎**&quot;">​</a></h2><p>前面，我们实现的计算器都是以十进制的方式解析表达式，然后计算，但是，我们作为学计算机的，经常要计算二进制和16进制的表达式，所以现在来实现一下计算器的二进制模式和16进制模式吧。</p><h3 id="任务-1" tabindex="-1"><strong>任务</strong> <a class="header-anchor" href="#任务-1" aria-label="Permalink to &quot;**任务**&quot;">​</a></h3><ul><li>用<code>git</code>创建两个分支，分别用来实现计算器的二进制模式和16进制模式，完成后合并进入主分支，最后<code>push</code>到<code>github</code>仓库</li><li>你的计算器可以切换模式，例如<code>B</code>代表二进制模式，<code>D</code>代表十进制模式，<code>H</code>代表十六进制模式（计算器启动时，默认是十进制模式）,当键入这些字符后，计算器切换模式</li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">linux</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> .</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">cproject</span></span>
<span class="line"><span style="color:#E1E4E8;">interaction</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">4</span></span>
<span class="line"><span style="color:#E1E4E8;">result</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">6</span></span>
<span class="line"><span style="color:#E1E4E8;">interaction</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> B</span></span>
<span class="line"><span style="color:#E1E4E8;">result</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> The calculator switches to binary mode</span></span>
<span class="line"><span style="color:#E1E4E8;">interaction</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1100</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">0</span><span style="color:#79B8FF;">101</span></span>
<span class="line"><span style="color:#E1E4E8;">result</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10001</span></span>
<span class="line"><span style="color:#E1E4E8;">interaction</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> H</span></span>
<span class="line"><span style="color:#E1E4E8;">result</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> The calculator switches to hex mode</span></span>
<span class="line"><span style="color:#E1E4E8;">interaction</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> FD </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> A1</span></span>
<span class="line"><span style="color:#E1E4E8;">result</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">19E</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">linux</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> .</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">cproject</span></span>
<span class="line"><span style="color:#24292E;">interaction</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">4</span></span>
<span class="line"><span style="color:#24292E;">result</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">6</span></span>
<span class="line"><span style="color:#24292E;">interaction</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> B</span></span>
<span class="line"><span style="color:#24292E;">result</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> The calculator switches to binary mode</span></span>
<span class="line"><span style="color:#24292E;">interaction</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1100</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">0</span><span style="color:#005CC5;">101</span></span>
<span class="line"><span style="color:#24292E;">result</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10001</span></span>
<span class="line"><span style="color:#24292E;">interaction</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> H</span></span>
<span class="line"><span style="color:#24292E;">result</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> The calculator switches to hex mode</span></span>
<span class="line"><span style="color:#24292E;">interaction</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> FD </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> A1</span></span>
<span class="line"><span style="color:#24292E;">result</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">19E</span></span></code></pre></div><ul><li>二进制和16进制模式只需要支持无符号整型的<code>+ - * / ()</code>运算</li><li>使用多文件构造程序，用<code>makefile</code>进行编译</li></ul><h3 id="提示-1" tabindex="-1"><strong>提示</strong> <a class="header-anchor" href="#提示-1" aria-label="Permalink to &quot;**提示**&quot;">​</a></h3><ul><li>了解二进制和16进制的计算规则</li><li>在程序中对字符串解析成十进制计算，然后再转化为要求进制的字符串输出</li></ul><h2 id="part-2-按位运算" tabindex="-1"><strong>part 2 按位运算</strong> <a class="header-anchor" href="#part-2-按位运算" aria-label="Permalink to &quot;**part 2 按位运算**&quot;">​</a></h2><p>前面，你已经为你的计算器添加了两种模式，在二进制中，有一种运算特别独特 ，这种运算叫做按位运算，现在，让你的计算器在二进制模式下支持按位运算<code>&amp; | ^</code>.</p><h3 id="任务-2" tabindex="-1"><strong>任务</strong> <a class="header-anchor" href="#任务-2" aria-label="Permalink to &quot;**任务**&quot;">​</a></h3><ul><li>了解按位运算是什么，它们是如何让操作数进行运算的</li><li>让你的计算器在二进制模式下支持按位运算<code>&amp; | ^</code></li><li>用<code>git</code>进行开发，新建一个分支用于按位运算功能实现，完成后再合并回主分支，最后<code>push</code>到<code>github</code>仓库</li><li>用<code>makefile</code>进行编译</li></ul><h3 id="提示-2" tabindex="-1"><strong>提示</strong> <a class="header-anchor" href="#提示-2" aria-label="Permalink to &quot;**提示**&quot;">​</a></h3><ul><li>了解c语言的符号的优先级</li></ul><h2 id="part-3-关系运算" tabindex="-1"><strong>part 3 关系运算</strong> <a class="header-anchor" href="#part-3-关系运算" aria-label="Permalink to &quot;**part 3 关系运算**&quot;">​</a></h2><p>在c程序中，关系运算是很常见的，例如<code>a = 4 &gt; 1;</code>,那么<code>a</code>的值为<code>1</code>,现在，让我们来试着让我们的计算器也能实现关系运算。</p><h3 id="任务-3" tabindex="-1"><strong>任务</strong> <a class="header-anchor" href="#任务-3" aria-label="Permalink to &quot;**任务**&quot;">​</a></h3><ul><li>在<code>D</code>模式下添加关系运算，<code>== != &lt; &gt; &lt;= &gt;= || &amp;&amp;</code>八个关系运算符</li><li>用<code>git</code>进行开发，新建一个分支用于关系运算功能实现，完成后再合并回主分支，最后<code>push</code>到<code>github</code>仓库</li></ul><h3 id="提示-3" tabindex="-1"><strong>提示</strong> <a class="header-anchor" href="#提示-3" aria-label="Permalink to &quot;**提示**&quot;">​</a></h3><ul><li>查阅c的运算符的优先级</li><li>以空格分割操作数和运算符，利用<code>strcmp</code>函数匹配运算符从而进行运算</li><li>可以利用正则表达式对字符串进行处理，例如找出空格，匹配双字符运算符等等，c语言可以利用<code>regex.h</code>进行正则表达式的匹配</li><li>有能力的同学还可以试试不利用栈，利用正则表达式重构计算器，对处理字符串的要求高</li></ul><h2 id="part-4-测试" tabindex="-1"><strong>part 4 测试</strong> <a class="header-anchor" href="#part-4-测试" aria-label="Permalink to &quot;**part 4 测试**&quot;">​</a></h2><p>恭喜你🎊🎊🎊，终于来到最后一步，你的计算器基本大功告成了，现在是最后一步了——测试，只要通过了测试，你的计算器就完成了🎆🎆🎆。</p><h3 id="任务-4" tabindex="-1"><strong>任务</strong> <a class="header-anchor" href="#任务-4" aria-label="Permalink to &quot;**任务**&quot;">​</a></h3><ul><li>对你的计算器进行大规模测试，三种模式，每种模式30个测试用例</li><li>尝试自己编写测试用例</li></ul><h3 id="提示-4" tabindex="-1"><strong>提示</strong> <a class="header-anchor" href="#提示-4" aria-label="Permalink to &quot;**提示**&quot;">​</a></h3><ul><li>可以参照<code>C project02</code>的测试，将测试用例写在文件里面，然后将文件重定向到计算器的输入，然后将计算器的输出重定向到另一个文件里面，然后利用<code>diff</code>等工具和正确答案比较</li><li>编写测试用例时，要注意对基本运算符的测试，应该测试各种不同的数字和数值类型组合的情况，如正数、负数、小数、整数等情况</li><li>注意边界测试，测试数字的边界情况，例如最大值、最小值、零、负数、正数等（对最大值，最小值的判断，也就是对溢出情况的判断）</li><li>注意错误输入测试，测试当输入非数字或者非法表达式时计算器应该识别出来并输出告诉用户，例如输入字母、特殊字符等。</li><li>注意复合表达式测试，测试当用户输入包含多个运算符和括号的复合表达式时，计算器能否正确地解析和计算这些表达式</li></ul><h2 id="需要提交的内容及要求" tabindex="-1"><strong>需要提交的内容及要求</strong> <a class="header-anchor" href="#需要提交的内容及要求" aria-label="Permalink to &quot;**需要提交的内容及要求**&quot;">​</a></h2><ul><li>可以描述一下解题过程中遇到的困难以及如何解决的，描述一下解题思路</li><li>存放项目的<code>github</code>仓库链接</li><li>每一部分计算器运行截图，测试用例内容和测试结果截图</li><li>良好的代码习惯，例如适当的注释，每个文件开头都应该添加注释说明该文件的内容和作用（加分🥰）</li><li>请提交PDF文档</li></ul><h2 id="本题提交方式" tabindex="-1"><strong>本题提交方式</strong> <a class="header-anchor" href="#本题提交方式" aria-label="Permalink to &quot;**本题提交方式**&quot;">​</a></h2><blockquote><p>收件邮箱：<a href="mailto:glimmer401@outlook.com" target="_blank" rel="noreferrer">glimmer401@outlook.com</a></p><p>主题格式： 学号-姓名-考核-Cproject-03</p><p>主题示例：2023090101012-张三-考核-Cproject-03</p></blockquote><h2 id="出题人联系方式" tabindex="-1"><strong>出题人联系方式</strong> <a class="header-anchor" href="#出题人联系方式" aria-label="Permalink to &quot;**出题人联系方式**&quot;">​</a></h2><blockquote><p>QQ:239148349</p><p>邮箱：<a href="mailto:LLP_PLL@outlook.com" target="_blank" rel="noreferrer">LLP_PLL@outlook.com</a></p></blockquote>`,41),t=[n];function p(r,c,i,d,h,E){return s(),o("div",null,t)}const g=a(e,[["render",p]]);export{y as __pageData,g as default};
