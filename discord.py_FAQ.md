# Discord.py FAQ

## Menu
1. [`import discord.py` 時找不到 `discord.py` 模組](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/discord.py_FAQ.md#import-discordpy-%E6%99%82%E6%89%BE%E4%B8%8D%E5%88%B0-discordpy-%E6%A8%A1%E7%B5%84)
2. [`SSL:443` 憑證過期](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/discord.py_FAQ.md#ssl443-%E6%86%91%E8%AD%89%E9%81%8E%E6%9C%9F)

---

### `import discord.py` 時找不到 `discord.py` 模組
- **問題**：<br>
. 出現紅色下劃波浪線錯誤，表示無法 import disocrod 模組<br>
. 執行時報錯 `ModuleNotFoundError: No module named 'disocrd'`

- **解決方法：**<br>
此問題有兩種可能:
1. 可能你沒安裝 discord.py 模組
2. 可能你電腦裡有多個 Python 版本或環境，比如你電腦裡有裝 3.6 跟 3.8 兩個版本，結果你當初安裝 discord.py 模組是安裝在 Python 3.6，但你 VSCode 的運行環境是 Python 3.8

---

### `SSL:443` 憑證過期
- **問題**：<br>
執行時出現 `Cannot connect to host discordapp.com:443 ssl:True ... [CERTIFICATE_VERIFY_FAILED]`

![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/ssl_443.png?raw=true)

- **解決方法：**<br>
此為電腦中 discord 網站的憑證未更新而過期導致

1. 右鍵管理員權限執行 IE
2. 到discord.com 官網
3. 在網址欄有鎖頭的圖示
4. 點及鎖頭>檢視憑證>安裝憑證

![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/ssl_443-2.png)
![img](https://github.com/SHELTER-ZONE/Discord_Bot_FAQ/blob/master/src/ssl_443-3.png)
