require('cypress-iframe');

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

Cypress.Commands.add('navigateToTheAccessGroupList', ()=>{
    cy.get('.toolbar-icon-admin-vontobel').click();
    cy.get('.admin-list').find('.label').eq(0).contains('Access groups').click();
    cy.get('.admin-list').find('.label').eq(0).contains('Access groups list').click();
})

Cypress.Commands.add('navigateToTheCountryGroupList', ()=>{
    cy.get('.toolbar-icon-admin-vontobel').click();
    cy.get('.admin-list').find('.label').eq(0).contains('Access groups').click();
    cy.get('.admin-list').find('.label').eq(1).contains('Country group list').click();
})

Cypress.Commands.add('navigateToTheInvestorTypeGroupList', ()=>{
    cy.get('.toolbar-icon-admin-vontobel').click();
    cy.get('.toolbar-icon-admin-vontobel').click();
    cy.get('.admin-list').find('.label').eq(0).contains('Access groups').click();
    cy.get('.admin-list').find('.label').eq(3).contains('Investor type group list').click();
})

Cypress.Commands.add('navigateToTheInvestorTypeList', ()=>{
    cy.get('.toolbar-icon-admin-vontobel').click();
    cy.get('.toolbar-icon-admin-vontobel').click();
    cy.get('.admin-list').find('.label').eq(0).contains('Access groups').click();
    cy.get('.admin-list').find('.label').eq(4).contains('Investor type list').click();
})

Cypress.Commands.add('navigateToTheCompanyList', ()=>{
    cy.get('.toolbar-icon-admin-vontobel').click();
    cy.get('.admin-list > :nth-child(2) > a').click();
})

Cypress.Commands.add('navigateToThePeopleList', ()=>{
    cy.get('.toolbar-icon-admin-vontobel').click();
    cy.get('.menu-item.open > :nth-child(2) > :nth-child(2) > :nth-child(1) > .toolbar-handle > .label').click();
    cy.get(':nth-child(2) > .menu-item.open > .toolbar-menu > :nth-child(2) > .toolbar-box > .toolbar-icon').click();
})


Cypress.Commands.add("checkAdminStatus", () => {
        cy.get('.messages').should('have.class', 'messages');
});

Cypress.Commands.add("getVerticalMenuItem", () => {
    return cy.get('#toolbar-item-administration-tray > .clearfix > .toolbar-toggle-orientation > .toolbar-lining > .toolbar-icon').click();
})

