const express = require('express'); // Import thư viện express
const morgan = require('morgan'); // Import thư viện morgan
const { engine } = require('express-handlebars'); // Import thư viện express-handlebars
const path = require('path'); // Import thư viện path

const route = require('./routes/AppRoute'); // Import file routes/index.js

// port mà ứng dụng sẽ lắng nghe
const port = 3000;
const app = express(); // Tạo một ứng dụng express

// Sử dụng morgan để log request
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public'))); // Định nghĩa thư mục chứa các file tĩnh như css, js, images

app.use(express.urlencoded()); // Middleware xử lý dữ liệu từ form post lên server
app.use(express.json()); // Middleware xử lý dữ liệu từ form post lên server

// Sử dụng handlebars làm view engine
app.engine('.hbs', engine({ extname: '.hbs' })); // Định nghĩa handlebars engine với đuôi .hbs
app.set('view engine', '.hbs'); // Định nghĩa view engine là handlebars
app.set('views', path.join(__dirname, 'resources/views')); // Định nghĩa thư mục chứa các view

// Gọi hàm route và truyền vào ứng dụng express
      route(app); // Gọi hàm route và truyền vào ứng dụng express

// khởi chạy serve tại port 3000
              app.listen(port, () => {
                  console.log(`Example app listening on port ${port}`);
});
