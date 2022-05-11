<script setup>
import Block from '../components/Block.vue'
</script>


# Discord.py FAQ

## `import discord.py` 時找不到 `discord.py` 模組
**問題：**
<Block type="title" content="問題" />
- 出現紅色下劃波浪線錯誤，表示無法 import disocrod 模組<br>
- 執行時報錯 `ModuleNotFoundError: No module named 'disocrd'`

![img](/imgs/cant_import_discord-1.png)
![img](/imgs/cant_import_discord-2.png)

**解決方法：**<br>
此問題有兩種可能:
1. 可能你沒安裝 discord.py 模組
2. 可能你電腦裡有多個 Python 版本或環境，比如你電腦裡有裝 3.6 跟 3.8 兩個版本，結果你當初安裝 discord.py 模組是安裝在 Python 3.6，但你 VSCode 的運行環境是 Python 3.8

請首先確認你電腦裡是否有多個 Python 版本或環境

> 如果有：

又有兩種解法...
1. 你可以直接在當前 VSCode 的 Python 版本環境下，使用 VSCode 內部的終端機再執行 `pip install discord.py` 安裝模組一次
2. 你可以直接切換 VSCode 裡的 Python 執行環境，切換到你安裝 discord.py 模組的那個版本環境下，如下圖：

在 VSCode 的最左下角會顯示你當前的 Python 版本環境，直接點擊它後就可以切換 Python 的版本環境了

![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/cant_import_discord-3.png)
![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/cant_import_discord-4.png)

> 只有單一版本環境：

執行 `pip show discord.py` 確認是否已有安裝 discord.py 模組

沒有的話請執行 `pip install discord.py` 安裝模組

---

## `SSL:443` 憑證過期
**問題**：  
執行時出現 `Cannot connect to host discordapp.com:443 ssl:True ... [CERTIFICATE_VERIFY_FAILED]`

![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/ssl_443.png?raw=true)

**解決方法：**  
此為電腦中 discord 網站的憑證未更新而過期導致

1. 右鍵管理員權限執行 IE
2. 到discord.com 官網
3. 在網址欄有鎖頭的圖示
4. 點及鎖頭>檢視憑證>安裝憑證

![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/ssl_443-2.png)
![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/ssl_443-3.png)

---

## from...import...紅色波浪線
請先執行程式，如果程式正常執行沒有任何報錯，請直接無視。  
**問題**：  
![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/pylint.png)
這是 `Pylint` 本身的問題
> Pylint: Python程式碼提示、檢查工具

**解決方法：**  
雖然有解決方案，但同一套解法不同人可能不一定會有效，設定也稍微麻煩；況且並不影響真正的執行，所以最有效的解決方案就是無視它!

## 執行報錯 No module named 'core'

**問題**：  
![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/noNamedCore.png)  
**解決方法：**  
基本上就是你的資料夾層次結構有錯誤，檢查 core 資料是否被放到其他資料夾中，所有資料夾應該是要在同一層級

## on_message 導致指令無效
**問題**：  
如果你並不是用Cog架構，而是把所有指令都寫在一個檔案內，就會發生on_message與command衝突與導致指令無效  
這在官方文件的常見問題上已經有寫出:
[Why does on_message make my commands stop working?](https://discordpy.readthedocs.io/en/latest/faq.html?highlight=on_message#why-does-on-message-make-my-commands-stop-working)

**解決方法：**  
以下三種方式:
1. 在on_message 中的最後一行加上 `await bot.process_commands()`
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
3. 改用Cog架構

## on_members_join 和 on_members_leave 失效
**問題**：  
Discord.py 在版本 1.5.0 進行了重大更新，因此程式碼有些許的變化。  

**解決方法：**  
較詳細的影片說明: [1.5 重大更新](https://youtu.be/clqFPOJkkrI)


## 讀不到 setting.json
**問題**：  
執行bot報錯找不到、讀不到 setting.json 檔案
```py
Traceback (most recent call last):
  File "x:\...\bot.py", line x, in <module>
    with open('setting.json', 'r', encoding='utf8') as jfile:
FileNotFoundError: [Errno 2] No such file or directory: 'setting.json'
```

**解決方法：**  
如果你是使用F5執行而爆出此錯誤，可能是以下原因：  
１. 你的 `launch.json` 啟動器設定檔沒設定好  
在你的launch.json設定檔中，應當要有下圖兩個啟動器中其中一個，新增以下啟動器設定檔存檔後，請選擇該啟動器再執行  
![](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/launch_json.png)

２. 你沒選擇正確的啟動器執行  
再debugger頁面上方的啟動器選項中，應當選擇正確的啟動器  
![](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/launcher.png)

如果排除以上兩種情況：
1. 確認 `setting.json` 檔案是否與 `bot.py` 檔案於同個資料夾內
