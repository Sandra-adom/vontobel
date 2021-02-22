module.exports = class DocumentClass {

    getAddBtn() {
        return cy.get('li > .button');
    }
    getReferenceDate() {
        return cy.get('#edit-reference-date-0-value-date');
    }
    getDocumentTypeList() {
        return cy.get('#edit_document_type_id_chosen > .chosen-single > div > b');
    }
    getFirstDocument() {
        return cy.get('[data-option-array-index="1"]');
    }
    getIDField() {
        return cy.get('#edit-vontobel-id-0-value');
    }
    getNumberField() {
        return cy.get('#edit-number-0-value');
    }
    getNameField() {
        return cy.get('#edit-name-0-value');
    }
    getClassificationList() {
        return cy.get('#edit_classification_chosen > .chosen-single > div > b');
    }
    getClassificationValue(i) {
        return cy.get(`#edit_classification_chosen > .chosen-drop > .chosen-results > [data-option-array-index=${i}]`)
    }
    getNameFilter() {
        return cy.get('#edit-display-name');
    }
    getApplayBtn() {
        return cy.get('#edit-submit-document-type-list');
    }
    getResetBtn() {
        return cy.get('#edit-reset');
    }
    getEditBtn() {
        return cy.get('.edit.dropbutton-action > a');
    }
    getDocumentTypeID() {
        return cy.get('tbody > tr > .views-field-vontobel-id');
    }
    getdropdownToggle() {
        return cy.get('.dropbutton-toggle > button');
    }
    getDeleteBtn() {
        return cy.get('.delete > a');
    }
    getDocument() {
        return cy.get('.file > a');
    }
    getCountryField() {
        return cy.get('#edit_field_country_chosen > .chosen-choices > .search-field');
    }
    getDocumentTypeFilter() {
        return cy.get('#edit_document_type_chosen > .chosen-single > div > b');
    }
    getApplayFilterBtn() {
        return cy.get('#edit-submit-document-list');
    }
    getCountryFilter(){
        return cy.get('#edit_country_chosen > .chosen-drop > .chosen-search > .chosen-search-input');
    }
    getEditDocumentList(){
        return cy.get('.edit > a');
    }
    getCountryValue(){
        return cy.get('tbody > :nth-child(1) > .views-field-nothing-1');
    }
    getDocumentGroupFilter(){
        return cy.get('#edit_document_group_chosen > .chosen-drop > .chosen-search > .chosen-search-input');
    }
    

}