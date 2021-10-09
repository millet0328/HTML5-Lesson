var firstName = 'Michael';
var lastName = 'Jackson';
var birthYear = 1958;

function fullName() {
	return firstName + ' ' + lastName
}
// 私有化
var deathYear = 2009;

export {
	firstName,
	lastName,
	birthYear,
	fullName,
};
