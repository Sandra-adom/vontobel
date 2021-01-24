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
        return cy.get(':nth-child(1) > :nth-child(3) > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a');
    }
    getFirstElementFromTheList(){
        return cy.get('.dropbutton').first();
    }
    getDeleteBtn(){
        return cy.get(':nth-child(1) > :nth-child(3) > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .delete > a');
    }
    getSubmitDeleteBtn(){
        return cy.get('#edit-submit');
    }
    }