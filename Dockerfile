FROM node:18-alpine

WORKDIR /app

# Instalar wget para el healthcheck
RUN apk add --no-cache wget

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

# Configurar healthcheck
HEALTHCHECK --interval=10s --timeout=5s --start-period=30s --retries=3 \
  CMD wget --spider --quiet http://localhost:4173/ || exit 1

# Iniciar la aplicación
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
