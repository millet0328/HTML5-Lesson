var person = {
	name: "黄小米",
	age: 26,
	job: "software"
}

function timestamp() {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth();
	var day = now.getDate();
	return `${year}-${month}-${day}`;
}

export default { person, timestamp }
