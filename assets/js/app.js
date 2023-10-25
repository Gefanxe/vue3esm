import { createApp, ref } from 'vue'
import MyComponent from 'MyComponent'

const app = createApp({
    setup() {
        const message = ref('Hello Vue!')
        return {
            message
        }
    }
})

app.component('my-component', MyComponent)

app.mount('#app')