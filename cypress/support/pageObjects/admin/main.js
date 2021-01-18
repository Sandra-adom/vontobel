module.exports = class MainClass {
    
getMenuItemVontobel() {
    return cy.get('.toolbar-icon-admin-vontobel');
}
getAccessGroupsMenuItem(){
    return cy.get('.admin-list').find('.label').eq(0).contains('Access groups');
}

getCountryListMenuItem(){
    return cy.get('.admin-list').find('.label').eq(2).contains('Country list');
}

}
