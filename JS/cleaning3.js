//creating array to store books
let basketArr = [];
//the constructor function that will be used to create all objects.

function Item(item) {
  this.item = item;
}

let reviewArr = [];

function Review(review, product) {
  this.review = review;
  this.product = product;
}

function buy(product) {
  let newItem = new Item(product.parentElement.outerHTML);
  basketArr.push(newItem);
  localStorage.setItem("items", JSON.stringify(basketArr));
  alert("You have " + basketArr.length + "items in your basket");
}
// Below function meant to substitute the "like" function - it colors the heart red
function like(element, color) {
  element.style.color = color;
}

function comment(element) {
  let newReview = new Review(
    element.parentElement[0].value,
    element.parentElement.children[0].alt
  );
  reviewArr.push(newReview);
  localStorage.setItem("reviews", JSON.stringify(reviewArr));
  element.parentElement[0].value = "";
}

/* the function below will be called every time the user clicks on the 
button to add a book on the HTML page. 
Each time this happens we will retrieve the data from the form on the 
HTML page that the user has comnpleted. 
then add the object to the array using the push method. 
Because we want this information to be available accross page loads, 
we add the updated array of people to localStorage. */
