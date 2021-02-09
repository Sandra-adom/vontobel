/// <reference types="Cypress" />
const mainPO = require('../../../../../support/pageObjects/admin/main');
const accessGroupPO = require('../../../../../support/pageObjects/admin/accessGroupPage')
const mainPo = new mainPO;
const po = new accessGroupPO;

describe('Test suite', () => {

    beforeEach(() => {
        cy.visit('/admin/vontobel/access-groups/country', { failOnStatusCode: false });
        cy.acceptDisclosure();
        cy.login();
        cy.getVerticalMenuItem();
    })

    it('Create people', () => {
     cy.navigateToThePeopleList();
    })

})

