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

    it ('CreateNewInvestortype',()=>{
        cy.navigateToTheInvestorTypeGroupList();
        accessGroupPo.getAddBtn().click({force:true});
        accessGroupPo.getNameField().type('AAInvestor group',{force:true});
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);
    })

    it('EditNewInvestorType',()=>{
        cy.navigateToTheInvestorTypeGroupList();
        accessGroupPo.getLastEditBtnFromTheList().click();
        accessGroupPo.getNameField().type('AAA',{force:true});
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);
    })

    it('DeleteNewInvestorGroup',()=>{
        cy.navigateToTheInvestorTypeGroupList();
        accessGroupPo.getDropDownToggle().click();
        accessGroupPo.getDeleteBtn().last().click();
        accessGroupPo.getSubmitDeleteBtn().last().click();
        cy.checkAdminStatus(true);
    })


})

