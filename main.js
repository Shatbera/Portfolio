$(document).ready(function() {
    // Get the current pathname
    var currentPath = window.location.pathname.split('/').pop();

    // Add "active" class to the corresponding nav-link
    $('.nav-link').each(function() {
        var linkPath = $(this).attr('href');
        if (linkPath === currentPath) {
            $(this).addClass('active');
        }
    });
});

// Lightbox
(function () {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<span class="lightbox-close">&times;</span><img alt="">';
    document.body.appendChild(overlay);

    var lightboxImg = overlay.querySelector('img');

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        overlay.classList.remove('active');
        lightboxImg.src = '';
        document.body.style.overflow = '';
    }

    overlay.addEventListener('click', function (e) {
        if (e.target !== lightboxImg) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLightbox();
    });

    document.addEventListener('click', function (e) {
        var img = e.target.closest('.project-image-container img, .video-container .img-fluid');
        if (img) {
            e.preventDefault();
            openLightbox(img.src, img.alt);
        }
    });
})();