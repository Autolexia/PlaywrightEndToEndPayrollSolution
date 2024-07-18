import { Page, Locator  } from 'playwright';
export { EmployeeCostCalculatorObjects }
class EmployeeCostCalculatorObjects {
    private _page: Page;
    
    constructor(page: Page) {
        this._page = page;
    }

    quoteButton = async (): Promise<Locator> => await this._page.locator('button:has-text("Get Quote")');
}