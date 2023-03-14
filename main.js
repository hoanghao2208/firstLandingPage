window.addEventListener("click", function() {
    const toggle = document.querySelector(".header-toggle");
    const list = document.querySelector(".header-list");
    toggle.addEventListener("click", function(e) {
        list.classList.add("is-active");
    })

    window.addEventListener("click", function(e) {
        if(!list.contains(e.target) && !e.target.matches(".header-toggle")) {
            list.classList.remove("is-active");
        }
    })
})