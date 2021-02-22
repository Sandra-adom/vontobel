/// <reference types="Cypress" />
const mainPO = require('../../../../../support/pageObjects/admin/main');
const accessGroupPO = require('../../../../../support/pageObjects/admin/accessGroupPage')
const mainPo = new mainPO;
const accessGroupPo = new accessGroupPO;

describe('Test suite', () => {

    beforeEach(() => {
        cy.visit('/admin/vontobel/access-groups/country', { failOnStatusCode: false });
        cy.acceptDisclosure();
        cy.login();
    })

    it('Create new access group', () => {
        cy.navigateToTheAccessGroupList();
        accessGroupPo.getAddBtn().contains('Add Access group').click({ force: true });
        accessGroupPo.getNameField().type('AAccessGroup');
        accessGroupPo.getInvestorTypeGroupField().type('All{enter}');
        accessGroupPo.getCountryGroupField().type('All Countries{enter}');
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);
    })

    it('Filter access group by Name',()=> {
        cy.navigateToTheAccessGroupList();
        accessGroupPo.getNameFlterInputField().type('AAccessGroup',{force:true});
        accessGroupPo.getApplayBtn().click({force:true});
        accessGroupPo.getAccessGroupNameValue().should('contain.text','AAccessGroup');

    })

    it('Filter access group by Your investor type',()=>{
        cy.navigateToTheAccessGroupList();
        accessGroupPo.getInvestorTypeFilterField().type('Financial Intermediary',{force:true});
        accessGroupPo.getApplayBtn().click({force:true});
        accessGroupPo.getAccessGroupNameValue().should('contain.text','AAccessGroup');
    })

    it('Filter access group by Your investor type group',()=>{
        cy.navigateToTheAccessGroupList();
        accessGroupPo.getInvestorTypeGroupFilterField().type('All',{force:true});
        accessGroupPo.getApplayBtn().click({force:true});
        accessGroupPo.getAccessGroupNameValue().should('contain.text','AAccessGroup');
    })

    it('Filter access group by Country',()=>{
        cy.navigateToTheAccessGroupList();
        accessGroupPo.getCountryfilterField().type('France',{force:true});
        accessGroupPo.getApplayBtn().click({force:true});
        accessGroupPo.getAccessGroupNameValue().should('contain.text','AAccessGroup');
    })

    it('Filter access group by Country group',()=>{
        cy.navigateToTheAccessGroupList();
        accessGroupPo.getCountryGroupFilterField().type('All Countries',{force:true});
        accessGroupPo.getApplayBtn().click({force:true});
        accessGroupPo.getAccessGroupNameValue().should('contain.text','AAccessGroup');
    })

    it('Edit new access group', () => {
        cy.navigateToTheAccessGroupList();
        accessGroupPo.getEditBtn().first().contains('Edit').click({ force: true });
        accessGroupPo.getNameField().type('AAA', { force: true });
        accessGroupPo.getSaveBtn().click();
        cy.checkAdminStatus(true);

    })

    it('Delete new acces group', () => {
        cy.navigateToTheAccessGroupList();
        accessGroupPo.getDeleteBtn().first().contains('Delete').click({ force: true });
        //accessGroupPo.getSubmitDeleteBtn().click();
        //cy.checkAdminStatus(true);

    })
    
})

