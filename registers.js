var mysql = require('mysql');

var con = mysql.createConnection({
	host: "testsf321.mysql.database.azure.com",
	user: "sf321group@testsf321",
	password: "Tae12345",
	database: "test"
});
var registers;
con.connect(function(err) {
	var temp = "SELECT id, IDcard, Name, Surname, Birthday, Type, Accountnumber, Bank, Address, Career, Telephone, Salary, Email, Official, Retire, Bureauerucy, Moneyrecieve FROM register";
	if (err) throw err;
	con.query(temp , function (err, result, fields) {
		if (err) throw err;
		//console.log(fields);
		registers = result;
	});
});


exports.findAll = function() {
	return registers;
};

exports.findByIdCard = function (IDcard) {
	for (var i = 0; i < registers.length; i++) {
		if (registers[i].IDcard == IDcard) return registers[i];
	}
};

