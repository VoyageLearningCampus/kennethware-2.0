/*jslint browser: true, sloppy: false, eqeq: false, vars: false, maxerr: 50, indent: 4, plusplus: true */
/*global $, jQuery, alert, console, klToolsVariables, coursenum, tinyMCE, iframeID, ENV */

function klAdditionalAfterContentLoaded() {
    'use strict';
    // Additional code to run after a page's content has loaded
}

function klAfterToolDependenciesLoaded() {
    'use strict';
    // Additional code to load with tool dependencies
}

function klAdditionalAccordionSections() {
    'use strict';
    var addAccordionSection = '<h3 class="kl_wiki">Section Title</h3>' +
    '<div>' +
    '    Section Content' +
    '</div>';
$('#kl_tools_accordion').append(addAccordionSection);
}

function klAfterToolLaunch() {
    'use strict';
    // Additional code to load after the tools are launched
}
function klAdditionalLiveView() {
    'use strict';
    // Additional code 
}
