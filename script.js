const colors = {
    purple: ["lavender", "thistle", "plum", "violet", "orchid", "fuchsia", "magenta", "mediumorchid", "mediumpurple", "blueviolet", "darkviolet", "darkorchid", "darkmagenta", "purple", "indigo", "slateblue", "darkslateblue"]
}

console.log(colors.purple);

const createColors = (arr) => {
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
    color.addEventListener("click", (e) => {

        // Create section with classname "colors"
        const sectionColors = document.createElement("section");
        sectionColors.classList.add('colors');

        // Name of selected color
        let colorName = e.target.id;
        console.log(colorName);

        // Add selected color as class of section
        sectionColors.classList.add(`colors-${colorName}`);

        // Create heading
        let heading = document.createElement('h2');
        let headingText = colorName.charAt(0).toUpperCase() + e.target.id.slice(1);
        heading.textContent = `${headingText} color names! 🎨`;
        heading.classList.add('colors__heading');

        // Append entire section to div with class colors-wrapper
        document.querySelector(".colors-wrapper").appendChild(sectionColors);

        // Append heading to section
        document.querySelector('.colors').appendChild(heading);

        // Generate colors inside div
        createColors(colors[`${colorName}`]);
    })
})