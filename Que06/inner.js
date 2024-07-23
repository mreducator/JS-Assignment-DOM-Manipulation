const options = ["John", "Roman", "Orton", "Stone", "Alex"];
function createDropdown() {
    const dropdown = document.getElementById("dropdown");
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
    });
}
createDropdown();
