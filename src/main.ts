import { createApp } from 'vue'
import App from './App.vue'
import antd from "antdv-next"
import "antdv-next/dist/reset.css"
import "uno.css"

const app = createApp(App);
app.use(antd);
app.mount('#app')
