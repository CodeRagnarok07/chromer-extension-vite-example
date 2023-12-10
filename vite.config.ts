import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import manifest from './manifest.js';
import { resolve } from 'path';
import hotReloadExtension from 'hot-reload-extension-vite';

import * as fs from 'fs';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    hotReloadExtension({
      log: true,
      backgroundPath: 'src/background.ts' 
    }),
    {
      name:"make-manifest",
      writeBundle() {
        const manifestPath = resolve("dist", 'manifest.json');
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      }
      
    }

  ],
  build: {
    rollupOptions: {
      input: {
        popup: 'src/popup/index.html',
        background: 'src/background.ts',
        worker: 'src/worker/global/index.tsx',
      },
      output:{
        entryFileNames: 'src/[name]/[name].js',
        // chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
            return `assets/${extType}/[name]-[hash][extname]`;
          }else{
            return 'src/[name]/[name].[ext]';
          }
          // return `assets/${extType}/[name]-[hash][extname]`;
        },
        
        
        
      }
    },
    commonjsOptions: {
      include: [/node_modules/],
    },
  }

})
