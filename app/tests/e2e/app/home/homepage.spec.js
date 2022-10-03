 
const { expect } = require('chai')
const App = require('../../pageobjects/app.page')
const Landing = require('../landing.page')
const Homepage = require('./helpers/homepage.page')


describe('Landing: Homepage', () => {

  before(async ()=>{
    await App.open()
    await Landing.homeLink.click();
  })

  it('has "Home" header', async () => {
    
    await expect(Homepage.header).to.exist;
  })
})
