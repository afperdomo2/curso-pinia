# Usa la imagen oficial de node
FROM node:16-alpine

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos todo el código fuente al contenedor
COPY . .

# Construimos la aplicación
RUN npm run build

# Exponemos el puerto 8080
EXPOSE 8080

# Arrancamos la aplicación
CMD ["npm", "run", "production"]
