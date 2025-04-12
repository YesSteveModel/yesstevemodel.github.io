"use strict";(self.webpackChunkyes_steve_model_wiki_page=self.webpackChunkyes_steve_model_wiki_page||[]).push([[5013],{652:(t,e,n)=>{n.r(e),n.d(e,{comp:()=>i,data:()=>r});var l=n(641);const d={style:{"text-align":"center"}},a={style:{"text-align":"center"}},o={style:{"text-align":"center"}},c={},i=(0,n(6262).A)(c,[["render",function(t,e){const n=(0,l.g2)("Badge");return(0,l.uX)(),(0,l.CE)("div",null,[e[33]||(e[33]=(0,l.Fv)('<p>条件动画是一系列特殊命名的动画，只会在满足特定条件时才会播放。通过这种写法可以在不需要了解动画控制器情况下，也能快速做出想要的内容。</p><h2 id="手部条件动画" tabindex="-1"><a class="header-anchor" href="#手部条件动画"><span>手部条件动画</span></a></h2><p>由于手部动画较多，我们专门把手部的条件动画独立成一个单独的文件。</p><p>默认模型的手部条件动画全部放置于 <code>arm.animation.json</code>文件中，会在玩家手持对应物品，进行相关操作时播放。</p><p>它的优先级高于主动画，会覆盖主动画相关的组而进行播放，所以你不应该在手部动画中添加其他与手部无关的组的动画。</p><p>当没有如下的手部动画时，游戏会调用默认的 <code>use_mainhand</code> <code>use_offhand</code> <code>swing_hand</code> 等动画。</p><h2 id="原版知识补充" tabindex="-1"><a class="header-anchor" href="#原版知识补充"><span>原版知识补充</span></a></h2><p>这里先补充几个 Minecraft 原版知识：</p><ul><li>主手：英文为 mainhand，在游戏内默认为右手；</li><li>副手：英文为 offhand，在游戏内默认为左手；</li><li>使用：英文为 use，部分物品在玩家手持时，按下右键能够使用。比如食物、药水、弓箭、盾牌等。只要是能够使用的物品，无论在左手还是右手、均可以鼠标右键触发使用；</li><li>挥动：英文为 swing，玩家鼠标左键点击即会触发挥动。玩家大部分情况下<strong>只能挥动主手</strong>。</li><li>持有：英文为 hold，玩家主手或副手持有任何物品，且不进行任何操作时，即为持有状态。</li><li>标签：对于同一类（比如所有的剑）物品，原版提供了标签（tag）系统，这一块需要通过 <a href="https://minecraft.fandom.com/zh/wiki/%E6%A0%87%E7%AD%BE" target="_blank" rel="noopener noreferrer">wiki</a> 查询。</li><li>物品 ID：在游戏内按下 <code>F3 H</code> 快捷键就能打开物品 ID 显示，如下图所示。原版每种物品都有自己的 ID；</li></ul><p><img src="https://s2.loli.net/2023/06/25/BTo2G4dPbK5SlAq.png" alt="3.png"></p><h2 id="使用动画" tabindex="-1"><a class="header-anchor" href="#使用动画"><span>使用动画</span></a></h2><p>使用动画默认自带了 10 个内部分类动画，这些动画一般情况下能兼容其他模组：</p><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">作用</th></tr></thead><tbody><tr><td style="text-align:center;"><code>use_mainhand:eat</code>、<code>use_offhand:eat</code></td><td style="text-align:center;">食用食物时播放，约 1.5 秒</td></tr><tr><td style="text-align:center;"><code>use_mainhand:drink</code>、<code>use_offhand:drink</code></td><td style="text-align:center;">饮用药水、牛奶桶等时播放，约 1.5 秒</td></tr><tr><td style="text-align:center;"><code>use_mainhand:shield</code>、<code>use_mainhand:shield</code></td><td style="text-align:center;">玩家使用盾牌时播放</td></tr><tr><td style="text-align:center;"><code>use_mainhand:block</code>、<code>use_offhand:block</code></td><td style="text-align:center;">玩家处于防御状态（比如使用盾牌）时播放</td></tr><tr><td style="text-align:center;"><code>use_mainhand:bow</code>、<code>use_offhand:bow</code></td><td style="text-align:center;">使用弓箭时播放，建议 60 秒以上时长或静态动画</td></tr><tr><td style="text-align:center;"><code>use_mainhand:spear</code>、<code>use_offhand:spear</code></td><td style="text-align:center;">使用三叉戟时播放，建议 60 秒以上时长或静态动画</td></tr><tr><td style="text-align:center;"><code>use_mainhand:crossbow</code>、<code>use_offhand:crossbow</code></td><td style="text-align:center;">使用十字弓时播放，建议 60 秒以上时长或静态动画</td></tr><tr><td style="text-align:center;"><code>use_mainhand:spyglass</code>、<code>use_offhand:spyglass</code></td><td style="text-align:center;">使用望远镜时播放，建议 60 秒以上时长或静态动画</td></tr><tr><td style="text-align:center;"><code>use_mainhand:toot_horn</code>、<code>use_offhand:toot_horn</code></td><td style="text-align:center;">使用山羊角时播放，建议 60 秒以上时长或静态动画</td></tr><tr><td style="text-align:center;"><code>use_mainhand:brush</code>、<code>use_offhand:brush</code></td><td style="text-align:center;">使用刷子时播放</td></tr></tbody></table><p>使用动画还支持通过物品 ID 或者标签来制作自定义动画。</p><p>这里只给出几个示例，你可以添加无限多个自定义动画：</p><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">作用</th><th>备注</th></tr></thead><tbody><tr><td style="text-align:center;"><code>use_mainhand$minecraft:shield</code>、<code>use_offhand$minecraft:shield</code></td><td style="text-align:center;">使用物品 ID 为 minecraft:shield （其实就是原版盾牌）的物品时播放</td><td><code>$</code> 加物品 ID</td></tr><tr><td style="text-align:center;"><code>use_mainhand#minecraft:dirt</code>、<code>use_offhand#minecraft:dirt</code></td><td style="text-align:center;">使用标签为 minecraft:dirt （原版的泥土、草方块均有此标签）物品时播放</td><td><code>#</code> 加物品标签</td></tr></tbody></table><h2 id="挥动动画" tabindex="-1"><a class="header-anchor" href="#挥动动画"><span>挥动动画</span></a></h2><p>因为原版中，玩家大部分情况下只能挥动主手，故左键挥动名称有所不同。主手的挥动统一以 <code>swing</code> 开头，后面可以通过 <code>$</code> 加物品 ID 或者 <code>#</code> 加物品标签的方式添加挥动动画。副手则是以 <code>swing_offhand</code> 开头。</p><p>挥动动画播放较为特殊，<strong>即使玩家停止挥动，挥动动画也不会中断</strong>，直至播放完毕。</p><p>挥动动画默认自带了 8 个内部分类动画，这些动画一般情况下能兼容其他模组：</p>',20)),(0,l.Lk)("table",null,[e[9]||(e[9]=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",{style:{"text-align":"center"}},"名称"),(0,l.Lk)("th",{style:{"text-align":"center"}},"作用")])],-1)),(0,l.Lk)("tbody",null,[e[2]||(e[2]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"swing:sword"),(0,l.eW)("、"),(0,l.Lk)("code",null,"swing_offhand:sword")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"挥动剑时播放")],-1)),e[3]||(e[3]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"swing:axe"),(0,l.eW)("、"),(0,l.Lk)("code",null,"swing_offhand:axe")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"挥动斧子时播放")],-1)),e[4]||(e[4]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"swing:pickaxe"),(0,l.eW)("、"),(0,l.Lk)("code",null,"swing_offhand:pickaxe")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"挥动镐子时播放")],-1)),e[5]||(e[5]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"swing:shovel"),(0,l.eW)("、"),(0,l.Lk)("code",null,"swing_offhand:shovel")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"挥动铲子时播放")],-1)),e[6]||(e[6]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"swing:hoe"),(0,l.eW)("、"),(0,l.Lk)("code",null,"swing_offhand:hoe")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"挥动锄头时播放")],-1)),e[7]||(e[7]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"swing:shield"),(0,l.eW)("、"),(0,l.Lk)("code",null,"swing_offhand:shield")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"挥动盾牌时播放")],-1)),e[8]||(e[8]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"swing:throwable_potion"),(0,l.eW)("、"),(0,l.Lk)("code",null,"swing:throwable_potion")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"丢出投掷型药水时播放")],-1)),(0,l.Lk)("tr",null,[e[1]||(e[1]=(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"swing:fishing_rod"),(0,l.eW)("、"),(0,l.Lk)("code",null,"swing:fishing_rod")],-1)),(0,l.Lk)("td",d,[e[0]||(e[0]=(0,l.eW)("丢出/收回钓鱼竿时播放")),(0,l.bF)(n,{type:"tip",text:"2.3.0 新增"})])])])]),e[34]||(e[34]=(0,l.Fv)('<p>挥动动画还支持通过物品 ID 或者标签来制作自定义动画。这里只给出几个示例，你可以添加无限多个自定义动画：</p><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">作用</th><th>备注</th></tr></thead><tbody><tr><td style="text-align:center;"><code>swing$minecraft:shield</code></td><td style="text-align:center;">手持物品 ID 为 minecraft:shield <br>（其实就是原版盾牌）挥动时播放</td><td><code>$</code> 加物品 ID</td></tr><tr><td style="text-align:center;"><code>swing#minecraft:dirt</code></td><td style="text-align:center;">手持标签为 minecraft:dirt <br>（原版的泥土、草方块均有此标签）挥动时播放</td><td><code>#</code> 加物品标签</td></tr></tbody></table><h2 id="持有动画" tabindex="-1"><a class="header-anchor" href="#持有动画"><span>持有动画</span></a></h2><p>持有动画会在玩家持有物品（此时物品没有使用或挥动）时播放。当玩家切换不同的物品时，持有动画都会从头播放一次，从而做出切换武器的动画效果。建议使用较长时长的动画。</p><p>持有动画有主手副手之分，以 <code>hold_mainhand</code> 或 <code>hold_offhand</code> 开头，<strong>可以同时播放</strong>。后面通过 <code>$</code> 加物品 ID 或者 <code>#</code> 加物品标签的方式添加持有动画。</p><p>由于原版的充能十字弓和抛出的鱼竿比较特殊，无法通过物品 ID 或者物品 tag 识别，故特意为其添加了固定名称的动画。我们还为原版一些特殊物品增加了内部分类，一并列入其中：</p>',6)),(0,l.Lk)("table",null,[e[32]||(e[32]=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",{style:{"text-align":"center"}},"名称"),(0,l.Lk)("th",{style:{"text-align":"center"}},"作用")])],-1)),(0,l.Lk)("tbody",null,[e[14]||(e[14]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:empty"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:empty")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"不持有任何东西时播放的动画")],-1)),e[15]||(e[15]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:charged_crossbow"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:charged_crossbow")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"手持充能十字弓时的动画")],-1)),e[16]||(e[16]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:crossbow"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:crossbow")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有十字弓（未充能）时播放")],-1)),(0,l.Lk)("tr",null,[e[11]||(e[11]=(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:fishing_rod"),(0,l.eW)(" 、"),(0,l.Lk)("code",null,"hold_offhand:fishing_rod")],-1)),(0,l.Lk)("td",a,[e[10]||(e[10]=(0,l.eW)("持有钓鱼竿时播放")),(0,l.bF)(n,{type:"tip",text:"2.3.0 新增"})])]),e[17]||(e[17]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:fishing")]),(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.eW)("持有抛出鱼钩的鱼竿时播放"),(0,l.Lk)("br"),(0,l.eW)("（"),(0,l.Lk)("mark",null,"特殊，仅此一个"),(0,l.eW)("）")])],-1)),(0,l.Lk)("tr",null,[e[13]||(e[13]=(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:slashblade"),(0,l.eW)(" 、"),(0,l.Lk)("code",null,"hold_offhand:slashblade")],-1)),(0,l.Lk)("td",o,[e[12]||(e[12]=(0,l.eW)("持有拔刀剑时播放")),(0,l.bF)(n,{type:"tip",text:"2.3.0 新增"})])]),e[18]||(e[18]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:sword"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:sword")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有剑时播放")],-1)),e[19]||(e[19]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:axe"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:axe")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有斧子时播放")],-1)),e[20]||(e[20]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:pickaxe"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:pickaxe")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有镐子时播放")],-1)),e[21]||(e[21]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:shovel"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:shovel")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有铲子时播放")],-1)),e[22]||(e[22]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:hoe"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:hoe")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有锄头时播放")],-1)),e[23]||(e[23]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:shield"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:shield")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有盾牌时播放")],-1)),e[24]||(e[24]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:throwable_potion"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:throwable_potion")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有投掷型药水时播放")],-1)),e[25]||(e[25]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:eat"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:eat")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有食物时播放")],-1)),e[26]||(e[26]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:drink"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:drink")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有药水、牛奶桶等时播放")],-1)),e[27]||(e[27]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:bow"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:bow")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有弓箭时播放")],-1)),e[28]||(e[28]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:spear"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:spear")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有三叉戟时播放")],-1)),e[29]||(e[29]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:spyglass"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:spyglass")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有望远镜时播放")],-1)),e[30]||(e[30]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:toot_horn"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:toot_horn")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有山羊角时播放")],-1)),e[31]||(e[31]=(0,l.Lk)("tr",null,[(0,l.Lk)("td",{style:{"text-align":"center"}},[(0,l.Lk)("code",null,"hold_mainhand:brush"),(0,l.eW)("、"),(0,l.Lk)("code",null,"hold_offhand:brush")]),(0,l.Lk)("td",{style:{"text-align":"center"}},"持有刷子时播放")],-1))])]),e[35]||(e[35]=(0,l.Fv)('<p>持有动画还支持通过物品 ID 或者标签来制作自定义动画。这里给出几个持有物品动画的示例，你可以添加无限多个自定义动画：</p><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">作用</th><th>备注</th></tr></thead><tbody><tr><td style="text-align:center;"><code>hold_mainhand$minecraft:shield</code>、<code>hold_offhand$minecraft:shield</code></td><td style="text-align:center;">手持物品 ID 为 minecraft:shield （其实就是原版盾牌）无任何操作时播放</td><td><code>$</code> 加物品 ID</td></tr><tr><td style="text-align:center;"><code>hold_mainhand#minecraft:dirt</code>、<code>hold_offhand#minecraft:dirt</code></td><td style="text-align:center;">手持标签为 minecraft:dirt （原版的泥土、草方块均有此标签）无任何操作时播放</td><td><code>#</code> 加物品标签</td></tr></tbody></table>',2))])}]]),r=JSON.parse('{"path":"/wiki/animation/condition/arm/","title":"手部条件动画","lang":"zh-CN","frontmatter":{"title":"手部条件动画","createTime":"2025/01/28 13:31:19","permalink":"/wiki/animation/condition/arm/","icon":"mdi:arm-flex"},"headers":[],"readingTime":{"minutes":6.11,"words":1833},"git":{"updatedTime":1738250423000,"contributors":[{"name":"tartaric_acid","username":"tartaric_acid","email":"baka943@qq.com","commits":2,"avatar":"https://avatars.githubusercontent.com/tartaric_acid?v=4","url":"https://github.com/tartaric_acid"}]},"filePathRelative":"notes/wiki/动画制作/手部条件动画.md"}')}}]);