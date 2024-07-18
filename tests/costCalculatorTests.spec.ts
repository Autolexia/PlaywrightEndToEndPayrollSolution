import { test, expect } from '@playwright/test';

test('Given the employee-cost-calculator page, When landing on page, Then the get started button is disabled ', async ({page}) => {
    // Assert
    await page.goto('https://www.playroll.com/employee-cost-calculator');

    // Act
    let getQuoteButton = await page.getByText('Get Quote');
    const isDisabled = await getQuoteButton.isDisabled();

    // Assert
    expect(isDisabled).toBe(true);
});