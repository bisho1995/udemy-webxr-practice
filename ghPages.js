var ghpages = require("gh-pages");

ghpages.publish(".", function (err) {
  if (err) {
    console.log(`ghPages failed to publish to github ${err}`);
  } else {
    console.log(`ghPages successfully created ghPages`);
  }
});
