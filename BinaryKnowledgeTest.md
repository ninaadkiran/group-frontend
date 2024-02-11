---
toc: true
comments: true
layout: post
title: Binary Project Test HTML
description: Creating and testing the test for the Binary Project
type: hacks
courses: { compsci: {week: 13} }
---

<html>
    <body>
        <h1>Test yourself on what you just learned here!</h1>
        <h2>Start by clicking the "Refresh Images" button</h2>
        <form id="quizForm">
            <!-- Question 1 -->
            <div class="questions" id="question1">
                <label for="q1">Question 1: What is the number corresponding to this binary hand signal?</label>
                <input type="number" id="q1" name="q1" min="0" max="31"> <br>
                <img id="imageq1" src="">
                <br><br>
            </div>
            <!-- Question 2 -->
            <div class="questions" id="question2">
                <label for="q2">Question 2: What is the number corresponding to this binary hand signal?</label>
                <input type="number" id="q2" name="q2" min="0" max="31"> <br>
                <img id="imageq2" src="">
                <br><br>
            </div>
            <!-- Question 3 -->
            <div class="questions" id="question3">
                <label for="q3">Question 3: What is the number corresponding to this binary hand signal?</label>
                <input type="number" id="q3" name="q3" min="0" max="31"> <br>
                <img id="imageq3" src="">
                <br><br>
            </div>
            <!-- Question 4 -->
            <div class="questions" id="question4">
                <label for="q4">Question 4: What is the number corresponding to this binary hand signal?</label>
                <input type="number" id="q4" name="q4" min="0" max="31"> <br>
                <img id="imageq4" src="">
                <br><br>
            </div>
            <!-- Button to Submit and Refresh images -->
            <button type="button" onclick="randomImage()">Refresh Images</button>
            <button type="button" onclick="checkQuiz()">Submit Answers</button>
        </form>
        <div id="result"></div>

        <script src="{{site.baseurl}}/JS_Scripts/2023-11-13-Random_Image_Binary_Project.js"></script> <!-- should be working -->
        <script src="{{site.baseurl}}/JS_Scripts/2023-11-13-Check_Quiz_Binary_Project.js"></script>
    </body>
</html>
