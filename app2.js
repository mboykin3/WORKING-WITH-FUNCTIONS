var name = "Other Bruce";

const bruce = {
    name: "Bruce",
    bruceGreet: function() { 
       this.name = "This Bruce";
        return `Hello $(this.name)`;
    }
};
console.log(bruce.greet());
const madeline = {name: "Madeline"};
function greet() {
    return `Hello $(this.name)`;
}
madeline.greet = greet;
this.
console.log(madeline.greet());
console.log(greet());
