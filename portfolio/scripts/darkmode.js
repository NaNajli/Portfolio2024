
//--------- DARK MODE ----------

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const html = document.querySelector("html")

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        html.style.background = "#121212";
        main.style.color = "#f5cac3";


        modeButton.textContent = "💡";
    } else if (modeButton.textContent.includes("💡")) {
        html.style.background = "#f5cac3";
        main.style.color = "#242424";

        modeButton.textContent = "🕶️";
    }
    else {
        html.style.background = "#f5cac3";

    }
});


