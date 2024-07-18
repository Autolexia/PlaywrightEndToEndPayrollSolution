import { test, expect } from '@playwright/test';
import { EmployeeCostCalculatorPage } from './pages/employeeCostCalculatorPage';

test.describe('Employee Cost Calculator Tests', () => {
  let employeeCostCalculatorPage: EmployeeCostCalculatorPage;

  test.beforeEach(async ({ page }) => {
    employeeCostCalculatorPage = new EmployeeCostCalculatorPage(page);
    await page.goto('https://www.playroll.com/employee-cost-calculator');
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the get started button is disabled', async () => {
    let getQuoteButton = await employeeCostCalculatorPage.getQuoteButton();
    const isDisabled = await getQuoteButton.isDisabled();
    expect(isDisabled).toBe(true);
  });
});