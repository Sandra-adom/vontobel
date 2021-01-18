module.exports = class AccessGroupClass {
    
    getAddCountryBtn() {
        return cy.get('.button');
    }
    getCountryNameField() {
        return cy.get('#edit-name-0-value');
    }
    getLongCountryCodeField(){
        return cy.get('#edit-code-0-value');
    }
    getShortCountryCodeField(){
        return cy.get('#edit-code-short-0-value');
    }
    getDefaultInvestorTypeDropDownList(){
        return cy.get('#edit_default_investort_type_chosen > .chosen-single > span');
    }
    getInvestorTypeFromTheList(){

    }
    getSaveBtn(){
        return cy.get('#edit-submit');
    }
    getEditCountryBtn(){
        return cy.get(':nth-child(1) > :nth-child(3) > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a');
    }
    }