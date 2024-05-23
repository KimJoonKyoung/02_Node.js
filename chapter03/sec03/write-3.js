fs = require('fs');

fs.readFile('./chapter03/sec03/example.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  }

  fs.writeFile('./chapter03/sec03/text-2.txt', data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('text-2.txt is saved!');
  });
});
