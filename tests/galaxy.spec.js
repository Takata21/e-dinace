// @ts-check
import { test, expect } from '@playwright/test'

const IMG_PREFIX_IMAGE_URL =
  '/images/galaxies/4f9d6aaf-41bc-4709-a79e-ab9e0a6eecff.webp'
const LOCALHOST_URL =
  'http://localhost:5173/galaxies/milky-way?id=4f9d6aaf-41bc-4709-a79e-ab9e0a6eecff'

test('app shows galaxy info and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  await page.waitForTimeout(10000)

  const text = page.getByTestId('galaxy-desc')
  const image = page.getByTestId('galaxy-img')
  //   const infoList = page.getByTestId('galaxy-info-list')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  const infoListContent = await page.$eval(
    '[data-testid="galaxy-info-list"]',
    (ul) => ul.textContent
  )
  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(IMG_PREFIX_IMAGE_URL)).toBeTruthy()
  expect(infoListContent?.length).toBeGreaterThan(0)
})
