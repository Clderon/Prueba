# definiendo la imagen base
FROM node:18

# creando una carpeta donde esta el coidgo funete de la aplicacion ( dentro del contenedor )
RUN mkdir -p /home/app

# moviendo los archivos y moviendolo al contenedor ( . mover al /home/app )
COPY . /home/app

# exponiendo un puerto para poder conectarnos al contenedor  ( mapeo de puertos )
EXPOSE 3000

# comando que debe ejecutar para que nuestra app corra
CMD [ "node", "/home/app/index.js" ]