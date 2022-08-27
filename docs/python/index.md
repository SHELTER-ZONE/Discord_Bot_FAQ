<script setup>
import Block from '../components/Block.vue'
import ErrorMsg from '../components/ErrorMsg.vue'
</script>

## `import discord.py` 時找不到 `discord.py` 模組

<Block type="danger" title="問題">
<div>
    - 出現紅色下劃波浪線錯誤，表示無法 import discord 模組<br>
    - 執行時報錯 <ErrorMsg text="ModuleNotFoundError: No module named 'disocrd'" />
</div>

![img](/imgs/cant_import_discord-1.png)
![img](/imgs/cant_import_discord-2.png)

</Block>

<Block type="success" title="解決方法">

此問題有兩種可能:

1. 可能你沒安裝 discord.py 模組
2. 可能你電腦裡有多個 Python 版本或環境，比如你電腦裡有裝 3.6 跟 3.8 兩個版本，結果你當初安裝 discord.py 模組是安裝在 Python 3.6，但你 VSCode 的運行環境是 Python 3.8

請首先確認你電腦裡是否有多個 Python 版本或環境

> 如果有：

又有兩種解法...

1. 你可以直接在當前 VSCode 的 Python 版本環境下，使用 VSCode 內部的終端機再執行 `pip install discord.py` 安裝模組一次
2. 你可以直接切換 VSCode 裡的 Python 執行環境，切換到你安裝 discord.py 模組的那個版本環境下，如下圖：

在 VSCode 的最左下角會顯示你當前的 Python 版本環境，直接點擊它後就可以切換 Python 的版本環境了

![img](/imgs/cant_import_discord-3.png)  
![img](/imgs/cant_import_discord-4.png)

> 只有單一版本環境：

執行 `pip show discord.py` 確認是否已有安裝 discord.py 模組

沒有的話請執行 `pip install discord.py` 安裝模組

</Block>

## `SSL:443` 憑證過期

<Block type="danger" title="問題">
<div>
    執行時出現 <ErrorMsg text="Cannot connect to host discordapp.com:443 ssl:True ... [CERTIFICATE_VERIFY_FAILED]" /> 
</div>
</Block>

<Block type="success" title="解決方法">

### Windows
原因: 電腦中 Discord 網站的憑證未更新而過期導致
1. 右鍵管理員權限執行 IE
2. 前往 https://discord.com
3. 點擊網站資訊 (網址列左邊，通常為鎖頭符號)
4. 檢視憑證 > 安裝憑證

![img](/imgs/ssl_443-2.png)  
![img](/imgs/ssl_443-3.png)

### macOS
原因: Python未安裝SSL憑證
1. 開啟 Finder
2. 前往「應用程式」資料夾
3. 開啟子資料夾「Python 3.x」
4. 運行「Install Certificates.command」

![img](/imgs/ssl_443-4.png)

</Block>

## from...import...紅色波浪線

<Block type="danger" title="問題">
<img src="/imgs/pylint.png"/>
</Block>
<Block type="success" title="請直接執行程式，如果程式正常執行沒有任何報錯，請直接無視。">
</Block>

<Block type="success" title="解決方法">

這是 `vscode Pylint` 設定問題

> Pylint: Python 程式碼提示、檢查工具

雖然有解決方案，但同一套解法不同人可能不一定會有效，設定也稍微麻煩；況且並不影響真正的執行，所以最有效的解決方案就是無視它!

</Block>

## 執行報錯 No module named 'core'

<Block type="danger" title="問題">
<img src="/imgs/noNamedCore.png">
</Block>

<Block type="success" title="解決方法">
基本上就是你的資料夾層次結構有錯誤，檢查 core 資料是否被放到其他資料夾中，所有資料夾應該是要在同一層級

</Block>

## on_message 導致指令無效

<Block type="danger" title="問題">
<div>建立 on_message 後，其他所有指令皆無反應</div>
</Block>

<Block type="success" title="解決方法">

