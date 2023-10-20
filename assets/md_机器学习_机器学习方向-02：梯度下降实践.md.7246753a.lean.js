import{_ as l,o as n,c as t,U as e,k as s,a}from"./chunks/framework.5628684b.js";const _=JSON.parse('{"title":"机器学习方向-02：梯度下降理论和实践","description":"","frontmatter":{},"headers":[],"relativePath":"md/机器学习/机器学习方向-02：梯度下降实践.md","filePath":"md/机器学习/机器学习方向-02：梯度下降实践.md"}'),m={name:"md/机器学习/机器学习方向-02：梯度下降实践.md"},i=e("",4),p=s("ul",null,[s("li",null,[s("p",null,[a("生成数据集，随机生成常数 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"a"),s("mo",{separator:"true"},","),s("mi",null,"b"),s("mo",{separator:"true"},","),s("mi",null,"c")]),s("annotation",{encoding:"application/x-tex"},"a,b,c")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.69444em"}}),s("span",{class:"strut bottom",style:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"a"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit"},"b"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit"},"c")])])])]),s("p",null,"生成 500 条数据，满足以下条件："),s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mrow",null,[s("mo",{fence:"true"},"{"),s("mtable",null,[s("mtr",null,[s("mtd",null,[s("mrow",null,[s("mi",null,"F"),s("mo",null,"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",null,")"),s("mo",null,"="),s("mi",null,"a"),s("msup",null,[s("mi",null,"x"),s("mn",null,"3")]),s("mo",null,"+"),s("mi",null,"b"),s("msup",null,[s("mi",null,"e"),s("mi",null,"y")]),s("mo",null,"+"),s("mi",null,"c"),s("mo",null,"+"),s("mi",null,"e")])])]),s("mtr",null,[s("mtd",null,[s("mrow",null,[s("mi",null,"x"),s("mo",null,"∼"),s("mi",null,"U"),s("mo",null,"("),s("mo",null,"−"),s("mn",null,"2"),s("mo",{separator:"true"},","),s("mn",null,"2"),s("mo",null,")")])])]),s("mtr",null,[s("mtd",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"∼"),s("mi",null,"U"),s("mo",null,"("),s("mo",null,"−"),s("mn",null,"2"),s("mo",{separator:"true"},","),s("mn",null,"2"),s("mo",null,")")])])]),s("mtr",null,[s("mtd",null,[s("mrow",null,[s("mi",null,"e"),s("mo",null,"∼"),s("mi",null,"N"),s("mo",null,"("),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mn",null,"0"),s("mi",{mathvariant:"normal"},"."),s("mn",null,"0"),s("mn",null,"1"),s("mo",null,")")])])])])])]),s("annotation",{encoding:"application/x-tex"},"\\begin{cases}F(x,y)=ax^3+be^y+c+e\\\\x\\sim U(-2, 2)\\\\y\\sim U(-2, 2)\\\\e\\sim N(0, 0.01)\\end{cases} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"3.1300000000000003em"}}),s("span",{class:"strut bottom",style:{height:"5.76em","vertical-align":"-2.63em"}}),s("span",{class:"base displaystyle textstyle uncramped"},[s("span",{class:"minner displaystyle textstyle uncramped"},[s("span",{class:"style-wrap reset-textstyle textstyle uncramped"},[s("span",{class:"delimsizing mult"},[s("span",{class:"vlist"},[s("span",{style:{top:"1.5500099999999999em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎩")])]),s("span",{style:{top:"1.5500099999999999em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎪")])]),s("span",{style:{top:"1.2500099999999998em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎪")])]),s("span",{style:{top:"0.9500099999999998em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎪")])]),s("span",{style:{top:"-0.000010000000000287557em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎨")])]),s("span",{style:{top:"-1.1500100000000002em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎪")])]),s("span",{style:{top:"-1.4500100000000002em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎪")])]),s("span",{style:{top:"-1.7500100000000003em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎪")])]),s("span",{style:{top:"-2.0500200000000004em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎧")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])])]),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-l"},[s("span",{class:"vlist"},[s("span",{style:{top:"-2.1220000000000003em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.13889em"}},"F"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathit"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")"),s("span",{class:"mrel"},"="),s("span",{class:"mord mathit"},"a"),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"x"),s("span",{class:"vlist"},[s("span",{style:{top:"-0.413em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord mathrm"},"3")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"+"),s("span",{class:"mord mathit"},"b"),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"e"),s("span",{class:"vlist"},[s("span",{style:{top:"-0.41300000000000003em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"+"),s("span",{class:"mord mathit"},"c"),s("span",{class:"mbin"},"+"),s("span",{class:"mord mathit"},"e")])]),s("span",{style:{top:"-0.6820000000000005em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord mathit"},"x"),s("span",{class:"mrel"},"∼"),s("span",{class:"mord mathit",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"−"),s("span",{class:"mord mathrm"},"2"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathrm"},"2"),s("span",{class:"mclose"},")")])]),s("span",{style:{top:"0.7579999999999995em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mrel"},"∼"),s("span",{class:"mord mathit",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"−"),s("span",{class:"mord mathrm"},"2"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathrm"},"2"),s("span",{class:"mclose"},")")])]),s("span",{style:{top:"2.198em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord mathit"},"e"),s("span",{class:"mrel"},"∼"),s("span",{class:"mord mathit",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathrm"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathrm"},"0"),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord mathrm"},"0"),s("span",{class:"mord mathrm"},"1"),s("span",{class:"mclose"},")")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])])])]),s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])])])]),s("p",null,[a("其中，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"x"),s("mo",null,"∼"),s("mi",null,"U"),s("mo",null,"("),s("mo",null,"−"),s("mn",null,"2"),s("mo",{separator:"true"},","),s("mn",null,"2"),s("mo",null,")")]),s("annotation",{encoding:"application/x-tex"},"x\\sim U(-2,2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.75em"}}),s("span",{class:"strut bottom",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"x"),s("span",{class:"mrel"},"∼"),s("span",{class:"mord mathit",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"−"),s("span",{class:"mord mathrm"},"2"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathrm"},"2"),s("span",{class:"mclose"},")")])])]),a(" 表示随机变量 x 服从 -2 到 2 的均匀分布，e 为人为构造的噪声，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"e"),s("mo",null,"∼"),s("mi",null,"N"),s("mo",null,"("),s("mn",null,"0"),s("mo",{separator:"true"},","),s("mn",null,"0"),s("mi",{mathvariant:"normal"},"."),s("mn",null,"0"),s("mn",null,"1"),s("mo",null,")")]),s("annotation",{encoding:"application/x-tex"},"e\\sim N(0,0.01)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.75em"}}),s("span",{class:"strut bottom",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"e"),s("span",{class:"mrel"},"∼"),s("span",{class:"mord mathit",style:{"margin-right":"0.10903em"}},"N"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathrm"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathrm"},"0"),s("span",{class:"mord mathrm"},"."),s("span",{class:"mord mathrm"},"0"),s("span",{class:"mord mathrm"},"1"),s("span",{class:"mclose"},")")])])]),a(" 表示随机变量 e 服从均值为 0，方差为 0.01 的正态分布。")])]),s("li",null,[s("p",null,[a("应用"),s("strong",null,"梯度下降法"),a("，求出恰当的 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"a")]),s("mo",null,"^")]),s("mo",{separator:"true"},","),s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"b")]),s("mo",null,"^")]),s("mo",{separator:"true"},","),s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"c")]),s("mo",null,"^")])]),s("annotation",{encoding:"application/x-tex"},"\\hat{a}, \\hat{b}, \\hat{c}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.9578799999999998em"}}),s("span",{class:"strut bottom",style:{height:"1.1523199999999998em","vertical-align":"-0.19444em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit"},"a")])]),s("span",{style:{top:"0em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mpunct"},","),s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit"},"b")])]),s("span",{style:{top:"-0.26343999999999995em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mpunct"},","),s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit"},"c")])]),s("span",{style:{top:"0em","margin-left":"0.11112em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])])])])]),a(" ，使每个数据点到平面 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"F")]),s("mo",null,"^")]),s("mo",null,"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",null,")"),s("mo",null,"="),s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"a")]),s("mo",null,"^")]),s("msup",null,[s("mi",null,"x"),s("mn",null,"3")]),s("mo",null,"+"),s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"b")]),s("mo",null,"^")]),s("msup",null,[s("mi",null,"e"),s("mi",null,"y")]),s("mo",null,"+"),s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"c")]),s("mo",null,"^")])]),s("annotation",{encoding:"application/x-tex"},"\\hat{F}(x,y)=\\hat{a}x^3+\\hat{b}e^y+\\hat{c}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.9578799999999998em"}}),s("span",{class:"strut bottom",style:{height:"1.2078799999999998em","vertical-align":"-0.25em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.13889em"}},"F")])]),s("span",{style:{top:"-0.25233em","margin-left":"0.16668em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathit"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")"),s("span",{class:"mrel"},"="),s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit"},"a")])]),s("span",{style:{top:"0em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"x"),s("span",{class:"vlist"},[s("span",{style:{top:"-0.363em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord mathrm"},"3")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"+"),s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit"},"b")])]),s("span",{style:{top:"-0.26343999999999995em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"e"),s("span",{class:"vlist"},[s("span",{style:{top:"-0.363em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"+"),s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit"},"c")])]),s("span",{style:{top:"0em","margin-left":"0.11112em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])])])])]),a(" 的"),s("strong",null,"竖直方向距离（Z轴方向）的平方之和"),a("最小。 训练过程中，要求每 20 次迭代打印当前损失（点到平面的竖直距离）。")])]),s("li",null,[s("p",null,[a("将上述任务代入到机器学习中，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"F"),s("mo",null,"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",null,")")]),s("annotation",{encoding:"application/x-tex"},"F(x, y)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.75em"}}),s("span",{class:"strut bottom",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.13889em"}},"F"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathit"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")")])])]),a(" 即标签 label，而 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"F")]),s("mo",null,"^")]),s("mo",null,"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",null,")")]),s("annotation",{encoding:"application/x-tex"},"\\hat{F}(x, y)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.9467699999999999em"}}),s("span",{class:"strut bottom",style:{height:"1.19677em","vertical-align":"-0.25em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.13889em"}},"F")])]),s("span",{style:{top:"-0.25233em","margin-left":"0.16668em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathit"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")")])])]),a(" 即每次的预测值，损失采用 MSE 损失")])]),s("li",null,[s("p",null,[a("如果你正确的使用了梯度下降法，那么求得的 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"a")]),s("mo",null,"^")]),s("mo",{separator:"true"},","),s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"b")]),s("mo",null,"^")]),s("mo",{separator:"true"},","),s("mover",{accent:"true"},[s("mrow",null,[s("mi",null,"c")]),s("mo",null,"^")])]),s("annotation",{encoding:"application/x-tex"},"\\hat{a},\\hat{b},\\hat{c}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.9578799999999998em"}}),s("span",{class:"strut bottom",style:{height:"1.1523199999999998em","vertical-align":"-0.19444em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit"},"a")])]),s("span",{style:{top:"0em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mpunct"},","),s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit"},"b")])]),s("span",{style:{top:"-0.26343999999999995em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mpunct"},","),s("span",{class:"mord accent"},[s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathit"},"c")])]),s("span",{style:{top:"0em","margin-left":"0.11112em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"accent-body"},[s("span",null,"^")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])])])])]),a(" 将与你预先设定的 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"a"),s("mo",{separator:"true"},","),s("mi",null,"b"),s("mo",{separator:"true"},","),s("mi",null,"c")]),s("annotation",{encoding:"application/x-tex"},"a,b,c")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.69444em"}}),s("span",{class:"strut bottom",style:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"a"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit"},"b"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit"},"c")])])]),a(" 非常接近。")])]),s("li",null,[s("p",null,[a("把你的 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"x"),s("mo",null,"∼"),s("mi",null,"U"),s("mo",null,"("),s("mo",null,"−"),s("mn",null,"2"),s("mo",{separator:"true"},","),s("mn",null,"2"),s("mo",null,")"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",null,"∼"),s("mi",null,"U"),s("mo",null,"("),s("mo",null,"−"),s("mn",null,"2"),s("mo",{separator:"true"},","),s("mn",null,"2"),s("mo",null,")")]),s("annotation",{encoding:"application/x-tex"},"x\\sim U(-2, 2),y\\sim U(-2, 2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.75em"}}),s("span",{class:"strut bottom",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"x"),s("span",{class:"mrel"},"∼"),s("span",{class:"mord mathit",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"−"),s("span",{class:"mord mathrm"},"2"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathrm"},"2"),s("span",{class:"mclose"},")"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mrel"},"∼"),s("span",{class:"mord mathit",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"−"),s("span",{class:"mord mathrm"},"2"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathrm"},"2"),s("span",{class:"mclose"},")")])])]),a(" 修改为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"x"),s("mo",null,"∼"),s("mi",null,"U"),s("mo",null,"("),s("mn",null,"3"),s("mo",{separator:"true"},","),s("mn",null,"7"),s("mo",null,")"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",null,"∼"),s("mi",null,"U"),s("mo",null,"("),s("mn",null,"3"),s("mo",{separator:"true"},","),s("mn",null,"7"),s("mo",null,")")]),s("annotation",{encoding:"application/x-tex"},"x\\sim U(3, 7), y\\sim U(3, 7)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.75em"}}),s("span",{class:"strut bottom",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"x"),s("span",{class:"mrel"},"∼"),s("span",{class:"mord mathit",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathrm"},"3"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathrm"},"7"),s("span",{class:"mclose"},")"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mrel"},"∼"),s("span",{class:"mord mathit",style:{"margin-right":"0.10903em"}},"U"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathrm"},"3"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathrm"},"7"),s("span",{class:"mclose"},")")])])]),a(" 之后，还能得到预期结果吗？如果不能，思考原因并给出解决方案。（提示：和梯度有关）")])])],-1),r=e("",5),c=s("ol",null,[s("li",null,[s("p",null,[a("在这道题中，我们必须设定一个"),s("strong",null,"学习率"),a("才能进行正常的训练。结合数学公式谈谈学习率的作用，并且动手调试你的代码，看看学习率过大或者过小时会发生什么事情")])]),s("li",null,[s("p",null,[a("我们在这道题中使用梯度下降法拟合了一个简单函数。在训练之前，我们已经知道了 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"a"),s("mo",{separator:"true"},","),s("mi",null,"b"),s("mo",{separator:"true"},","),s("mi",null,"c")]),s("annotation",{encoding:"application/x-tex"},"a,b,c")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.69444em"}}),s("span",{class:"strut bottom",style:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"a"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit"},"b"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit"},"c")])])]),a("的值，所以能对你得出的结果进行直观的检验。但在实际应用中，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"a"),s("mo",{separator:"true"},","),s("mi",null,"b"),s("mo",{separator:"true"},","),s("mi",null,"c")]),s("annotation",{encoding:"application/x-tex"},"a,b,c")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.69444em"}}),s("span",{class:"strut bottom",style:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"a"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit"},"b"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit"},"c")])])]),a(" 通常是未知数。"),s("strong",null,"如果我们不知道一个函数的参数（在这道题中是"),a(),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"F"),s("mo",null,"("),s("mi",null,"x"),s("mo",{separator:"true"},","),s("mi",null,"y"),s("mo",null,")"),s("mo",null,"="),s("mi",null,"a"),s("msup",null,[s("mi",null,"x"),s("mn",null,"3")]),s("mo",null,"+"),s("mi",null,"b"),s("msup",null,[s("mi",null,"e"),s("mi",null,"y")]),s("mo",null,"+"),s("mi",null,"c"),s("mo",null,"+"),s("mi",null,"e")]),s("annotation",{encoding:"application/x-tex"},"F(x,y)=ax^3+be^y+c+e")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.8141079999999999em"}}),s("span",{class:"strut bottom",style:{height:"1.064108em","vertical-align":"-0.25em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.13889em"}},"F"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathit"},"x"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},")"),s("span",{class:"mrel"},"="),s("span",{class:"mord mathit"},"a"),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"x"),s("span",{class:"vlist"},[s("span",{style:{top:"-0.363em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord mathrm"},"3")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"+"),s("span",{class:"mord mathit"},"b"),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"e"),s("span",{class:"vlist"},[s("span",{style:{top:"-0.363em","margin-right":"0.05em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"y")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),a("​")])])]),s("span",{class:"mbin"},"+"),s("span",{class:"mord mathit"},"c"),s("span",{class:"mbin"},"+"),s("span",{class:"mord mathit"},"e")])])]),a(),s("strong",null,"中的"),a(),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mi",null,"a"),s("mo",{separator:"true"},","),s("mi",null,"b"),s("mo",{separator:"true"},","),s("mi",null,"c")]),s("annotation",{encoding:"application/x-tex"},"a,b,c")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.69444em"}}),s("span",{class:"strut bottom",style:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord mathit"},"a"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit"},"b"),s("span",{class:"mpunct"},","),s("span",{class:"mord mathit"},"c")])])]),a(),s("strong",null,")，我们也需要检验所得结果的准确性。想想应该怎么做？")])])],-1),o=e("",4),u=[i,p,r,c,o];function h(d,y,z,x,g,f){return n(),t("div",null,u)}const k=l(m,[["render",h]]);export{_ as __pageData,k as default};
