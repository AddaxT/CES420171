import { ContactsUiPage } from './app.po';

describe('contacts-ui App', () => {
  let page: ContactsUiPage;

  beforeEach(() => {
    page = new ContactsUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
