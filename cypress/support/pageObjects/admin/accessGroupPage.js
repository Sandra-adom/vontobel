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
    getDeleteBtn(){
        return cy.get('.delete').last();
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

    }