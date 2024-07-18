import { Page, Locator } from 'playwright';
import { EmployeeCostCalculatorObjects } from '../pageObjects/employeeCostCalculatorObjects';
export { EmployeeCostCalculatorPage }

class EmployeeCostCalculatorPage {
    private _objects: EmployeeCostCalculatorObjects;
    
    constructor(page: Page) {
        this._objects = new EmployeeCostCalculatorObjects(page);
    }

    getQuoteButton = async (): Promise<Locator> => await this._objects.quoteButton();

    getCopyLinkButton = async (): Promise<Locator> => await this._objects.copyLinkButton();

    getOverlayHeading = async (): Promise<Locator> => await this._objects.overlayHeading();

    async getQuote(grossSalaryAmount: string = "100000") {
        await (await this._objects.amountInput()).fill(grossSalaryAmount);
        await (await this._objects.locationInput()).click();
        await (await this._objects.locationOptionZero()).click();
        await (await this._objects.currencyInput()).click();
        await (await this._objects.currencyOptionZero()).click();
        await (await this._objects.quoteButton()).click();
    }
}