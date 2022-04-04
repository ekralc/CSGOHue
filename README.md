# CSGOHue
A Node application which updates a Philips Hue light group based on your round phase in CSGO.

When the bomb is planted, the lights are turned red. Once the bomb is defused, the lights turn green.

# Usage

Clone the repository and install the dependencies using `npm i`.

Update `config.js` with:
- An IP and username for your Philips Hue bridge, [see here](https://developers.meethue.com/develop/get-started-2/).
- The id of your lights group.

Then run the application with `npm start`.
