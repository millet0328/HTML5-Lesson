var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

function fullName() {
	return firstName + ' ' + lastName
}
// 私有化
var deathDay = 2009;

export {
	firstName,
	lastName,
	year,
	fullName,
};
