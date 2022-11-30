const item = [{
  name: 'Bike',
  price: 100
}, {
  name: 'TV',
  price: 200
}, {
  name: 'Album',
  price: 10
}, {
  name: 'Book',
  price: 5
}, {
  name: 'Phone',
  price: 500
}, {
  name: 'Computer',
  price: 1000
}, ]

let sortedItems;

/**
1 
 **/
sortedItems = item.sort((a, b) => a.price - b.price);
const cheapest = sortedItems[0];
console.log({cheapest});

/**
2
 **/
sortedItems = item.sort((a, b) => a.price - b.price);
const mostExpensive = sortedItems[sortedItems.length - 1];
console.log({mostExpensive});

/**
3
 **/
const grandTotal = item.reduce((a, b) => b.price + a, 0);
console.log({grandTotal});

/**
4
 **/
const filteredItems = item.filter((i) => i.price >= 10);
const subTotal = filteredItems.reduce((a, b) => b.price + a, 0);
console.log({subTotal});
