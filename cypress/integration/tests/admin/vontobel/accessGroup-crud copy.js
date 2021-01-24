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

     it ('Create new access group',()=>{
        cy.navigateToTheAccessGroupList();
        accessGroupPo.getAddBtn().click();
        accessGroupPo.getNameField().type('AAccessGroup');
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);
    })

   it ('Edit new access group',()=>{
        cy.navigateToTheAccessGroupList();
        accessGroupPo.getFirstElementFromTheList().click({force:true});
        accessGroupPo.getEditBtn().type('Edit{enter}',{force:true});
        accessGroupPo.getNameField().type('AAA',{force:true});
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);

    })

    it ('Delete new acces group',()=>{
        cy.navigateToTheAccessGroupList();
        accessGroupPo.getDeleteBtn().click({force:true});
        accessGroupPo.getSubmitDeleteBtn().click();
        cy.checkAdminStatus(true);

    })
})

