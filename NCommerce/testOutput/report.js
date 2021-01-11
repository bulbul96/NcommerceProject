$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Feature"
    }
  ],
  "line": 2,
  "name": "new customers add",
  "description": "",
  "id": "new-customers-add",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "customer adding functionality test",
  "description": "",
  "id": "new-customers-add;customer-adding-functionality-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter email in the email box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on customers",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on customers radio button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user clicks new user button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters email",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters first name",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters last Name",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks gender make radio button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user choose date of birth",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enter company name",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user clicks on tax exempt",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user chooses newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user chooses customers roles",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user clicks active check box",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user adds comments on admin comment box",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user clciks on save button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user adds new customer successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerRegisterStep.user_on_homepage()"
});
formatter.result({
  "duration": 7079271000,
  "status": "passed"
});
formatter.match({
  "location": "CustomerRegisterStep.user_enter_email_in_the_email_box()"
});
formatter.result({
  "duration": 136952100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerRegisterStep.user_enter_password()"
});
formatter.result({
  "duration": 88645800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerRegisterStep.user_clicks_on_login()"
});
formatter.result({
  "duration": 2696685600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerRegisterStep.user_clicks_on_customers()"
});
formatter.result({
  "duration": 66792600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerRegisterStep.user_clicks_on_customers_radio_button()"
});
formatter.result({
  "duration": 1215997800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerRegisterStep.user_clicks_new_user_button()"
});
formatter.result({
  "duration": 2840544300,
  "status": "passed"
});
formatter.match({
  "location": "CustomerRegisterStep.user_enters_email()"
});
formatter.result({
  "duration": 85131100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerRegisterStep.user_enters_password()"
});
formatter.result({
  "duration": 75044200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerRegisterStep.user_enters_first_name()"
});
formatter.result({
  "duration": 62372700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerRegisterStep.user_enters_last_Name()"
});
formatter.result({
  "duration": 62412200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerRegisterStep.user_clicks_gender_make_radio_button()"
});
formatter.result({
  "duration": 20073414000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027k-link k-nav-fast\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.75)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027BULBUL-DESKTOP\u0027, ip: \u0027192.168.1.216\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Bulbul\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:64101}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f80ad5be24d2d97c95a6997af1af16ec\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027k-link k-nav-fast\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat pageObjectModel.RegisterPage.clickmale(RegisterPage.java:91)\r\n\tat stepDefinition.CustomerRegisterStep.user_clicks_gender_make_radio_button(CustomerRegisterStep.java:86)\r\n\tat ✽.And user clicks gender make radio button(register.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CustomerRegisterStep.user_choose_date_of_birth()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerRegisterStep.user_enter_company_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerRegisterStep.user_clicks_on_tax_exempt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerRegisterStep.user_chooses_newsletter()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerRegisterStep.user_chooses_customers_roles()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerRegisterStep.user_clicks_active_check_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerRegisterStep.user_adds_comments_on_admin_comment_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerRegisterStep.user_clciks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CustomerRegisterStep.user_adds_new_customer_successfully()"
});
formatter.result({
  "status": "skipped"
});
});