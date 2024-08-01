import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { expect, test } from "@playwright/test"
import { KEYS_DATA_TESTID } from "../utils/org/keys"

test.describe("Testing Home", () => {
  test("Nothing change", async ({ page }) => {
    await page.goto(`${ALL_ROUTES.HOME}`)

    await page
      .getByTestId(KEYS_DATA_TESTID.INDEX_D_HOME)
      .waitFor({ state: "visible" })

    await expect(page).toHaveURL("/")

    const optionsToHaveScreenshot = {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
      maxDiffPixels: 999,
    }

    await expect(page).toHaveScreenshot(optionsToHaveScreenshot)
  })
})
