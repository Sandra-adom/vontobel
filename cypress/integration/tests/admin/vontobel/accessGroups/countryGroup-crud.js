/// <reference types="Cypress" />
const mainPO = require('../../../../../support/pageObjects/admin/main');
const accessGroupPO = require('../../../../../support/pageObjects/admin/accessGroupPage')
const mainPo = new mainPO;
const accessGroupPo = new accessGroupPO;

describe('Test suite', () => {

    beforeEach(() => {
        cy.visit('/admin/vontobel/access-groups/country', { failOnStatusCode: false });
        cy.acceptDisclosure();
        cy.login();
    })

    it('Create new country group', () => {
        cy.navigateToTheCountryGroupList();
        accessGroupPo.getAddBtn().click();
        accessGroupPo.getNameField().type('ACountryGroup');
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);
    })

    it('Edit new country group', () => {
        cy.navigateToTheCountryGroupList();
        accessGroupPo.getEditBtn().first().contains('Edit').click({ force: true });
        accessGroupPo.getNameField().type('AA');
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);
    })

    it('Delete new country group', () => {
        cy.navigateToTheCountryGroupList();
        accessGroupPo.getDeleteBtn().first().contains('Delete').click({ force: true });
        accessGroupPo.getSubmitDeleteBtn().click();
        cy.checkAdminStatus(true);
    })


})

