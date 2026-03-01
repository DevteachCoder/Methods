//getter   
let person = {
    firsName:"John",
    lastName:"Jimmy",
    get fullName() {
        return this.firsName + " " + this.lastName
    },
//setter   to'liq fullname qilib yozib beradi
    set fullName(value) {
        let fullNameArray = value.split(" ");
        this.firsName = fullNameArray[0];
        this.lastName = fullNameArray[1];
    }
}
console.log(person.fullName);
