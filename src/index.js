const addTemplate = require( './templates.js' );
// check to see if we are on a ticket page, and if yes load and run templates.js
if ( window.location.pathname.startsWith( '/ticket/' ) ) {
	addTemplate();
}
