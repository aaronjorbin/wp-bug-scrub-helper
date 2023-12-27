const { getAllTemplates, buildTemplate } = require( './helpers/templates' );
const {
	buildDataForTemplates,
	setCommentDraft,
} = require( './helpers/trac_html' );

module.exports = function () {
	const selectTemplate = document.createElement( 'select' );
	selectTemplate.id = 'select-template';
	selectTemplate.innerHTML = `<option value="">Select a template</option>`;
	for ( const template in getAllTemplates() ) {
		selectTemplate.innerHTML += `<option value="${ template }">${ template }</option>`;
	}

	const addTemplate = document.createElement( 'button' );
	addTemplate.id = 'add-template';
	addTemplate.innerHTML = 'Add';
	addTemplate.type = 'button';
	// add listener to get the template, build it, and add it to the comment box
	addTemplate.addEventListener( 'click', ( event ) => {
		event.preventDefault();
		const templateName = document.getElementById( 'select-template' ).value;
		const templateHTML = buildTemplate(
			templateName,
			buildDataForTemplates()
		);
		setCommentDraft( templateHTML );
		return false;
	} );

	const replaceTemplate = document.createElement( 'button' );
	replaceTemplate.id = 'replace-template';
	replaceTemplate.type = 'button';
	replaceTemplate.innerHTML = 'Replace';
	// add listener to get the template, build it, and replace the comment box
	replaceTemplate.addEventListener( 'click', ( event ) => {
		event.preventDefault();
		const templateName = document.getElementById( 'select-template' ).value;
		const templateHTML = buildTemplate(
			templateName,
			buildDataForTemplates()
		);
		setCommentDraft( templateHTML, true );
	} );

	const commentLabel = document
		.getElementById( 'comment' )
		.parentElement.parentElement.parentElement.querySelector( 'label' );
	commentLabel.innerHTML = '';
	commentLabel.appendChild( selectTemplate );
	commentLabel.appendChild( addTemplate );
	commentLabel.appendChild( replaceTemplate );
};
