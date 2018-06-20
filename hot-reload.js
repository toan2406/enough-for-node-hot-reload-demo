const fs = require('fs');
const path = require('path');

// absolute path to watched directory
const watchedDir = path.join(__dirname, 'controllers');

fs.watch(watchedDir, (event, filename) => {
  const changedFile = path.join(watchedDir, filename);
  if (require.cache[changedFile]) {
    console.warn(`Delete cache with id ${changedFile}`);
    delete require.cache[changedFile];
  }
});
