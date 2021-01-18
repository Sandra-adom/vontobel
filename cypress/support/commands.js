Cypress.Commands.add("login", () => {
    cy.visit('/user/login');
    cy.get('#edit-name').type(Cypress.config('admin-username'));
    cy.get('#edit-pass').type(Cypress.config('admin-password'));
    cy.get('#edit-submit').click();
    cy.get('#toolbar-bar').should('be.visible');
});

Cypress.Commands.add('acceptDisclosure', () => {
    cy.get('#disclosure-confirm').click();
})

Cypress.Commands.add('navigateToTheCountryList', ()=>{
    cy.get('.toolbar-icon-admin-vontobel').click();
    cy.get('.admin-list').find('.label').eq(0).contains('Access groups').click();
    cy.get('.admin-list').find('.label').eq(2).contains('Country list').click();
})

