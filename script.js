let myObj = {
  name: "Alice",
  getKeys: function() {
    return Object.keys(this);
  }
};

console.log(myObj.getKeys());