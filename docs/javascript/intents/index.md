<script setup>
import CodeGroup from '../../components/CodeGroup.vue'
</script>

# 網關意圖（Gateway Intents）

## 引入

```js
const { GatewayIntentBits } = require('discord.js')
```

<CodeGroup>
<div title="常用網關意圖" active>

```js
// 常用網關意圖
const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildVoiceStates,
  GatewayIntentBits.GuildMessages
]
```

</div>
<div title="所有網關意圖">

```js
// 所有網關意圖
const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildEmojisAndStickers,
  GatewayIntentBits.GuildIntegrations,
  GatewayIntentBits.GuildWebhooks,
  GatewayIntentBits.GuildInvites,
  GatewayIntentBits.GuildVoiceStates,
  GatewayIntentBits.GuildPresences,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.GuildMessageTyping,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.DirectMessageReactions,
  GatewayIntentBits.DirectMessageTyping,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildScheduledEvents,
  GatewayIntentBits.AutoModerationConfiguration,
  GatewayIntentBits.AutoModerationExecution
]
```

</div>
</CodeGroup>

## Discord API v10 中的網關意圖

以下是 [Discord API v10 中的網關意圖](https://discord.com/developers/docs/topics/gateway#list-of-intents)，這些意圖會影響到機器人收到的事件。

### `GatewayIntentBits.Guilds`

::: tip 提示
影響是否收到 `伺服器、身分組、頻道、線程、舞台` 相關的事件。
:::

- `GUILD_CREATE`
- `GUILD_UPDATE`
- `GUILD_DELETE`
- `GUILD_ROLE_CREATE`
- `GUILD_ROLE_UPDATE`
- `GUILD_ROLE_DELETE`
- `CHANNEL_CREATE`
- `CHANNEL_UPDATE`
- `CHANNEL_DELETE`
- `CHANNEL_PINS_UPDATE`
- `THREAD_CREATE`
- `THREAD_UPDATE`
- `THREAD_DELETE`
- `THREAD_LIST_SYNC`
- `THREAD_MEMBER_UPDATE`
- `THREAD_MEMBERS_UPDATE`
- `STAGE_INSTANCE_CREATE`
- `STAGE_INSTANCE_UPDATE`
- `STAGE_INSTANCE_DELETE`

---

### `GatewayIntentBits.GuildMembers`

::: tip 提示
影響是否收到 `成員` 相關的事件。
:::

- `GUILD_MEMBER_ADD`
- `GUILD_MEMBER_UPDATE`
- `GUILD_MEMBER_REMOVE`
- `THREAD_MEMBERS_UPDATE`

---

### `GatewayIntentBits.GuildBans`

::: tip 提示
影響是否收到 `封鎖` 相關的事件。
:::

- `GUILD_BAN_ADD`
- `GUILD_BAN_REMOVE`

---

### `GatewayIntentBits.GuildEmojisAndStickers`

::: tip 提示
影響是否收到 `表情符號、貼圖` 相關的事件。
:::

- `GUILD_EMOJIS_UPDATE`
- `GUILD_STICKERS_UPDATE`

---

### `GatewayIntentBits.GuildIntegrations`

::: tip 提示
影響是否收到 `整合` 相關的事件。
:::

- `GUILD_INTEGRATIONS_UPDATE`
- `INTEGRATION_CREATE`
- `INTEGRATION_UPDATE`
- `INTEGRATION_DELETE`

---

### `GatewayIntentBits.GuildWebhooks`

::: tip 提示
影響是否收到 `網頁挂鉤` 相關的事件。
:::

- `WEBHOOKS_UPDATE`

---

### `GatewayIntentBits.GuildInvites`

::: tip 提示
影響是否收到 `邀請` 相關的事件。
:::

- `INVITE_CREATE`
- `INVITE_DELETE`

---

### `GatewayIntentBits.GuildVoiceStates`

::: tip 提示
影響是否收到 `語音狀態` 相關的事件。
:::

- `VOICE_STATE_UPDATE`

---

### `GatewayIntentBits.GuildPresences`

::: tip 提示
影響是否收到 `成員狀態` 相關的事件。
:::

- `PRESENCE_UPDATE`

---

### `GatewayIntentBits.GuildMessages`

::: tip 提示
影響是否收到 `伺服器頻道內訊息` 相關的事件。
:::

- `MESSAGE_CREATE`
- `MESSAGE_UPDATE`
- `MESSAGE_DELETE`
- `MESSAGE_DELETE_BULK`

---

### `GatewayIntentBits.GuildMessageReactions`

::: tip 提示
影響是否收到 `伺服器頻道內訊息的反應` 相關的事件。
:::

- `MESSAGE_REACTION_ADD`
- `MESSAGE_REACTION_REMOVE`
- `MESSAGE_REACTION_REMOVE_ALL`
- `MESSAGE_REACTION_REMOVE_EMOJI`

---

### `GatewayIntentBits.GuildMessageTyping`

::: tip 提示
影響是否收到 `伺服器頻道內訊息的正在輸入` 相關的事件。
:::

- `TYPING_START`

---

### `GatewayIntentBits.DirectMessages`

::: tip 提示
影響是否收到 `私人頻道內訊息` 相關的事件。
:::

- `MESSAGE_CREATE`
- `MESSAGE_UPDATE`
- `MESSAGE_DELETE`
- `CHANNEL_PINS_UPDATE`

---

### `GatewayIntentBits.DirectMessageReactions`

::: tip 提示
影響是否收到 `私人頻道內訊息的反應` 相關的事件。
:::

- `MESSAGE_REACTION_ADD`
- `MESSAGE_REACTION_REMOVE`
- `MESSAGE_REACTION_REMOVE_ALL`
- `MESSAGE_REACTION_REMOVE_EMOJI`

---

### `GatewayIntentBits.DirectMessageTyping`

::: tip 提示
影響是否收到 `私人頻道內訊息的正在輸入` 相關的事件。
:::

- `TYPING_START`

---

### `GatewayIntentBits.MessageContent`

::: tip 提示
影響是否收到 `訊息內容` 相關的事件。
:::

- `MESSAGE_CREATE`
- `MESSAGE_UPDATE`

---

### `GatewayIntentBits.GuildScheduledEvents`

::: tip 提示
影響是否收到 `排程事件` 相關的事件。
:::

- `GUILD_SCHEDULED_EVENT_CREATE`
- `GUILD_SCHEDULED_EVENT_UPDATE`
- `GUILD_SCHEDULED_EVENT_DELETE`
- `GUILD_SCHEDULED_EVENT_USER_ADD`
- `GUILD_SCHEDULED_EVENT_USER_REMOVE`

---

### `GatewayIntentBits.AutoModerationConfiguration`

::: tip 提示
影響是否收到 `自動審核設定` 相關的事件。
:::

- `AUTO_MODERATION_RULE_CREATE`
- `AUTO_MODERATION_RULE_UPDATE`
- `AUTO_MODERATION_RULE_DELETE`

---

### `GatewayIntentBits.AutoModerationExecution`

::: tip 提示
影響是否收到 `自動審核執行` 相關的事件。
:::

- `AUTO_MODERATION_ACTION_EXECUTION`