console.log("What the Java?!");

console.log(customers[0]);




const root = document.getElementById("root");
console.log("Proper Rooted");

for (let customer of customers) {
    console.log(customer);
    const customerCard = document.createElement("div");
    customerCard.classList.add("customer-card");



    root.appendChild(customerCard);
    customerCard.innerHTML = `
    <img src="${customer.picture.thumbnail}"/>
    <p class="name" >${customer.name.title}. ${customer.name.first} ${customer.name.last}</p>
    <p class="name" >${customer.location.number}</p>
    `
}




