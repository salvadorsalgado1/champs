class App {
  /**
   * elements
   */
  get heading () { return $('h1') }
  get secondHeading(){
    return $('div.hello h3:nth-child(3)')
  }
  /**
   * methods
   */
  async open (path = '/') {
    await browser.url(path)
  }
}

module.exports = new App()
