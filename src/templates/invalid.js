const { closeTicket } = require( '../helpers/trac_html' );

module.exports = ( data ) => {
	closeTicket( 'invalid' );
	const { author } = data;
	return `Hi @${ author }, I'm sorry to hear you are having difficulty with your site, however Trac is used for the development of the WordPress software, not for assistance with individual sites or plugins.

I would suggest reaching out to the [https://wordpress.org/support/forums/ WordPress Support Forums] for further assistance. There are volunteers there who can hopefully help you.

I've closed this ticket of with the term \`invalid\`, in this case it's the	unfriendly term trac uses to indicate that I've referred you to somewhere where you can find people better able to assist you.`;
};
