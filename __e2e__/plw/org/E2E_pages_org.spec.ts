import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { expect, test } from "@playwright/test"
import { KEYS_DATA_TESTID } from "../utils/org/keys"

test.describe("Flow_ORG", () => {
  test("1° page", async ({ page }) => {
    await page.goto(`/${ALL_ROUTES.ORG}`)

    await page
      .locator(`[data-testid="${KEYS_DATA_TESTID.LOADING_COMPONENT}"]`)
      .waitFor({ state: "hidden" })

    await page
      .locator(`[data-testid="${KEYS_DATA_TESTID.INDEX_D_ORG_HOME}"]`)
      .waitFor({ state: "visible" })

    const optionsToHaveScreenshot = {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
      maxDiffPixels: 999 /* on "webkit" the difference of pixels are huge because for some reason webkit lift everything some pixels */,
    }

    /*
     * This will create the folder: «E2E_Tst_Scrn.spec.ts-snapshots» with folder «__screenshots__» inside that contain the screenshots for the three browsers: firefox, chromium and webkit
     * You only need to triger the normal test on the terminal, the very first time will throw an error because the folder and files doesn't exist, but the second time it should work
     * In order to prevent the first error you can run this command: «npx playwright test --update-snapshots "$1"» wheren "$1" is the name of the test file that have the method toHaveScreenshot
     
     * The method «await page.screenshot(options)» and «await expect(page).toHaveScreenshot(pathToMyScreenshot)» are different. So, do not try to make one depend on the other
     */

    await expect(page).toHaveScreenshot(optionsToHaveScreenshot)
  })
})
