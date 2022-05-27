<script setup>
import Block from '../components/Block.vue'
import ErrorMsg from '../components/ErrorMsg.vue'
</script>

## `import discord.py` 時找不到 `discord.py` 模組

<Block type="danger" title="問題">
<div>
    - 出現紅色下劃波浪線錯誤，表示無法 import disocrod 模組<br>
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

此為電腦中 discord 網站的憑證未更新而過期導致

1. 右鍵管理員權限執行 IE
2. 到 discord.com 官網
3. 在網址欄有鎖頭的圖示
4. 點及鎖頭>檢視憑證>安裝憑證

![img](/imgs/ssl_443-2.png)  
![img](/imgs/ssl_443-3.png)

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
<div>Discord.py 在版本 1.5.0 進行了重大更新，因此程式碼有些許的變化。  </div>
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

</Block>
