function toggleSection(sectionId, activeBtnId) {
    let sections = ['whats-new', 'blogs', 'videos'];  // All section IDs
    let buttons = ['btnA', 'btnB', 'btnC'];           // All button IDs

    // Hide all sections
    sections.forEach((id) => {
        let section = document.getElementById(id);
        section.style.display = 'none';
    });

    // Set default style for all buttons
    buttons.forEach((btnId) => {
        let button = document.getElementById(btnId);
        button.style.backgroundColor = '#27aae2';
        button.style.height = '70px';
    });

    // Show the selected section
    let activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';

    // Highlight the active button
    let activeButton = document.getElementById(activeBtnId);
    activeButton.style.backgroundColor = '#1d75bd';
    activeButton.style.height = '80px';
}
