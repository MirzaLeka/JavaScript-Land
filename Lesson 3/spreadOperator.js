
/* Cloning objects */

const user = {
    name: "Mirza",
    age: 24,
    favLngs: ["JS", "Java", "Pascal"],
    get fullname() {
        return this.name;
    },
    set fullname(name) {
        this.name = name;
    }
}

// Addning getters and setters
user.fullname = "Mirza Leka";
console.log(user.fullname);

// cloning objects using spread operator
const person = {...user}

console.log(person);