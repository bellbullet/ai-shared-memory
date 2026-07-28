<script setup lang="ts">
import { withBase } from 'vitepress'
import type { WorkspaceStatsData } from '../../data/workspace.data'

const props = defineProps<{
  stats: WorkspaceStatsData
}>()

const items = [
  { key: 'projects', label: 'Projects', icon: '🚀', link: '/PROJECTS/' },
  { key: 'notes', label: 'Notes', icon: '📚', link: '/NOTES/' },
  { key: 'trials', label: 'Trials', icon: '🧪', link: '/TRIALS' },
  { key: 'radar', label: 'Radar', icon: '🧠', link: '/AI_DRAWERS' }
] as const
</script>

<template>
  <div class="workspace-stats" aria-label="Workspace statistics">
    <a v-for="item in items" :key="item.key" class="workspace-stat" :href="withBase(item.link)">
      <span class="workspace-stat__icon" aria-hidden="true">{{ item.icon }}</span>
      <span class="workspace-stat__value">{{ props.stats[item.key] }}</span>
      <span class="workspace-stat__label">{{ item.label }}</span>
    </a>
  </div>
</template>
