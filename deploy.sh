echo "Parando containers ativos"
docker compose down

echo "Construindo e iniciando a aplicação"
docker compose up -d --build

echo "Deploy concluído!"