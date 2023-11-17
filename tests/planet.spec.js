// @ts-check
import { test, expect } from '@playwright/test'

const IMG_PREFIX_IMAGE_URL = '/images/planets/venus.png'
const LOCALHOST_URL = 'http://localhost:5173/planets/Venus'

test('app shows planet info and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)
  await page.waitForTimeout(10000)

  const text = page.getByTestId('planet-desc')
  const image = page.getByTestId('planet-img')
  //   const infoList = page.getByTestId('planet-info-list')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  const infoListContent = await page.$eval(
    '[data-testid="planet-info-list"]',
    (ul) => ul.textContent
  )
  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(IMG_PREFIX_IMAGE_URL)).toBeTruthy()
  expect(infoListContent?.length).toBeGreaterThan(0)
})
