$(document).ready(function() {

    var ProgressBar = require('progressbar.js')
    var line = new ProgressBar.Line('.progress-movement');

    'use strict';
    //Intialize Slider
    var slider = new Swiper('#hero', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        loop: true,
        parallax: true,
        speed:1000,
    });

   // Initialize Search
   $('[data-pages="search"]').search({
        // Bind elements that are included inside search overlay
        searchField: '#overlay-search',
        closeButton: '.overlay-close',
        suggestions: '#overlay-suggestions',
        brand: '.brand',
        // Callback that will be run when you hit ENTER button on search box
        onSearchSubmit: function(searchString) {
            console.log("Search for: " + searchString);
        },
        // Callback that will be run whenever you enter a key into search box.
        // Perform any live search here.
        onKeyEnter: function(searchString) {
            console.log("Live search for: " + searchString);
            var searchField = $('#overlay-search');
            var searchResults = $('.search-results');

            /*
                Do AJAX call here to get search results
                and update DOM and use the following block
                'searchResults.find('.result-name').each(function() {...}'
                inside the AJAX callback to update the DOM
                */

            // Timeout is used for DEMO purpose only to simulate an AJAX call
            clearTimeout($.data(this, 'timer'));
            searchResults.fadeOut("fast"); // hide previously returned results until server returns new results
            var wait = setTimeout(function() {

                searchResults.find('.result-name').each(function() {
                    if (searchField.val().length != 0) {
                        $(this).html(searchField.val());
                        searchResults.fadeIn("fast"); // reveal updated results
                    }
                });
            }, 500);
            $(this).data('timer', wait);

        }
    });

if ( ($(window).height() + 100) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
            // how far to scroll down before link "slides" into view
            offset: {top:100}
        });
}
$('#contact-me-button').hover(function() {

    $(this).animate({"width":"200px","font-size":"24pt", "color":"#cccccc"}, 200);
}, function() {
    $(this).animate({"width":"350","font-size":"12pt"}, 200);

});

});


window.onload = function onLoad() {
    $(window).scroll(function(){
        checkY();
        checkX();
        checkrubyY();
        checkrubyX();
    });

    var javascriptcircle = new ProgressBar.SemiCircle('.progress-movement', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
  // Set default step function for all animate calls
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText('');
  } else {
      bar.setText(value);
  }

  bar.text.style.color = state.color;
}
});

    function checkY() {
        if($(window).scrollTop() > 2550) {
            javascriptcircle.animate(.9);
        }
    }

    function checkX() {
        if($(window).scrollTop() < 2550) {
            javascriptcircle.animate(0);
        }
    }

    var rubycircle = new ProgressBar.SemiCircle('.ruby', {
        strokeWidth: 6,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ff8000'},
  // Set default step function for all animate calls
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText('');
  } else {
      bar.setText(value);
  }

  bar.text.style.color = state.color;
}
});

    function checkrubyY() {
        if($(window).scrollTop() > 2550) {
            rubycircle.animate(.8);
        }
    }

    function checkrubyX() {
        if($(window).scrollTop() < 2550) {
            rubycircle.animate(0);
        }
    }
};

