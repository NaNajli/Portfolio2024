
//--------- DARK MODE ----------

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#121212";
        main.style.color = "#f5cac3";
        modeButton.textContent = "🔆";
    }else if (modeButton.textContent.includes("🔆")) {
        main.style.background = "#f5cac3";
        main.style.color = "#121212";
        modeButton.textContent = "🕶️";
    }
    else {
        main.style.background = "#f5cac3";
        main.style.color = "#121212";
    }



});
