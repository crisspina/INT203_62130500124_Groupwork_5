const app = {
    data() {
        return {
            msg: 'Hello, Vue3'
        }
    }

}
Vue.createApp(app).mount('#app')

module.exports = {
    theme: {
      fontFamily: {
       'sans': ['BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Ubuntu','Helvetica Neue'],
       'serif': ['Iowan Old Style', 'Apple Garamond', 'Baskerville', 'Times New Roman', 'Droid Serif', 'Times', ' Source Serif Pro'],
       'mono': [ 'Menlo', 'Consolas', 'Monaco', 'Liberation Mono',  'Lucida Console'],
      }
    }
  }