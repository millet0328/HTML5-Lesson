var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

console.log(1);

setTimeout(() => {
	firstName = "Tom";
	console.log(2);
}, 10)

console.log(3);

export default { firstName, lastName, year };
