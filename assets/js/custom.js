$(document).ready(function() {
    'use strict';
    //Intialize Slider
    var slider = new Swiper('#hero', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        parallax: true,
        speed: 1000,
    });

    //Intialize Testamonials
    var testimonials_slider = new Swiper('#testimonials_slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 1000
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



$('#contact-me-button').hover(function() {

    $(this).animate({"width":"200px","font-size":"10.5pt", "color":"#cccccc", "background-color":"blue"}, 100);
}, function() {
    $(this).animate({"width":"350px","font-size":"10.5pt"}, 100);

});

});


window.onload = function onLoad() {
    $('.button-wrapper').hide();
    $('#preloader').delay(400).fadeOut("slow");
    $(window).scroll(function(){
        checkY1();
        checkX1();
        checkY2();
        checkX2();
        checkY3();
        checkX3();
        checkY4();
        checkX4();
        checkY5();
        checkX5();
        checkY6();
        checkX6();
        checkY7();
        checkX7();
        checkY8();
        checkX8();
        checkbuttonX();
        checkbuttonY();
    });

    var progressbar1 = new ProgressBar.SemiCircle('.progressbar1', {
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
        from: {color: '#6600ff'},
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

    function checkY1() {
        if($(window).scrollTop() > 2700) {
            progressbar1.animate(.9);
        }
    }

    function checkX1() {
        if($(window).scrollTop() < 2700) {
            progressbar1.animate(0);
        }
    }

    var progressbar2 = new ProgressBar.SemiCircle('.progressbar2', {
        strokeWidth: 6,
        color: '#6600ff',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: {color: '#6600ff'},
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

    function checkY2() {
        if($(window).scrollTop() > 2700) {
            progressbar2.animate(.8);
        }
    }

    function checkX2() {
        if($(window).scrollTop() < 2700) {
            progressbar2.animate(0);
        }
    }
    var progressbar3 = new ProgressBar.SemiCircle('.progressbar3', {
        strokeWidth: 6,
        color: '#6600ff',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: {color: '#6600ff'},
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

    function checkY3() {
        if($(window).scrollTop() > 2700) {
            progressbar3.animate(.8);
        }
    }

    function checkX3() {
        if($(window).scrollTop() < 2700) {
            progressbar3.animate(0);
        }
    }

    var progressbar4 = new ProgressBar.SemiCircle('.progressbar4', {
        strokeWidth: 6,
        color: '#6600ff',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: {color: '#6600ff'},
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

    function checkY4() {
        if($(window).scrollTop() > 2700) {
            progressbar4.animate(.8);
        }
    }

    function checkX4() {
        if($(window).scrollTop() < 2700) {
            progressbar4.animate(0);
        }
    }

    var progressbar5 = new ProgressBar.SemiCircle('.progressbar5', {
        strokeWidth: 6,
        color: '#6600ff',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: {color: '#6600ff'},
        to: {color: '#ffff4d'},
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

    function checkY5() {
        if($(window).scrollTop() > 2850) {
            progressbar5.animate(.6);
        }
    }

    function checkX5() {
        if($(window).scrollTop() < 2850) {
            progressbar5.animate(0);
        }
    }
    var progressbar6 = new ProgressBar.SemiCircle('.progressbar6', {
        strokeWidth: 6,
        color: '#6600ff',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: {color: '#6600ff'},
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

    function checkY6() {
        if($(window).scrollTop() > 2850) {
            progressbar6.animate(.8);
        }
    }

    function checkX6() {
        if($(window).scrollTop() < 2850) {
            progressbar6.animate(0);
        }
    }

    var progressbar7 = new ProgressBar.SemiCircle('.progressbar7', {
        strokeWidth: 6,
        color: '#6600ff',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: {color: '#6600ff'},
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

    function checkY7() {
        if($(window).scrollTop() > 2850) {
            progressbar7.animate(.9);
        }
    }

    function checkX7() {
        if($(window).scrollTop() < 2850) {
            progressbar7.animate(0);
        }
    }

    var progressbar8 = new ProgressBar.SemiCircle('.progressbar8', {
        strokeWidth: 6,
        color: '#6600ff',
        trailColor: '#eee',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: {color: '#6600ff'},
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

    function checkY8() {
        if($(window).scrollTop() > 2850) {
            progressbar8.animate(.9);
        }
    }

    function checkX8() {
        if($(window).scrollTop() < 2850) {
            progressbar8.animate(0);
        }
    }

    $('#contact-me-button').hover(function() {

        $(this).animate({"width":"350px", "height":"70px", "color":"blue"}, 300);
    }, function() {
        $(this).animate({"width":"200px", "height":"70px"}, 500);

    });

    function checkbuttonX() {
        if($(window).scrollTop() > 2900) {
            $( ".button-wrapper" ).show( "slow", function() {
    // Animation complete.
            });
        }
    }
    function checkbuttonY() {
        if($(window).scrollTop() < 2900) {
            $( ".button-wrapper" ).hide( "slow", function() {

            });
        }
    }

};
