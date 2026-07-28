<script setup lang="ts">
import { withBase } from 'vitepress'
import type { AdoptedTrial, TrialQueueItem } from '../../data/workspace.data'

defineProps<{
  adopted: AdoptedTrial[]
  queue: TrialQueueItem[]
}>()
</script>

<template>
  <article class="workspace-panel workspace-panel--trials">
    <div class="workspace-panel__heading">
      <div>
        <p class="workspace-eyebrow">REUSE LOOP</p>
        <h3>Trials</h3>
      </div>
      <a :href="withBase('/TRIALS')">すべて見る</a>
    </div>

    <section class="trial-summary" aria-labelledby="recently-adopted-heading">
      <h4 id="recently-adopted-heading"><span class="status-dot status-dot--adopted"></span>Recently Adopted</h4>
      <ul>
        <li v-for="trial in adopted" :key="`${trial.date}-${trial.name}`">
          <span>{{ trial.name }}</span>
          <time :datetime="trial.date">{{ trial.date }}</time>
        </li>
      </ul>
    </section>

    <section class="trial-summary" aria-labelledby="research-queue-heading">
      <h4 id="research-queue-heading"><span class="status-dot status-dot--planned"></span>Research Queue</h4>
      <ul>
        <li v-for="item in queue" :key="item.name">
          <span>{{ item.name }}</span>
          <small>{{ item.target }}</small>
        </li>
      </ul>
    </section>
  </article>
</template>
