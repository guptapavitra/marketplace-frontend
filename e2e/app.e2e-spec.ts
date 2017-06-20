import { MarketplacePage } from './app.po';

describe('marketplace App', () => {
  let page: MarketplacePage;

  beforeEach(() => {
    page = new MarketplacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
