import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { expect, test } from "@playwright/test"
import { KEYS_DATA_TESTID } from "../utils/org/keys"

test.describe("Flow_ORG", () => {
  test("3° page from 1° page", async ({ page }) => {
    await page.goto(`/${ALL_ROUTES.ORG}`)

    await page
      .getByTestId(KEYS_DATA_TESTID.LOADING_COMPONENT)
      .waitFor({ state: "hidden" })

    await page
      .getByTestId(KEYS_DATA_TESTID.INDEX_D_ORG_HOME)
      .waitFor({ state: "visible" })

    const buttonSeeAll = await page.getByTestId(
      "government_contracted_office_record_name_here_2"
    )

    await buttonSeeAll.waitFor({ state: "visible" })

    await buttonSeeAll.click()

    await expect(page).toHaveURL("/org/detail/record_name_here_2")

    await page
      .getByTestId(KEYS_DATA_TESTID.INDEX_D_ORG_DETAILS)
      .waitFor({ state: "visible" })

    const optionsToHaveScreenshot = {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
      maxDiffPixels: 999,
    }

    await expect(page).toHaveScreenshot(optionsToHaveScreenshot)
  })
})
