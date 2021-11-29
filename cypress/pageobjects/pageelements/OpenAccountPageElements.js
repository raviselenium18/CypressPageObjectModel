/// <reference types="cypress" />


const or = require("../../locators.json")

export default class OpenAccountPageElements{


    openAccountBtn(){


        return cy.get(or.openaccountpage.openaccountbtn)

    }

    currencyDropdown(){


        return cy.get(or.openaccountpage.currency)

    }

    customerDropdown(){


        return cy.get(or.openaccountpage.customer)

    }

    processBtn(){


        return cy.get(or.openaccountpage.processbtn)

    }
 



}