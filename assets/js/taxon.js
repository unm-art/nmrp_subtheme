/*
 * file: taxon.js
 * javascript for the taxon report pages (individual plant species)
 */

(function($){

    // Enable bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Enable image overlay
    let overlay = document.getElementById('nmrp-img-overlay'),
        modal = overlay.children[0],
        modal_content = modal.children[0],
        modal_header = modal_content.children[0],
        modal_body = modal_content.children[1],
        modal_footer = modal_content.children[2],
        closer = modal_header.children[0];

    // Expand images on click
    let images = document.getElementsByClassName('nmrp-img');
    for(let i = 0; i < images.length; i++){
        images[i].addEventListener('click', event => {
            event.preventDefault();
            let curr_element = event.currentTarget,
                img = new Image(),
                caption = document.createElement('p'),
                photographer = curr_element.hasAttribute('data-photographer') ? curr_element.getAttribute('data-photographer') : "",
                copyright = curr_element.hasAttribute('data-copyright') ? curr_element.getAttribute('data-copyright') : "";

            img.onload = function(){
                $('#nmrp-img-overlay').modal('show');
            };
            img.src = curr_element.href;
            modal_body.appendChild(img);
            caption.textContent += photographer + " " + copyright;
            modal_footer.appendChild(caption);
        });
    }

    // Remove overlay on click
    $('#nmrp-img-overlay').on('click', function(){
        $(this).modal('hide');
        while (modal_body.firstChild) {
            modal_body.removeChild(modal_body.firstChild);
        }
        while (modal_footer.firstChild) {
            modal_footer.removeChild(modal_footer.firstChild);
        }
    });

})(jQuery);