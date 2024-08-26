#Instalação:
    npm install vite-plugin-svgr --save-dev

    npm install react-router-dom prop-types vite-plugin-svgr
    Ativação no vite config:

        import { defineConfig } from 'vite';
        import react from '@vitejs/plugin-react';
        import svgr from 'vite-plugin-svgr';

        // https://vitejs.dev/config/
        export default defineConfig({
        plugins: [react(), svgr()],   
        });

#Rota
 npm install react-router-dom

