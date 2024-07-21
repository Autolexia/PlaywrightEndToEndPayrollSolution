import { test, expect, Page } from '@playwright/test';
import { EmployeeCostCalculatorPage } from './pages/employeeCostCalculatorPage';

test.describe('Employee Cost Calculator Tests', () => {
  let employeeCostCalculatorPage: EmployeeCostCalculatorPage;

  test.beforeEach(async ({ context }) => {
    // Arrange
    const page: Page = await context.newPage();
    employeeCostCalculatorPage = new EmployeeCostCalculatorPage(page);
    await page.goto('https://www.playroll.com/employee-cost-calculator', { timeout: 240000 });
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Get Started button is disabled', async () => {
    // Act
    let quoteButton = await employeeCostCalculatorPage.getQuoteButton();

    // Assert
    let isDisabled = await quoteButton.isDisabled();
    expect(isDisabled).toBe(true);
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Country Select input is empty', async () => {
    // Act
    const ccountryDropdownValue = await employeeCostCalculatorPage.getCountryDropdownValue();

    // Assert
    expect(ccountryDropdownValue).toEqual("");
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Currency Select input is empty', async () => {
    // Act
    const currencyDropdownValue = await employeeCostCalculatorPage.getCurrencyDropdownValue();

    // Assert
    expect(currencyDropdownValue).toEqual("");
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Amount input is empty', async () => {
    // Act
    const amountInputValue = await employeeCostCalculatorPage.getAmountInputValue();

    // Assert
    expect(amountInputValue).toEqual("");
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Monthly button is selected by default', async () => {
    // Act
    const monthlyButton = await employeeCostCalculatorPage.getMonthlyButton();

    // Assert
    await expect(monthlyButton).toHaveAttribute('aria-pressed', 'true');
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Annual button is not selected', async () => {
    // Act
    const annualButton = await employeeCostCalculatorPage.getAnnualButton();

    // Assert
    await expect(annualButton).toHaveAttribute('aria-pressed', 'false');
  });

  test('Given the employee-cost-calculator page, When clicking the Annual button, Then the Monthly button is not selected and the Annual button is selected', async ({ page }) => {
    // Act
    const annualButton = await employeeCostCalculatorPage.getAnnualButton();
    const monthlyButton = await employeeCostCalculatorPage.getMonthlyButton();
    await annualButton.click();
  
    // Assert
    await expect(annualButton).toHaveAttribute('aria-pressed', 'true');
    await expect(monthlyButton).toHaveAttribute('aria-pressed', 'false');
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Local button is selected by default', async () => {
    // Act
    const localButton = await employeeCostCalculatorPage.getLocalButton();

    // Assert
    await expect(localButton).toHaveAttribute('aria-pressed', 'true');
  }); 

  test('Given the employee-cost-calculator page, When landing on page, Then the Billing button is not selected', async () => {
    // Act
    const billingButton = await employeeCostCalculatorPage.getBillingButton();
  
    // Assert
    await expect(billingButton).toHaveAttribute('aria-pressed', 'false');
  });

  test('Given the employee-cost-calculator page, When clicking the Billing button, Then the Local button is not selected and the Billing button is selected', async ({ page }) => {
    // Act
    const billingButton = await employeeCostCalculatorPage.getBillingButton();
    const localButton = await employeeCostCalculatorPage.getLocalButton();
    await billingButton.click();
  
    // Assert
    await expect(billingButton).toHaveAttribute('aria-pressed', 'true');
    await expect(localButton).toHaveAttribute('aria-pressed', 'false');
  });

  test('Given the employee-cost-calculator page, When selecting USA as the country, Then a State dropdown is shown', async () => { // USA is not the only country that shows this dropdown but I will only automate a single check for the perposes of being able to submit this solution on time
    // Act
    await employeeCostCalculatorPage.selectCountryByName("USA");
    const stateDropdown = await employeeCostCalculatorPage.getStateDropdow();
    await stateDropdown.waitFor({ state: 'visible' });

    // Assert
    const isVisible = await stateDropdown.isVisible();
    expect(isVisible).toBe(true);
  });

  test('Given the employee-cost-calculator page, When a quote is done, Then the country and currence dropdowns are disabled', async () => {
    // Act
    await employeeCostCalculatorPage.getQuote();
    const countryInput = await employeeCostCalculatorPage.getCountryInput();
    const currencyInput = await employeeCostCalculatorPage.getCurrencyDropdown();
    const countryInputIsDisabled = await countryInput.getAttribute('disabled') !== null;
    const currencyInputIsDisabled = await currencyInput.getAttribute('disabled') !== null;

    // Assert
    expect(countryInputIsDisabled).toBe(true);
    expect(currencyInputIsDisabled).toBe(true);
  });

  test('Given the employee-cost-calculator page, When a quote is done, Then the overlay is hidden to reveal the Quote form', async () => {
    // Act
    await employeeCostCalculatorPage.getQuote();
    let overlayHeading = await employeeCostCalculatorPage.getOverlayHeading();
    await overlayHeading.waitFor({ state: 'hidden' });

    // Assert
    let isVisible = await overlayHeading.isVisible();
    expect(isVisible).toBe(false);
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Quote form overlay is visible', async ({page}) => {
    // Act
    let overlayHeading = await employeeCostCalculatorPage.getOverlayHeading();

    // Assert
    let isVisible = await overlayHeading.isVisible();
    expect(isVisible).toBe(true);
  });
});