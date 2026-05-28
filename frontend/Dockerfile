FROM node:20-alpine
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala os pacotes de forma limpa
RUN npm install

# Copia o restante do código do frontend
COPY . .

# Expõe a porta do Vite
EXPOSE 3001

# O "--" e "--host" são obrigatórios para o Vite aceitar conexões vindas de fora do container
CMD ["npm", "run", "dev", "--", "--host"]