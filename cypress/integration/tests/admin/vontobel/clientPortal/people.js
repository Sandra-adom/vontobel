/// <reference types="Cypress" />
const mainPO = require('../../../../../support/pageObjects/admin/main');
const mainPo = new mainPO;
const accessGroupPO = require('../../../../../support/pageObjects/admin/accessGroupPage')
const po = new accessGroupPO;
const Routines = require('../../../../../support/pageObjects/admin/routines');
const rout = new Routines;

describe('Test suite', () => {

    beforeEach(() => {
        cy.visit('/admin/vontobel/access-groups/country', { failOnStatusCode: false });
        cy.acceptDisclosure();
        cy.login();
        cy.getVerticalMenuItem();
    })

    it('Create people', () => {
        rout.createCompany();
        cy.clearCookies();
        cy.visit('node/2890');
        cy.acceptDisclosure();
        po.getFirstNameField().type('Name');
        po.getLastNamefield().type('Surname');
        po.getBusinessEmailField().type('company@company.com');
        po.getPhoneField().type('860101010');
        po.getStreetAddressField().type('Street 1');
        po.getPostalCodeField().type('1111');
       po.getCityField().waitUntil().should('be.visible').type('City',{force:true});
       // cy.navigateToThePeopleList();
        
    })

})

