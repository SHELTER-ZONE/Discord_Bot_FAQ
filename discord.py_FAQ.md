# Discord.py FAQ

## Menu
1. [`import discord.py` 時找不到 `discord.py` 模組](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/discord.py_FAQ.md#import-discordpy-%E6%99%82%E6%89%BE%E4%B8%8D%E5%88%B0-discordpy-%E6%A8%A1%E7%B5%84)
2. [`SSL:443` 憑證過期](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/discord.py_FAQ.md#ssl443-%E6%86%91%E8%AD%89%E9%81%8E%E6%9C%9F)
3. []
---

### `import discord.py` 時找不到 `discord.py` 模組
**問題**：<br>
. 出現紅色下劃波浪線錯誤，表示無法 import disocrod 模組<br>
. 執行時報錯 `ModuleNotFoundError: No module named 'disocrd'`

![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/cant_import_discord-1.png)
![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/cant_import_discord-2.png)

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

### `SSL:443` 憑證過期
**問題**：<br>
執行時出現 `Cannot connect to host discordapp.com:443 ssl:True ... [CERTIFICATE_VERIFY_FAILED]`

![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/ssl_443.png?raw=true)

**解決方法：**<br>
此為電腦中 discord 網站的憑證未更新而過期導致

1. 右鍵管理員權限執行 IE
2. 到discord.com 官網
3. 在網址欄有鎖頭的圖示
4. 點及鎖頭>檢視憑證>安裝憑證

![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/ssl_443-2.png)
![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/ssl_443-3.png)

---

### 機器人出現`重複的回應`
**問題**：<br>
輸入指令後，出現重複的回應，如圖：

![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/Repeate-Message-1.png)

**解決方法(repl.it 環境)**：<br>
1. 進入機器人所在之環境
2. 按下`🛑STOP`
3. 等待一分鐘，確認機器人未出現在上線名單中，即可重新啟動

![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/Repeate-Message-5.png)

**解決方法(本機掛載，未寫登出指令)**：<br>
1. 打開工作管理員
2. 找到有含`Python`的任務，將他強制停止
3. 等待一分鐘，確認機器人未出現在上線名單中，即可重新啟動

![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/Repeate-Message-2.png)
![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/Repeate-Message-3.png)

**解決方法(本機掛載，有寫登出指令)**：<br>
1. 在對話框內輸入登出指令
2. 等待一分鐘，確認機器人未出現在上線名單中，即可重新啟動

![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/Repeate-Message-4.png)