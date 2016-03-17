var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

		element(by.css('.button')).click();
		element(by.model('contact.name')).sendKeys('Gene');
		element(by.model('contact.phone')).sendKeys('2345678901');

		var contacts = element.all(by.repeater('contact in vm.contacts'))
		var names = element.all(by.model('contact.name'));
		var phones = element.all(by.model('contact.phone'));
		expect(contacts.count()).toEqual(4);
		expect(names.get(1)).toEqual('Tim');
		expect(phones.get(1)).toEqual('3934203242');

	});
});
