function greeter(person:string) {
	return "Hello, " + person;
}

var user = "Jorge Luis";

greeter(user);
document.body.innerHTML = greeter(user);