FROM node:18-alpine

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar archivos de configuración primero
COPY postcss.config.js .
COPY tailwind.config.js .
COPY tsconfig.json .
COPY index.html .

# Copiar el resto del código
COPY src/ src/

# Construir la aplicación
RUN npm run build

# Exponer puerto
EXPOSE 4173

# Iniciar la aplicación
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
