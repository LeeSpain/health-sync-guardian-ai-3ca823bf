
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      // Enable faster SWC minification
      plugins: [],
      jsxImportSource: undefined,
      tsDecorators: false,
    }),
    // Only use component tagger in development
    mode === 'development' && componentTagger(),
    // Only generate visualizer in build mode
    mode === 'production' && visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  build: {
    // Optimize build output
    target: 'es2015',
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Group React core modules together
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react-router-dom')) {
            return 'react-vendor';
          }
          
          // Group UI components together
          if (id.includes('@/components/ui/')) {
            return 'ui-components';
          }
          
          // Group charts modules together
          if (id.includes('node_modules/recharts')) {
            return 'charts';
          }
          
          // Group utilities together
          if (id.includes('@/lib/utils')) {
            return 'utils';
          }
        },
      },
    },
    // Enable SWC minify for faster builds
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
    modulePreload: {
      polyfill: true,
    },
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    // Pre-bundle these dependencies for faster dev startup
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      'recharts',
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
    ],
    esbuildOptions: {
      target: 'es2020',
    },
  },
  // Disable CSS code-splitting for faster first load
  css: {
    devSourcemap: false,
  },
}));
