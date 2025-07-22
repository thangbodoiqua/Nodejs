const express = require('express');
const app = express();
app.use((req, res, next) => {
  console.log('Middleware thường');
throw new Error('Lỗi ở middleware!');
  next();
});

app.get('/', (req, res) => {
 console.log('Đã nhận yêu cầu GET đến /');
  throw new Error('Lỗi!');
});

app.use((err, req, res, next) => {
  console.error('Đã bắt lỗi:', err.message);
  res.status(500).send('Có lỗi xảy ra');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});