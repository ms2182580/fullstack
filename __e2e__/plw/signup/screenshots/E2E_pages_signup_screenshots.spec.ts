import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { expect, test } from "@playwright/test"
import { KEYS_DATA_TESTID } from "../../utils/org/keys"

test.describe("Screenshot", () => {
  test("Signup Home", async ({ page }) => {
    await page.goto(`/${ALL_ROUTES.SIGNUP}`)

    await expect(page).toHaveURL(`/${ALL_ROUTES.SIGNUP}`)

    await page
      .getByTestId(KEYS_DATA_TESTID.INDEX_D_SIGNUP)
      .waitFor({ state: "visible" })

    const optionsToHaveScreenshot = {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
      maxDiffPixels: 999,
    }

    await expect(page).toHaveScreenshot(optionsToHaveScreenshot)
  })
})
