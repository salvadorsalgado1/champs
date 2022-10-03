const { expect } = require('chai')
const App = require('../pageobjects/app.page')
const Homepage = require('./home/helpers/homepage.page')
const Landing = require('./landing.page')

describe('Landing: Homepage', () => {

  before(()=>{
    App.open()
  })

  it('has Home Landing link', async () => {
    
    await expect(Landing.homeLink).to.exist;
  })

  it('will navigate to Home view on Home Landing click', async ()=>{

    await Landing.homeLink.click();

    await expect(Homepage.header).to.exist;
  })
})
