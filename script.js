function openProjects(skill) {
    let projects = {
        powerbi: "https://github.com/YOUR_GITHUB/PowerBI-Projects",
        sql: "https://github.com/YOUR_GITHUB/SQL-Projects",
        excel: "https://github.com/YOUR_GITHUB/Excel-Projects",
        html: "https://singlalit.github.io/HighProteinKitchen/",
        css: "https://github.com/YOUR_GITHUB/Web-Projects",
        js: "https://github.com/YOUR_GITHUB/JavaScript-Projects",
        python: "https://github.com/YOUR_GITHUB/Python-Projects",
        ai: "https://github.com/YOUR_GITHUB/AI-Projects",
        stats: "https://github.com/YOUR_GITHUB/Statistics-Projects",
        git: "https://github.com/YOUR_GITHUB/GitHub-Projects"
    };

    if (projects[skill]) {
        window.open(projects[skill], "_blank");
    } else {
        alert("Projects for this skill are coming soon!");
    }
}
