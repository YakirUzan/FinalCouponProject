import { CouponSystemPage } from './app.po';

describe('coupon-system App', () => {
  let page: CouponSystemPage;

  beforeEach(() => {
    page = new CouponSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
