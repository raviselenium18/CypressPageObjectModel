/// <reference types="cypress" />

import AddCustomerPageElements from '../pageelements/AddCustomerPageElements'

export default class AddCustomerPageActions{


    constructor(){

        globalThis.addcustelement = new AddCustomerPageElements()

    }



    addCustomerDetails(firstName,lastName,postCode){

        addcustelement.addCustomerBtn().click()
        addcustelement.firstNameField().type(firstName)
        addcustelement.lastNameField().type(lastName)
        addcustelement.postCodeField().type(postCode)
        addcustelement.addCustomerSubmitBtn().click()
    }



    validateAlert(alertMsg){

        cy.on('window:alert',(alertText)=>{

            expect(alertText).contains(alertText)
  
          })


    }

}