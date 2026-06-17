# Interrompe e remove containers antigos
echo "Parando containers antigos"
docker compose down

# Reconstroi a imagem Docker e inicia os containers
echo "Construindo e iniciando a aplicação"
docker compose up -d --build

echo "Deploy concluído!"
echo "Acessar aplicação em: http://localhost:8080"