class NewsController {
    // phương thức lấy ra trang news [GET] /news
    getNews(req, res) {
        res.render('news')
    }
    show(req, res) {
        res.send('New Detail')
    }
} 

module.exports = new NewsController() // Export ra một instance của NewsController