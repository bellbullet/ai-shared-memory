<script setup lang="ts">
import { withBase } from 'vitepress'
import type { LatestUpdate } from '../../data/workspace.data'

defineProps<{
  updates: LatestUpdate[]
}>()
</script>

<template>
  <article class="workspace-panel workspace-panel--updates">
    <div class="workspace-panel__heading">
      <div>
        <p class="workspace-eyebrow">WHAT'S NEW</p>
        <h3>Latest Updates</h3>
      </div>
      <a :href="withBase('/CHANGELOG')">変更履歴を見る</a>
    </div>

    <ol class="workspace-updates">
      <li v-for="(update, index) in updates" :key="`${update.date}-${index}`">
        <time :datetime="update.date">{{ update.date }}</time>
        <span>{{ update.text }}</span>
      </li>
    </ol>
  </article>
</template>
