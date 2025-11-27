import { svelte } from '@sveltejs/vite-plugin-svelte'
import routify from '@roxi/routify/vite-plugin'
import { defineConfig } from 'vite'

const production = process.env.NODE_ENV === 'production'

export default defineConfig({
    resolve: { conditions: ['browser'] },
    clearScreen: false,
    
    test: {
        environment: 'jsdom',
        globals: true,
        server: {
            deps: { inline: ["@roxi/routify"] },
        }          
    },
    plugins: [
        routify({
            render: {
                ssg: !!production,
                ssr: !!production,
            },
        }),
        svelte({
            compilerOptions: {
                dev: !production,
            },
        }),
    ],

    server: {
        host: "0.0.0.0",
        port: 1337,
        // port: 5173,
    },
})
