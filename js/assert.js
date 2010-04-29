UITest.assertIsTrue = function(value) {
    if (!value) {
        this.fail('assertIsTrue', 'Expected <true> but was: <' + value + '>');
    }
};


UITest.assertEquals = function(expected, actual) {
    if (expected !== actual) {
        this.fail('assertEquals', 'Expected <' + expected + '> but was: <' + actual + '>');
    }
};

UITest.assertIsElement = function(selector) {
    var element = $(selector);
    if (!element.length) {
        this.fail('assertIsElement', '<' + element.selector + '> not found.');
    }
};


UITest.assertNotIsElement = function(selector) {
    var element = $(selector);
    if (element.length) {
        this.fail('assertNotIsElement', '<' + element.selector + '> found.');
    }
};


UITest.assertHasText = function(selector, text) {
    this.assertIsElement(selector);
    var element = $(selector);
    if (element.text() !== text) {
        this.fail('assertHasText', 'Expected <' + text + '> but was: <' + element.text() + '>');
    }
};


UITest.assertContainsText = function(selector, text) {
    this.assertIsElement(selector);
    var element = $(selector);
    if (element.text().indexOf(text) === -1) {
        this.fail('assertContainsText', 'Expected <' + text + '> but was: <' + element.text() + '>');
    }
};


UITest.assertNotContainsText = function(selector, text) {
    this.assertIsElement(selector);
    var element = $(selector);
    if (element.text().indexOf(text) > -1) {
        this.fail('assertContainsText', 'Did not expect <' + text + '> but was: <' + element.text() + '>');
    }
};


UITest.assertIsVisible = function (selector) {
    this.assertIsElement(selector);
    var element = $(selector); 
    if (!element.is(':visible')) {
        this.fail('assertIsVisible', '<' + element.selector + '> not visible');
    }
};


UITest.assertIsHidden = function(selector) {
    var element = $(selector);
    if (element.length && element.is(':visible')) {
        this.fail('assertIsHidden', 'Element <' + element.selector + '> not hidden');
    }
};


UITest.assertHasClass = function(selector, className) {
    this.assertIsElement(selector);
    var element = $(selector);
    if (!element.hasClass(className)) {
        this.fail('assertHasClass', 'Expected <' + className + '> but was: <' + element.attr('class') + '>');
    }
};


UITest.assertNotHasClass = function(selector, className) {
    this.assertIsElement(selector);
    var element = $(selector);
    if (element.hasClass(className)) {
        this.fail('assertNotHasClass failed: found <' + className + '> in <' + element.attr('class') + '>');
    }
};


UITest.assertHasValue = function(selector, value) {
    this.assertIsElement(selector);
    var element = $(selector);
    if (element.val() !== value) {
        this.fail('assertHasValue', 'Expected <' + value + '> but was: <' + element.val() + '>');
    }
};


UITest.assertIsChecked = function(selector) {
    this.assertIsElement(selector);
    var element = $(selector);
    if (!element.attr('checked')) {
        this.fail('assertIsChecked', 'Expected <true> but was: <' + element.attr('checked') + '>');
    }
};


UITest.assertNotIsChecked = function(selector) {
    this.assertIsElement(selector);
    var element = $(selector);
    if (element.attr('checked')) {
        this.fail('assertNotIsChecked', 'Expected <false> but was: <' + element.attr('checked') + '>');
    }
};
