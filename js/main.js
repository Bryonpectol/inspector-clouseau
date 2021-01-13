let h1Main = document.getElementById("h1Main");

let Update = document.getElementById("update");

let h2Main = document.getElementById("h2Main");

let Title = document.getElementById("title");

let Windowie = document.getElementById("windowsize");

let Offset = document.getElementById("windowoffset");

Title.textContent = "Document Title: " + document.title;

h1Main.textContent = "Inspector Clouseau";
h2Main.textContent = "He Can Do Anything";

Update.textContent = "Page updated at: " + document.lastModified;

Windowie.textContent = "Window Size: Width - " + screen.width + " : Height - " + screen.height;

Offset.textContent = "Window offset: " + window.pageXOffset + window.pageYOffset;

