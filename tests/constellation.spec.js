// @ts-check
import { test, expect } from '@playwright/test'

const IMG_PREFIX_IMAGE_URL = '/images/constellations/undefined.webp'
const LOCALHOST_URL =
  'http://localhost:5173/constellations/aquarius?id=20194479-b7a7-4a10-8eb0-1af561778f69'

test('app shows constellation info and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  await page.waitForTimeout(10000)

  const text = page.getByTestId('constellation-desc')
  const image = page.getByTestId('constellation-img')
  //   const infoList = page.getByTestId('constellation-info-list')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  const infoListContent = await page.$eval(
    '[data-testid="constellation-info-list"]',
    (ul) => ul.textContent
  )
  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(IMG_PREFIX_IMAGE_URL)).toBeTruthy()
  expect(infoListContent?.length).toBeGreaterThan(0)
})
