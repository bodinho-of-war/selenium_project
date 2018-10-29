var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chromedriver').build();

driver.get('http://google.com');
