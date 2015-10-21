import tsUnit = require('./tsUnit');
import tests = require('./sidebar.controller.test');

    // Create the test suite
    var test = new tsUnit.Test(tests.SimpleTests);

    // Run the test
    var result = test.run();

    // Display in the element with id="results"
    result.showResults('results');