document.addEventListener("DOMContentLoaded", () => {
    const roadmapSection = document.querySelector(".roadmap-section");
    const timelineItems = document.querySelectorAll(".timeline-item");

    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of the element is visible
    };

    // Observer for the roadmap section
    const roadmapObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                roadmapSection.classList.add("visible");
            }
        });
    }, observerOptions);

    roadmapObserver.observe(roadmapSection);

    // Observer for timeline items
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);

    timelineItems.forEach((item) => timelineObserver.observe(item));
});