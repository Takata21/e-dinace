import { test, expect } from '@playwright/test'
test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/Ephemeris')
  await page.locator('#bodyList').selectOption('499')
  await page.getByPlaceholder('40.7128').click()
  await page.getByPlaceholder('40.7128').fill('40.456')
  await page.getByPlaceholder('-74.0060').click()
  await page.getByPlaceholder('-74.0060').fill('-74.564')
  await page.getByLabel('Fecha de inicio:').fill('2023-10-08')
  await page.getByLabel('Fecha final:').fill('2023-11-03')
  await page.getByRole('button', { name: 'Generar Efemérides' }).click()
  await page.waitForSelector('[data-testid="ephemeris-result"]')
  const infoEphemeris = await page.$$eval(
    '[data-testid="ephemeris-result"] tbody tr',
    (tds) => {
      return tds.map((td) => parseFloat(td.textContent))
    }
  )
  console.log(infoEphemeris)

  // Utilizar una aserción para comprobar si el tbody no está vacío
  expect(infoEphemeris?.length).toBeGreaterThan(0)
})
