// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}];

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);



/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable

const cheapest_T = "https://www.loom.fr/products/le-t-shirt";
console.log(cheapest_T);




/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
var number = marketplace.length;
// 2. Log the variable
console.log(number);

// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
const brandName = [];
for (var i = 0; i < marketplace.length; i++)
{
    brandName.push(marketplace[i].brand)
};
const brandUnique = new Set(brandName);
// 2. Log the variable
console.log(brandUnique);
// 3. Log how many brands we have
console.log(brandUnique.length);


// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
marketplace.sort(function (a, b) {
    return a.price - b.price;
});
// 2. Create a variable and assign it the list of products by price from lowest to highest
let sortedPrice = marketplace.sort(function (a, b) {
    return a.price - b.price;
});
// 3. Log the variable
for (var i = 0; i < sortedPrice.length; i++) { console.log(sortedPrice[i]) };

// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
let sortedDate = marketplace;
sortedDate.map(product => product.date = new Date(product.date)); // tranform the date value from a string to a date
sortedDate = sortedDate.sort(function (a, b) {
    return a.date - b.date;
}); // sort by date
// 3. Log the variable
for (var i = 0; i < sortedDate.length; i++) { console.log(sortedPrice[i]) };


// 🎯 TODO: Filter a specific price range
let priceRange = [];
// 1. Filter the list of products between 50€ and 100€
marketplace.forEach(product => { if (product.price > 50 && product.price < 100) { priceRange.push(product) } });
// 2. Log the list
for (var i = 0; i < priceRange.length; i++) { console.log(priceRange[i]) };


// 🎯 TODO: Average Basket
var total = 0;
marketplace.forEach(product => total = total + product.price);
// 1. Determine the average basket of the marketplace
var average = total / marketplace.length;
// 2. Log the average
console.log(average);




/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products

// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };

// We have already seen that there are 5 diferent brands, stored in the variable brandUnique :
// adresse, loom, aatise, 1083, dedicated
const brandAdresse = [];
const brandLoom = [];
const brandAatise = [];
const brand1083 = [];
const brandDedicated = [];

marketplace.forEach(product => {
    switch (product.brand) {
        case 'adresse':
            brandAdresse.push(product);
            break;
        case 'loom':
            brandLoom.push(product);
            break;
        case 'aatise':
            brandAatise.push(product);
            break;
        case '1083':
            brand1083.push(product);
            break;
        case 'dedicated':
            brandDedicated.push(product);
            break;
        default:
            break;
    }
})

const brands = {
    'adresse': brandAdresse,
    'loom': brandLoom,
    'aatise': brandAatise,
    '1083': brand1083,
    'dedicated': brandDedicated
}

// 2. Log the variable
console.log(brands)
// 3. Log the number of products by brands
for (var [key, value] of Object.entries(brands)) {
    console.log('The number of product of the brand', key, 'is', value.length);
}

// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
let adresseByPrice = brandAdresse.sort((a, b) => { return b.price - a.price });
let loomByPrice = brandLoom.sort((a, b) => { return b.price - a.price });
let aatiseByPrice = brandAatise.sort((a, b) => { return b.price - a.price });
let brand1083ByPrice = brand1083.sort((a, b) => { return b.price - a.price });
let dedicatedByPrice = brandDedicated.sort((a, b) => { return b.price - a.price });
// 2. Log the sort
console.log(adresseByPrice, loomByPrice, aatiseByPrice, brand1083ByPrice, dedicatedByPrice);


// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
let adresseByDate = brandAdresse.sort((a, b) => {
    a.date = new Date(a.date);
    b.date = new Date(b.date);
    return b.date - a.date
});
let loomByDate = brandLoom.sort((a, b) => {
    a.date = new Date(a.date);
    b.date = new Date(b.date);
    return b.date - a.date
});
let aatiseByDate = brandAatise.sort((a, b) => {
    a.date = new Date(a.date);
    b.date = new Date(b.date);
    return b.date - a.date
});
let brand1083ByDate = brand1083.sort((a, b) => {
    a.date = new Date(a.date);
    b.date = new Date(b.date);
    return b.date - a.date
});
let dedicatedByDate = brandDedicated.sort((a, b) => {
    a.date = new Date(a.date);
    b.date = new Date(b.date);
    return b.date - a.date
});

// 2. Log the sort
console.log(adresseByDate, loomByDate, aatiseByDate, brand1083ByDate, dedicatedByDate);




/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products

for (var [key, value] of Object.entries(brands)) {
    var p90 = Math.floor(9 / 10 * value.length); // give the position of the 90th percentile 
    var sortedList = value.sort((a, b) => {a.price - b.price}) // sort the list by price from lowest to highest
    console.log(key, ':', sortedList[p90].price)
}



/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.
COTELE_PARIS.forEach(product => {
    if ((new Date() - new Date(product.released)) > (24 * 60 * 60 * 1000 * 14)) {
        console.log(product.name, ':', 'false')
    }
    else {
        console.log(product.name, ':', 'true')
    }
})


// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€
let reasonable = true;
COTELE_PARIS.forEach(product => {
    if (product.price >= 100) {
        reasonable = false;
    }
})
console.log(reasonable);

// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product
COTELE_PARIS.forEach(product => {
    if (product.uuid == 'b56c6d88-749a-5b4c-b571-e5b5c6483131') {
        console.log(product);
    }
})

// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product
let COTELE_PARIS2 = COTELE_PARIS;
for (var i = 0; i < COTELE_PARIS2.length; i++) {
    if (COTELE_PARIS2[i].uuid == 'b56c6d88-749a-5b4c-b571-e5b5c6483131') {
        COTELE_PARIS2.splice(i, 1);
    }
}
console.log(COTELE_PARIS2);

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
console.log(blueJacket, jacket);
// 2. What do you notice?
// the new element "favorite" is also add to blueJacket

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties

// To do this, I simply make the variable blueJacket a constant.



/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
