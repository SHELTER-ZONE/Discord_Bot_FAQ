<script setup>
import CodeGroup from '../../components/CodeGroup.vue'
</script>

# 入門

## 下載 node js

您需要安裝 [Node.js](https://nodejs.org/zh-tw/)。

::: tip 提示
`discord.js v13` 需要 `Node v16.6.0` 或更高版本。
<br />
如果要檢查您的設備是否安裝了 Node，請於終端機中運行 `node -v` 如果他輸出 `v16.0.0` 或更高，那麼就表示你就已成功安裝拉!!
:::

![how install node js](/imgs/javascript/getting-started/nodejs-install-page.jpg)

<!-- TODO: 添加安裝細項 -->

## 初始化專案

創建一個文件夾，並在該文件夾中執行終端機。

::: tip 提示

如果您使用 [Visual Studio Code](https://code.visualstudio.com/)，您可以按 <code>Ctrl + `</code> 打開其集成終端。

:::

在 Windows 上，可以:

- 在專案目錄下按下 `Shift + 右鍵` 並選擇 `在終端中開啟` 及可開啟終端機。
- 按下 `win + R` 運行 `cmd` ，然後於終端機中運行 `cd 你的專案目錄`。

<CodeGroup>
<div title="npm" active>

```bash
npm init -y
```

</div>
<div title="yarn">

```bash
yarn init -y
```

</div>
<div title="pnpm">

```bash
pnpm init -y
```

</div>
</CodeGroup>

## 安裝 discord.js 函數庫

於 [初始化專案](./#初始化專案) 中的終端機中輸入以下指令:

<CodeGroup>
<div title="npm" active>

```bash
npm install discord.js
```

</div>
<div title="yarn">

```bash
yarn add discord.js
```

</div>
<div title="pnpm">

```bash
pnpm add discord.js
```

</div>

</CodeGroup>

就是這樣！完成所有步驟後，您就可以開始編寫機器人代碼了!! :blush:
