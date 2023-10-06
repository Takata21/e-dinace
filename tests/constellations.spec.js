import { test, expect } from '@playwright/test'

test('should Load Page Successfully', async ({ page }) => {
  await page.goto('http://localhost:5173/constellations')
  await page.waitForTimeout(10000)
  // Select the first <h5> element inside the first <a>
  const h5Element = await page.waitForSelector(
    '[data-test-id="constellations"] a:first-child h5'
  )

  // Get the text of the <h5> element
  const text = await h5Element.textContent()

  // Verify that the text is "andromeda"
  expect(text.toLowerCase()).toBe('andromeda')
})

test('Verify Constellations Search Functionality', async ({ page }) => {
  await page.goto('http://localhost:5173/constellations')
  await page.getByPlaceholder('Andromeda, Centaurus...').fill('ta')

  // Wait for at least one element matching the selector to appear
  await page.waitForSelector('[data-test-id="constellations"]')

  // Verify that at least one element with data-test-id="constellations" exists
  const constellations = page.locator('[data-test-id="constellations"]')
  expect(constellations).not.toBeNull()
})
