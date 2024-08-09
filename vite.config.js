import { fileURLToPath } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import dns from 'node:dns'

// Convert file URL to directory path
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Set up DNS to resolve 'localhost' to 127.0.0.1 for development purposes
dns.setDefaultResultOrder('verbatim')
  // Define global constants based on environment
const globalDefines = {
    __BASE_URL__: JSON.stringify('https://kylehossli.com/'),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  };

export default defineConfig({
  build: {
    minify: true,
    target: 'esnext',
    outDir: 'dist',
    assetsDir: './',
    publicDir: 'public',
    sourcemap: true,
    rollupOptions: {
      input: {
          '01-uniform': `${__dirname}/src/html/art/01-uniform.html`,
          '02-the-brass': `${__dirname}/src/html/art/02-the-brass.html`,
          '03-the-bottom-is-aluminum-too': `${__dirname}/src/html/art/03-the-bottom-is-aluminum-too.html`,
          '04-hump': `${__dirname}/src/html/art/04-hump.html`,
          '05-riptide-rush': `${__dirname}/src/html/art/05-riptide-rush.html`,
          '06-happy-meal': `${__dirname}/src/html/art/06-happy-meal.html`,
          '07-faking-it-with-family': `${__dirname}/src/html/art/07-faking-it-with-family.html`,
          '08-sign-fold': `${__dirname}/src/html/art/08-sign-fold.html`,
          '09-late-night': `${__dirname}/src/html/art/09-late-night.html`,
          '10-she': `${__dirname}/src/html/art/10-she.html`,
          '11-lush': `${__dirname}/src/html/art/11-lush.html`,
          '12-concrete': `${__dirname}/src/html/art/12-concrete.html`,
          '13-do-the-right-thing': `${__dirname}/src/html/art/13-do-the-right-thing.html`,
          '14-kwh': `${__dirname}/src/html/art/14-kwh.html`,
          '15-rope': `${__dirname}/src/html/art/15-rope.html`,
          '16-staged-authority': `${__dirname}/src/html/art/16-staged-authority.html`,
          '17-robert-smith': `${__dirname}/src/html/art/17-robert-smith.html`,
          '18-helium': `${__dirname}/src/html/art/18-helium.html`,
          '19-institute-for-recurrent-progress': `${__dirname}/src/html/art/19-institute-for-recurrent-progress.html`,
          '20-cards-against-humanity': `${__dirname}/src/html/art/20-cards-against-humanity.html`,
          '21-fish-eating-fish': `${__dirname}/src/html/art/21-fish-eating-fish.html`,
          'contact': `${__dirname}/src/html/contact.html`,
          'index': `${__dirname}/index.html`,
      },
    },
  },
  resolve: {
    alias: {
      '@': __dirname, // Alias for project root
      '@images': path.resolve(__dirname, 'public/images'),
      '@styles': path.resolve(__dirname, 'src/css/'),
    },
  },
  define: globalDefines, // Add global defines here
});