# 安裝Node.js

## 下載 Node js

訪問 [Node.js](https://nodejs.org/zh-tw/) 頁面，選擇 `18.12.1 長期維護版` ，等待下載完成後，點選 `node-v18.12.1-x64.msi` 進行安裝。

![how install nodejs](/imgs/javascript/installing-nodejs/nodejs-install-page.png)

## 安裝 Node js

### 步驟一

這應該是開啟安裝程式後你會看到的第一個畫面，點選 `Next` 進行下一步。

![how install nodejs step 1](/imgs/javascript/installing-nodejs/nodejs-install-step-1.png)

### 步驟二

點選同意協議，然後點選 `Next` 進行下一步。

![how install nodejs step 2](/imgs/javascript/installing-nodejs/nodejs-install-step-2.png)

### 步驟三

選擇安裝路徑，然後點選 `Next` 進行下一步。

::: tip 提示
若不清楚操作系統如何處理路徑，請不要更改預設路徑，直接點選 `Next` 進行下一步。
:::

![how install nodejs step 3](/imgs/javascript/installing-nodejs/nodejs-install-step-3.png)

### 步驟四

選擇安裝選項，然後點選 `Next` 進行下一步。

::: tip 提示
若不清楚如何選擇安裝選項，請不要更改預設選項，直接點選 `Next` 進行下一步。
:::

![how install nodejs step 4](/imgs/javascript/installing-nodejs/nodejs-install-step-4.png)

### 步驟五

選擇是否安裝 Build Tools，然後點選 `Next` 進行下一步。

::: tip 提示
若安裝 Build Tools 選項被選中，安裝程式會在Node.js安裝完成後，自動安裝 C/C++ 編譯器，需要事先安裝 Visual Studio Build Tools 與 Python。
<br>
此選項是讓node能夠編譯原生C/C++模組，如果你不需要編譯原生模組，可以不選擇這個選項。

這會花費非常多時間，且會佔用大量的硬碟空間，若你對此選項不瞭解，請不要選取該選項，直接點選 `Next` 進行下一步。
:::

![how install nodejs step 5](/imgs/javascript/installing-nodejs/nodejs-install-step-5.png)

### 步驟六

若前面步驟都沒有問題，點選 `Install` 進行安裝。

![how install nodejs step 6](/imgs/javascript/installing-nodejs/nodejs-install-step-6.png)

### 步驟七

安裝完成後，點選 `Finish` 關閉安裝程式。

::: tip 提示
如果要檢查您的設備是否成功安裝 Node.js，請於終端機中運行 `node -v` ，若輸出 `v18.12.1`，即表示已成功安裝。
:::

![how install nodejs step 7](/imgs/javascript/installing-nodejs/nodejs-install-step-7.png)