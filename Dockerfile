# Étape 1 : Construction de l'image
FROM node:16-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de votre projet dans le conteneur
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste des fichiers du projet
COPY . ./

# Construire l'application
RUN npm run build

# Étape 2 : Serveur pour l'application construite
FROM nginx:alpine

# Copier les fichiers construits vers le répertoire de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80 pour l'accès à l'application
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
