describe('OrangeHRM Functional Tests', () => {
    beforeEach(() => {
        // Acesse o site e faça login antes de cada teste
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

        // Verifique se o login foi bem-sucedido
        cy.url().should('include', '/dashboard')
    })

    it('Realiza logout do sistema', () => {
        // Ignorar exceções não capturadas
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    
        // Clique no menu de perfil e selecione logout
        cy.get('.oxd-userdropdown-name').click()
        cy.contains('Logout').click()
    
        // Verifique se o logout foi bem-sucedido, voltando para a página de login
        cy.url().should('include', '/auth/login')
    })
    
    it('Navega para a seção de PIM', () => {
        // Clique no menu de PIM
        cy.contains('PIM').click()

        // Verifique se está na página de PIM
        cy.url().should('include', '/pim')
        cy.get('.oxd-topbar-header-title').should('contain', 'PIM')
    })

    it('Adiciona um novo funcionário na seção de PIM', () => {
        // Navegue até o menu de PIM
        cy.contains('PIM').click()

        // Clique no botão "Add Employee"
        cy.contains('Add Employee').click()

        // Insira os detalhes do novo funcionário
        cy.get('input[name="firstName"]').type('John')
        cy.get('input[name="lastName"]').type('Doe')

        // Clique em "Save"
        cy.get('button[type="submit"]').click()

        // Verifique se o funcionário foi adicionado (valide a presença do nome ou outro identificador)
        cy.get('.orangehrm-edit-employee-name').should('contain', 'John Doe')
    })

    // it('Busca um funcionário na seção de PIM', () => {
    //     // Navega para a seção de PIM
    //     cy.contains('PIM').click()
    
    //     // Espera que a lista de funcionários esteja visível
    //     cy.contains('Employee List', { timeout: 30000 }).should('be.visible')
    
    //     // Tenta localizar e interagir com o campo de busca
    //     cy.get('#employeeSearch', { timeout: 30000 }) // Novo seletor
    //         .should('be.visible')
    //         .type('John Doe', { force: true })
    
    //     // Clica no botão de busca
    //     cy.get('button[type="submit"]').click()
    
    //     // Verifica se o funcionário aparece nos resultados
    //     cy.get('.oxd-table-card', { timeout: 10000 }).should('contain', 'John Doe')
    // })
    
    // it('Edita detalhes de um funcionário', () => {
    //     // Navega para a seção de PIM
    //     cy.contains('PIM').click()
    
    //     // Aguarda até que a lista de funcionários esteja visível
    //     cy.contains('Employee List', { timeout: 30000 }).should('be.visible')
    
    //     // Tenta localizar e interagir com o campo de busca
    //     cy.get('#employeeSearch', { timeout: 30000 }) // Novo seletor
    //         .should('be.visible')
    //         .type('John Doe', { force: true })
        
    //     // Clica no botão de busca
    //     cy.get('button[type="submit"]').click()
    
    //     // Acessa o perfil do funcionário
    //     cy.get('.oxd-table-card').first().click()
    
    //     // Edita o campo de apelido
    //     cy.get('input[name="nickName"]', { timeout: 10000 }).clear().type('JD')
    
    //     // Salva as alterações
    //     cy.get('button[type="submit"]').click()
    
    //     // Verifica se a mudança foi salva
    //     cy.get('input[name="nickName"]').should('have.value', 'JD')
    // })    
    
    
})
