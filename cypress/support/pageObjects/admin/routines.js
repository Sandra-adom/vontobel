const accessGroupPO = require('../../pageObjects/admin/accessGroupPage');
const accessGroupPo = new accessGroupPO;

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



}