import { DependencyInjectionServicesPage } from './app.po';

describe('dependency-injection-services App', () => {
  let page: DependencyInjectionServicesPage;

  beforeEach(() => {
    page = new DependencyInjectionServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
