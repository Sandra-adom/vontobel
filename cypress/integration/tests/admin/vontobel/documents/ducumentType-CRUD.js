/// <reference types="Cypress" />
const mainPO = require('../../../../../support/pageObjects/admin/main');
const documentPO = require('../../../../../support/pageObjects/admin/documentPage')
const mainPo = new mainPO;
const po = new documentPO;

describe('Test suite', () => {

    beforeEach(() => {
        cy.login();
        cy.getVerticalMenuItem();
        cy.visit('/admin/vontobel/documents/document_type', { failOnStatusCode: false });
    })

    it('Create document type', () => {
        po.getAddBtn().click();
        po.getIDField().type('987654');
        po.getNumberField().type('321');
        po.getNameField().type('Document Type')
        po.getClassificationList().click();
        po.getClassificationValue(1).click();
        mainPo.getSubmitBtn().click();
        cy.checkAdminStatus(true);
    })

    it('Filter document by document type', () => {
        po.getNameFilter().type('Document Type');
        po.getApplayBtn().click();
        po.getResetBtn().click();
    })

    it('Edit document type', () => {
        po.getNameFilter().type('Document Type');
        po.getApplayBtn().click();
        po.getEditBtn().click();
        po.getIDField().type('AA');
        mainPo.getSubmitBtn().click();
        cy.checkAdminStatus(true);
        po.getDocumentTypeID().should('contain.text', '987654AA')
    })

    it('Delete document type', () => {
        po.getNameFilter().type('Document Type');
        po.getApplayBtn().click();
        po.getdropdownToggle().click();
        po.getDeleteBtn().click();
        mainPo.getSubmitBtn().click();
        cy.checkAdminStatus(true);
    })
})

