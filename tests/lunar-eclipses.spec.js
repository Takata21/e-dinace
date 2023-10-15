// @ts-check
import { test, expect } from '@playwright/test'

const IMG_PREFIX_IMAGE_URL = '/images/lunarEclipse/'
const LOCALHOST_URL = 'http://localhost:5173/lunar-eclipses/02134'

test('La aplicación muestra información y una imagen del eclipse lunar.', async ({
  page,
}) => {
  await page.goto(LOCALHOST_URL)
  await page.waitForTimeout(10000)

  const text = page.getByTestId('lunar-eclipse-info')
  const image = page.getByTestId('lunar-eclipse-image')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(IMG_PREFIX_IMAGE_URL)).toBeTruthy()
})
