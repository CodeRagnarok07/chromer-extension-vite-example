import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import manifest from './manifest.ts';
import { resolve } from 'path';

import * as fs from 'fs';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
      },
      output:{
        entryFileNames: 'src/[name]/[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: 'src/[name]/[name].[ext]',
      }
    }
  }

})
