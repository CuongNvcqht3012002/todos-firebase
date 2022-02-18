import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import * as firebase from "firebase/app";
import { firebaseConfig } from './configs/firebase.js'


const app = createApp(App)
firebase.initializeApp(firebaseConfig);

app.use(createPinia())
app.mount('#app')
