// console.log('What the actual Java?!')

// console.log(customers[0])

// const root = document.getElementById('root')
// console.log('Proper Rooted')

// for (let customer of customers) {
//   console.log(customer)
//   const customerCard = document.createElement('div')
//   customerCard.classList.add('customer-card')

//   root.appendChild(customerCard)
//   customerCard.innerHTML = `
//     <img src="${customer.picture.thumbnail}"/>
//     <p class="name" >${customer.name.title}. ${customer.name.first} ${customer.name.last}</p>
//     <p class="name" >${customer.location.number}</p>
//    `
// }

   function capitalizeFirstLetter(word) {
     console.log("caps")
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  console.log(capitalizeFirstLetter('shiz!')); // Shiz!

// function datecut (customerdate)



console.log (customers)

{/* <div class="person">
<img src="https://randomuser.me/api/portraits/thumb/women/62.jpg" alt="Sophia Burns">
<h3>Sophia Burns</h3>
<div class="attr">
    <div>Email</div>
    <div>Address</div>
    <div>DOB:</div>
    <div>Customer since:</div>
</div>
</div>
</div> */}

//asking the js to build one of these fot each customer

const allCustomersDiv = document.querySelector ('#allCustomersDiv')

for (let customer of customers){
  console.log(`${customer.name.first} ${customer.name.last}`)

  let custDiv = document.createElement('div')
  custDiv.classList.add("person")

  let nameEl = document.createElement('h3')
  nameEl.innerText = `${capitalizeFirstLetter (customer.name.first)} ${capitalizeFirstLetter (customer.name.last)}`
  custDiv.appendChild(nameEl)
  allCustomersDiv.appendChild(custDiv)

  let locationEl = document.createElement('h4')
  locationEl.innerText = `${customer.location.street.number} ${customer.location.street.name}, ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`
  custDiv.appendChild(locationEl)
  allCustomersDiv.appendChild(custDiv)

  let custDOB = document.createElement('h4')
  custDOB.innerText = `${moment(customer.dob.date).format("MMM Do,YYYY")}`
  custDiv.appendChild(custDOB)

  let imgEl = document.createElement ('img')
  imgEl.src=customer.picture.thumbnail
  custDiv.appendChild(imgEl)
  allCustomersDiv.appendChild(custDiv)

}

// add name, address, phone numbers, thumbnail, birthdate, and the date they became a customer, which is stored as registered.date in the data.