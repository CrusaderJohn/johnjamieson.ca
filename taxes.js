/*
2022/07/25
John Jamieson
*/

"use strict";

function doTaxes() {
    const taxPercentages = [0.15, 0.205, 0.26, 0.29, 0.33];
    const taxBrackets = [0, 50197, 100392, 155625, 221708];

    let income = 25000;
    let tax = 0;

    if (income > taxBrackets[4])
    {
        tax = tax + (taxBrackets[1] * taxPercentages[0]);
        tax = tax + ((taxBrackets[2] - taxBrackets[1]) * taxPercentages[1]);
        tax = tax + ((taxBrackets[3] - taxBrackets[2]) * taxPercentages[2]);
        tax = tax + ((taxBrackets[4] - taxBrackets[3]) * taxPercentages[3]);
        tax = tax + ((income - taxBrackets[4]) * taxPercentages[4]);
    }
    else if (income > taxBrackets[3])
    {
        tax = tax + (taxBrackets[1] * taxPercentages[0]);
        tax = tax + ((taxBrackets[2] - taxBrackets[1]) * taxPercentages[1]);
        tax = tax + ((taxBrackets[3] - taxBrackets[2]) * taxPercentages[2]);
        tax = tax + ((income - taxBrackets[3]) * taxPercentages[3]);
    }
    else if (income > taxBrackets[2])
    {
        tax = tax + (taxBrackets[1] * taxPercentages[0]);
        tax = tax + ((taxBrackets[2] - taxBrackets[1]) * taxPercentages[1]);
        tax = tax + ((income - taxBrackets[2]) * taxPercentages[2]);
    }
    else if (income > taxBrackets[1])
    {
        tax = tax + (taxBrackets[1] * taxPercentages[0]);
        tax = tax + ((income - taxBrackets[1]) * taxPercentages[1]);
    }
    else if (income > taxBrackets[0])
    {
        tax = tax + (income * taxPercentages[0]);
    }
    else
    {
        tax = "Income must be greater than zero."
    }

    document.getElementById("tax").innerHTML = tax;
}