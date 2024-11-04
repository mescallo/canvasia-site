FROM node:18-alpine

WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./
COPY tsconfig*.json ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY index.html ./
COPY vite.config.ts ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY src/ src/

# Construir la aplicación
RUN npm run build

# Exponer puerto
EXPOSE 4173

# Iniciar la aplicación
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
