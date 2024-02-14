---
layout: pong
permalink: /pong
title: Pong
---

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pong Game</title>
<style>
    body {
        margin: 0;
        overflow: hidden;
        background-color: black;
    }
    canvas {
        display: block;
        margin: auto;
        background-color: black;
    }
    #score {
        color: white;
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 24px;
    }
    #restartBtn {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px 20px;
        font-size: 16px;
        background-color: #333;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>
</head>
<body>
<canvas id="gameCanvas" width="800" height="600"></canvas>
<div id="score">Score: 0</div>
<button id="restartBtn">Restart</button>
<script>
    // Get canvas and context
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    // Set initial position and size for paddles and ball
    let paddleWidth = 10;
    let paddleHeight = 80;
    let paddleSpeed = 30; // Increased paddle speed
    let paddleOffset = 50;
    let player1X = paddleOffset;
    let player2X = canvas.width - paddleOffset - paddleWidth;
    let player1Y = canvas.height / 2 - paddleHeight / 2;
    let player2Y = canvas.height / 2 - paddleHeight / 2;
    let ballSize = 10;
    let ballSpeedX = 5;
    let ballSpeedY = 5;
    let ballX = canvas.width / 2 - ballSize / 2;
    let ballY = canvas.height / 2 - ballSize / 2;
    let score = 0; // Score variable
    let isGameOver = false;

    // Draw paddles
    function drawPaddle(x, y) {
        ctx.fillStyle = "purple"; // Set paddle color to purple
        ctx.fillRect(x, y, paddleWidth, paddleHeight);
    }

    // Draw ball
    function drawBall(x, y) {
        ctx.fillStyle = "white"; // White ball color
        ctx.beginPath();
        ctx.arc(x, y, ballSize / 2, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw score
    function drawScore() {
        ctx.font = "24px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Score: " + score, 20, 40);
    }

    // Draw everything
    function draw() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw paddles
        drawPaddle(player1X, player1Y);
        drawPaddle(player2X, player2Y);

        // Draw ball
        drawBall(ballX, ballY);

        // Draw score
        drawScore();
    }

// Update game objects
function update() {
    // Move ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Check collision with walls
    if (ballY + ballSize > canvas.height || ballY - ballSize < 0) {
        ballSpeedY = -ballSpeedY;
    }

    // Check collision with paddles
    if (ballX - ballSize < player1X + paddleWidth &&
        ballX + ballSize > player1X &&
        ballY + ballSize > player1Y &&
        ballY < player1Y + paddleHeight) {
        ballSpeedX = -ballSpeedX;
        score += 1; // Increase score by 1
    }

    if (ballX + ballSize > player2X &&
        ballX - ballSize < player2X + paddleWidth &&
        ballY + ballSize > player2Y &&
        ballY < player2Y + paddleHeight) {
        ballSpeedX = -ballSpeedX;
        score += 1; // Increase score by 1
    }

    // Check if ball went out of bounds
    if (ballX < 0 || ballX > canvas.width) {
        isGameOver = true;
        document.getElementById("restartBtn").style.display = "block";
    }
}

    // Reset ball position
    function resetBall() {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = -ballSpeedX;
    }

    // Reset game state including score
    function resetGame() {
        score = 0;
        resetBall();
        isGameOver = false;
        document.getElementById("restartBtn").style.display = "none";
    }

    // Event listener for player movement
    window.addEventListener("keydown", function (event) {
        if (!isGameOver) {
            switch (event.key) {
                case "w":
                    if (player1Y > 0) {
                        player1Y -= paddleSpeed;
                    }
                    break;
                case "s":
                    if (player1Y < canvas.height - paddleHeight) {
                        player1Y += paddleSpeed;
                    }
                    break;
                case "ArrowUp":
                    if (player2Y > 0) {
                        player2Y -= paddleSpeed;
                    }
                    break;
                case "ArrowDown":
                    if (player2Y < canvas.height - paddleHeight) {
                        player2Y += paddleSpeed;
                    }
                    break;
            }
        }
    });

    // Restart button event listener
    document.getElementById("restartBtn").addEventListener("click", function() {
        resetGame();
        gameLoop(); // Start the game loop again after resetting
    });

    // Main game loop
    function gameLoop() {
        update();
        draw();
        if (!isGameOver) {
            requestAnimationFrame(gameLoop);
        }
    }

    // Start the game loop
    gameLoop();
</script>
</body>
</html>