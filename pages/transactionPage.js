class TransactionPage{
    selectorsList() {
        const selectors = {
            ConferenceTransactionPage: "[data-test='users-list']",
            TransactionPersonButton: "[data-test='user-list-item-GjWovtg2hr']",
            AmontField: "[name='amount']",
            NoteField: "#transaction-create-description-input",
            PayButton: "[data-test='transaction-create-submit-payment']",
            ConferenceSuccess: '[data-test="alert-bar-success"]',
            ValueConference: "[data-test='sidenav-user-balance']",
            ConferenceError: ".MuiAlert-message"
        }

        return selectors
        
    }

    ConferenceTransactionPage() {
        cy.get(this.selectorsList().ConferenceTransactionPage)
            .should('be.visible')
    }

    Transaction() {
        cy.location('pathname').should('equal', '/transaction/new')
        const value = 150
        let initialValue
            // Conferencia valor inicial
        cy.get(this.selectorsList().ValueConference)
            .should('be.visible')
            .invoke('text')
             .then((text) =>{
                 initialValue = parseFloat(text.replace(/[^0-9.-]/g, ""))
             })
        cy.get(this.selectorsList().TransactionPersonButton).click({force: true})
        cy.get(this.selectorsList().AmontField).type(value)
        cy.get(this.selectorsList().NoteField).type("Description test")
        cy.get(this.selectorsList().PayButton).click()
        cy.get(this.selectorsList().ConferenceSuccess).should('be.visible')
        //Conferencia do valor final
        .then(() => {
            cy.get(this.selectorsList().ValueConference)
            .invoke('text')
            .should((text) => {
                const updatedValue = parseFloat(text.replace(/[^0-9.-]+/g, ""));
                expect(updatedValue).to.equal(initialValue - value)
            })
        })


    }


    TransactionFail() {
        cy.location('pathname').should('equal', '/transaction/new')
        const value = 10000
        let initialValue
        cy.get(this.selectorsList().ValueConference)
        .should('be.visible')
        .invoke('text')
        .then((text) =>{
            initialValue = parseFloat(text.replace(/[^0-9.-]/g, ""))
        })
        cy.get(this.selectorsList().TransactionPersonButton).click({force: true})
        cy.get(this.selectorsList().AmontField).type(value)
        cy.get(this.selectorsList().NoteField).type("Description test")
        cy.get(this.selectorsList().PayButton).click()
        cy.get(this.selectorsList().ValueConference)
        .invoke('text')
        .then((text) => {
            const valuetotal = parseFloat(text.replace(/[^0-9.-]+/g, ""))
            if (valuetotal < value) {
                cy.get(this.selectorsList().ConferenceError)
                .should('be.visible')
                .should('have.text', 'Insufficient funds')
            }
        })
        .then(() => {
            cy.get(this.selectorsList().ValueConference)
            .invoke('text')
            .should((text) => {
                const updatedValue = parseFloat(text.replace(/[^0-9.-]+/g, ""));
                expect(initialValue).equal(updatedValue)
            })
        })
       

    }

}

export default TransactionPage