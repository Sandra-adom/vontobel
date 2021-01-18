/// <reference types="Cypress" />
const mainPO = require ('../../../../support/pageObjects/admin/main');
const accessGroupPO = require ('../../../../support/pageObjects/admin/accessGroupPage')
const mainPo = new mainPO;
const accessGroupPo = new accessGroupPO;

describe('Test suite', () => {

    beforeEach(() => {
        cy.visit('/admin/vontobel/access-groups/country',{failOnStatusCode: false});
        cy.acceptDisclosure();
        cy.login();
    })

   /* it ('CreateNewCountry',()=>{
        cy.navigateToTheCountryList();
        accessGroupPo.getAddCountryBtn().click({force:true});
        accessGroupPo.getCountryNameField().type('ACountry');
        accessGroupPo.getLongCountryCodeField().type('LON');
        accessGroupPo.getShortCountryCodeField().type('Sh');
        accessGroupPo.getDefaultInvestorTypeDropDownList().type('Employee{enter}');
        accessGroupPo.getSaveBtn().click();
    })*/

    it('EditCountry',()=>{
        cy.navigateToTheCountryList();
        accessGroupPo.getEditCountryBtn().type('Edit{enter}',{force:true});
    })

    it('DeleteCountry',()=>{
        cy.navigateToTheCountryList();
    })
})