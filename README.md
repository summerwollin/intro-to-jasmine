Jasmine Instructions:

1. jasmine init on your directory
   -adds a spec directory with a support directory that has a jasmine.json file

2. create spec/myfile_spec.js and lib/my_file.js

3. add module to the lib/myfile.js:
  module.exports = {

  }

4. add require to spec/myfile_spec.js:
  var miles = require('../lib/miles')


5. add test (spec) suite 'describe'
  describe...it...expect

6. add function to miles.js

7. run jasmine in terminal, verify that we get a good red

8. Update miles.js to get a green when running jasmine
