import { SchedulePage } from './app.po';

describe('schedule App', () => {
  let page: SchedulePage;

  beforeEach(() => {
    page = new SchedulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
