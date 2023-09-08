---
toc: true
comments: false
layout: post
title: Unclickable button
description: Try to click the button!
courses: { compsci: {week: 3} }
type: hacks
---
 <style>
        #moveButton {
            position: absolute;
            left: 50%;
            top: 50
            /* Fine-tune the centering by moving the button back by half of its own width and height */
            transform: translate(-50%, -50%);
        }
    </style>
<body>
    <button id="moveButton">Click Me</button>
    <script>
        const button = document.getElementById('moveButton');
        button.addEventListener('click', () => {
            const maxX = window.innerWidth - button.clientWidth;
            const maxY = window.innerHeight - button.clientHeight;
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
            button.style.left = randomX + 'px';
            button.style.top = randomY + 'px';
        });
    </script>