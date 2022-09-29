const { expect } = require('chai')
const App = require('../pageobjects/app.page')

describe('Vue.js app', () => {

  before(()=>{
    App.open()
  })

  it('should open and render', async () => {
    
    
    let text = await App.heading.getText();
    
    await expect(text).to.equal('Welcome to Your Vue.js App')
  })

  it('will have third level heading "Installed CLI Plugins"', async ()=>{
    
    let text = await App.secondHeading.getText();
    
    await expect(text).to.equal('Installed CLI Plugins')
  })
})
