//Question 1
function discountPrices (prices, discount) {
    var discounted = []
    var finalPrice = 0
    
    for (var i = 0; i < prices.length; i++) {
        var discountedprice = prices[i] * (1-discount)
        finalPrice = Math.round(discountedprice*100) / 100;
        discounted.push(finalPrice);
    }
    
    console.log(i);
    // console. log (discountedprice);
    // console.log(finalPrice);

    return discounted;
}
 
discountPrices([100, 200, 300], 0.5);