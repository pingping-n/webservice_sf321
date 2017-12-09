var mysql = require('mysql');

var con = mysql.createConnection({
	host: "testsf321.mysql.database.azure.com",
	user: "sf321group@testsf321",
	password: "Tae12345",
	database: "test"
});
var booksends;
con.connect(function(err) {
	var temp = "SELECT * FROM booksend";
	if (err) throw err;
	con.query(temp , function (err, result, fields) {
		if (err) throw err;
		//console.log(fields);
		booksends = result;
	});
});


exports.findAll = function() {
	return booksends;
};

exports.findById = function (id) {
	for (var i = 0; i < booksends.length; i++) {
		if (booksends[i].id == id) return booksends[i];
	}
};