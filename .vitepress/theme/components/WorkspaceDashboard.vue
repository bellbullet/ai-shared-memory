<script setup lang="ts">
import { data as workspace } from '../../data/workspace.data'
import WorkspaceStats from './WorkspaceStats.vue'
import LatestUpdates from './LatestUpdates.vue'
import TrialSummary from './TrialSummary.vue'
</script>

<template>
  <section class="workspace-dashboard" aria-labelledby="workspace-dashboard-heading">
    <header class="workspace-dashboard__header">
      <div>
        <p class="workspace-eyebrow">WORKSPACE OVERVIEW</p>
        <h2 id="workspace-dashboard-heading">Knowledge Dashboard</h2>
        <p>更新、知識量、採用済みTrial、調査待ちをMarkdown原本から自動集計しています。</p>
      </div>
      <div class="workspace-version" aria-label="Workspace version and last update">
        <strong>v{{ workspace.version }}</strong>
        <span>Updated {{ workspace.updatedAt }}</span>
      </div>
    </header>

    <WorkspaceStats :stats="workspace.stats" />

    <div class="workspace-panels">
      <LatestUpdates :updates="workspace.latestUpdates" />
      <TrialSummary :adopted="workspace.adoptedTrials" :queue="workspace.trialQueue" />
    </div>

    <p class="workspace-dashboard__source">
      Build-time snapshot · Source: CHANGELOG / PROJECTS / NOTES / TRIALS / AI_DRAWERS / VERSION
    </p>
  </section>
</template>
