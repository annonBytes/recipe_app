
describe ('Test', function(){

    it('Sign Up Test', function(){
        //arrange --setup initial app state

        //visit a web url
        cy.visit('https://recipe-app-d9936.web.app/login')  
        cy.viewport('macbook-15')
        //querying for an element
        cy.get('a').contains(' Sign up ').click()
        cy.get('input[placeholder="Email"]').type(userID()+'@gmail.com')
        cy.get('input[placeholder="Create a password"]').type(userID()+'3458902920')
         //make interaction with element
        cy.get('button').contains('Continue').click()
          //make an assertion
        cy.url().should('include', 'https://recipe-app-d9936.web.app/')
       
    });

    it('Add Recipe', function() {
        cy.get('div[class="header__option"]').contains('span', 'Add Recipe' ).click()

    })

    it('Add Inventory', function(){

    });



    function userID() {
        var text = ""
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        return text;
    }
})