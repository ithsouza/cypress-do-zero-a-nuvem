Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {

  // Preenche os campos obrigatórios
  cy.get('#firstName').type('Thiago')
  cy.get('#lastName').type('Francisco')
  cy.get('#email').type('thiagosouzaeric@gmail.com')
  cy.get('#open-text-area').type('teste.')

  // Envia o formulário
  cy.get('button[type="submit"]').click()
})