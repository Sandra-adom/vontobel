module.exports = class FundsClass {

    getAddShareClassSupplementBtn() {
        return cy.get('li > .button');
    }
    getNameField(){
        return cy.get('#edit-name-0-value');
    }
    getShareClassDropdownList(){
        return cy.get('#edit_share_class_chosen > .chosen-single > div > b');
    }
    getShareClass(){
        return cy.get('[data-option-array-index="1"]');
    }
    getCountrySearchField(){
        return cy.get('#edit_country_chosen > .chosen-drop > .chosen-search > .chosen-search-input');
    }
    getRegistrationTypeList(){
        return cy.get('#edit_registration_type_chosen > .chosen-single > div > b');
    }
    getRegistrationType(){
        return cy.get('#edit_registration_type_chosen > .chosen-drop > .chosen-results > [data-option-array-index="1"]');
    }
    getShareClassValue(){
        return cy.get('tbody > tr > .views-field-name');
    }
    getCountryFilter(){
        return cy.get('#edit-name-1');
    }
    getApplayBtn(){
        return cy.get('#edit-submit-share-class-supplement-list');
    }
}