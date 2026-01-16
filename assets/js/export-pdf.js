document.getElementById('export-pdf').addEventListener('click', () => {
    const element = document.getElementById('cv'),
        actions = document.getElementsByClassName('cv-actions'),
        header = document.getElementsByClassName('cv-header'),
        opt = {
            margin: [10, 0],
            filename: 'Marco_Carrillo_CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                logging: false
            },
            jsPDF: {
                unit: 'mm',
                format: 'letter',
                orientation: 'portrait'
            },
            pagebreak: {
                mode: ['css', 'legacy'],
                avoid: ['h2', 'h3', 'h4', 'li']
            }
        };
    actions.forEach(el => el.style.display = 'none');
    header[0].style.marginTop = "-60px"
    html2pdf()
    .from(element)
    .set(opt)
    .save().then(() => {
        actions.forEach(el => el.style.display = null);
        header[0].style.marginTop = null;
    });
});