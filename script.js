const filterButtons = document.querySelectorAll(".project-filter button");
const projectItems = document.querySelectorAll(".proj-item");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectItems.forEach((project) => {

            if (
                filter === "all" ||
                project.dataset.category === filter
            ) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }

        });

        updateProjectNumbers();

    });

});

projectItems.forEach((project) => {

    if (project.dataset.category === "geodata") {

        project.style.display = "block";

    } else {

        project.style.display = "none";

    }

});

updateProjectNumbers();


function updateProjectNumbers(){

    // ambil project yang masih tampil
    const visibleProjects = [...projectItems].filter(project => {

        return project.style.display !== "none";

    });

    // hitung dari jumlah project
    let number = visibleProjects.length;

    visibleProjects.forEach(project => {

        const numberElement = project.querySelector(".proj-number");

        numberElement.textContent =
            String(number).padStart(2,"0");

        number--;

    });

}

