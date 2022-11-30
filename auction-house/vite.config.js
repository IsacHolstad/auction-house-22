// vite.config.js
import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'login.html'),
                signup: resolve(__dirname, 'signup.html'),
                welcome: resolve(__dirname, 'welcome.html'),
                profile: resolve(__dirname, 'profile.html'),
                auction_item: resolve(__dirname, 'spesific-listing.html')
            }
        }
    }
});