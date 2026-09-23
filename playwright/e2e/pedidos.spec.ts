import { test, expect } from '@playwright/test';

/// AAA - Arrange, Act, Assert

/// Arrange
test('must search an approved order', async ({ page }) => {

  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');
  
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

  //Act
  await page.getByTestId('search-order-id').fill('VLO-1F94KU');
  // await page.locator('//button[text()="Buscar Pedido"]').click();
  await page.getByRole('button', { name: 'Buscar Pedido' }).click();
  // await page.getByTestId('search-order-button').click();

  // Assert
  
  await expect(page.getByText('VLO-1F94KU')).toBeVisible();
  await expect(page.getByText('APROVADO')).toBeVisible();

  // await expect(page.getByTestId('order-result-status')).toBeVisible();
  // await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');
});