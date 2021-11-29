/// <reference types="cypress" />


import HomePageActions from '../../pageobjects/pageactions/HomePageActions'

describe("Login as Bank Manager",()=>{

    const homePage = new HomePageActions()

    beforeEach(()=>{

        homePage.navigateToURL()


    })

    it("Validate Title of the Page",()=>{


        homePage.validateTitle().should('eq','Protractor practice website - Banking App')
        
    })


    it("Verify login as a Bank Manager",()=>{


        homePage.loginAsBankManager()

    })


})