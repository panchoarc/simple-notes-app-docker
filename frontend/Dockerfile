# Primera creación de un Dockerfile usando node-alpine 

FROM node:15.5.1-alpine3.12

#Cambiar a directorio backend
WORKDIR /frontend

#Copiar package.json en el container en la ruta /backend
COPY package*.json /frontend/

#Instalar dependencias
RUN npm install


#Copiar el directorio actual (/backend) al contenedor en /backend/
COPY . /frontend/

#Disponibilizar puerto al mundo fuera del container
EXPOSE 3000

#Run app cuando el contenedor se inicie
CMD ["npm","start"]
