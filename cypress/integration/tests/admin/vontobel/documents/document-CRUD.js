/// <reference types="Cypress" />
const mainPO = require('../../../../../support/pageObjects/admin/main');
const documentPO = require('../../../../../support/pageObjects/admin/documentPage')
const mainPo = new mainPO;
const po = new documentPO;

describe('Test suite', () => {

    beforeEach(() => {
        cy.login();
        //cy.acceptDisclosure();
        cy.getVerticalMenuItem();
        cy.visit('/admin/vontobel/documents/document', { failOnStatusCode: false });
    })

    it('Create document', () => {
      po.getAddBtn().click();
      po.getReferenceDate().type('2021-01-01');
      po.getDocumentTypeList().click();
      po.getFirstDocument().click();

    })

    /*it('Edit document', () => {
   

    })

    it('Delete document', () => {
 
    })*/
})

