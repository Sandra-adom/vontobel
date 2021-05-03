const accessGroupPO = require('../../pageObjects/admin/accessGroupPage');
const accessGroupPo = new accessGroupPO;
const mainPO = require('../../../support/pageObjects/admin/main');
const mainPo = new mainPO;

module.exports = class Routines {
createNewCountry(CountryName="ACountry",LongCode='COU',ShortCode='CO',VntbInvestor='Employee',VontInvtype,VontInvtype1,DeritInvest='Employee',DeritInvestType='',Twentnvest='Employee',TwentInvestType=''){
         cy.navigateToTheCountryList();
         accessGroupPo.getAddBtn().click({force:true});
         accessGroupPo.getNameField().type(CountryName,{force:true});
         accessGroupPo.getLongCountryCodeField().type(LongCode,{force:true});
         accessGroupPo.getShortCountryCodeField().type(ShortCode,{force:true});
         accessGroupPo.getVontobelDefaultinvestorType().type(`${VntbInvestor}{enter}`,{force:true});
         accessGroupPo.getVontobelAvailableInvestorTypesField().type(`${VontInvtype}{enter}`,{force:true});
         accessGroupPo.getVontobelAvailableInvestorTypesField().type(`${VontInvtype1}{enter}`,{force:true});
         accessGroupPo.getVontobelCountryIsDisplayedForUserCheckbox().click();
         accessGroupPo.getDeritradeDefaultInvestorType().type(`${DeritInvest}{enter}`,{force:true});
         accessGroupPo.getDeritradeIsDisplayedForUserCheckbox().click();
         accessGroupPo.getTwentyfourDefaultInvestorType().type(`${Twentnvest}{enter}`,{force:true});
         accessGroupPo.getTwentyfourIsDisplayedForUserCheckbox().click();
         accessGroupPo.getCountryStatusCheckbox().click();
       //  accessGroupPo.getSaveBtn().click();
       //  cy.checkAdminStatus(true);
}

createNewCountryWithOneInvestorType(CountryName="ACountry",LongCode='COU',ShortCode='CO',VntbInvestor='Asset Manager',VontInvtype='Asset Manager',DeritInvest='Employee',DeritInvestType='',Twentnvest='Employee',TwentInvestType=''){
    cy.navigateToTheCountryList();
    accessGroupPo.getAddBtn().click({force:true});
    accessGroupPo.getNameField().type(CountryName,{force:true});
    accessGroupPo.getLongCountryCodeField().type(LongCode,{force:true});
    accessGroupPo.getShortCountryCodeField().type(ShortCode,{force:true});
    accessGroupPo.getVontobelDefaultinvestorType().type(`${VntbInvestor}{enter}`,{force:true});
    accessGroupPo.getVontobelAvailableInvestorTypesField().type(`${VontInvtype}{enter}`,{force:true});
    accessGroupPo.getVontobelCountryIsDisplayedForUserCheckbox().click();
    accessGroupPo.getDeritradeDefaultInvestorType().type(`${DeritInvest}{enter}`,{force:true});
    accessGroupPo.getDeritradeIsDisplayedForUserCheckbox().click();
    accessGroupPo.getTwentyfourDefaultInvestorType().type(`${Twentnvest}{enter}`,{force:true});
    accessGroupPo.getTwentyfourIsDisplayedForUserCheckbox().click();
    accessGroupPo.getCountryStatusCheckbox().click();
  //  accessGroupPo.getSaveBtn().click();
  //  cy.checkAdminStatus(true);
}

createNewCountryWithTwoInvestorType(CountryName="ACountry",LongCode='COU',ShortCode='CO',VntbInvestor='Asset Manager',VontInvtype,VontInvtype1,DeritInvest='Employee',DeritInvestType='',Twentnvest='Employee',TwentInvestType=''){
    cy.navigateToTheCountryList();
    accessGroupPo.getAddBtn().click({force:true});
    accessGroupPo.getNameField().type(CountryName,{force:true});
    accessGroupPo.getLongCountryCodeField().type(LongCode,{force:true});
    accessGroupPo.getShortCountryCodeField().type(ShortCode,{force:true});
    accessGroupPo.getVontobelDefaultinvestorType().type(`${VntbInvestor}{enter}`,{force:true});
    accessGroupPo.getVontobelAvailableInvestorTypesField().type(`${VontInvtype}{enter}`);
    accessGroupPo.getVontobelAvailableInvestorTypesField().type(`${VontInvtype1}{enter}`,{force:true});
    //accessGroupPo.getVontobelAvailableInvestorTypesField().type(`${VontInvtype1}{enter}`,{force:true});
    accessGroupPo.getVontobelCountryIsDisplayedForUserCheckbox().click();
    accessGroupPo.getDeritradeDefaultInvestorType().type(`${DeritInvestType}{enter}`,{force:true});
    accessGroupPo.getDeritradeIsDisplayedForUserCheckbox().click();
    accessGroupPo.getTwentyfourDefaultInvestorType().type(`${TwentInvestType}{enter}`,{force:true});
    accessGroupPo.getTwentyfourIsDisplayedForUserCheckbox().click();
    accessGroupPo.getCountryStatusCheckbox().click();
  //  accessGroupPo.getSaveBtn().click();
  //  cy.checkAdminStatus(true);
}

createCompany(){
  cy.navigateToTheCompanyList();
  mainPo.getPageTitle().should('contain.text', 'Company entities');
  accessGroupPo.getAddBtn().click();
  cy.wait(2000);
  accessGroupPo.getNameField().type('A Company name');
  accessGroupPo.getWhiteListedDomainsField().type("AAADomain");
  cy.frameLoaded('#entity_browser_iframe_media_entity_browser');
  cy.iframe().find('.view-content .views-row').first().click();
  cy.iframe().find('.is-entity-browser-submit').click();
  cy.wait(5000);
  accessGroupPo.getSaveBtn().click();
}

deleteCompany(){
  cy.navigateToTheCompanyList();
  mainPo.getPageTitle().should('contain.text', 'Company entities');
  accessGroupPo.getDropDownToggle().last().click();
  accessGroupPo.getDeleteBtn().last().click();
  accessGroupPo.getSubmitDeleteBtn().click();
  cy.checkAdminStatus(true);
}



}