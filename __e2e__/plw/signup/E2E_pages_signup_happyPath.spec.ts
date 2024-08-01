import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { expect, test } from "@playwright/test"
import { KEYS_DATA_TESTID } from "../utils/org/keys"

test.describe("Signup happy path", () => {
  test("All steps of signup: next", async ({ page }) => {
    await page.goto(`/${ALL_ROUTES.SIGNUP}`)

    await expect(page).toHaveURL(`/${ALL_ROUTES.SIGNUP}`)

    await page
      .getByTestId(KEYS_DATA_TESTID.INDEX_D_SIGNUP)
      .waitFor({ state: "visible" })

    await page.getByRole("link", { name: "Create an account" }).click()

    await expect(page).toHaveURL(
      `${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.WHO_ARE_YOU}`
    )

    await page
      .getByTestId(KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_WHO_ARE_YOU)
      .waitFor({ state: "visible" })

    await page.getByRole("link", { name: "I'm a professional" }).click()

    await expect(page).toHaveURL(
      `${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE}`
    )

    await page
      .getByTestId(KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_CREATE_PROFILE)
      .waitFor({ state: "visible" })

    await page.getByRole("link", { name: "Build manually" }).click()

    await expect(page).toHaveURL(
      `${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.DEMOGRAPHY}`
    )

    await page
      .getByTestId(KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_DEMOGRAPHY)
      .waitFor({ state: "visible" })

    await page.getByRole("link", { name: "next" }).click()

    await expect(page).toHaveURL(
      `${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.SITUATION}`
    )

    await page
      .getByTestId(KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_SITUATION)
      .waitFor({ state: "visible" })

    await page.getByRole("link", { name: "next" }).click()

    await expect(page).toHaveURL(
      `${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.TELL_US_YOUR_STORY}`
    )

    await page
      .getByTestId(KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_TELL_US_YOUR_STORY)
      .waitFor({ state: "visible" })

    await page.getByRole("link", { name: "save" }).click()

    await expect(page).toHaveURL(
      `${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.REVIEW_AND_SAVE}`
    )

    const theModal = await page.getByTestId(
      KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_REVIEW_DIALOG
    )

    await theModal.waitFor({ state: "visible" })

    await theModal.press("Escape")

    await page
      .getByTestId(KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_REVIEW_AND_SAVE)
      .waitFor({ state: "visible" })

    await page.getByRole("link", { name: "finish" }).click()

    await expect(page).toHaveURL(
      `${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.FINISH}`
    )

    await page
      .getByTestId(KEYS_DATA_TESTID.SIGNUP_STEPS.SUS_FINISH)
      .waitFor({ state: "visible" })

    const getLogo = page.getByTestId(KEYS_DATA_TESTID.LOGO)

    await getLogo.waitFor({ state: "visible" })

    await getLogo.click()

    await expect(page).toHaveURL(`${ALL_ROUTES.HOME}`)

    await page
      .getByTestId(KEYS_DATA_TESTID.INDEX_D_HOME)
      .waitFor({ state: "visible" })
  })

  test("All steps of signup: back", async ({ page }) => {
    await page.goto(
      `/${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.TELL_US_YOUR_STORY}`
    )

    await expect(page).toHaveURL(
      `${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.TELL_US_YOUR_STORY}`
    )

    await page.getByRole("link", { name: "back" }).click()

    await expect(page).toHaveURL(
      `${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.SITUATION}`
    )

    await page.getByRole("link", { name: "back" }).click()

    await expect(page).toHaveURL(
      `${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.DEMOGRAPHY}`
    )

    await page.getByRole("link", { name: "back" }).click()

    await expect(page).toHaveURL(
      `${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.CREATE_PROFILE}`
    )

    await page.getByRole("link", { name: "back" }).click()

    await expect(page).toHaveURL(
      `${ALL_ROUTES.SIGNUP}/${ALL_ROUTES.SIGNUP_STEPS.WHO_ARE_YOU}`
    )
  })
})
