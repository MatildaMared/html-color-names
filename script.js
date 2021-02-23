const purple = ["lavender", "thistle", "plum", "violet", "orchid", "fuchsia", "magenta", "mediumorchid", "mediumpurple", "blueviolet", "darkviolet", "darkorchid", "darkmagenta", "purple", "indigo", "slateblue", "darkslateblue"];

const createColors = function (arr) {
    arr.forEach(color => {
        let colorDiv = document.createElement("div");
        let text = document.createElement("span");

        colorDiv.classList.add("color");
        text.classList.add("color-text");
        text.textContent = color;
        colorDiv.appendChild(text);
        colorDiv.style.backgroundColor = color;
        document.querySelector(".colors").appendChild(colorDiv);
    })
}

let colorLinks = document.querySelectorAll("li");

colorLinks.forEach(color => {
    color.addEventListener("click", () => {
        if (color.id === "purple" && !document.querySelector(".colors").classList.contains("colors-purple")) {
					let heading = document.createElement("h2");
					heading.textContent = "Purple HTML color names! 🎨";
					heading.classList.add("colors__heading");
					document.querySelector(".colors").appendChild(heading);
					document.querySelector(".colors").classList.add("colors-purple");
					createColors(purple);
				}
    })
})