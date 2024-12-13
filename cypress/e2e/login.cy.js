
describe('Login', () => {

    const tela = ['iphone-6', 'iphone-x']

    tela.forEach(element => {
    
        beforeEach(() => {

            cy.viewport(element)
            cy.visit('/login')
       
        });
   
        it('Login com credenciais validas', () => {

         cy.get('#user').type('aluno@teste.com')
            cy.get('#password').type('teste123')
            cy.get('#materialUnchecked').check()
            //cy.get('[id="btnLogin"]').click().wait(5000)
            cy.get('#btnLogin').click().wait(5000)

            cy.get('#swal2-title')
            .should('have.text', 'Login realizado')
            .should('be.visible')

        });

        it('Login com email invalido', () => {
        
            cy.get('#user').type('aluno@@teste.com')
            cy.get('#password').type('teste123')
            cy.get('#btnLogin').click()

            cy.get('.invalid_input')
            .should('have.text', 'E-mail inválido.')
            .should('be.visible')

        });
    
        it('Login com senha vazia', () => {
        
            cy.get('#user').type('aluno@teste.com')
            cy.get('#btnLogin').click()

            cy.get('.invalid_input')
            .should('have.text', 'Senha inválida.')
            .should('be.visible')

        });
    }) 
});