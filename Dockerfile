FROM node:18-alpine

WORKDIR /app

# Instalar las dependencias
COPY package*.json ./
RUN npm install

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto
EXPOSE 4173

# Modificar el comando de inicio para usar la ruta completa
CMD ["sh", "-c", "node_modules/.bin/vite preview --host 0.0.0.0 --port 4173"]
