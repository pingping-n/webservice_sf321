var mysql = require('mysql');

var con = mysql.createConnection({
	host: "testsf321.mysql.database.azure.com",
	user: "sf321group@testsf321",
	password: "Tae12345",
	database: "test"
});
var books;
con.connect(function(err) {
	var temp = "SELECT * FROM book";
	if (err) throw err;
	con.query(temp , function (err, result, fields) {
		if (err) throw err;
		//console.log(fields);
		books = result;
	});
});


exports.findAll = function() {
	return books;
};
exports.findById = function (id) {
	for (var i = 0; i < books.length; i++) {
		if (books[i].id == id) return books[i];
	}
};