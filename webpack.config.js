const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = {
	...defaultConfig,
	plugins: [
		...defaultConfig.plugins,
		new CopyWebpackPlugin( {
			patterns: [
				{
					from: 'src/manifest.json',
					to: 'manifest.json',
				},
				{
					from: 'src/wp-trac-*.png',
					to: '[name][ext]',
				},
			],
		} ),
	],
};
