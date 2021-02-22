/// <reference types="Cypress" />
const mainPO = require('../../../../../support/pageObjects/admin/main');
const documentPO = require('../../../../../support/pageObjects/admin/documentPage')
const mainPo = new mainPO;
const po = new documentPO;

describe('Test suite', () => {

  beforeEach(() => {
    cy.login();
    cy.getVerticalMenuItem();
    cy.visit('/admin/vontobel/documents/document', { failOnStatusCode: false });
  })

  it('Create document', () => {
    po.getAddBtn().click();
    po.getReferenceDate().type('2021-01-01');
    po.getDocumentTypeList().click();
    po.getFirstDocument().click();
    cy.fileUpload();
    po.getDocument().should('contain.text', 'Doc2.docx');
    po.getCountryField().type('Switzerland{enter}');
    mainPo.getSubmitBtn().click();
    cy.checkAdminStatus(true);
  })

  it('Edit document', () => {
    po.getDocumentTypeFilter().type('24 - Capital requirements{enter}');
    po.getCountryFilter().type('Switzerland{Enter}', { force: true });
    po.getDocumentGroupFilter().type('Twentyfour{enter}', { force: true });
    po.getApplayFilterBtn().click();
    po.getEditDocumentList().click();
    po.getCountryField().type('Australia{enter}');
    mainPo.getSubmitBtn().click();
    cy.checkAdminStatus(true);
    po.getCountryValue().should('contain.text', 'Australia');
  })

  it('Delete document', () => {
    po.getDocumentTypeFilter().type('24 - Capital requirements{enter}');
    po.getCountryFilter().type('Switzerland{Enter}', { force: true });
    po.getDocumentGroupFilter().type('Twentyfour{enter}', { force: true });
    po.getApplayFilterBtn().click();
    po.getdropdownToggle().click().first();
    po.getDeleteBtn().click();
    mainPo.getSubmitBtn().click();
    cy.checkAdminStatus(true);
  })
})

