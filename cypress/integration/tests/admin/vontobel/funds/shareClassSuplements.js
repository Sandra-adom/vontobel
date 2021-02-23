/// <reference types="Cypress" />
const mainPO = require('../../../../../support/pageObjects/admin/main');
const fundsPO = require('../../../../../support/pageObjects/admin/funds')
const mainPo = new mainPO;
const po = new fundsPO;

describe('Test suite', () => {

    beforeEach(() => {
        cy.login();
        cy.getVerticalMenuItem();
        cy.visit('/admin/vontobel/share_class_supplement/list');
    })

    it('Create share class supplements', () => {
        po.getAddShareClassSupplementBtn().click();
        po.getNameField().type('Share class supplement');
        po.getShareClassDropdownList().click();
        po.getShareClass().click();
        po.getCountrySearchField().type('Switzerland{Enter}', { force: true });
        po.getRegistrationTypeList().click();
        po.getRegistrationType().click();
        mainPo.getSubmitBtn().click();
        cy.checkAdminStatus(true);
    })

    it('Edit share class supplements', () => {
        po.getCountryFilter().type('Switzerland{Enter}');
        po.getApplayBtn().click();
        mainPo.getEditBtn().click();
        po.getNameField().type('AA');
        mainPo.getSubmitBtn().click();
        cy.checkAdminStatus(true);
    })

    it('Delete share class supplements', () => {
        po.getCountryFilter().type('Switzerland{Enter}');
        po.getApplayBtn().click();
        mainPo.getDeleteBtn().click({ force: true });
        mainPo.getConfirmationWindowTitle().should('contain.text', 'Are you sure you want to delete the share class supplement Share class supplementAA?');
        mainPo.getSubmitBtn().click();
        cy.checkAdminStatus(true);

    })



})

