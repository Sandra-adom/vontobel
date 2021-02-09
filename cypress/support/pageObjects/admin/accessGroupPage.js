module.exports = class AccessGroupClass {
    
    getAddBtn() {
        return cy.get('.button');
    }
    getNameField() {
        return cy.get('#edit-name-0-value');
    }
    getLongCountryCodeField(){
        return cy.get('#edit-code-0-value');
    }
    getShortCountryCodeField(){
        return cy.get('#edit-code-short-0-value');
    }
    getVontobelDefaultinvestorType(){
        return cy.get('.chosen-search > .chosen-search-input').eq(1);
    }
    getDeritradeDefaultInvestorType(){
        return cy.get('.chosen-search > .chosen-search-input').eq(2);
    }
    getTwentyfourDefaultInvestorType(){
        return cy.get('.chosen-search > .chosen-search-input').eq(3);
    }
    getSaveBtn(){
        return cy.get('#edit-submit');
    }
    getSuccessMessage(){
        return cy.get('.messages');
    }
    getEditBtn(){
        return cy.get('.edit');
    }
    getDeleteBtn(){
        return cy.get('.delete.dropbutton-action');
    }
    getSubmitDeleteBtn(){
        return cy.get('#edit-submit');
    }
    getDropDownToggle(){
        return cy.get('.dropbutton-toggle');
    }
    getInvestorTypeGroupField(){
        return cy.get('#edit_investor_type_group_chosen > .chosen-choices > .search-field > .chosen-search-input');
    }
    getCountryGroupField(){
        return cy.get('#edit_country_group_chosen > .chosen-choices > .search-field > .chosen-search-input');
    }
    getClassificationField(){
        return cy.get('.search-field > .chosen-search-input');
    }
    getVontobelCountryIsDisplayedForUserCheckbox(){
        return cy.get('#edit-visible-value');
    }
    getDeritradeIsDisplayedForUserCheckbox(){
        return cy.get('#edit-deritrade-visible-value');
    }
    getTwentyfourIsDisplayedForUserCheckbox(){
        return cy.get('#edit-twentyfour-visible-value');
    }
    getCountryStatusCheckbox(){
        return cy.get('#edit-status-value');
    }
    getVontobelAvailableInvestorTypesField(){
        return cy.get('#edit_investor_type_chosen > .chosen-choices > .search-field > .chosen-search-input');
    }
    getDeritradeAvailableInvestorTypesField(){
        return cy.get('#edit_deritrade_investor_type_chosen > .chosen-choices');
    }
    getTwentyfourAvailableInvestorTypesField(){
        return cy.get('#edit_deritrade_investor_type_chosen > .chosen-choices');
    }
    getNameFlterInputField(){
        return cy.get('#edit-name');
    }
    getApplayBtn(){
        return cy.get('#edit-submit-access-groups-list');
    }
    getAccessGroupNameValue(){
        return cy.get('tbody > tr > .views-field-name');
    }
    getInvestorTypeFilterField(){
        return cy.get('#edit_investor_type_chosen > .chosen-choices > .search-field > .chosen-search-input');
    }
    getInvestorTypeGroupFilterField(){
        return cy.get('#edit_investor_type_group_chosen > .chosen-choices > .search-field > .chosen-search-input');
    }
    getCountryfilterField(){
        return cy.get('#edit_country_chosen > .chosen-choices > .search-field > .chosen-search-input');
    }
    getCountryGroupFilterField(){
        return cy.get('#edit_country_group_chosen > .chosen-choices > .search-field > .chosen-search-input');
    }
    getWhiteListedDomainsField(){
        return cy.get('#edit-domains-0-value');
    }
    getViewImg(){
        return cy.get('.field--type-entity-reference > .eb-tabs li');
    }
    }