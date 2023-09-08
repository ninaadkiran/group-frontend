---
toc: true
comments: false
layout: post
title: Average Number Calculator
description: Calculates the Average Number
courses: { compsci: {week: 3} }
type: hacks
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Average Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 400px;
            margin: 0 auto;
            text-align: center;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Live Average Calculator</h1>
        <p>Enter numbers separated by spaces:</p>
        <input type="text" id="numbersInput" placeholder="e.g., 1 2 3 4 5" oninput="calculateAverage()">
        <p id="result">Average: 0.00</p>
    </div>
    <script>
        function calculateAverage() {
            const numbersInput = document.getElementById("numbersInput").value;
            const numbersArray = numbersInput.split(" ").map(Number).filter(number => !isNaN(number) && number !== "");
            const sum = numbersArray.reduce((acc, currentValue) => acc + currentValue, 0);
            const average = numbersArray.length === 0 ? 0 : sum / numbersArray.length;

            const resultElement = document.getElementById("result");
            resultElement.textContent = `Average: ${average.toFixed(2)}`;}
</script>