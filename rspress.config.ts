import * as path from 'path'
import { defineConfig } from 'rspress/config'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'In Days of Yore',
  description: '言念君子，温其如玉',
  icon: '/yore-logo.svg',
  logo: {
    light: '/yore-logo.svg',
    dark: '/yore-logo.svg',
  },
  themeConfig: {
    socialLinks: [{ icon: 'github', mode: 'link', content: 'https://github.com/MGRookie' }],
  },
})
