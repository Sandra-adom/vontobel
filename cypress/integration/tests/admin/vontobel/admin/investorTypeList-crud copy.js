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

    it('CreateNewInvestortype', () => {
        cy.navigateToTheInvestorTypeList();
        accessGroupPo.getAddBtn().contains('Add Investor type').click({ force: true });
        accessGroupPo.getNameField().type('AAInvestotType', { force: true });
        accessGroupPo.getClassificationField().type('Employee{enter}');
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);
    })

    it('EditNewInvestorType', () => {
        cy.navigateToTheInvestorTypeList();
        accessGroupPo.getEditBtn().last().contains('Edit').click();
        accessGroupPo.getNameField().type('AAA', { force: true });
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);
    })

    it('DeleteNewInvestorGroup', () => {
        cy.navigateToTheInvestorTypeList();
        accessGroupPo.getDropDownToggle().last().click();
        accessGroupPo.getDeleteBtn().last().contains('Delete').click({ force: true });
        accessGroupPo.getSubmitDeleteBtn().last().click();
        cy.checkAdminStatus(true);
    })
})

