import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { expect, test } from "@playwright/test"
import { KEYS_DATA_TESTID } from "../../utils/org/keys"

test.describe("Screenshot", () => {
  test.skip("Situation", async ({ page }) => {
    await page.goto(
      `/${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.SITUATION}`
    )

    await expect(page).toHaveURL(
      `/${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.SITUATION}`
    )

    await page
      .getByTestId(KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_SITUATION)
      .waitFor({ state: "visible" })

    const optionsToHaveScreenshot = {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
      maxDiffPixels: 999,
    }

    await expect(page).toHaveScreenshot(optionsToHaveScreenshot)
  })
})
