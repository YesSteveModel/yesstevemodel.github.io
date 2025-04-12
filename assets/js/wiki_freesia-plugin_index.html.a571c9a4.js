"use strict";(self.webpackChunkyes_steve_model_wiki_page=self.webpackChunkyes_steve_model_wiki_page||[]).push([[3891],{9016:(s,i,a)=>{a.r(i),a.d(i,{comp:()=>t,data:()=>r});var e=a(641);const n={},t=(0,a(6262).A)(n,[["render",function(s,i){const a=(0,e.g2)("RepoCard");return(0,e.uX)(),(0,e.CE)("div",null,[i[0]||(i[0]=(0,e.Fv)('<div class="hint-container caution"><p class="hint-container-title">提示</p><p><strong>Freesia 插件不是 YSM 官方作品</strong>，它使用 <a href="https://github.com/YesSteveModel/Freesia/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">Mozilla Public License Version 2.0</a> 开源协议进行发布！</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Freesia 插件原作者为 <a href="https://github.com/MrHua269" target="_blank" rel="noopener noreferrer">MrHua269</a>，现由 <a href="https://github.com/HappyRespawnanchor" target="_blank" rel="noopener noreferrer">HappyRespawnanchor</a> 进行维护，在这里对几位作者表示感谢。</p></div><p>Freesia 是一个服务端代理插件，使插件服务器能够支持 Yes Steve Model。</p><p>Freesia 分为三个部分：<code>Velocity</code>、<code>Worker</code> 与安装了 <code>Backend</code> 的插件子服。<code>Velocity</code> 负责转发并处理 YSM 的数据包，<code>Worker</code> 负责模型同步与数据生成，子服负责被玩家游玩。</p><p>可在<a href="https://github.com/YesSteveModel/Freesia/releases" target="_blank" rel="noopener noreferrer">此处</a>获取 Freesia 的最新版本。</p>',5)),(0,e.bF)(a,{repo:"YesSteveModel/Freesia"}),i[1]||(i[1]=(0,e.Fv)('<h2 id="velocity" tabindex="-1"><a class="header-anchor" href="#velocity"><span>Velocity</span></a></h2><p>在 Velocity 端，涉及两个主要组件：<code>master_control_service</code>和 <code>msession</code>。</p><ul><li><code>master_control_service</code>：用于 Velocity 与 Worker 节点之间的通信，以控制其行为。</li><li><code>msession</code>：用于转发玩家的 YSM 数据包至装有 YSM 模组的 Worker 节点，以进行缓存同步。</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>确保 Velocity 能够连接到 Worker 服务器的 Minecraft 端口。</li><li>切勿将 Worker 服务器加入 Velocity 的子服列表，也不要将 <code>master_control_service</code> 和 <code>msession</code> 端口暴露至公网，否则会带来安全隐患。</li></ul></div><h3 id="配置文件示例" tabindex="-1"><a class="header-anchor" href="#配置文件示例"><span>配置文件示例</span></a></h3><div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">functions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 是否踢出未安装 YSM 模组的玩家</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">kick_if_ysm_not_installed</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> false</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 握手超时时间（单位：毫秒）</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">ysm_detection_timeout_for_kicking</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 30000</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">messages</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 语言选项，支持 &quot;zh_CN&quot; 和 &quot;en_US&quot;</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">language</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">zh_CN</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">worker</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 主控制节点地址</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">worker_master_ip</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">localhost</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">worker_master_port</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 19200</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># Worker 服务器地址（需与 server.properties 中的 server-port 和 server-ip 对应）</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 切勿将 Worker 和主控制节点的端口暴露至公网，否则会带来安全风险</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">worker_msession_port</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 19199</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">worker_msession_ip</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">localhost</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="worker" tabindex="-1"><a class="header-anchor" href="#worker"><span>Worker</span></a></h2><p>Worker 是一个 <strong>安装了 YSM 和 Freesia-Worker 模组的 Fabric 1.21 服务器</strong>，用于处理 YSM 逻辑（如缓存同步）、实体状态更新及 NBT 数据生成。<br> 为了减少占用，Worker 端已禁用绝大多数游戏功能，仅处理 YSM 数据包和登录阶段的数据包，以模拟类似 MultiPaper 的多 Slave 场景。</p><p>Worker <strong>不会执行大部分游戏逻辑，也不会进行世界存档</strong>，但依然存在 Tick 逻辑。由于 YSM 逻辑的实现，Worker 侧可能成为性能瓶颈，但 Freesia 采用了异步处理方式，因此影响较小。</p><h3 id="worker-端-freesia-配置文件示例" tabindex="-1"><a class="header-anchor" href="#worker-端-freesia-配置文件示例"><span>Worker 端 Freesia 配置文件示例：</span></a></h3><div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">worker</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 需与 Freesia-Velocity 配置保持一致</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">worker_master_ip</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">localhost</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">worker_master_port</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 19200</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 控制节点的重连间隔（单位：秒）</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">controller_reconnect_interval</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 玩家数据缓存的过期时间（单位：秒）</span></span>\n<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">player_data_cache_invalidate_interval_seconds</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 30</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="worker-服务器-server-properties-配置" tabindex="-1"><a class="header-anchor" href="#worker-服务器-server-properties-配置"><span>Worker 服务器 <code>server.properties</code> 配置：</span></a></h3><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 需与 Freesia-Velocity 配置保持一致</span></span>\n<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">server-ip</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">127.0.0.1</span></span>\n<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">server-port</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">19199</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="子服" tabindex="-1"><a class="header-anchor" href="#子服"><span>子服</span></a></h2><p>子服主要负责处理来自 Velocity 端的玩家 Tracker 检查请求，并通知 Velocity 更新玩家 Tracker。因此，<strong>子服必须安装 <code>Freesia-Backend</code></strong>。</p><h2 id="示例脚本" tabindex="-1"><a class="header-anchor" href="#示例脚本"><span>示例脚本</span></a></h2><p>若还不理解使用方法，可以从<a href="https://ysm.cfpa.team/files/freesia-template.zip" target="_blank" rel="noopener noreferrer">此处</a>获取一个模板，请执行其中的<code>install-freesia.bat</code>（Windows）或<code>install-freesia.sh</code>（Linux）来下载相关文件，下载完成后即可运行对应文件夹中的<code>start.bat</code>或<code>start.sh</code>开启服务端。</p>',17))])}]]),r=JSON.parse('{"path":"/wiki/freesia-plugin/","title":"Freesia 插件","lang":"zh-CN","frontmatter":{"title":"Freesia 插件","createTime":"2025/03/07 21:50:16","permalink":"/wiki/freesia-plugin/","icon":"clarity:plugin-solid","author":"嗨皮重生锚","tags":["安装"]},"headers":[],"readingTime":{"minutes":2.51,"words":754},"git":{"updatedTime":1744468607000,"contributors":[{"name":"ChongYu Xu","username":"ChongYu Xu","email":"80967824+HappyRespawnanchor@users.noreply.github.com","commits":1,"avatar":"https://avatars.githubusercontent.com/ChongYu Xu?v=4","url":"https://github.com/ChongYu Xu"},{"name":"tartaric_acid","username":"tartaric_acid","email":"baka943@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/tartaric_acid?v=4","url":"https://github.com/tartaric_acid"},{"name":"HappyRespawnanchor","username":"HappyRespawnanchor","email":"80967824+HappyRespawnanchor@users.noreply.github.com","commits":1,"avatar":"https://avatars.githubusercontent.com/HappyRespawnanchor?v=4","url":"https://github.com/HappyRespawnanchor"}]},"filePathRelative":"notes/wiki/Freesia插件.md"}')}}]);