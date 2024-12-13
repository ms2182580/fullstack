import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { expect, test } from "@playwright/test"
import { KEYS_DATA_TESTID } from "../utils/org/keys"

test.describe("Flow_ORG", () => {
  test.skip("2° page", async ({ page }) => {
    await page.goto(`/${ALL_ROUTES.ORG}`)

    await page
      .getByTestId(KEYS_DATA_TESTID.LOADING_COMPONENT)
      .waitFor({ state: "hidden" })

    await page
      .getByTestId(KEYS_DATA_TESTID.INDEX_D_ORG_HOME)
      .waitFor({ state: "visible" })

    const buttonSeeAll = await page.getByTestId("government_contracted_office")

    await buttonSeeAll.waitFor({ state: "visible" })

    await buttonSeeAll.click()

    await expect(page).toHaveURL("/org/results/government-contracted-office")

    const theResultsPage = page.getByTestId(
      KEYS_DATA_TESTID.INDEX_D_ORG_RESULTS
    )

    await theResultsPage.waitFor({ state: "visible", timeout: 3000 })

    const optionsToHaveScreenshot = {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
      maxDiffPixels: 999 /* on "webkit" the difference of pixels are huge because for some reason webkit lift everything some pixels */,
    }

    await expect(page).toHaveScreenshot(optionsToHaveScreenshot)
  })
})
