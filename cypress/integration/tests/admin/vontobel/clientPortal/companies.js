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

    it('Create new company', () => {
        rout.createCompany();
    })

    it('Edit company', () => {
        cy.navigateToTheCompanyList();
        mainPo.getPageTitle().should('contain.text', 'Company entities');
        po.getDropDownToggle().last().click();
        po.getEditBtn().last().click();
        po.getNameField().type('AA');
        po.getSaveBtn().click();
        cy.checkAdminStatus(true);

    })

    it('Delete company', () => {
        rout.deleteCompany();
    })


})

