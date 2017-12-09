var mysql = require('mysql');

var con = mysql.createConnection({
	host: "testsf321.mysql.database.azure.com",
	user: "sf321group@testsf321",
	password: "Tae12345",
	database: "test"
});
var debitcredits;
con.connect(function(err) {
	var temp = "SELECT * FROM debit_credit";
	if (err) throw err;
	con.query(temp , function (err, result, fields) {
		if (err) throw err;
		//console.log(fields);
		debitcredits = result;
	});
});


exports.findAll = function() {
	return debitcredits;
};

exports.findById = function (ID) {
	for (var i = 0; i < debitcredits.length; i++) {
		if (debitcredits[i].ID == ID) return debitcredits[i];
	}
};