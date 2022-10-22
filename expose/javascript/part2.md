## Part 2
1. The code prints `3`, which is the value of `i` after the for-loop is done running. `i` has declared using `var` so it hasn't gone out of scope
2. The code prints `150`, which is the last value of `discountedPrice` at the end of the for loop, which hasn't gone out of scope because it was declared using `var`.
3. The code prints `150`, which is the value of `finalPrice` at the end of the for loop, which hasn't gone out of scope because it was declared using `var`.
4. The code returns a list of discounted prices `[ 50, 100, 150 ]`. Each price is divided by 2, rounded, and stored in the output list.
5. The code errors when printing `i` because the scope of `i` is within the for loop.
6. The code errors when printing `discountedprice` because the scope of `discountedprice` is within the for loop.
7. The code prints the final price, `150` correctly, because the scope of `finalPrice` is the entire function block.
8. The correct list of discounted prices are returned because the scope of list `discounted` is the entire function
9. The code errors when printing `i` because the scope of `i` is within the for loop.
10. The length of the prices, `3`, is printed. `length` hasn't gone out of scope.
11. The function returns the correct discounted prices, `[ 50, 100, 150 ]`. The `const discountedPrice` does not cause an error because its scope is within the for loop, and it goes out of scope every iteration and is redeclared. The even though the list `discounted` is declared `const` it is not reassigned, only pushed to, so there is no error.

12. 
```js
student.name
student['Grad Year']
student.greeting()
student["Favorite Teacher"].name
student.courseLoad[0]
```

13. 
A. `32`, the int is converted to a string, then appended.
B. `1`, the string is converted to an int because of the `-`, then subtracted.
C. `3`, the null is converted to an int (0) and then added.
D. `3null`, the null is converted to a string, then appended.
E. `4`, the true is converted to an int (1) and then added
F. `0`, both null and false are converted to 0 and added.
G. `3undefined`, undefined is converted to a string and appended.
H. `NaN`, undefined can't be subtracted from 3, so the result is NaN (not a number).

14.
A. `true`, Numeric values are compared
B. `false`, ASCII values are compared (both strings)
C. `true`, Numeric values compared
D. `false`, Different types, so not strictly equal.
E. `false`, true evaluates to 1, so not equal.
F. `true`, `Boolean(2)` evaluates to `true`, which is strictly equal to `true`

15. `==` will try to cast the operands to get equality, but for `===` if the operands are different types, it will be false.

17. The function will return `[2,4,6]`. This is because the code iterates through every element of the input, calls the callback (in this case multiplies the number by 2).

19. This code prints `1 4 3 2`. The `setTimeout` call delays the execution of the logs which changes the order of the prints. Interestingly, a delay of 0 ms for `3` still causes it to print after `4`.

