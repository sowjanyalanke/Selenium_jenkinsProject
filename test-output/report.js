$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6162210900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Searching Google Page",
  "description": "",
  "id": "google-search;searching-google-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Launch Goolge",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Search For Selenium",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I Select The Link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I Search Something On Selenium Page",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.i_Launch_Goolge()"
});
formatter.result({
  "duration": 1580131200,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchSteps.i_Search_For_Selenium()"
});
formatter.result({
  "duration": 2389433900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchSteps.i_Select_The_Link()"
});
formatter.result({
  "duration": 60126981800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Selenium - Web Browser Automation\u0027)]\"}\n  (Session info: chrome\u003d91.0.4472.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LIN83000338\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.106, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\llanke\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50239}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 05f344e918071b6b1cca20d0300b9a81\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Selenium - Web Browser Automation\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat PageObjects.GoogleSearchPage.clickSeleniumLink(GoogleSearchPage.java:45)\r\n\tat StepDefinitions.GoogleSearchSteps.i_Select_The_Link(GoogleSearchSteps.java:23)\r\n\tat ✽.Then I Select The Link(GoogleSearch.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GoogleSearchSteps.i_Search_Something_On_Selenium_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4690788900,
  "status": "passed"
});
formatter.before({
  "duration": 2436786100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Searching Google Page",
  "description": "",
  "id": "google-search;searching-google-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I Launch Goolge",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I Search For Selenium",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Select The Link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I Search Something On Selenium Page",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.i_Launch_Goolge()"
});
formatter.result({
  "duration": 2978700600,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchSteps.i_Search_For_Selenium()"
});
formatter.result({
  "duration": 2693346600,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearchSteps.i_Select_The_Link()"
});
formatter.result({
  "duration": 60070881100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Selenium - Web Browser Automation\u0027)]\"}\n  (Session info: chrome\u003d91.0.4472.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LIN83000338\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.106, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\llanke\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:61347}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 7ba33b9f396287df2e627c9c95c59ebb\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Selenium - Web Browser Automation\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat PageObjects.GoogleSearchPage.clickSeleniumLink(GoogleSearchPage.java:45)\r\n\tat StepDefinitions.GoogleSearchSteps.i_Select_The_Link(GoogleSearchSteps.java:23)\r\n\tat ✽.Then I Select The Link(GoogleSearch.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GoogleSearchSteps.i_Search_Something_On_Selenium_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4428113700,
  "status": "passed"
});
});