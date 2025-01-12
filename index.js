const express = require('express')
const app = express() // Tạo một ứng dụng express

// port mà ứng dụng sẽ lắng nghe
const port = 3000 

// Định nghĩa một route
app.get('/home', (req, res) => {
  res.send('Hello World!')
})

// khởi chạy serve tại port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})