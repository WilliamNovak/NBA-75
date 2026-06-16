# Utiliza imagem oficial do Nginx baseada em Alpine Linux
FROM nginx:alpine

# Copia o arquivo index da aplicacao
COPY index.html /usr/share/nginx/html/
# Copia arquivos CSS, JS e imagens
COPY src /usr/share/nginx/html/src/

# Porta padrao utilizada pelo Nginx
EXPOSE 80
# Inicia servidor, mantem nginx executando
CMD ["nginx", "-g", "daemon off;"]