<!Hello>
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

Stacks.addController("greeter", {
    targets: ["name"],

    greet: function () {
        console.log("Hello, " + this.name +"!");
    },

    get name() {
        return this.nameTarget.value;
    }
});
