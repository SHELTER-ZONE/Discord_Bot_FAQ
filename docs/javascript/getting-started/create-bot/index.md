<script setup>
import CodeGroup from '/components/CodeGroup.vue'
</script>

# 保存 `TOKEN`

## 使用 `json`

將須保護的敏感資料放入 `config.json` 是保護資料的方法之一，而 [json](https://zh.wikipedia.org/zh-tw/JSON) 是一種格式。
在您的專案目錄中創建 `config.json` 文件，並貼上你的 `TOKEN`。

<CodeGroup>

<div title="config.json 檔案">

```json
{
  "token": "<您的 TOKEN>"
}
```

</div>
<div title="調用方式">

```js
import { token } from './config.json'

console.log(token)
```

</div>

</CodeGroup>

::: danger 注意
如果你使用 git，請將該文件放入 [.gitignore](./#git-和-gitignore) 檔案中
:::

## 使用 `dotenv`

如果你使用 git，請將 `config.json` 文件放入 [.gitignore](./#) 檔案中。這使您不必總是將令牌複製到命令行中。文件中的每一行都 `.env` 應該包含 `KEY=value` 一對。

你可以使用 [dotenv](https://www.npmjs.com/package/dotenv) 函數庫進行讀取該檔案。

安裝 `dotenv`:

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

<CodeGroup>
<div title=".env">

```bash
TOKEN=<您的 TOKEN> node index.js
```

</div>
<div title="使用">

```js
import { config } from 'dotenv'

console.log(process.env.TOKEN)
```

</div>
</CodeGroup>

::: danger 注意
如果你使用 git，請將該文件放入 [.gitignore](./#git-和-gitignore) 檔案中
:::

## 使用 `環境變量`

將須保護的敏感資料放入 `.env` 是保護資料的方法之一。
在您的專案目錄中創建 `config.json` 文件，並貼上你的 `TOKEN`。

<CodeGroup>

<div title="終端機">

```bash
TOKEN=<您的 TOKEN> node index.js
```

</div>
<div title="docker">

```docker
ENV TOKEN=<您的 TOKEN>
```

</div>
<div title="使用">

```js
console.log(process.env.TOKEN)
```

</div>
</CodeGroup>

## `Git` 和 `.gitignore`

git 一個版本控制工具，使得原始碼的釋出和交流極其方便。可允許將您的程式碼上傳到 [Github](https://github.com/) 等等。雖然這對於開發很有用，但要注意可能上傳敏感資料的風險。

你可以使用文件指定 Git 在版本控制系統中忽略特定文件。請創建 `.gitignore` 文件並添加以下內容:

```
node_modules
.env
config.json
```

::: tip
您可以在文件中指定更多 `.gitignore`，查看 [Git 文檔.gitignore](https://git-scm.com/docs/gitignore) 了解更多信息。
:::

# 創建主文件

<<< @/javascript/getting-started/demo/index.js
