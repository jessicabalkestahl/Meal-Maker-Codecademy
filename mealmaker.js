const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers () {
    return this._courses.appetizers;
  },
  set appetizers (appetizers) {
   this._courses.appetizers = appetizers;     
  },
  get mains () {
    return this._courses.mains;
  },
  set mains (mains) {
    this._courses.mains = mains;
  },
  get desserts () {
    return this._courses.desserts;
  },
  set desserts (desserts) {
    this._courses.desserts = desserts;
  },
  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse (courseName, dishName, dishPrice) {
     const dish = {
       name: dishName,
       price: dishPrice
     };
     return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function (courseName) {
    let dishes = this._courses[courseName]
    let random = Math.floor(Math.random() * dishes.length);
    return dishes[random];
  },
  generateRandomMeal: function () {
    let appetizers = this.getRandomDishFromCourse("appetizers");
    let mains  = this.getRandomDishFromCourse("mains");
    let desserts = this.getRandomDishFromCourse("desserts");
    let totalPrice = appetizers.price + mains.price + desserts.price;
    return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}. The price is ${totalPrice}`;
  }

  };
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('mains', 'Sushi', 24.25);
  menu.addDishToCourse('desserts', 'coffee', 1.25);
  menu.addDishToCourse('appetizers', 'Soup', 2.25);
  menu.addDishToCourse('mains', 'Pizza', 14.25);
  menu.addDishToCourse('desserts', 'Ice Cream', 4.25);
  let meal = menu.generateRandomMeal();
  console.log(meal);
