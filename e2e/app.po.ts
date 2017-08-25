import { browser, by, element } from 'protractor';

export class SingAngularCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sing-root h1')).getText();
  }
}
