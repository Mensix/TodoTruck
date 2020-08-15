export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
      }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '~/assets/css/button.css',
    '~/assets/css/card.css',
    '~/assets/css/flex.css',
    '~/assets/css/input.css',
    '~/assets/css/root.css',
    '~/assets/css/typography.css',
    '~/assets/css/ul.css'
  ],
  plugins: [],
  modules: ['@nuxtjs/eslint-module'],
  build: {
    extend(config, ctx) {}
  }
}
