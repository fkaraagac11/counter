const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

let count = 0;

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;

        if (count < 0) {
            value.style.color = "orange";
        } else if (count > 0) {
            value.style.color = "blue";
        } else {
            value.style.color = "black";
        }
    });
});
