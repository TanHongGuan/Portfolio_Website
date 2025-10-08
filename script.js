const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.toggle('active' , t ===tab ));

        // Show matching sections, hide the other
        const targetID = tab.dataset.target; // target refers to "projects" or "about me" (data-target)
        contents.forEach(c => c.classList.toggle('is-visible', c.id === targetID));
    });
});
 
