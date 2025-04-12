"use strict";(self.webpackChunkyes_steve_model_wiki_page=self.webpackChunkyes_steve_model_wiki_page||[]).push([[6511],{5799:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>t,data:()=>l});var e=a(641);const n={},t=(0,a(6262).A)(n,[["render",function(i,s){return(0,e.uX)(),(0,e.CE)("div",null,s[0]||(s[0]=[(0,e.Fv)('<p>2.3.0 版本起，Yes Steve Model 模组支持在动画里调用音频了，但是有一些注意事项：</p><ul><li>音频文件可以内置于模型包内，也支持调用原版游戏的音频</li><li>默认情况下，内置的音频需要放置在目录下的 sounds 文件夹里</li><li>需要使用新版的文件结构才能使用音频，旧版结构无法使用</li><li>音频必须为 ogg 格式。建议使用单声道，这样游戏内才能听到立体声效果。</li><li>单个音频不允许超过 4M，整个模型文件不允许超过 66M</li></ul><div class="hint-container tip"><p class="hint-container-title">我该如何转换音频？</p><p>音频转换的工具很多，常用的有格式工厂和 Adobe Audition。格式工厂简单易用，方便新手使用。</p><p>格式工厂下载：<a href="http://www.pcfreetime.com/formatfactory/CN/index.html" target="_blank" rel="noopener noreferrer">官网</a> <a href="https://pc.qq.com/detail/11/detail_1511.html" target="_blank" rel="noopener noreferrer">腾讯软件中心</a></p><p>Adobe Audition 是专业音频制作软件，上手有门槛，但是功能更为强大！</p><p>当然，您也可以使用其他转换工具，例如：Audacity、FFmpeg 等，只要能转换为 ogg 格式即可。</p></div><h2 id="添加步骤" tabindex="-1"><a class="header-anchor" href="#添加步骤"><span>添加步骤</span></a></h2><div class="vp-steps"><ol><li><p>新建音频文件夹</p><p>文件夹名为固定名称：<code>sounds</code></p><p><img src="https://s2.loli.net/2025/01/30/HZMXbJgK1i6raef.png" alt="1.png"></p></li><li><p>添加 .ogg 文件</p><p>仅能使用 ogg 格式，其他格式（wav 或者 mp3 等需要转换）</p><p><img src="https://s2.loli.net/2025/01/30/niRbwcJYmG9dqzO.png" alt="4.png"></p></li><li><p>在 BlockBench 内为动画添加音频</p><p><img src="https://s2.loli.net/2025/01/30/bQ3r4OSskhH5z7a.png" alt="3.png"></p></li></ol></div><h2 id="音频名如何书写" tabindex="-1"><a class="header-anchor" href="#音频名如何书写"><span>音频名如何书写？</span></a></h2><h3 id="内置音频" tabindex="-1"><a class="header-anchor" href="#内置音频"><span>内置音频</span></a></h3><p>如果你的音频路径是 <code>sounds/啊哈哈哈.ogg</code>，那么你只需要在基岩版动画的音频关键帧里填写 <code>啊哈哈哈</code> 即可，不需要加 sounds 前缀和 ogg 后缀。</p><div class="hint-container tip"><p class="hint-container-title">我想换个文件夹放音频，能自定义么？</p><p>可以，首先你需要给你的 <code>ysm.json</code> 的 <code>properties</code> 字段中新增 <code>sound_path</code> 字段，填写你想放置音频的文件夹路径。</p><p>写法参考如下：</p><div class="language-jsonc line-numbers-mode" data-ext="jsonc" data-title="jsonc"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>\n<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">properties</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 支持任意字符</span></span>\n<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">        // 后续基岩版动画里音频关键帧填写的名称和上述一致，不需要添加此文件夹前缀和 ogg 后缀</span></span>\n<span class="line highlighted"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">        &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">sound_path</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">声音文件夹</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>\n<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="原版游戏音频" tabindex="-1"><a class="header-anchor" href="#原版游戏音频"><span>原版游戏音频</span></a></h3><p>如果你在基岩版动画的音频关键帧里填写的是原版音频的 ID（类似于：<code>minecraft:block.anvil.hit</code>），那么会调用原版音频进行播放。</p><p>原版资源包也可以添加额外的音频文件，并且支持音频随机播放和权重设置，详情可查看官方相关教程：</p><ul><li>资源包制作教程：<a href="https://zh.minecraft.wiki/w/Tutorial:%E5%88%B6%E4%BD%9C%E8%B5%84%E6%BA%90%E5%8C%85?variant=zh-cn" target="_blank" rel="noopener noreferrer">Minecraft Wiki</a></li><li>音效和音乐包教程：<a href="https://zh.minecraft.wiki/w/Tutorial:%E5%88%B6%E4%BD%9C%E8%B5%84%E6%BA%90%E5%8C%85/%E9%9F%B3%E6%95%88%E5%92%8C%E9%9F%B3%E4%B9%90" target="_blank" rel="noopener noreferrer">Minecraft Wiki</a></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>我们强烈建议您使用原版资源包来添加音频，这样可以减少模型文件的大小，还能避免在某些情况下可能出现的版权问题。</p></div>',14)]))}]]),l=JSON.parse('{"path":"/wiki/sound/","title":"添加音频","lang":"zh-CN","frontmatter":{"title":"添加音频","createTime":"2025/01/28 16:57:54","permalink":"/wiki/sound/","icon":"lets-icons:sound"},"headers":[],"readingTime":{"minutes":2.49,"words":746},"git":{"updatedTime":1738844141000,"contributors":[{"name":"tartaric_acid","username":"tartaric_acid","email":"baka943@qq.com","commits":4,"avatar":"https://avatars.githubusercontent.com/tartaric_acid?v=4","url":"https://github.com/tartaric_acid"},{"name":"KLuoNuoYa","username":"KLuoNuoYa","email":"153290281+KLuoNuoYa@users.noreply.github.com","commits":2,"avatar":"https://avatars.githubusercontent.com/KLuoNuoYa?v=4","url":"https://github.com/KLuoNuoYa"}]},"filePathRelative":"notes/wiki/模型包制作/添加音频.md"}')}}]);