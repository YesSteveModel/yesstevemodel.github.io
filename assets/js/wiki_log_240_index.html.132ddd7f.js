"use strict";(self.webpackChunkyes_steve_model_wiki_page=self.webpackChunkyes_steve_model_wiki_page||[]).push([[5967],{7551:(i,l,e)=>{e.r(l),e.d(l,{comp:()=>t,data:()=>d});var a=e(641);const o={},t=(0,e(6262).A)(o,[["render",function(i,l){return(0,a.uX)(),(0,a.CE)("div",null,l[0]||(l[0]=[(0,a.Fv)('<h2 id="bug-修正" tabindex="-1"><a class="header-anchor" href="#bug-修正"><span>Bug 修正</span></a></h2><ul><li>修复未安装 YSM 的客户端无法进服的问题</li><li>修复多动画的状态中，未应用的动画音效播放的问题</li><li>修正轮盘动画自定义配置功能中，按钮不识别布尔值的问题</li><li>现在动画控制中，缩放动画混合是连乘，而不是累加（契合基岩版机制）</li><li>修改二阶动画计算机制，现在在极低帧率下二阶动画也能正常播放了</li><li>现在音频强制是单声道播放了（仅支持 Forge 1.21/1.20/1.19/1.18）</li><li>修复某些情况下，音频不停止的 bug</li><li>尝试修复某些使用或者挥动动画时，第一帧会空白的 bug</li></ul><h2 id="女仆渲染兼容" tabindex="-1"><a class="header-anchor" href="#女仆渲染兼容"><span>女仆渲染兼容</span></a></h2><ul><li>添加对女仆模组的兼容，现在 1.2.0 版本女仆模组可以直接调用 YSM 渲染了，需要两个模组都更新</li><li>现在创造模式拿着御币右击雕像或者手办，可以把自己的模型复制到雕像手办上</li><li>新增 tlm.animation.json 文件，增加了十条女仆相关动画 <ul><li>新增动画：<code>broom</code> <code>statue</code> <code>garage_kit</code></li></ul></li><li>支持 Z 键轮盘动画</li><li>支持多材质切换</li><li>支持 roaming 变量</li><li>支持做成雕像或者手办</li><li>酒狐女仆现在弹奏女仆模组的钢琴有粒子和音乐了</li><li>新增女仆相关 molang 变量： <ul><li><code>ysm.entity_type</code> 返回 player 和 maid</li><li><code>ysm.is_player</code> 布尔值</li><li><code>ysm.is_maid</code> 布尔值</li><li><code>tlm.favorability_point</code> 好感度点数，0-384</li><li><code>tlm.favorability_level</code> 好感度等级：0-3</li><li><code>tlm.task_id</code> 工作模式 id，字符串</li><li><code>tlm.schedule</code> 工作日程，day night all，白班夜班全天</li><li><code>tlm.activity</code> 活动，work idle reset 上班，下班，睡觉</li><li><code>tlm.gomoku_win_count</code> 五子棋赢棋总回合数</li><li><code>tlm.gomoku_rank</code> 五子棋段位，1-4，没有 0</li><li><code>tlm.game_statue</code> 棋局状态，win lost 空字符串</li><li><code>tlm.backpack_type</code> 背包 ID</li><li><code>tlm.is_entity</code> 渲染女仆实体</li><li><code>tlm.is_statue</code> 渲染雕像</li><li><code>tlm.is_garage_kit</code> 渲染手办</li><li><code>tlm.show_item</code> 那个装饰槽位的物品 ID</li></ul></li></ul><h2 id="新增内容" tabindex="-1"><a class="header-anchor" href="#新增内容"><span>新增内容</span></a></h2><ul><li>补齐拔刀剑动画，现在支持日式附属诸多剑技动画</li><li>添加额外主副手定位组功能，只需要在旧主副手定位组后加数字 2-8，即可使用</li><li>roaming 变量上限修改，数量改为 64 个，名称上限改为 32 字符</li><li>优化动画调试功能 <ul><li>现在可以使用 <code>/ysmclient watch var</code> 指令快速调试 molang</li><li>现在指令会自动补齐可用变量</li><li>现在可以调试动画状态机了，<code>/ysmclient watch state</code></li></ul></li><li>兼容精妙背包模组渲染，需要添加 BackpackLocator 定位组才会显示</li><li>添加 Opus 音频解码功能，使用 Opus 音频可以大幅度缩减文件体积（仅支持 Forge 1.21/1.20/1.19/1.18）</li><li>新增柏林噪声函数：<code>ysm.perlin_noise(seed, x, y, z)</code>，其中 y 和 z 可以省去不写</li><li>添加粒子生成的 molang： <ul><li><code>ysm.particle(&#39;id&#39;, x, y, z, dx, dy, dz, speed, count, life_time)</code></li><li><code>ysm.abs_particle(&#39;id&#39;, x, y, z, dx, dy, dz, speed, count, life_time)</code></li></ul></li><li>新增八个空白控制器 <ul><li>player.pre_main</li><li>player.post_main</li><li>player.pre_hold</li><li>player.post_hold</li><li>player.pre_use</li><li>player.post_use</li><li>player.pre_swing</li><li>player.post_swing</li></ul></li><li>新增 molang: <ul><li><code>ysm.mainhand_charged_crossbow</code></li><li><code>ysm.offhand_charged_crossbow</code></li><li><code>ysm.is_fishing</code></li></ul></li><li>酒狐新增白色换装</li><li>新增新春酒狐</li></ul>',6)]))}]]),d=JSON.parse('{"path":"/wiki/log/240/","title":"2.4.0 更新日志","lang":"zh-CN","frontmatter":{"title":"2.4.0 更新日志","icon":"ic:sharp-update","createTime":"2025/03/05 18:41:11","permalink":"/wiki/log/240/","tags":["更新日志"]},"headers":[],"readingTime":{"minutes":2.56,"words":767},"git":{"updatedTime":1741172028000,"contributors":[{"name":"tartaric_acid","username":"tartaric_acid","email":"baka943@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/tartaric_acid?v=4","url":"https://github.com/tartaric_acid"}]},"filePathRelative":"notes/wiki/更新日志/2.4.0 更新日志.md"}')}}]);