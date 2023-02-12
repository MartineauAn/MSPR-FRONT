import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

app.config.globalProperties.axios_config = {
    baseURL: "http://localhost:8080/api/",
    headers:{
        "Access-Control-Allow-Origin": true
    },
    auth: {
        username: "user",
        password: "grogudev"
      }
};
app.config.globalProperties.imgAuth = "http://user:grogudev@localhost:8080/api/"
app.use(store).use(router).mount('#app')
