{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", function () \{\
    // Get elements\
    const thumbnail = document.getElementById("thumbnail");\
    const videoPlayer = document.getElementById("videoPlayer");\
\
    if (thumbnail && videoPlayer) \{\
        thumbnail.addEventListener("click", function () \{\
            console.log("Thumbnail clicked!"); // Debugging\
\
            thumbnail.style.display = "none";  // Hide image\
            videoPlayer.style.display = "block";  // Show video\
            videoPlayer.play();  // Start playback\
        \});\
    \} else \{\
        console.error("Thumbnail or Video Player not found!");\
    \}\
\});\
}