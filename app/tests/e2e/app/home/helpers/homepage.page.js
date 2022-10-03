
class Homepage {
    get container(){
        return $("div.home")
    }
    get header(){
        return $('div.home h1')
    }
}
module.exports = new Homepage()