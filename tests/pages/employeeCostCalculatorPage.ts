import { Page, Locator } from 'playwright';
import { EmployeeCostCalculatorObjects } from '../pageObjects/employeeCostCalculatorObjects';
export { EmployeeCostCalculatorPage }

class EmployeeCostCalculatorPage {
    private _page: Page;
    private _objects: EmployeeCostCalculatorObjects;
    
    constructor(page: Page) {
        this._page = page;
        this._objects = new EmployeeCostCalculatorObjects(page);
    }

    getQuoteButton = async (): Promise<Locator> => await this._objects.quoteButton();
}