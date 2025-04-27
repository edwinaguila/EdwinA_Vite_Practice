const userData = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 28,
    favoriteMeals: [
      "Sushi Roll",
      "Grilled Cheese Sandwich",
      "Beef Tacos"
    ],
    contact: {
      email: "alice@example.com",
      phone: "555-1234"
    }
  };
  
  const stringJSON = JSON.stringify(userData);
  console.log(`String JSON: ${stringJSON}`);
  
  const separJSON = JSON.parse(stringJSON);
  console.log(separJSON);
  
  const fullName = document.getElementById("name");
  fullName.innerHTML = separJSON.firstName + " "+ separJSON.lastName;
  
  console.log(fullName);

  const ageNum = document.getElementById("age");
  ageNum.innerHTML = separJSON.age;

  // With the above two, the study session helped a lot.

  const contactList = separJSON.contact;
  document.querySelector('.email').innerHTML = `Email: ${contactList.email}`;
  document.querySelector('.phone').innerHTML = `Phone: ${contactList.phone}`;
  console.log(`Email: ${contactList.email}`);
  console.log(`Phone: ${contactList.phone}`);

  const favMeals = separJSON.favoriteMeals;
  const foodList = document.querySelector('.fav-meals');
  favMeals.forEach(food => {
    const foodItem = document.createElement('li');
    foodItem.innerHTML = food;
    foodList.appendChild(foodItem);
  }); // With the last two, I had to search on Google and use Codecamedy to kind of understand this a bit.