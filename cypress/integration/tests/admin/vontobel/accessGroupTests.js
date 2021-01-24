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

    it ('CreateNewCountry',()=>{
        cy.navigateToTheCountryList();
        accessGroupPo.getAddCountryBtn().click({force:true});
        accessGroupPo.getCountryNameField().type('ACountry',{force:true});
        accessGroupPo.getLongCountryCodeField().type('LON',{force:true});
        accessGroupPo.getShortCountryCodeField().type('Sh',{force:true});
        accessGroupPo.getVontobelDefaultinvestorType().type('Employee{enter}',{force:true});
        accessGroupPo.getDeritradeDefaultInvestorType().type('Employee{enter}',{force:true});
        accessGroupPo.getTwentyfourDefaultInvestorType().type('Employee{enter}',{force:true});
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);
    })

    it('EditCountry',()=>{
        cy.navigateToTheCountryList();
        accessGroupPo.getFirstElementFromTheList().click({force:true});
        accessGroupPo.getEditCountryBtn().type('Edit{enter}',{force:true});
        accessGroupPo.getCountryNameField().type('AAA',{force:true});
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);
    })

    it('DeleteCountry',()=>{
        cy.navigateToTheCountryList();
        accessGroupPo.getDeleteBtn().click({force:true});
        accessGroupPo.getSubmitDeleteBtn().click();
        cy.checkAdminStatus(true);
    })


})

