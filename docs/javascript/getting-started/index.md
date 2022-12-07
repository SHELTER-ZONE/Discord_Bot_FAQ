<script setup>
import Block from '../../components/Block.vue'
import CodeGroup from '../../components/CodeGroup.vue'
</script>

# 入門

[本教程參考 Discord.js 官方教學](https://discordjs.guide/)

## 設定檔

本教學使用 `.env` 檔作為機器人的設定檔，請先安裝 [dotenv](https://www.npmjs.com/package/dotenv) 並建立 `.env` 檔。

### 安裝 dotenv

<CodeGroup>
<div title="npm" active>

```bash
npm install dotenv
```

</div>
<div title="yarn">

```bash
yarn add dotenv
```

</div>
<div title="pnpm">

```bash
pnpm add dotenv
```

</div>
</CodeGroup>

### 建立 `.env` 檔

在根目錄下建立 `.env` 檔並寫入以下內容。

```bash
TOKEN=你的機器人的token
```

<Block type="danger" title="警告">

如果您使用 Git 管理程式碼，請記得將 `.env` 檔加入到 `.gitignore` 檔中，以避免你的機器人的 token 被洩露。

若機器人的 token 不慎洩露，請立即到 [Discord 開發者中心](https://discord.com/developers/applications) 重新產生一個新的 token。

</Block>

## 建立主檔案

請在根目錄下建立 `index.js` 檔並寫入以下內容。

### 在程式中設定 `.env` 檔

請在程式開頭添加以下程式碼。

```js
// 設定環境變數
require('dotenv').config()
```

### 建立網關意圖（Gateway Intents）

從 `discord.js` 中引入 `GatewayIntentBits` 並使用 `intents` 陣列來設定網關意圖。

::: tip 提示
`GatewayIntentBits.Guilds` 代表機器人會收到伺服器的資訊，例如伺服器名稱、成員、頻道等等。
<br>
`GatewayIntentBits.GuildMessages` 代表機器人會收到伺服器的訊息。

更多網關意圖請參考 [網關意圖](/javascript/intents/)。
:::


```js
const { GatewayIntentBits } = require('discord.js')

// 設定網關意圖
const intents = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
]
```

---

### 建立機器人

從 `discord.js` 中引入 `Client` 並使用 `intents` 陣列來設定網關意圖。

::: tip 提示
`{intents}` 在javascript中代表 `{intents: intents}`，意思是將 `intents` 值設定給 `intents` 的鍵。
:::

```js
const { Client } = require('discord.js')

// 創造一個新的機器人實例
const client = new Client({intents})
```

---

### 設定機器人事件

::: tip 提示
使用 `client.once()` 代表只會觸發一次。

使用 `client.on()` 代表會觸發多次。
:::

#### 機器人準備好時觸發

當機器人準備好時觸發 `ClientReady` 事件。

```js
// 使用client.once()代表只會觸發一次
// 當機器人準備好時觸發
client.once(Events.ClientReady, async(client) => {
	console.log(`上線！我是 ${client.user.tag}`)
})
```

#### 機器人收到訊息時觸發

當機器人收到訊息時觸發 `MessageCreate` 事件。

```js
// 使用client.on()代表會觸發多次
// 當機器人收到訊息時觸發
client.on(Events.MessageCreate, async(message) => {
    // 如果訊息是機器人自己發出的，則不做任何事
    if (message.author === client.user) return

    /*
     * 注意因為 message.channel.send() 方法是異步的，需要加上await
     * 這是一種好習慣，不加也能正常運作
     * 但是在功能複雜的機器人中，可能會因為多個異步函數的呼叫時序不同而導致錯誤
     */
    // 回傳相同訊息
    await message.channel.send(message.content)
})
```

---

### 登入機器人

使用 `client.login()` 來登入機器人。

```js
// 從環境變數中讀取token
const token = process.env.TOKEN

// 登入機器人
client.login(token)
```

---

### 完整程式碼

```js
// 設定環境變數
require('dotenv').config()

// 引入discord.js
const { Client, Events, GatewayIntentBits } = require('discord.js')

// 設定網關意圖
const intents = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
]

// 創造一個新的機器人實例
const client = new Client({intents})

// 使用client.once()代表只會觸發一次
// 當機器人準備好時觸發
client.once(Events.ClientReady, async(client) => {
	console.log(`上線！我是 ${client.user.tag}`)
})

// 使用client.on()代表會觸發多次
// 當機器人收到訊息時觸發
client.on(Events.MessageCreate, async(message) => {
    // 如果訊息是機器人自己發出的，則不做任何事
    if (message.author === client.user) return

    /*
     * 注意因為 message.channel.send() 方法是異步的，需要加上await
     * 這是一種好習慣，不加也能正常運作
     * 但是在功能複雜的機器人中，可能會因為多個異步函數的呼叫時序不同而導致錯誤
     */
    // 回傳相同訊息
    await message.channel.send(message.content)
})

// 從環境變數中讀取token
const token = process.env.TOKEN

// 登入機器人
client.login(token)
```

### 最後檔案結構

![file-structure](/imgs/javascript/getting-started/file-structure.png)

## 執行機器人

開啟終端機，使用 `node` 執行機器人。

```bash
node index.js
```