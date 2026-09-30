const timeStamp = document.getElementById("timestamp")
timeStamp.value = new Date().toISOString();

document.querySelectorAll('.membership-card a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const modalId = link.getAttribute('href');
        document.querySelector(modalId).showModal();
    });
});

document.querySelectorAll('dialog .close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('dialog').close();
    });
});

