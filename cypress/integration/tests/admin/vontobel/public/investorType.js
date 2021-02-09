/// <reference types="Cypress" />
const Routines = require('../../../../../support/pageObjects/admin/routines');
const rout = new Routines;

describe('Test suite', () => {

    beforeEach(() => {
        cy.visit('/admin/vontobel/access-groups/country', { failOnStatusCode: false });
        cy.acceptDisclosure();
        cy.login();
    })

    /*it('Get Vontobel Country with one Investor type', () => {
        rout.createNewCountryWithOneInvestorType();
    })*/

    it('Get Vontobel Country with two Investor types', () => {
        //cy.visit(cy.env('deritradeDemo'));
        rout.createNewCountryWithTwoInvestorType();
        
    })

})

