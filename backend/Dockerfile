# Primera creación de un Dockerfile usando node-alpine 

FROM node:15.5.1-alpine3.12

#Cambiar a directorio backend
WORKDIR /backend

#Copiar package.json en el container en la ruta /backend
COPY package*.json /backend/

#Instalar dependencias
RUN npm install


#Copiar el directorio actual (/backend) al contenedor en /backend/
COPY . /backend/

#Disponibilizar puerto al mundo fuera del container
EXPOSE 5000

#Run app cuando el contenedor se inicie
CMD ["npm","run","dev"]
