/// <reference types="cypress" />


import HomePageActions from '../../pageobjects/pageactions/HomePageActions'
import AddCustomerPageActions from '../../pageobjects/pageactions/AddCustomerPageActions'
import OpenAccountPageActions from '../../pageobjects/pageactions/OpenAccountPageActions'

describe("Open account for the Customer",()=>{

    const homePage = new HomePageActions()
    const addCust = new AddCustomerPageActions()
    const openAccount = new OpenAccountPageActions()


    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data

        })


    })

    beforeEach(()=>{

        homePage.navigateToURL()


    })

    it("Open account test",()=>{

        homePage.loginAsBankManager()
        addCust.addCustomerDetails(data.firstname,data.lastname,data.postcode)
        addCust.validateAlert(data.alertmsg)
        openAccount.openaccount(data.customer,data.currency)
        openAccount.validateAlert(data.accountalert)
    })



})