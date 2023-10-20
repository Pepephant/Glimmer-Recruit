import{_ as a,o,c as e,U as r}from"./chunks/framework.5628684b.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"md/后端/index.md","filePath":"md/后端/index.md"}'),t={name:"md/后端/index.md"},n=r('<p><img src="https://pic.imgdb.cn/item/64c4a5611ddac507cc058911.png" alt=""></p><blockquote><p>一个好看的皮囊固然重要😋，但里面有趣的灵魂也绝不可缺少😭。如果说前端是那好看的皮囊，那么后端便是那其中有趣的灵魂，负责着设计程序架构、管理数据库以控制前端所展示的内容。不同于前端，后端做的更多的是与<strong>服务器</strong>以及<strong>数据库</strong>进行交互以处理相应的业务逻辑，需要考虑的是如何实现相应的功能、数据的存取和平台的性能与稳定性等等。</p><p>目前最主流的后端开发语言当属<strong>JAVA</strong>、<strong>Go</strong>，除此之外，<strong>Python</strong>、<strong>PHP</strong>、语言<strong>也有很广泛的应用。为了学好后端，掌握一门开发语言是必不可少的，除此之外，<strong>数据库</strong>的相关知识以及</strong>计算机网络知识**也是你必须要了解的😘。</p></blockquote><h2 id="✨简介" tabindex="-1"><strong>✨简介</strong> <a class="header-anchor" href="#✨简介" aria-label="Permalink to &quot;**✨简介**&quot;">​</a></h2><p>后端开发其实不止包括Web开发，还包括基础架构。Web后端工程师在开发上会偏重业务，而后端基础架构会偏重于通用型更强的工作，二者技术栈差不多，只是分工不同。后端工程师追求的目标，都是开发出「高性能」「高并发」「高可用」的系统来。</p><p>本部分将面向一些后端的基础操作进行出题，我们将分为Java和Go作为后端招新的语言，二者难度基本相同，你可以任意选择一种语言进行答题。😋</p><p>本部分由浅入深❤️，需要你有耐心地去一点一点地学习，这或许是个很枯燥的过程，但是当你坚持下来完成这些任务之后，相信你会获得很大的收获😁。</p><p>（GO与JAVA的题目选择一个进行做答）</p><h2 id="🌍开发语言" tabindex="-1"><strong>🌍开发语言</strong> <a class="header-anchor" href="#🌍开发语言" aria-label="Permalink to &quot;**🌍开发语言**&quot;">​</a></h2><h3 id="java" tabindex="-1"><strong>Java</strong> <a class="header-anchor" href="#java" aria-label="Permalink to &quot;**Java**&quot;">​</a></h3><blockquote><p>“If we spoke a different language, we would perceive a somewhat different world.”</p><p>—— Luduing Wittgerstein</p><p>Java☕是一门面向对象的编程语言，具有强大功能💪，并且简单易用 ☝，Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，具有极高的可移植性是一门广泛应用的语言👍。 Java语言是Sun公司于1990年开发的🚲。而在1994年，Gosling用Java语言 开发了一个实用性较高、可靠、安全、有交互功能的新型Web浏览器💻，它 不依赖与任何硬件平台和软件平台，该浏览器被命名为HotJava，并于1995 年在业界发表，引起了巨大的轰动💥，Java语言的地位随之得到了肯定 👍。</p></blockquote><h4 id="🌟语言特性" tabindex="-1"><strong>🌟语言特性</strong> <a class="header-anchor" href="#🌟语言特性" aria-label="Permalink to &quot;**🌟语言特性**&quot;">​</a></h4><p>辣么👁🗨Java语言都有些什么特点呢？</p><h5 id="✔-java是简单的" tabindex="-1"><strong>✔ Java是简单的</strong> <a class="header-anchor" href="#✔-java是简单的" aria-label="Permalink to &quot;**✔ Java是简单的**&quot;">​</a></h5><p>Java和C语言/C++的语法比较相近，学过C/C++的佬佬可以很容易上手。同时Java摈弃了一些C/C++中令人迷惑的特性（再也不用为指针而掉头发啦），还提供自动的内存管理等，轻松易用👍。</p><h5 id="✔-java是面向对象" tabindex="-1"><strong>✔ Java是面向对象</strong> <a class="header-anchor" href="#✔-java是面向对象" aria-label="Permalink to &quot;**✔ Java是面向对象**&quot;">​</a></h5><p>Java 语言提供类、接口和继承等面向对象的特性，为了简单起见，只支持类之间的单继承，但支持接口之间的多继承，并支持类与接口之间的实现机制（关键字为 implements）。Java 语言全面支持动态绑定，而 C++语言只对虚函数使用动态绑定。总之，Java语言是一个纯的面向对象程序设计语言💃。</p><h5 id="✔-java是可移植" tabindex="-1"><strong>✔ Java是可移植</strong> <a class="header-anchor" href="#✔-java是可移植" aria-label="Permalink to &quot;**✔ Java是可移植**&quot;">​</a></h5><p>Java系统本身保证了结构的中立性，严格规定各种基本数据结构的长度等，从而使其具有很强的可移植性，可以在不同设备上运行。所有Java程序都运行于Java虚拟机（JVM）上，由字节码被解释器解释后运行，使得一份代码无需经过修改就可以在不同的设备上运行🧨。</p><h5 id="✔-java是安全的" tabindex="-1"><strong>✔ Java是安全的</strong> <a class="header-anchor" href="#✔-java是安全的" aria-label="Permalink to &quot;**✔  Java是安全的**&quot;">​</a></h5><p>Java通常被用在网络环境中，为此，Java 提供了一个安全机制以防恶意代码的攻击。除了Java 语言具有的许多安全特性以外，Java 对通过网络下载的类具有一个安全防范机制，如分配不同的名字空间以防替代本地的同名类、字节代码检查等💡。</p><p>还有更多特性！</p><h3 id="golang" tabindex="-1"><strong>Golang</strong> <a class="header-anchor" href="#golang" aria-label="Permalink to &quot;**Golang**&quot;">​</a></h3><blockquote><p>“Go will be the server language of the future.” — Tobias Lütke, Shopify</p></blockquote><p>Go语言（或 Golang）起源于 2007 年，并在 2009 年正式对外发布。Go 是非常年轻的一门语言，它的主要目标是“兼具 Python 等动态语言的开发速度和 C/C++ 等编译型语言的性能与安全性”👍。Go语言是编程语言设计的又一次尝试，是对类C语言的重大改进，它不但能让你访问底层操作系统，还提供了强大的网络编程和并发编程支持💻。Go语言的用途众多，可以进行网络编程、系统编程、并发编程、分布式编程。Go语言的推出，旨在不损失应用程序性能的情况下降低代码的复杂性，具有“部署简单、并发性好、语言设计良好、执行性能好”等优势💪，目前国内诸多 IT 公司均已采用Go语言开发项目。</p><h4 id="🌟语言特性-1" tabindex="-1"><strong>🌟语言特性</strong> <a class="header-anchor" href="#🌟语言特性-1" aria-label="Permalink to &quot;**🌟语言特性**&quot;">​</a></h4><h5 id="✔-go-天然支持并发。" tabindex="-1"><strong>✔ Go 天然支持并发。</strong> <a class="header-anchor" href="#✔-go-天然支持并发。" aria-label="Permalink to &quot;**✔ Go 天然支持并发。**&quot;">​</a></h5><p>随着服务器处理器的内核数量不断增长，对于更容易支持高并发的编程语言的需求也随之增长，于是Go诞生了。当然，很多语言都支持多线程、多进程编程，但遗憾的是，实现和控制起来并不是那么令人感觉轻松和愉悦。Golang不同的是，语言级别支持协程(goroutine)并发（协程又称微线程，比线程更轻量、开销更小，性能更高），操作起来非常简单。</p><h5 id="✔-go-直接在底层硬件上运行" tabindex="-1"><strong>✔ Go 直接在底层硬件上运行</strong> <a class="header-anchor" href="#✔-go-直接在底层硬件上运行" aria-label="Permalink to &quot;**✔ Go 直接在底层硬件上运行**&quot;">​</a></h5><p>与其他现代高级语言（如 Java/Python）相比，使用 C、C++ 的最大好处就是它的性能，因为 C/C++ 是编译型语言而不是解释型语言。Go作为类C语言，性能不必多说。</p><h5 id="✔用-go-编写的代码易于维护" tabindex="-1"><strong>✔用 Go 编写的代码易于维护</strong> <a class="header-anchor" href="#✔用-go-编写的代码易于维护" aria-label="Permalink to &quot;**✔用 Go 编写的代码易于维护**&quot;">​</a></h5><p>Go拥有简洁明了的语法，降低了开发者的认知负担。它鼓励编写简单易读的代码，使得开发者更容易理解和维护彼此的代码👍。Go的包管理系统提供了一种清晰有序的代码结构方式。按照每个目录一个包的约定，开发者能够轻松定位和修改与特定功能相关的代码，并且Go的标准库非常丰富并且有良好的文档支持，涵盖了各种重要的实用工具🧨。</p><h2 id="💭-帮助" tabindex="-1"><strong>💭 帮助</strong> <a class="header-anchor" href="#💭-帮助" aria-label="Permalink to &quot;**💭 帮助**&quot;">​</a></h2><p>当你遇到困难时，不妨试试以下方式/网站</p><ul><li><a href="https://www.runoob.com/" target="_blank" rel="noreferrer">菜鸟教程</a></li><li><a href="https://www.google.com/" target="_blank" rel="noreferrer">Google</a></li><li><a href="https://www.csdn.net/" target="_blank" rel="noreferrer">CSDN</a>、<a href="https://www.cnblogs.com/" target="_blank" rel="noreferrer">博客园</a>、<a href="https://www.zhihu.com/" target="_blank" rel="noreferrer">知乎</a>甚至<a href="https://www.bilibili.com/" target="_blank" rel="noreferrer">b站</a>等论坛</li><li>查阅官方文档</li><li><a href="https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way" target="_blank" rel="noreferrer">直接问群里的老学长</a></li></ul>',34),l=[n];function s(i,h,g,d,c,p){return o(),e("div",null,l)}const v=a(t,[["render",s]]);export{b as __pageData,v as default};
