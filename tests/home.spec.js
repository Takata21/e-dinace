import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Dirección Nacional de Ciencias Espaciales/)
})

test('should display the current lunar phase correctly', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await page.waitForTimeout(10000)
  // Seleccionar el primer article dentro del div
  const firstArticle = await page.$('div article:nth-child(1)')

  // Asegurarse de que el artículo se haya encontrado
  expect(firstArticle).not.toBeNull()

  // Seleccionar el span dentro del artículo
  const spanElement = await firstArticle.$('span')

  // Asegurarse de que el span se haya encontrado
  expect(spanElement).not.toBeNull()

  // Obtener el texto del span
  const spanText = await spanElement.textContent()

  // Verificar que el texto del span sea "Luna Creciente"
  expect(spanText).toBe('Luna Creciente')
})
test('should display the next solar eclipse info is correctly', async ({
  page,
}) => {
  await page.goto('http://localhost:5173/')
  await page.waitForTimeout(10000)
  const article = await page.waitForSelector(
    'article[data-test-id="solar-eclipse"]'
  )

  // Seleccionar el elemento con data-test-id igual a "date" dentro del <article>.
  const dateElement = await article.$('[data-test-id="date"]')
  const hourElement = await article.$('[data-test-id="hour"]')
  const durationElement = await article.$('[data-test-id="duration"]')

  const dateText = await dateElement.textContent()
  const hourText = await hourElement.textContent()
  const durationText = await durationElement.textContent()
  expect(dateText).toBe('2023 Oct 14')
  expect(hourText).toBe('18:00:41')
  expect(durationText).toBe('05m17s')
})
test('should display the next lunar eclipse info is correctly', async ({
  page,
}) => {
  await page.goto('http://localhost:5173/')
  await page.waitForTimeout(10000)
  const article = await page.waitForSelector(
    'article[data-test-id="lunar-eclipse"]'
  )

  // Seleccionar el elemento con data-test-id igual a "date" dentro del <article>.
  const dateElement = await article.$('[data-test-id="date"]')
  const hourElement = await article.$('[data-test-id="hour"]')
  const durationElement = await article.$('[data-test-id="duration"]')

  const dateText = await dateElement.textContent()
  const hourText = await hourElement.textContent()
  const durationText = await durationElement.textContent()
  expect(dateText).toBe('2023 Oct 28')
  expect(hourText).toBe('20:15:18')
  expect(durationText).toBe('01h17m')
})
