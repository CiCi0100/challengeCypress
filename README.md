Aqui está o README para o projeto de automação de testes no OrangeHRM usando Cypress:

---

# orangehrm-automation

Automação de testes para o site OrangeHRM Live.

### 📓 Pré-requisitos

- [Node.js](https://nodejs.org/en/download)
- [Visual Studio Code](https://code.visualstudio.com/Download)

<hr>

### 📃 Dependências
Para instalar as dependências do projeto, execute o comando abaixo no terminal:

```
npm i
```

### 🖥️ Configurações
---

#### | Passo 1: Clone o projeto de automação

Clone o repositório do projeto em sua máquina usando o comando:

```
git clone https://github.com/seu-usuario/orangehrm-automation.git
```

#### | Passo 2: Configurações para rodar o projeto 

Abra o projeto Cypress no [VSCode](https://code.visualstudio.com/Download), instale as dependências com o comando `npm i` e configure o arquivo `cypress.config.js` ou `cypress.env.json` (caso utilize) com a URL do OrangeHRM Live:

```json
{
    "baseUrl": "https://opensource-demo.orangehrmlive.com/"
}
```

#### | Passo 3: Execute os testes 

Para rodar os testes, use um dos seguintes comandos no terminal:

- Executar testes no modo headless (sem interface):

  ```
  npx cypress run
  ```

- Abrir a interface do Cypress para selecionar e executar testes manualmente:

  ```
  npx cypress open
  ```

### 📝 Relatórios de Teste (Mochawesome)

Para gerar relatórios detalhados usando o Mochawesome, execute os testes com o seguinte comando:

```
npx cypress run --reporter mochawesome --reporter-options "reportDir=cypress/reports,overwrite=false,html=false,json=true"
```

### 🔍 Executar Testes Específicos

Para executar apenas um conjunto específico de testes, como os testes de login, use:

```
npx cypress run --spec "cypress/e2e/orangehrm_login.cy.js"
```

---

Esse projeto cobre cenários principais do sistema OrangeHRM Live, como login, logout, navegação no menu PIM, adição de funcionário e edição de informações de funcionários.