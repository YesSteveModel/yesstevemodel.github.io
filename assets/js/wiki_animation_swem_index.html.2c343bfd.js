"use strict";(self.webpackChunkyes_steve_model_wiki_page=self.webpackChunkyes_steve_model_wiki_page||[]).push([[8935],{9507:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>e,data:()=>l});var t=a(641);const n={},e=(0,a(6262).A)(n,[["render",function(s,i){return(0,t.uX)(),(0,t.CE)("div",null,i[0]||(i[0]=[(0,t.Fv)('<p>SWEM 马术模组是一个非常硬核的马术相关模组，它添加了非常完备的马术动画，可以在游戏内模拟现实中的马术动作，自 2.2.2 版本起我们为其添加了兼容支持！</p><p>可参考 MCMOD 百科：<a href="https://www.mcmod.cn/class/7803.html" target="_blank" rel="noopener noreferrer">https://www.mcmod.cn/class/7803.html</a></p><p>你可以参考默认模型动画文件 <code>swem.animation.json</code>。同时记得别忘记在 <code>ysm.json</code> 文件中声明该文件！</p><h2 id="添加动画定位文件" tabindex="-1"><a class="header-anchor" href="#添加动画定位文件"><span>添加动画定位文件</span></a></h2><p>首先你需要去你的 <code>ysm.json</code> 的动画字段里添加一个新的类型 <code>swem</code>，如下图所示：</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">animation</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>\n<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">main</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">animations/main.animation.json</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>\n<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">arm</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">animations/arm.animation.json</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>\n<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">extra</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">animations/extra.animation.json</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>\n<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">tac</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">animations/tac.animation.json</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>\n<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">carryon</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">animations/carryon.animation.json</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>\n<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">parcool</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">animations/parcool.animation.json</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 这就是马术的动画</span></span>\n<span class="line highlighted"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">swem</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">animations/swem.animation.json</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>\n<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">slashblade</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">animations/slashblade.animation.json</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>\n<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">tlm</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">animations/tlm.animation.json</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后参考默认模型的 <code>swem.animation.json</code> 动画即可。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>如果你要修改马术动画，请务必填写此处。如果你修改的马术动画不起作用，那么先查看这一处是否声明了文件</strong></p></div><h2 id="动画清单" tabindex="-1"><a class="header-anchor" href="#动画清单"><span>动画清单</span></a></h2><p>如下动画是可自定义的马术动画，默认模型的马术动画文件为 <code>swem.animation.json</code>：</p><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;"><code>swem:idle</code></td><td style="text-align:center;">骑上 SWEM 模组的马，静止不动时的玩家动画</td></tr><tr><td style="text-align:center;"><code>swem:walk</code></td><td style="text-align:center;">慢步</td></tr><tr><td style="text-align:center;"><code>swem:trot</code></td><td style="text-align:center;">快步</td></tr><tr><td style="text-align:center;"><code>swem:canter</code></td><td style="text-align:center;">跑步</td></tr><tr><td style="text-align:center;"><code>swem:canter_ext</code></td><td style="text-align:center;">跑步</td></tr><tr><td style="text-align:center;"><code>swem:gallop</code></td><td style="text-align:center;">袭步</td></tr><tr><td style="text-align:center;"><code>swem:jump_lv1</code> <code>swem:jump_lv2</code> <br> <code>swem:jump_lv3</code> <code>swem:jump_lv4</code><br> <code>swem:jump_lv5</code></td><td style="text-align:center;">跳跃，共分五个等级</td></tr></tbody></table>',11)]))}]]),l=JSON.parse('{"path":"/wiki/animation/swem/","title":"马术动画","lang":"zh-CN","frontmatter":{"title":"马术动画","createTime":"2025/01/28 15:14:08","permalink":"/wiki/animation/swem/","icon":"mdi:horse"},"headers":[],"readingTime":{"minutes":1.13,"words":340},"git":{"updatedTime":1741167215000,"contributors":[{"name":"tartaric_acid","username":"tartaric_acid","email":"baka943@qq.com","commits":3,"avatar":"https://avatars.githubusercontent.com/tartaric_acid?v=4","url":"https://github.com/tartaric_acid"},{"name":"KLuoNuoYa","username":"KLuoNuoYa","email":"153290281+KLuoNuoYa@users.noreply.github.com","commits":3,"avatar":"https://avatars.githubusercontent.com/KLuoNuoYa?v=4","url":"https://github.com/KLuoNuoYa"}]},"filePathRelative":"notes/wiki/动画制作/马术动画.md"}')}}]);