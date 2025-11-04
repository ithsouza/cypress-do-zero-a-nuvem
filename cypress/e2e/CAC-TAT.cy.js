/// <reference types="cypress" />

// Apenas UM describe principal
describe('Central de Atendimento ao Cliente TAT', () => {

  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => { 
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)
    cy.get('#firstName').type('Thiago')
    cy.get('#lastName').type('Francisco')
    cy.get('#email').type('thiagosouzaeric@gmail.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Thiago')
    cy.get('#lastName').type('Francisco')
    cy.get('#email').type('thiagosouzaeric@gmail,com') // vírgula proposital
    cy.get('#open-text-area').type('test')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('mantém o campo de telefone vazio quando um valor não numérico é digitado', () => {
    cy.get('#phone')
      .type('abcde')
      .should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Thiago')
    cy.get('#lastName').type('Francisco')
    cy.get('#email').type('thiagosouzaeric@gmail.com')
    cy.get('#open-text-area').type('Mensagem de teste')

    // Marca o checkbox de telefone obrigatório
    cy.get('#phone-checkbox').check().should('be.checked')

    // Envia o formulário sem preencher o telefone
    cy.get('button[type="submit"]').click()

    // Verifica se aparece a mensagem de erro
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('Thiago')
      .should('have.value', 'Thiago')
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .type('Francisco')
      .should('have.value', 'Francisco')
      .clear()
      .should('have.value', '')

    cy.get('#email')
      .type('thiagosouzaeric@gmail.com')
      .should('have.value', 'thiagosouzaeric@gmail.com')
      .clear()
      .should('have.value', '')

    cy.get('#phone')
      .type('14996702455')
      .should('have.value', '14996702455')
      .clear()
      .should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('envia o formulário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })

  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
  })

  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]').each(($radio) => {
      cy.wrap($radio)
        .check()
        .should('be.checked')
    })
  })

  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')

    cy.get('input[type="checkbox"]')
      .last()
      .uncheck()
      .should('not.be.checked')
  })

  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json')
      .should(($input) => {
        const fileName = $input[0].files[0].name
        expect(fileName).to.equal('example.json')
      })
  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(($input) => {
        const fileName = $input[0].files[0].name
        expect(fileName).to.equal('example.json')
      })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dado um alias', () => {
    cy.fixture('example.json').as('arquivoExemplo')
    cy.get('input[type="file"]')
      .selectFile('@arquivoExemplo')
      .should(($input) => {
        const fileName = $input[0].files[0].name
        expect(fileName).to.equal('example.json')
      })
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
  })

  //it.('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    // Remove o atributo target para abrir na mesma aba
    //cy.contains('a', 'Política de Privacidade')
      //.invoke('removeAttr', 'target')
      //.click()

    // Verifica se o conteúdo correto aparece na nova página
    //cy.contains('h1', 'CAC TAT - Política de privacidade').should('be.visible')
  })

