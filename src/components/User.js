class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `${this.name} says hello!`;
  }
}

export default User;