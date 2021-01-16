Cypress.Commands.add("adminLogin", () => {
    cy.visit('/user/login');
    cy.get('#edit-name').type(Cypress.env('admin-username'));
    cy.get('#edit-pass').type(Cypress.env('admin-password'));
    cy.get('#edit-submit').click();
});

Cypress.Commands.add('acceptDisclosure', () => {
    cy.get('#disclosure-confirm').click();
})
