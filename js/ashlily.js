/*!
 * Ashlily v1.0 (https://jacobem.com/software?q=Ashlily)
 * Created by JacobEM.com
 * Licensed under CC BY-NC-ND 4.0
*/

// Dropdown Menu
$(function() {
    // DROPDOWN MENU TOGGLER
    $('.al-dropdown-toggle').on('click', function() {
        var $dropdown = $(this).closest('.al-dropdown');
        var $dropdownMenu = $dropdown.find('.al-dropdown-menu');
        $dropdownMenu.slideToggle(300);
    })
    console.log('%c[JEM Mod-Loader] %cSuccessfully loaded in ASHLILY_DROPDOWN', 'color:#37e8ee;', 'color:inherit;')
})



// Panel Sliders
$(function () {
    // on panel item click
    $('.al-panel-menu .al-tabs li').on('click', function() {
        var $panelMenu = $(this).closest('.al-panel-menu');
        var newPanel = $(this).attr('data-panel-id')
        // Updating tab highlighters
        $panelMenu.find('.al-tabs li.active').removeClass('active');
        $(this).addClass('active')

        // Removing old panel
        $panelMenu.find('.al-panel.active').slideUp(300, function() {
            // Removing old panel
            $(this).removeClass('active');

            // Adding new panel
            $panelMenu.find('#'+newPanel).slideDown(300).addClass('active');
        });
    })
    console.log('%c[JEM Mod-Loader] %cSuccessfully loaded in ASHLILY_PANEL_SLIDERS', 'color:#37e8ee;', 'color:inherit;')
});



// Snackbar Alerts v1.4
// USAGE:
//  <button class="al-snackbar-button" data-al-for="abc">Show Snackbar</button>
//
//  <div class="al-snackbar al-left" id="abc">
//      <strong>Successfully changed the theme to <span style="color: #00ff66;" title="Change themes inside settings">dark mode</span>.</strong>
//  </div>
$(function () {
    // Main Logic
    // On Click: Modal button (type: alert)
    $('.al-snackbar-button').on('click', function() {

        let snackbarID = $(this).attr('data-al-for');
        var $snackbar = $('#' + snackbarID);
        // var $snackbarBtnClose = $snackbar.find('.modal-btn-close');

        // Basic Func
        function openModal() { $snackbar.addClass('al-active'); }
        function closeModal() { $snackbar.removeClass('al-active'); }


        openModal();
        // $snackbarBtnClose.on('click', closeModal);

        // Close the modal after 8s
        setTimeout(closeModal, 8000);
    });

    console.log('%c[JEM Mod-Loader] %cSuccessfully loaded in ASHLILY_SNACKBAR', 'color:#37e8ee;', 'color:inherit;')
});

function alOpenSnackbar(s) {
    var $snackbar = $(s);
    $snackbar.addClass('al-active');

    setTimeout(function() {
        $snackbar.removeClass('al-active');
    }, 8000);
}



// Modal Popups v1.4
// USAGE:
//  <button class="al-modal-button" data-al-for="themeChange" title="Open">Open Modal</button>
//
//  <div class="al-modal" data-al-timeout="true" id="themeChange">
//      <div class="al-modal-content">
//          <span class="al-close" title="Close">&times;</span>
//          <div>
//              <h4>Successfully changed the theme to <span style="color: #00ff66;" title="Change themes inside settings">dark mode</span>.</h4>
//              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi dolorem tempore commodi ipsum sed, itaque omnis obcaecati dolor eveniet quia consequatur aspernatur nostrum saepe suscipit.</p>
//          </div>
//      </div>
//  </div>
$(function () {
    // Main Logic
    // On Click: Modal button (type: alert)
    $('.al-modal-button').on('click', function() {

        let modalID = $(this).attr('data-al-for');
        var $modal = $('#' + modalID);
        var $modalBtnClose = $modal.find('.al-close');
        var modalTimeout = $modal.attr('data-al-timeout');

        // Basic Func
        function openModal() { $modal.css({display: 'block'}); }
        function closeModal() { $modal.css({display: 'none'}); }


        openModal();
        $modalBtnClose.on('click', closeModal);

        // Close the modal after 8s
        if (!(modalTimeout == undefined)) {
            setTimeout(closeModal, 8000);
        }
    });

    console.log('%c[JEM Mod-Loader] %cSuccessfully loaded in ASHLILY_MODAL', 'color:#37e8ee;', 'color:inherit;')
});
function alOpenModal(m) {
    var $modal = $(m);
    var $modalBtnClose = $modal.find('.al-close');

    $modal.css({display: 'block'});
    
    $modalBtnClose.on('click', function() {
        $modal.css({display: 'none'});
    });
}


$(function() {
    $('.al-slider ~ .al-prev').on('click', function(e) {
        e.preventDefault();

        let slider = $('.al-slider');
        let current = $('.al-slider .al-active');
        let prev = current.prev();

        if (slider.children().first().hasClass('al-active')) {
            prev = slider.children().last();
        }
        current.removeClass('al-active');
        prev.addClass('al-active');
    });

    $('.al-slider ~ .al-next').on('click', function(e) {
        e.preventDefault();
        console.log('on next')

        let slider = $('.al-slider');
        let current = $('.al-slider .al-active');
        let next = current.next();

        if (slider.children().last().hasClass('al-active')) {
            next = slider.children().first();
        }
        current.removeClass('al-active');
        next.addClass('al-active');
    });

    console.log('%c[JEM Mod-Loader] %cSuccessfully loaded in ASHLILY_CAROUSEL', 'color:#37e8ee;', 'color:inherit;')
});


$(function() {
    let carets = document.querySelectorAll('.al-caret');

    for (let i = 0; i < carets.length; i++) {
        carets[i].addEventListener('click', function() {
            this.parentElement.querySelector('.al-nested').classList.toggle('al-active');
            this.classList.toggle('al-active');
        });
        
    }

    console.log('%c[JEM Mod-Loader] %cSuccessfully loaded in ASHLILY_TREEVIEWS', 'color:#37e8ee;', 'color:inherit;')
});