document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const sections = document.querySelectorAll("main section");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();

        sections.forEach(section => {
            if (section.id === "buscador") return;
            const text = section.innerText.toLowerCase();
            section.style.display = text.includes(query) ? "block" : "none";
        });
    });
});
