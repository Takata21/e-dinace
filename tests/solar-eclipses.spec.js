// @ts-check
import { test, expect } from '@playwright/test'

const IMG_PREFIX_IMAGE_URL = '/images/solarEclipses/'
const LOCALHOST_URL = 'http://localhost:5173/solar-eclipses/07781'

test('La aplicación muestra información y una imagen del eclipse lunar.', async ({
  page,
}) => {
  await page.goto(LOCALHOST_URL)
  await page.waitForTimeout(20000)

  const text = page.getByTestId('solar-eclipse-info')
  const image = page.getByTestId('solar-eclipse-image')
  console.log(text)
  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(IMG_PREFIX_IMAGE_URL)).toBeTruthy()
})
