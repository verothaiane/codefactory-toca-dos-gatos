# Usa a imagem oficial, super leve, do servidor web Nginx
FROM nginx:alpine

# Copia todos os arquivos do nosso projeto para a pasta pública do Nginx
COPY . /usr/share/nginx/html

# Indica que o container vai se comunicar através da porta 80
EXPOSE 80