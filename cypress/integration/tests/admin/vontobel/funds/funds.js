/// <reference types="Cypress" />
const mainPO = require('../../../../../support/pageObjects/admin/main');
const fundsPO = require('../../../../../support/pageObjects/admin/funds')
const mainPo = new mainPO;
const po = new fundsPO;

describe('Test suite', () => {

    beforeEach(() => {
        cy.login();
        cy.getVerticalMenuItem();
        cy.visit('/admin/vontobel/funds/fund');
    })

    it('Filter By Name', () => {
      
    })

    it('Filter By ID', () => {
    
    })

    it('Filter By Active Status', () => {

    })



})

