# WP Bug Scrub Helper - The Chrome Plugin

This is a simple helper for people that scrub bugs on WordPress Trac. It makes it so that there can be templated responses and actions. Responses should still be personalized, but this should give a bit of a head start.

## New Templates

Templates are functions that live in the `/src/templates` dirrectory and take one argument, a data object.  Currently the data object provides the name of the author of the post. Please submit a PR with new templates. 

## Installing

To Install, first clone this repository locally. Then run `npm install` and `npm build` to get a built copy of the code. Then Navigate to `chrome://extensions` and enable developer mode if not yet enabled. Click "Load Unpacked Extention" and navigate to the local folder containing the extension’s code and click Ok. Assuming there are no errors, the extension should load into your browser

## Developing

Follow the same instructions as installing except run `npm start` instead of build so your changes are constantly built. You will need to reload the extention in `chrome://extentions` in order to test.

### Testing Philosohpy

For now, manual tests are required before merging code. Automated tests are prefered for non DOM related changes to the code and over the goal is to increase the amount of automated tests.
