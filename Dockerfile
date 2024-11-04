FROM node:18-alpine

WORKDIR /app

# Copiar solo package.json primero
COPY package*.json ./

# Instalar todas las dependencias
RUN npm install

# Copiar archivos de configuración
COPY tsconfig*.json ./
COPY postcss.config.cjs ./
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
