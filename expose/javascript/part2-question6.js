//Question 1
function discountPrices (prices, discount) {
    let discounted = []
    let finalPrice = 0
    
    for (let i = 0; i < prices.length; i++) {
        let discountedprice = prices[i] * (1-discount)
        finalPrice = Math.round(discountedprice*100) / 100;
        discounted.push(finalPrice);
    }
    
    // console.log(i);
    console.log(discountedprice);
    // console.log(finalPrice);

    return discounted;
}
 
console.log(discountPrices([100, 200, 300], 0.5));