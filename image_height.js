function adjustImages() {
    const sections = document.querySelectorAll('.section-white-with-image');

    sections.forEach(section => {
        const leftContent = section.querySelector('.left-content');
        const rightImage = section.querySelector('.right-content img');

        if (!leftContent || !rightImage) return;

        if (!rightImage.complete) {
            rightImage.onload = () => adjustSingleImage(leftContent, rightImage);
        } else {
            adjustSingleImage(leftContent, rightImage);
        }
    });
}

function adjustSingleImage(leftContent, img) {
    const textElements = leftContent.querySelectorAll('h1, p'); 
    let textHeight = 0;

    textElements.forEach(el => {
        textHeight += el.offsetHeight;
    });

    const aspectRatio = img.naturalWidth / img.naturalHeight;

    img.style.height = textHeight + 'px';
    img.style.width = (textHeight * aspectRatio) + 'px';
}

window.addEventListener('load', adjustImages);
window.addEventListener('resize', adjustImages);
