import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { expect, test } from "@playwright/test"
import { KEYS_DATA_TESTID } from "../utils/org/keys"

test.describe("Flow_ORG", () => {
  test.skip("1° page", async ({ page }) => {
    await page.goto(`/${ALL_ROUTES.ORG}`)

    await page
      .getByTestId(KEYS_DATA_TESTID.LOADING_COMPONENT)
      .waitFor({ state: "hidden" })

    await page
      .getByTestId(KEYS_DATA_TESTID.INDEX_D_ORG_HOME)
      .waitFor({ state: "visible" })

    const optionsToHaveScreenshot = {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
      maxDiffPixels: 999,
    }

    await expect(page).toHaveScreenshot(optionsToHaveScreenshot)
    /* // !FH1
    This is good for now, in the future the test should be:
      - Test when the user use the inner navigation bar, this mean:
        + Click on every button (category) working: styles of the button after the click; styles of the button when the user hover the mouse there; data is displayed after the click
        + The user can make an horizontal scroll when he put the mouse hover the innver bar and scroll down or up
        + The user should be able to use the inner navigation bar with the keyboard: on every button (category) should be have a focus-visible, the button should be usable with "enter" key
    */
  })
})
