/// <reference types="Cypress" />
const mainPO = require('../../../../../support/pageObjects/admin/main');
const mainPo = new mainPO;
const accessGroupPO = require('../../../../../support/pageObjects/admin/accessGroupPage');
const accessGroupPo = new accessGroupPO;
const Routines = require('../../../../../support/pageObjects/admin/routines');
const rout = new Routines;

describe('Test suite', () => {

    beforeEach(() => {
        cy.visit('/admin/vontobel/access-groups/country', { failOnStatusCode: false });
        cy.acceptDisclosure();
        cy.login();
    })

    it('Create new country with more than one investor type', () => {
        rout.createNewCountry();
    })

    it('Create new country with Employee investor type', () => {
        cy.navigateToTheCountryList();
        accessGroupPo.getAddBtn().click({ force: true });
        accessGroupPo.getNameField().type('Employee Investors', { force: true });
        accessGroupPo.getLongCountryCodeField().type('EMP', { force: true });
        accessGroupPo.getShortCountryCodeField().type('EM', { force: true });
        accessGroupPo.getVontobelDefaultinvestorType().type('Asset Manager{enter}', { force: true });
        accessGroupPo.getVontobelCountryIsDisplayedForUserCheckbox().click();
        accessGroupPo.getDeritradeDefaultInvestorType().type('Asset Manager{enter}', { force: true });
        accessGroupPo.getDeritradeIsDisplayedForUserCheckbox().click();
        accessGroupPo.getTwentyfourDefaultInvestorType().type('Asset Manager{enter}', { force: true });
        accessGroupPo.getTwentyfourIsDisplayedForUserCheckbox().click();
        accessGroupPo.getCountryStatusCheckbox().click();
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);
    })


    it('EditCountry', () => {
        cy.navigateToTheCountryList();
        accessGroupPo.getEditBtn().first().contains('Edit').click({ force: true });
        accessGroupPo.getNameField().type('AAA', { force: true });
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);
    })

    it('DeleteCountry', () => {
        cy.navigateToTheCountryList();
        accessGroupPo.getDropDownToggle().first().click({ force: true });
        accessGroupPo.getDeleteBtn().first().contains('Delete').click({ force: true });
        accessGroupPo.getSubmitDeleteBtn().click();
        cy.checkAdminStatus(true);
    })
})

