# Clon MercadoLibre

This App use this version in vite dev dependency:
```
"@vitejs/plugin-react": "^1.0.0",
```

official url: https://github.com/vitejs/vite/issues/5438

And vite version: 
```
"vite": "^2.9.6"
```

## For create server on host:

This settings is there vite.config.js

```
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  }
});
```