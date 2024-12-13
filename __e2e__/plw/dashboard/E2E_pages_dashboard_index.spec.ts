import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { expect, test } from "@playwright/test"
import { KEYS_DATA_TESTID } from "../utils/org/keys"

test.describe("On Dashboard Testing Home ", () => {
  test.skip("Nothing change", async ({ page }) => {
    await page.goto(`${ALL_ROUTES.DASHBOARD}`)

    await page
      .getByTestId(KEYS_DATA_TESTID.INDEX_D_DASHBOARD_HOME)
      .waitFor({ state: "visible" })

    await expect(page).toHaveURL(`${ALL_ROUTES.DASHBOARD}`)

    const optionsToHaveScreenshot = {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
      maxDiffPixels: 999,
    }

    await expect(page).toHaveScreenshot(optionsToHaveScreenshot)
  })
})
