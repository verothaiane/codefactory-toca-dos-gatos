## CodeFactory Solutions - Projeto Toca dos Gatos

## Descrição do Projeto
O "Toca do Gato" é uma aplicação web estática focada em promover a adoção responsável de felinos, conectando gatinhos resgatados a lares amorosos. Desenvolvido pela **CodeFactory Solutions**, este projeto vai além da sua interface e atua como uma Prova de Conceito (PoC) oficial para a implementação da Cultura DevOps na empresa, visando solucionar problemas de padronização de ambiente e atrasos em entregas.

## Objetivo
O objetivo principal é apresentar uma vitrine interativa de gatinhos para adoção, ao mesmo tempo em que moderniza os processos internos da equipe de desenvolvimento. Através deste repositório, o time estabelece um novo padrão técnico que abraça o versionamento colaborativo, a automação de testes via pipelines e a conteinerização da aplicação.

## Tecnologias Utilizadas
*   **HTML5:** Para a marcação semântica e estruturação dos perfis dos animais.
*   **CSS3:** Para a estilização visual, layout em grade (grid) dos cards e responsividade.
*   **JavaScript:** Para interações no lado do cliente, como o processamento do formulário de adoção.
*   **Docker:** Para a conteinerização do ambiente web, garantindo execução uniforme em qualquer máquina.
*   **Git e GitHub:** Para controle de versão, histórico de commits e ferramentas de gestão (Issues, Projects).
*   **GitHub Actions:** Para a automação do fluxo de Integração Contínua (CI).

## Estrutura de Pastas
```text
codefactory-toca-dos-gatos/
├── .github/
│   └── workflows/
│       └── ci.yml          # Pipeline de automação (Integração Contínua)
├── css/
│   └── style.css           # Arquivo de estilização da página
├── js/
│   └── script.js           # Lógica de interação do formulário
├── index.html              # Página principal de adoção
├── Dockerfile              # Instruções de montagem do container
└── README.md               # Documentação principal do projeto
```

## Instruções de Instalação
Para obter uma cópia local do projeto e visualizar o código-fonte, execute os comandos abaixo no seu terminal:

1. Faça o clone do repositório:
   ```bash
   git clone [https://github.com/verothaiane/codefactory-toca-dos-gatos](https://github.com/verothaiane/codefactory-toca-dos-gatos)
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd codefactory-toca-dos-gatos
   ```

## Instruções de Execução
Para garantir que a aplicação funcione da mesma forma em qualquer ambiente, utilizamos Docker. Siga os passos para rodar o site:

1. Tenha o Docker instalado e rodando em sua máquina.
2. Construa a imagem do container web:
   ```bash
   docker build -t toca-dos-gatos-web .
   ```
3. Inicie o container mapeando a porta 8080:
   ```bash
   docker run -p 8080:80 -d toca-dos-gatos-web
   ```
4. Abra o navegador e acesse: `http://localhost:8080`

## Versão Inicial
*   **Release v1.0.0** - Lançamento da estrutura base do site, configuração do repositório e encapsulamento em Docker.

## Licença
Este projeto é distribuído sob a Licença MIT.

*Projeto em constante atualização pela equipe*
