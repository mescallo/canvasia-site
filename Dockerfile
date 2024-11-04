FROM node:18-alpine

WORKDIR /app

# Copiar solo package.json primero
COPY package*.json ./

# Instalar todas las dependencias incluyendo devDependencies
RUN npm install --include=dev

# Instalar TailwindCSS específicamente
RUN npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# Inicializar TailwindCSS
RUN npx tailwindcss init -p

# Copiar archivos de configuración
COPY tsconfig*.json ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY vite.config.ts ./
COPY index.html ./

# Copiar código fuente
COPY src/ src/

# Construir la aplicación
RUN npm run build

# Exponer puerto
EXPOSE 4173

# Iniciar la aplicación
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
