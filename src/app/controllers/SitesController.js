class SitesController {
    // phương thức lấy ra trang news [GET] /news
    home(req, res) {
        res.render('home');
    }
    // phương thức lấy ra trang search [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController(); // Export ra một instance của NewsController
