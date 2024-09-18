
import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

// Load plugins

// Load styles

// load modules
import confetti from './js/confetti';

// init modules
$(document).ready(() => {
    confetti.run();
});

// Export components
