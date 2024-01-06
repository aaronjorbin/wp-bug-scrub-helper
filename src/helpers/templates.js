const getAllTemplates = () => {
	const templates = {};

	templates.welcome = require( '../templates/welcome.js' );
	templates.invalid = require( '../templates/invalid.js' );
	templates.hacked = require( '../templates/hacked.js' );

	return templates;
};

const getTemplate = ( templateName ) => {
	const templates = getAllTemplates();
	return templates[ templateName ];
};

const buildTemplate = ( templateName, data ) => {
	const template = getTemplate( templateName );
	return template( data );
};

module.exports = { getTemplate, buildTemplate, getAllTemplates };
