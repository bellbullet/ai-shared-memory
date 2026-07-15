import { defineConfig } from 'vitepress'

const repoUrl = 'https://github.com/bellbullet/ai-shared-memory'

export default defineConfig({
  lang: 'ja-JP',
  title: 'AI Shared Memory',
  titleTemplate: ':title | AI Shared Memory',
  description: '複数のAIと人間が共有する、公開可能なMarkdown知識ベース。',
  base: '/ai-shared-memory/',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://bellbullet.github.io/ai-shared-memory/'
  },
  head: [
    ['meta', { name: 'theme-color', content: '#0f766e' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'ja_JP' }],
    ['meta', { property: 'og:site_name', content: 'AI Shared Memory' }]
  ],
  themeConfig: {
    siteTitle: 'AI Shared Memory',
    nav: [
      { text: '現在地', link: '/CURRENT' },
      { text: '技術レーダー', link: '/AI_DRAWERS' },
      { text: 'プロジェクト', link: '/AI_INDEX#projects' },
      { text: 'ノート', link: '/AI_INDEX#notes' },
      { text: '試用結果', link: '/TRIALS' }
    ],
    sidebar: [
      {
        text: 'Start Here',
        items: [
          { text: 'ホーム', link: '/' },
          { text: 'この知識ベースについて', link: '/README' },
          { text: '作業開始ガイド', link: '/PROJECT_START' },
          { text: 'ワークスペース', link: '/WORKSPACE' },
          { text: 'AI向けルール', link: '/AGENTS' }
        ]
      },
      {
        text: 'Current / Status',
        items: [
          { text: '現在の焦点', link: '/CURRENT' },
          { text: '全体ステータス', link: '/STATUS' }
        ]
      },
      {
        text: 'AI Index',
        items: [{ text: 'キーワード索引', link: '/AI_INDEX' }]
      },
      {
        text: 'Technical Radar',
        items: [
          { text: 'AI技術レーダー', link: '/AI_DRAWERS' },
          { text: 'AIコーディングパターン', link: '/NOTES/AI_Coding_Patterns' },
          { text: 'Lessons Learned', link: '/LESSONS_LEARNED' },
          { text: 'Decisions', link: '/DECISIONS' }
        ]
      },
      {
        text: 'Trials',
        items: [{ text: '試用結果と候補', link: '/TRIALS' }]
      },
      {
        text: 'Projects',
        collapsed: true,
        items: [
          { text: 'AIRI', link: '/PROJECTS/AIRI' },
          { text: 'GameFreezeSentinel', link: '/PROJECTS/GameFreezeSentinel' },
          { text: 'KomiReader', link: '/PROJECTS/KomiReader' },
          { text: 'MahjongFirstDiscard', link: '/PROJECTS/MahjongFirstDiscard' },
          { text: 'OciMinecraftJavaServer', link: '/PROJECTS/OciMinecraftJavaServer' },
          { text: 'ScreenshotStitcher', link: '/PROJECTS/ScreenshotStitcher' },
          { text: 'WebcamFaceDemo', link: '/PROJECTS/WebcamFaceDemo' },
          { text: 'XImageBot', link: '/PROJECTS/XImageBot' }
        ]
      },
      {
        text: 'Notes',
        collapsed: true,
        items: [
          { text: 'AI', link: '/NOTES/AI' },
          { text: 'AI Coding Patterns', link: '/NOTES/AI_Coding_Patterns' },
          { text: 'AI Workspace Ideas', link: '/NOTES/AI_Workspace_Ideas' },
          { text: 'HomeLab', link: '/NOTES/HomeLab' },
          { text: 'Solar', link: '/NOTES/Solar' },
          { text: 'Solar Power', link: '/NOTES/SolarPower' },
          { text: 'Vehicles', link: '/NOTES/Vehicles' },
          { text: 'Vehicle Plan', link: '/NOTES/VehiclePlan' }
        ]
      },
      {
        text: 'Operations',
        collapsed: true,
        items: [
          { text: 'Review', link: '/REVIEW' },
          { text: 'Security Review', link: '/SECURITY_REVIEW' },
          { text: 'AI Profiles', link: '/AI_PROFILES' },
          { text: 'Skills', link: '/SKILLS/' },
          { text: 'Outputs', link: '/OUTPUTS/' }
        ]
      },
      {
        text: 'Change History',
        items: [{ text: '変更履歴', link: '/CHANGELOG' }]
      }
    ],
    socialLinks: [{ icon: 'github', link: repoUrl }],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '検索',
            buttonAriaLabel: 'サイト内を検索'
          },
          modal: {
            noResultsText: '検索結果が見つかりません',
            resetButtonTitle: '検索をリセット',
            footer: {
              selectText: '選択',
              navigateText: '移動',
              closeText: '閉じる'
            }
          }
        }
      }
    },
    editLink: {
      pattern: `${repoUrl}/blob/main/:path`,
      text: 'GitHubで原本を見る'
    },
    lastUpdated: {
      text: '最終更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    outline: {
      label: 'ページ内リンク',
      level: [2, 3]
    },
    docFooter: {
      prev: '前のページ',
      next: '次のページ'
    },
    returnToTopLabel: 'ページ上部へ戻る',
    sidebarMenuLabel: 'メニュー',
    darkModeSwitchLabel: 'テーマ',
    lightModeSwitchTitle: 'ライトモードに切り替える',
    darkModeSwitchTitle: 'ダークモードに切り替える',
    footer: {
      message: '公開可能な知識だけを、検索・比較・再利用できる形で育てています。',
      copyright: 'AI Shared Memory'
    }
  }
})
