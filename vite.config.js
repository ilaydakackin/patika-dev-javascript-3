import { resolve } from 'path';

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, './pages/about.html'),
                design: resolve(__dirname, './pages/design.html'),
                software: resolve(__dirname, './pages/software.html'),
                mywork: resolve(__dirname, './pages/mywork.html'),
            }
        }
    }
}