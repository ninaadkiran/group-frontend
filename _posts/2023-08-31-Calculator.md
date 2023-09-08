---
toc: true
comments: false
layout: post
title: Calculator
description: Basic Calculator
courses: { compsci: {week: 3} }
type: hacks
---
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colorful Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
        }
        .calculator {
            width: 300px;
            margin: 100px auto;
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        }
        .keys {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 10px;
            text-align: center;
        }
        .number-key {
            background-color: #3498db;
            color: #fff;
        }
        .function-key {
            background-color: #e74c3c;
            color: #fff;
        }
        .equal-key {
            background-color: #f1c40f;
            color: #000;
        }
        .clear-key {
            background-color: #2ecc71;
            color: #fff;
        }
</style>
</head>
<body>
    <div class="calculator">
        <div class="display">
            <input type="text" id="display" value="" disabled>
        </div>
        <div class="keys">
            <button class="number-key" onclick="addToDisplay('7')">7</button>
            <button class="number-key" onclick="addToDisplay('8')">8</button>
            <button class="number-key" onclick="addToDisplay('9')">9</button>
            <button class="function-key" onclick="addToDisplay('+')">+</button>
            <button class="number-key" onclick="addToDisplay('4')">4</button>
            <button class="number-key" onclick="addToDisplay('5')">5</button>
            <button class="number-key" onclick="addToDisplay('6')">6</button>
            <button class="function-key" onclick="addToDisplay('-')">-</button>
            <button class="number-key" onclick="addToDisplay('1')">1</button>
            <button class="number-key" onclick="addToDisplay('2')">2</button>
            <button class="number-key" onclick="addToDisplay('3')">3</button>
            <button class="function-key" onclick="addToDisplay('*')">*</button>
            <button class="clear-key" onclick="clearDisplay()">C</button>
            <button class="number-key" onclick="addToDisplay('0')">0</button>
            <button class="equal-key" onclick="calculate()">=</button>
            <button class="function-key" onclick="addToDisplay('/')">/</button>
        </div>
    </div>
    <script>
        function addToDisplay(value) {
            document.getElementById('display').value += value;
        }
        function clearDisplay() {
            document.getElementById('display').value = '';
        }
        function calculate() {
            try {
                document.getElementById('display').value = eval(document.getElementById('display').value);
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }
</script>