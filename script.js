const moveRight = -400;
const moveUp = 350;

document.addEventListener("mousemove", (event) => {
    const follower = document.getElementById("follower");

    follower.style.left = event.clientX - 235 + "px";
    follower.style.top = event.clientY - 160 + "px";
});

document.addEventListener("click", function() {
    const image = document.getElementById("follower");

    image.src = "cat2.png";

    image.style.left = parseInt(image.style.left) + moveRight + "px";
    image.style.top = parseInt(image.style.top) - moveUp + "px";

    setTimeout(function() {
        image.src = "cat.png";

        image.style.left = parseInt(image.style.left) - moveRight + "px";
        image.style.top = parseInt(image.style.top) + moveUp + "px";
    }, 250);
});