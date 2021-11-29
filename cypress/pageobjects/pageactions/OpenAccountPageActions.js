/// <reference types="cypress" />

import OpenAccountPageElements from '../pageelements/OpenAccountPageElements'

export default class OpenAccountPageActions{


    constructor(){

        globalThis.openaccountelement = new OpenAccountPageElements()

    }



    openaccount(customer,currency){

        openaccountelement.openAccountBtn().click()
        openaccountelement.customerDropdown().select(customer)
        openaccountelement.currencyDropdown().select(currency)
        openaccountelement.processBtn().click()
    }



    validateAlert(alertMsg){

        cy.on('window:alert',(alertText)=>{

            expect(alertText).contains(alertText)
  
          })


    }

}