如果你並不是用 Cog 架構，而是把所有指令都寫在一個檔案內，就會發生 on_message 與 command 衝突與導致指令無效  
這在官方文件的常見問題上已經有寫出:
[Why does on_message make my commands stop working?](https://discordpy.readthedocs.io/en/latest/faq.html?highlight=on_message#why-does-on-message-make-my-commands-stop-working)

以下三種方式:

1. 在 on_message 中的最後一行加上 `await bot.process_commands()`

```python
@bot.event
async def on_message(message):
    # do some extra stuff here

    await bot.process_commands(message)
```

2. 不要使用 `@bot.event` 改用 `@bot.listen('on_message')`

```python
@bot.listen('on_message')
async def whatever_you_want_to_call_it(message):
    # do stuff here
    # do not process commands here
```

3. 改用 Cog 架構

</Block>

## on_members_join 和 on_members_leave 失效

<Block type="danger" title="問題">
<div>Discord.py 在版本 1.5.0 進行了重大更新，因此程式碼有些許的變化。</div>
</Block>

<Block type="success" title="解決方法">

請參考影片說明: [1.5 重大更新](https://youtu.be/clqFPOJkkrI)

</Block>

## 讀不到 setting.json

<Block type="danger" title="問題">
<div>執行 bot 報錯，找不到/讀不到 setting.json 檔案</div>

```py
Traceback (most recent call last):
File "x:\...\bot.py", line x, in <module>
    with open('setting.json', 'r', encoding='utf8') as jfile:
FileNotFoundError: [Errno 2] No such file or directory: 'setting.json'
```

</Block>

<Block type="success" title="解決方法">

如果你是使用 F5 執行而爆出此錯誤，可能是以下原因：  
１. 你的 `launch.json` 啟動器設定檔沒設定好  
在你的 launch.json 設定檔中，應當要有下圖兩個啟動器中其中一個，新增以下啟動器設定檔存檔後，請選擇該啟動器再執行  
![](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/launch_json.png)

２. 你沒選擇正確的啟動器執行  
再 debugger 頁面上方的啟動器選項中，應當選擇正確的啟動器  
![](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/launcher.png)

如果排除以上兩種情況：

1. 確認 `setting.json` 檔案是否與 `bot.py` 檔案於同個資料夾內

</Block>

## load_extension 找不到 ./cmds

<Block type="danger" title="問題">
<div>執行後在 bot.load_extension 處報錯，<ErrorMsg text="ModuleNotFoundError: No module named 'cmds'" /></div>

![img](/imgs/cmds_not_found.png)

</Block>

<Block type="success" title="解決方法">

請確認資料夾結構是否正確

`os.listdir("./cmds")` 中的路徑： `./cmds` 代表的是 `當前資料夾中底下的cmds資料夾`  
所以 `bot.py` 與 `cmds` 資料夾應該要在同一層級的資料夾內

![img](/imgs/cmds_folder.png)

</Block>

## xxxx is not a package

<Block type="danger" title="問題">
<div>執行 bot 後報錯，找不到 discord 函數庫</div>

```py
Traceback (most recent call last):
  File "C:\Users\user\Desktop\pr\Discord_Bot_FAQ\demo\errors\main.py", line 2, in <module>
    from discord.ext import commands
ModuleNotFoundError: No module named 'discord.ext'; 'discord' is not a package
```

![img](/imgs/python/xxxx-is-not-a-package/error-src.jpg)

</Block>

## 有些在 cog 裡的指令偵測不到

<Block type="danger" title="問題">
<div>執行後運行 `help` 指令早不到定義的指令</div>
出錯程式：

```py
import asyncio
from discord.ext import commands

from core.classes import Cog_Extension


class Task(Cog_Extension):
  def __init__(self, *args, **kwargs):
    super().__init__(*args, **kwargs)

    async def interval():
      await self.bot.wait_until_ready()
      self.channel = self.bot.get_channel(123456789)
      while not self.bot.is_closed():
        await self.channel.send("hi I am running!")
        await asyncio.sleep(60)

      self.bg_task = self.bot.loop.create_task(interval())


@commands.command()
async def set_channel(self, ctx, channelId: int):
  self.channel = self.bot.get_channel(channelId)
  await ctx.send(f'Set channel to {self.channel.mention}')


def setup(bot):
  bot.add_cog(Task(bot))
```

</Block>

<Block type="success" title="解決方法">
原因：

檔案/資料夾 命名與函數庫名稱相同
<br />

例:

```py
import discord
```

檔案/資料夾 不可命名為 `discord`，請嘗試將衝突到的檔案/資料夾重新命名。

如果仍然還是錯誤請嘗試 [import-discord-py-時找不到-discord-py-模組](./#import-discord-py-時找不到-discord-py-模組)

請確認縮排是否正確

```py
@commands.command()
async def set_channel(self, ctx, channelId: int):
  ...略
  await ctx.send(f'Set channel to {self.channel.mention}')
```

以上程式碼區塊應位於 class Task 區塊內

所以應該要這樣寫:

```py
...略
class Task(Cog_Extension):
  def __init__(self, *args, **kwargs):
    super().__init__(*args, **kwargs)

    async def interval():
      ...略

  @commands.command()
  async def set_channel(self, ctx, channelId: int):
    self.channel = self.bot.get_channel(channelId)
    await ctx.send(f'Set channel to {self.channel.mention}')


def setup(bot):
  bot.add_cog(Task(bot))
```

</Block>

## discord.errors.HTTPException: 429 Too Many Requests 
<Block type="danger" title="問題">
<div>报错<ErrorMsg text="discord.errors.HTTPException: 429 Too Many Requests " /></div>

报错：

---

```py
Traceback (most recent call last):
  File "main.py", line 224, in <module>
    client.run(TOKEN)
  File "/opt/virtualenvs/python3/lib/python3.8/site-packages/discord/client.py", line 723, in run
    return future.result()
  File "/opt/virtualenvs/python3/lib/python3.8/site-packages/discord/client.py", line 702, in runner
    await self.start(*args, **kwargs)
  File "/opt/virtualenvs/python3/lib/python3.8/site-packages/discord/client.py", line 665, in start
    await self.login(*args, bot=bot)
  File "/opt/virtualenvs/python3/lib/python3.8/site-packages/discord/client.py", line 511, in login
    await self.http.static_login(token.strip(), bot=bot)
  File "/opt/virtualenvs/python3/lib/python3.8/site-packages/discord/http.py", line 300, in static_login
    data = await self.request(Route('GET', '/users/@me'))
  File "/opt/virtualenvs/python3/lib/python3.8/site-packages/discord/http.py", line 216, in request
    raise HTTPException(r, data)
discord.errors.HTTPException: 429 Too Many Requests (error code: 0):
```
---
</Block>

<Block type="success" title="解決方法">
通常来说dpy库会自动协调dc的网关返回的速率限制(rate limit)细节去调整以避免持续碰撞速率限制.

如果持续触发速率限制请做出以下调整

1. 检查自身程序

	---
	
	```py
	bot = commands.Bot(enable_debug_events=True)

	#该方法用于检查是否持续触发错误
	@bot.event
	async def on_error(event, *args, **kwargs):
		print(event)

	#该方法似乎无法稳定触发，故仅作参考
	@bot.event
	async def on_socket_raw_send(payload):
		print(payload)
	```
	
	---
	
	检查Bot是否大量持续产生速率限制错误或者持续发送网关事件
	
	- 如果是:

		- 修改代码，减少发送频率，具体限制请参考[官方完整文档](https://discord.com/developers/docs/topics/rate-limits).
	
	- 如果不是

		- 检查环境

2. 检查环境

	- 如果是共享ip地址

		- 尝试更换ip或服务器提供商

	- 如果是非共享ip地址
		- 提交Issue
		- 联系Discord support以获取更多细节

</Block>

## 从旧的dpy 1.X更新至dpy 2.X
<Block type="success" title="前言">
<div>本篇指南意帮助新手快速解决更新到discord.py 2.X的报错</div>

> 目前未覆盖全部内容，详细完整迁移到dpy 2.X的改动建议查看[官方完整文档](https://discordpy.readthedocs.io/en/latest/migrating.html). 
> 阅读后无法解决请提交Issue.

</Block>

### Runtimewarning: coroutine 'bot.load_extension' was never awaited
---
<Block type="danger" title="問題">
<div>执行后在 bot.load_extension 报错 
<br><ErrorMsg text="Runtimewarning: coroutine 'Bot.load_extension' was never awaited" /></div>

出錯程式：

---
需要加载的Cog
```py
class cog(commands.Cog):
    ...略

def setup(bot):
    bot.add_cog(cog(bot))
	
def teardown(bot):
	...略
```
加载cog的函数
```py
bot.load_extension(f'cog')
```
---
</Block>

<Block type="success" title="解決方法">
目前dpy2.0重写了bot启动方式并且将load_extension/unload_extension/reload_extension改为异步方式

修正程式：

---
需要加载的Cog
```py
#你的需要加载的cog
class cog(commands.Cog):
    ...略

async def setup(bot):
    await bot.add_cog(cog(bot))
	
async def teardown(bot):
	...略
```
加载cog的函数(使用setup_hook)
```py
class core(commands.Bot):
    async def setup_hook(self):
        await self.load_extension(f'cog')
```
加载cog的函数(使用on_ready)
```py	
class core(commands.Cog):
	@commands.Cog.listener()
    async def on_ready(self):
        await self.bot.load_extension(f'cog')
```	
不使用类(使用setup_hook)
```py
bot.setup_hook = setup_hook
async def setup_hook():
	await bot.load_extension(f'cog')
```
不使用类(使用async_with)
```py
async def main():
    async with bot:
        await bot.load_extension(f'cog')
        await bot.start(TOKEN)

asyncio.run(main())
```

</Block>

### xxxx missing 1 required keyword-only argument: 'intents' 或者对事件无反应
---
<Block type="danger" title="問題">
<div>执行后在 commands.Bot(command_prefix='?') 报错, <ErrorMsg text="TypeError: xxxx missing 1 required keyword-only argument: 'intents'" />或者bot对事件无反应</div>

出錯程式：

---
```py
bot = commands.Bot(command_prefix='?')
```
---
</Block>

<Block type="success" title="解決方法">
Discord目前要求使用Intents以控制Bot所能接收的网关事件

修正程式：

---
```py
bot = commands.Bot(command_prefix='?', intents=discord.Intents.all())
#你也可以只开启你需要的Intents，具体方法请自行查看文档
```
---
前往discord的[开发者页面](https://discord.com/developers/applications)

选择你的应用，并且在Bot分页里将需要的Intents开启

![img](/imgs/python/migrating-2.0/intents.png)

Intents列表:
```
GUILDS (1 << 0)
  - GUILD_CREATE
  - GUILD_UPDATE
  - GUILD_DELETE
  - GUILD_ROLE_CREATE
  - GUILD_ROLE_UPDATE
  - GUILD_ROLE_DELETE
  - CHANNEL_CREATE
  - CHANNEL_UPDATE
  - CHANNEL_DELETE
  - CHANNEL_PINS_UPDATE
  - THREAD_CREATE
  - THREAD_UPDATE
  - THREAD_DELETE
  - THREAD_LIST_SYNC
  - THREAD_MEMBER_UPDATE
  - THREAD_MEMBERS_UPDATE *
  - STAGE_INSTANCE_CREATE
  - STAGE_INSTANCE_UPDATE
  - STAGE_INSTANCE_DELETE

GUILD_MEMBERS (1 << 1)
  - GUILD_MEMBER_ADD
  - GUILD_MEMBER_UPDATE
  - GUILD_MEMBER_REMOVE
  - THREAD_MEMBERS_UPDATE *

GUILD_BANS (1 << 2)
  - GUILD_BAN_ADD
  - GUILD_BAN_REMOVE

GUILD_EMOJIS_AND_STICKERS (1 << 3)
  - GUILD_EMOJIS_UPDATE
  - GUILD_STICKERS_UPDATE

GUILD_INTEGRATIONS (1 << 4)
  - GUILD_INTEGRATIONS_UPDATE
  - INTEGRATION_CREATE
  - INTEGRATION_UPDATE
  - INTEGRATION_DELETE

GUILD_WEBHOOKS (1 << 5)
  - WEBHOOKS_UPDATE

GUILD_INVITES (1 << 6)
  - INVITE_CREATE
  - INVITE_DELETE

GUILD_VOICE_STATES (1 << 7)
  - VOICE_STATE_UPDATE

GUILD_PRESENCES (1 << 8)
  - PRESENCE_UPDATE

GUILD_MESSAGES (1 << 9)
  - MESSAGE_CREATE
  - MESSAGE_UPDATE
  - MESSAGE_DELETE
  - MESSAGE_DELETE_BULK

GUILD_MESSAGE_REACTIONS (1 << 10)
  - MESSAGE_REACTION_ADD
  - MESSAGE_REACTION_REMOVE
  - MESSAGE_REACTION_REMOVE_ALL
  - MESSAGE_REACTION_REMOVE_EMOJI

GUILD_MESSAGE_TYPING (1 << 11)
  - TYPING_START

DIRECT_MESSAGES (1 << 12)
  - MESSAGE_CREATE
  - MESSAGE_UPDATE
  - MESSAGE_DELETE
  - CHANNEL_PINS_UPDATE

DIRECT_MESSAGE_REACTIONS (1 << 13)
  - MESSAGE_REACTION_ADD
  - MESSAGE_REACTION_REMOVE
  - MESSAGE_REACTION_REMOVE_ALL
  - MESSAGE_REACTION_REMOVE_EMOJI

DIRECT_MESSAGE_TYPING (1 << 14)
  - TYPING_START

MESSAGE_CONTENT (1 << 15) **

GUILD_SCHEDULED_EVENTS (1 << 16)
  - GUILD_SCHEDULED_EVENT_CREATE
  - GUILD_SCHEDULED_EVENT_UPDATE
  - GUILD_SCHEDULED_EVENT_DELETE
  - GUILD_SCHEDULED_EVENT_USER_ADD
  - GUILD_SCHEDULED_EVENT_USER_REMOVE

AUTO_MODERATION_CONFIGURATION (1 << 20)
  - AUTO_MODERATION_RULE_CREATE
  - AUTO_MODERATION_RULE_UPDATE
  - AUTO_MODERATION_RULE_DELETE

AUTO_MODERATION_EXECUTION (1 << 21)
  - AUTO_MODERATION_ACTION_EXECUTION
```

</Block>


### Webhook报错module 'discord' has no attribute xxxx
---
<Block type="danger" title="問題">
<div>执行Webhook后报错, <ErrorMsg text="module 'discord' has no attribute 'AsyncWebhookAdapter'" />或者<ErrorMsg text="module 'discord' has no attribute 'RequestsWebhookAdapter'" /></div>

出錯程式：

---
```py
async with aiohttp.ClientSession() as session:
    webhook = discord.Webhook.from_url('url-here', 
		adapter=discord.AsyncWebhookAdapter(session))
    await webhook.send('Hello World', username='Foo')
	
webhook = discord.Webhook.partial(123456, 'token-here', 
	adapter=discord.RequestsWebhookAdapter())
webhook.send('Hello World', username='Foo')
```
---
</Block>

<Block type="success" title="解決方法">
WebhookAdapter类被移除,请使用新的写法

修正程式：

---
```py
# after
async with aiohttp.ClientSession() as session:
    webhook = discord.Webhook.from_url('url-here', session=session)
    await webhook.send('Hello World', username='Foo')
	
webhook = discord.SyncWebhook.partial(123456, 'token-here')
webhook.send('Hello World', username='Foo')
```
---

</Block>