import { test, expect } from '@playwright/test';
import { EmployeeCostCalculatorPage } from './pages/employeeCostCalculatorPage';

test.describe('Employee Cost Calculator Tests', () => {
  let employeeCostCalculatorPage: EmployeeCostCalculatorPage;

  test.beforeEach(async ({ page }) => {
    // Arrange
    employeeCostCalculatorPage = new EmployeeCostCalculatorPage(page);
    await page.goto('https://www.playroll.com/employee-cost-calculator');
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Get Started button is disabled', async () => {
    // Act
    let quoteButton = await employeeCostCalculatorPage.getQuoteButton();

    // Assert
    let isDisabled = await quoteButton.isDisabled();
    expect(isDisabled).toBe(true);
  });

/*   test('Given the employee-cost-calculator page, When landing on page, Then the Country Select input is empty', async () => {
    // Act
    

    // Assert
    
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Currency Select input is empty', async () => {
    // Act
    

    // Assert
    
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Amount input is empty', async () => {
    // Act
    

    // Assert
    
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Monthly button is selected by default and Amount input heading reads as Monthly Gross Salary', async () => {
    // Act
    

    // Assert
    
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Annual button is not selected', async () => {
    // Act
    

    // Assert
    
  });

  test('Given the employee-cost-calculator page, When clicking the Annual button, Then the Manual button is not selected and the Annual button is selected as well as and Amount input heading reads as Annual Gross Salary', async () => {
    // Act
    

    // Assert
    
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Local button is selected by default', async () => {
    // Act
    

    // Assert
    
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Billing button is not selected', async () => {
    // Act
    

    // Assert
    
  });

  test('Given the employee-cost-calculator page, When clicking the Billing button, Then the Local button is not selected and the Billing button is selected', async () => {
    // Act
    

    // Assert
    
  });

  test('Given the employee-cost-calculator page, When selecting USA as the country, Then a region dropdown is shown', async () => { // USA is not the only country that shows this dropdown but I will only automate a single check for the perposes of being able to submit this solution on time
    // Act
    

    // Assert
    
  });

  test('Given the employee-cost-calculator page, When a quote is done, Then the country and currence dropdowns are disabled', async () => {
    // Act
    

    // Assert
    
  }); */

  test('Given the employee-cost-calculator page, When a quote is done, Then the overlay is hidden to reveal the Quote form', async () => {
    // Act
    await employeeCostCalculatorPage.getQuote();
    let overlayHeading = await employeeCostCalculatorPage.getOverlayHeading();

    await overlayHeading.waitFor({ state: 'hidden' }); // Wait for overlay heading to become not visible

    // Assert
    let isVisible = await overlayHeading.isVisible();
    expect(isVisible).toBe(false);
  });

  test('Given the employee-cost-calculator page, When landing on page, Then the Quote form overlay is visible', async ({page}) => {
    // Act
    await page.waitForLoadState('networkidle');  // Or other appropriate load state
    let overlayHeading = await employeeCostCalculatorPage.getOverlayHeading();

    // Assert
    let isVisible = await overlayHeading.isVisible();
    expect(isVisible).toBe(true);
  });

/*   test('Given the employee-cost-calculator page, When landing on page, Then the Calculation form is hidden', async () => {
    // Act
    

    // Assert
    
  });
 */
  // Adding this comment here as I am unable to log the issue: When you select USA, then a state, then switch the country to China, you are then able to calculate while the state does not match the country selected (this is an edge case scenario - this affects the values calculated - idealy the state should be cleared out and force the user to select a state belonging to the newly selected country)
});