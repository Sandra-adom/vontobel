/// <reference types="Cypress" />
const mainPO = require('../../../../../support/pageObjects/admin/main');
const accessGroupPO = require('../../../../../support/pageObjects/admin/accessGroupPage')
const mainPo = new mainPO;
const po = new accessGroupPO;

describe('Test suite', () => {

    beforeEach(() => {
        cy.visit('/admin/vontobel/access-groups/country', { failOnStatusCode: false });
        cy.acceptDisclosure();
        cy.login();
        cy.getVerticalMenuItem();
    })

    it('Create new company', () => {
        cy.navigateToTheCompanyList();
        mainPo.getPageTitle().should('contain.text', 'Company entities');
        po.getAddBtn().click();
        po.getNameField().type('A Company name');
        po.getWhiteListedDomainsField().type("AAADomain");
        cy.frameLoaded('#entity_browser_iframe_media_entity_browser');
        cy.iframe().find('.view-content .views-row').first().click();
        cy.iframe().find('.is-entity-browser-submit').click();
        cy.wait(5000);
        po.getSaveBtn().click();
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
        cy.navigateToTheCompanyList();
        mainPo.getPageTitle().should('contain.text', 'Company entities');
        po.getDropDownToggle().last().click();
        po.getDeleteBtn().last().click();
        po.getSubmitDeleteBtn().click();
        cy.checkAdminStatus(true);
    })


})

