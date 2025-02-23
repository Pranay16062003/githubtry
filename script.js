document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skills ul li");
    skills.forEach((skill, index) => {
        skill.style.opacity = "0";
        setTimeout(() => {
            skill.style.opacity = "1";
            skill.style.transition = "opacity 0.5s ease-in-out, transform 0.3s ease-in-out";
            skill.style.transform = "translateY(0)";
        }, index * 300);
    });
});
