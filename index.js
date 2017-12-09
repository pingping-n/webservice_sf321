/* โหลด Express มาใช้งาน */
var app = require('express')();

/* ใช้ port 6969 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 6969;

var registers = require('./registers');
var books = require('./books');
var booksends = require('./booksends');
var debitcredits = require('./debitcredits');

/* Routing */
app.get('/', function (req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send('<h1>API ระบบการสื่อสารและฐานข้อมูล</h1><p>เพื่อสนับสนุนการปฏิบัติงานของสำนักงานกองทุนบำเหน็จบำนาญของข้าราชการส่วนท้องถิ่น</p>');
});
app.get('/api', function (req, res) {
	res.header("Content-Type", "application/json; charset=utf-8");
    res.send('<h1>API ระบบการสื่อสารและฐานข้อมูล</h1><p>เพื่อสนับสนุนการปฏิบัติงานของสำนักงานกองทุนบำเหน็จบำนาญของข้าราชการส่วนท้องถิ่น</p>');
});
app.get('/api/index', function (req, res) {
	res.header("Content-Type", "application/json; charset=utf-8");
    res.send('<h1>API ระบบการสื่อสารและฐานข้อมูล</h1><p>เพื่อสนับสนุนการปฏิบัติงานของสำนักงานกองทุนบำเหน็จบำนาญของข้าราชการส่วนท้องถิ่น</p>');
});

/* ค่าใน register */
app.get('/api/register', function (req, res) {
	res.header("Content-Type", "application/json; charset=utf-8");
    res.json(registers.findAll());
});
app.get('/api/register/:IDcard', function (req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    var IDcard = req.params.IDcard;
    res.json(registers.findByIdCard(IDcard));
});

/* ค่าใน book */
app.get('/api/books', function (req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.json(books.findAll());
});
app.get('/api/books/:id', function (req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    var id = req.params.id;
    res.json(books.findById(id));
});


/* ค่าใน booksends */
app.get('/api/booksends', function (req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.json(booksends.findAll());
});
app.get('/api/booksends/:id', function (req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    var id = req.params.id;
    res.json(booksends.findById(id));
});

/* ค่าใน debitcredits */
app.get('/api/debitcredits', function (req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.json(debitcredits.findAll());
});
app.get('/api/debitcredits/:id', function (req, res) {
    res.header("Content-Type", "application/json; charset=utf-8");
    var id = req.params.id;
    res.json(debitcredits.findById(id));
});


 
/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});