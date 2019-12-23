const path = require('path');
const fs = require('fs');
const withDefaults = require('./utils/default-options');

exports.onPreBootstrap = ({ store }, options) => {
  const { program } = store.getState();
  const { contentPath } = withDefaults(options);
  const dir = path.join(program.directory, contentPath);

  if (!fs.existsSync(dir)) {
    // TODO Create the dir
  }
};
