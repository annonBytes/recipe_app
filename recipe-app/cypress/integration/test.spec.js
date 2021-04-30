
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
        cy.wait(2000)
        cy.url().should('include', 'https://recipe-app-d9936.web.app/new-recipe')
        cy.get('input[placeholder="Enter your Recipe name"]').type('My Sweet Naija Jollof')
        cy.get('input[placeholder="image URL"]').type('https://images.unsplash.com/photo-1540100716001-4b432820e37f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8am9sbG9mfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60')
        cy.get('input[placeholder="Enter Calories in Kcal"]').type('220')
        cy.get('textarea[placeholder="write down the ingridients"]').type('Derica of Rice, Tin Tomato ')
        cy.get('button').contains('Done').click()
    })

    it('Add Inventory', function(){
        cy.get('div[class="header__option"]').contains('span', 'Add Inventory' ).click()
        cy.get('input[placeholder="Add an item..."]').type('Salad Carbage')
        cy.get('button').contains('Add').click()
    });



    function userID() {
        var text = ""
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length))
        return text;
    }
})