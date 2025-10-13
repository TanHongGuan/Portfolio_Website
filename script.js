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
 

// Copy to clipboard

const copyContact = document.querySelectorAll('.copy')
const contact = document.getElementById('toast')

copyContact.forEach(contact => {
    contact.addEventListener('click', async () => {
        const text = contact.dataset.copy;
        await navigator.clipboard.writeText(text); /* await -> wait until function finish , has to be paired with async*/
        showToast('copied !')
    })

})

function showToast(text) {
    toast.textContent = text;
    toast.style.opacity = 1;
    /* change opacity to 0 after 1 second */
    setTimeout( () => {
        toast.style.opacity = 0 ;
    }, 1000 /* 1000 ms = 1sec */ );
}