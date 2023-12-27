// test that buildTemplate() returns the expected string for the welcome template
jest.mock( '../../src/helpers/trac_html' );

const {
	buildTemplate,
	getAllTemplates,
} = require( '../../src/helpers/templates' );

const mockData = { author: 'foo' };

test( 'buildTemplate() returns the expected string for the welcome template', () => {
	const template = 'welcome';
	const expected = 'hi @foo, welcome to WordPress Trac.';
	const actual = buildTemplate( template, mockData );
	expect( actual ).toBe( expected );
} );

// get all the templates with getAllTemplates and loop through them	to test that they are functions
describe( 'getAllTemplates()', () => {
	const templates = getAllTemplates();
	test.each( Object.keys( templates ) )( '%s is a function', ( template ) => {
		expect( typeof templates[ template ] ).toBe( 'function' );
		// ensure it only accepts one argument
		expect( templates[ template ].length ).toBe( 1 );
	} );
	test.each( Object.keys( templates ) )(
		'%s returns a string',
		( template ) => {
			expect( typeof templates[ template ]( mockData ) ).toBe( 'string' );
		}
	);
} );
