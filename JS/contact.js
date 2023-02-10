let contactArr = [];

function customer(name, message, email) {
  this.name = name;
  this.message = message;
  this.email = email;
}

function contact(element) {
  let newCustomer = new customer(
    element.parentElement[0].value,
    element.parentElement[1].value,
    element.parentElement[2].value
  );
  contactArr.push(newCustomer);
  localStorage.setItem("customers", JSON.stringify(contactArr));
  element.parentElement[0].value = "";
  element.parentElement[1].value = "";
  element.parentElement[2].value = "";
}

/* the function below will be called every time the user clicks on the 
button to add a book on the HTML page. 
Each time this happens we will retrieve the data from the form on the 
HTML page that the user has comnpleted. 
then add the object to the array using the push method. 
Because we want this information to be available accross page loads, 
we add the updated array of people to localStorage. */
