const setCommentDraft = ( comment, replace = false ) => {
	const commentBox = document.querySelector( '#comment' );

	if ( replace ) {
		commentBox.value = comment;
	} else {
		commentBox.value += comment;
	}

	commentBox.dispatchEvent( new Event( 'change' ) );
};

const closeTicket = ( status ) => {
	if ( 'fixed' === status ) {
		document.getElementById( 'action_fix' ).click();
	} else if ( status !== false ) {
		document.getElementById( 'action_resolve' ).click();
		document.getElementById( 'action_resolve_resolve_resolution' ).value =
			status;
		if ( 'invalid' === status ) {
			// blank the milestone
			document.getElementById( 'field-milestone' ).value = '';
			// blank the version
			document.getElementById( 'field-version' ).value = '';
		}
	}
};

const buildDataForTemplates = () => {
	// Template Variables
	const author = document
		.getElementsByClassName( 'properties' )[ 0 ]
		.querySelector( 'td' ).innerText;

	return { author };
};

module.exports = { setCommentDraft, closeTicket, buildDataForTemplates };
