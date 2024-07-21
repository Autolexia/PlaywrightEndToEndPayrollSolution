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

    getCountryInput = async (): Promise<Locator> => await this._objects.countryInput();

    getCurrencyDropdown = async (): Promise<Locator> => await this._objects.currencyDropdown();

    getStateDropdow = async (): Promise<Locator> => await this._objects.stateDropdownInput();

    getBillingButton = async (): Promise<Locator> => await this._objects.billingButton();

    getLocalButton = async (): Promise<Locator> => await this._objects.localButton();

    getAnnualButton = async (): Promise<Locator> => await this._objects.annualButton();
    
    getMonthlyButton = async (): Promise<Locator> => await this._objects.monthlyButton();

    getAmountInputValue = async (): Promise<string> => await (await this._objects.amountInput()).inputValue();

    getCurrencyDropdownValue = async (): Promise<string> => await (await this._objects.currencyDropdown()).inputValue();

    getCountryDropdownValue = async (): Promise<string> => await (await this._objects.countryInput()).inputValue();

    async getQuote(grossSalaryAmount: string = "100000") {
        await (await this._objects.amountInput()).fill(grossSalaryAmount);
        await (await this._objects.countryInput()).click();
        await (await this._objects.countryDropdownFirstOption()).click();
        await (await this._objects.currencyDropdown()).click();
        await (await this._objects.currencyDropdownFirstOption()).click();
        await (await this._objects.quoteButton()).click();
    }

    async selectCountryByName(name: string) {
        await (await this._objects.countryInput()).click();
        await (await this._objects.countryInput()).fill(name);
        await (await this._objects.countryDropdownFirstOption()).click();
    }
}