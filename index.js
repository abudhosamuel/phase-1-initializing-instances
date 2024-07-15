// Write your code here
// Breakfast class
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // Lunch class
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // Dinner class
  class Dinner {
    #dessert;
    
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;
    }
  
    // Getter for private property #dessert
    getDessert() {
      return this.#dessert;
    }
  }
  
  // Creating instances of each class
  const breakfast = new Breakfast('Pancakes', 'Coffee');
  const lunch = new Lunch('Caesar Salad', 'Tomato Soup', 'Iced Tea');
  const dinner = new Dinner('Greek Salad', 'Lentil Soup', 'Steak', 'Cheesecake');
  
  // Testing the instances
  console.log(breakfast); // Output: Breakfast { food: 'Pancakes', drink: 'Coffee' }
  console.log(lunch);     // Output: Lunch { salad: 'Caesar Salad', soup: 'Tomato Soup', drink: 'Iced Tea' }
  console.log(dinner);    // Output: Dinner { salad: 'Greek Salad', soup: 'Lentil Soup', entree: 'Steak' }
  console.log(dinner.getDessert()); // Output: Cheesecake
  