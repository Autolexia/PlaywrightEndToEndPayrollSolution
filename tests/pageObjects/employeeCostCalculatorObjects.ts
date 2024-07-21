import { Page, Locator  } from 'playwright';
export { EmployeeCostCalculatorObjects }
class EmployeeCostCalculatorObjects {
    private _page: Page;
    
    constructor(page: Page) {
        this._page = page;
    }

    countryInput = async (): Promise<Locator> => await this._page.locator('[placeholder="Select a country"]');
    countryDropdownFirstOption = async (): Promise<Locator> => await this._page.locator('#country-select-listbox #country-select-option-0');
    stateDropdownInput = async (): Promise<Locator> => await this._page.locator('div:has(p:has-text("State/Country/Region")) input[placeholder="Select"]');
    currencyDropdown = async (): Promise<Locator> => await this._page.locator('[placeholder="Select Currency"]');
    currencyDropdownFirstOption = async (): Promise<Locator> => await this._page.locator('li > p:has-text("AUD")');
    monthlyButton = async (): Promise<Locator> => await this._page.locator('[value="monthly"]');
    annualButton = async (): Promise<Locator> => await this._page.locator('[value="annual"]');
    localButton = async (): Promise<Locator> => await this._page.locator('[value="local"]');
    billingButton = async (): Promise<Locator> => await this._page.locator('[value="billing"]');
    amountInput = async (): Promise<Locator> => await this._page.locator('[name="amount"]');
    quoteButton = async (): Promise<Locator> => await this._page.locator('button:has-text("Get Quote")');
    copyLinkButton = async (): Promise<Locator> => await this._page.locator('button:has-text("Copy Link")');
    overlayHeading = async (): Promise<Locator> => await this._page.locator('p:has-text("Your Quote Will Show Up Here")');
}