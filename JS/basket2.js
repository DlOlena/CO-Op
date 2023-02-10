let reviewBuyerArr = [];

function review(review, product) {
  this.review = review;
  this.product = product;
}
function load() {
  //checking if the session storage exists already and creating it based on cataloge array if not
  //Geting parsed array of 'books'objects from localStorage
  let basket = JSON.parse(localStorage.getItem("items"));
  console.log(basket);
  //loop to dinamicly create elements to show on html page
  basket.forEach(function (p) {
    let div = document.createElement("div");
    div.innerHTML = p.item;
    document.getElementById("basket").appendChild(div);
  });
}
function like(element, color) {
  element.style.color = color;
}
function comment(element) {
  let newReview = new review(
    element.parentElement[0].value,
    element.parentElement.children[0].alt
  );
  reviewBuyerArr.push(newReview);
  localStorage.setItem("reviews", JSON.stringify(reviewBuyerArr));
  element.parentElement[0].value = "";
}
