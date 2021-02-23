module.exports = class MainClass {
    
getMenuItemVontobel() {
    return cy.get('.toolbar-icon-admin-vontobel');
}
getFirstLevelMenuItem(i,j){
    return cy.get(`.root > :nth-child(${i}) > :nth-child(${j}) > .toolbar-handle > .label`);
}
getVontobelSecondLevelMenuItem(i,j){
    return cy.get(`.menu-item--active-trail > :nth-child(${i}) > :nth-child(${j}) > :nth-child(1) > .toolbar-handle > .label`);
}
getCountryListMenuItem(){
    return cy.get('.admin-list').find('.label').eq(2).contains('Country list');
}
getPageTitle(){
    return cy.get('.js-quickedit-page-title');
}
getSubmitBtn(){
    return cy.get('#edit-submit');
}
getEditBtn(){
    return cy.get('.edit > a');
}
getDeleteBtn(){
    return cy.get('.delete > a');
}
getConfirmationWindowTitle(){
    return cy.get('.js-quickedit-page-title');
}
}
