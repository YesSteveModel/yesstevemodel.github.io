"use strict";(self.webpackChunkyes_steve_model_wiki_page=self.webpackChunkyes_steve_model_wiki_page||[]).push([[5010],{2715:(e,t,d)=>{d.r(t),d.d(t,{comp:()=>c,data:()=>r});var a=d(641);const o={},c=(0,d(6262).A)(o,[["render",function(e,t){return(0,a.uX)(),(0,a.CE)("div",null,t[0]||(t[0]=[(0,a.Fv)('<p>护甲动画目前没有明确的放置位置，你可以放置在 <code>main.animation.json</code> 文件中。护甲动画会在玩家穿上对应护甲时播放。</p><p>所以为了做出穿戴后显示护甲动画的设计，你应该这样做：</p><ol><li>在并行动画中将所有的护甲组缩放设置为 0；</li><li>制作特定的护甲动画，将特定的组缩放修改回 1；</li></ol><p>护甲动画的命名方式和前述的手部动画几乎完全一致。原版护甲依据穿戴位置，区分为：<code>head</code>、<code>chest</code>、<code>legs（注意是复数）</code>、<code>feet</code> 四种。所有的护甲动画也以这几个名称作为前缀，后面通过 <code>$</code> 加物品 ID 或者 <code>#</code> 加物品标签的方式添加护甲动画。</p><p>这里给出几个持有护甲动画的示例，你可以添加无限多个自定义动画：</p><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">作用</th><th>备注</th></tr></thead><tbody><tr><td style="text-align:center;"><code>head$minecraft:iron_helmet</code></td><td style="text-align:center;">玩家头盔栏穿戴 ID 为 minecraft:iron_helmet（其实就是原版铁头盔）的物品时播放</td><td><code>$</code> 加物品 ID</td></tr><tr><td style="text-align:center;"><code>chest$minecraft:diamond_chestplate</code></td><td style="text-align:center;">玩家胸甲栏穿戴 ID 为 minecraft:diamond_chestplate（其实就是原版钻石胸甲）的物品时播放</td><td><code>$</code> 加物品 ID</td></tr><tr><td style="text-align:center;"><code>legs#forge:armor/diamond</code></td><td style="text-align:center;">玩家护腿栏穿戴标签为 forge:armor/diamond 的物品时播放</td><td><code>#</code> 加物品 ID</td></tr><tr><td style="text-align:center;"><code>feet#forge:armor/iron</code></td><td style="text-align:center;">玩家靴子栏穿戴标签为 forge:armor/iron 的物品时播放</td><td><code>#</code> 加物品 ID</td></tr><tr><td style="text-align:center;"><code>head:default</code></td><td style="text-align:center;">玩家头盔栏穿戴任何护甲时播放。优先级最低，可以拿来做默认显示</td><td>同样适用于 <code>chest</code>、<code>legs</code>和<code>feet</code></td></tr></tbody></table>',6)]))}]]),r=JSON.parse('{"path":"/wiki/animation/armor/","title":"护甲动画","lang":"zh-CN","frontmatter":{"title":"护甲动画","createTime":"2025/01/28 15:12:31","permalink":"/wiki/animation/armor/","icon":"hugeicons:body-armor"},"headers":[],"readingTime":{"minutes":1.34,"words":403},"git":{"updatedTime":1738061882000,"contributors":[{"name":"tartaric_acid","username":"tartaric_acid","email":"baka943@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/tartaric_acid?v=4","url":"https://github.com/tartaric_acid"}]},"filePathRelative":"notes/wiki/动画制作/护甲动画.md"}')}}]);