import { test, expect } from '@playwright/test'

test('Should Load Page Successfully', async ({ page }) => {
  await page.goto('http://localhost:5173/galaxies')
  await page.waitForTimeout(10000)

  // Use page.$eval to get the text content of the element
  const text = await page.$eval(
    '[data-test-id="galaxies"]',
    (element) => element.textContent
  )

  // Verify whether the text is empty or not
  expect(text).not.toBe('') // Trim removes leading/trailing whitespace
})

test('Verify galaxies Search Functionality', async ({ page }) => {
  await page.goto('http://localhost:5173/galaxies')
  await page.getByPlaceholder('Andromeda, Centaurus...').fill('milky')

  // Wait for at least one element matching the selector to appear
  await page.waitForSelector('[data-test-id="galaxies"]')

  // Verify that at least one element with data-test-id="constellations" exists
  const constellations = page.locator('[data-test-id="galaxies"]')
  expect(constellations).not.toBeNull()
})
