let chrome = require('selenium-webdriver/chrome');
     let {Builder} = require('selenium-webdriver');

     let driver = new Builder()
         .forBrowser('chrome')
         .setChromeOptions(new chrome.Options().headless())
         .build();
