import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { expect, test } from "@playwright/test"
import { KEYS_DATA_TESTID } from "../utils/org/keys"

test.describe("Flow_ORG", () => {
  test.skip("3° page from 2° page", async ({ page }) => {
    test.info().annotations.push({
      type: "Screenshot of 3° page from 2° page",
      description:
        "When the user click on 'View Profile' from the 2° page, the 3° page should be displayed. Right now, the user should move from the 1° page, to the 2° page to reach safetely the 3° page",
    })

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

    const theConcent = await page.getByTestId(
      KEYS_DATA_TESTID.INDEX_D_ORG_RESULTS
    )

    await theConcent.waitFor({ state: "visible" })

    const buttonViewProfile = await page.getByTestId("record_name_here_1")

    await buttonViewProfile.waitFor({ state: "visible" })

    await buttonViewProfile.click()

    await expect(page).toHaveURL("/org/detail/record_name_here_1")

    await page
      .getByTestId(KEYS_DATA_TESTID.INDEX_D_ORG_DETAILS)
      .waitFor({ state: "visible" })

    const optionsToHaveScreenshot = {
      fullPage:
        false /* Here the "fullPage" was turned to false because some components have a dinamic render amount of lines and text. In the future is suggested to add "fullPage: true" for static pages and test dynamic components with vitest + RTL or "test-components" from playwright  */,
      maxDiffPixelRatio: 0.02,
      maxDiffPixels: 999 /* on "webkit" the difference of pixels are huge because for some reason webkit lift everything some pixels */,
    }

    await expect(page).toHaveScreenshot(optionsToHaveScreenshot)
  })
})
