import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
    ],
    // TAMBAHKAN BLOK KODE DI BAWAH INI
    server: {
        hmr: {
            host: 'siakuapp.test',
            protocol: 'wss', // Memaksa menggunakan Secure WebSocket bawaan Herd
        },
    },
});
