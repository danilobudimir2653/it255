import { FormaUnosPage } from './app.po';

describe('forma-unos App', () => {
  let page: FormaUnosPage;

  beforeEach(() => {
    page = new FormaUnosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
