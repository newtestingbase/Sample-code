/// <reference types = "cypress"/>
import LoginPage from '../PageObjectClass/LoginPage'

describe('validateloaginpage', function() {

    it('validatelogin', function() {

      const lp =new LoginPage()
      lp.Vist()
      lp.Email('admin@yourstore.com')
      lp.Pass('admin')
      lp.submit()

      
      


    })
})