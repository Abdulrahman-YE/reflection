import { defineConfigWithTheme, } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "Alwan",
  description: "Refelct ",
  srcDir: 'src',
  base: '/reflection/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/masked-face-recognition' }
    ],

    search: {
      provider: 'local'
    },
    
    sidebar: [
      {
        text: 'Projects',
        items: [
          { text: 'Masked Face Recogntiion', link: '/masked-face-recognition' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/abdulrahman-ye/reflection' }
    ]
  },
 
  }
)
