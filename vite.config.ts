import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
export default defineConfig({
  // server: {
  //   port: 4200, // Change the port here
  //   open: true, // Automatically open the browser
  //   host: true, // Expose the server on the local network
  // },
  server: {
    port: 4200, 
    proxy: {
      '/api': 'http://41.65.11.55:8028', 
    },
  },
  plugins: [react()],
})
