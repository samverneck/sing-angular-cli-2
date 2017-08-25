import { SingAngularCliPage } from './app.po';

describe('sing-angular-cli App', () => {
  let page: SingAngularCliPage;

  beforeEach(() => {
    page = new SingAngularCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to sing!');
  });
});
