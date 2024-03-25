import "@testing-library/jest-dom/vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"
import { Dialog_D, useDialogLogic } from "../Dialog_D"

const TestingDialog = ({ vOpenDialog, vCloseDialog }) => {
  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    checkModalIsOpen,
  } = useDialogLogic()

  let booleanToString = String(checkModalIsOpen)

  return (
    <div style={{ position: "relative" }}>
      <h1>{`React State: ${booleanToString}`}</h1>
      <span
        onClick={(e) => vOpenDialog({ event: e })}
        onKeyDown={(e) => vOpenDialog({ event: e })}
        tabIndex={0}
      >
        Open Dialog
      </span>
      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={(e) => vCloseDialog({ event: e })}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <div data-testid="children-dialog">
          <p>
            Some component as a child for Dialog: this data it shows when the
            dialog is open
          </p>
        </div>
      </Dialog_D>
    </div>
  )
}

describe(`Testing ${Dialog_D.name}`, (ctx_describe) => {
  afterEach(() => {
    // const vOpenDialog = vi.fn()
    // const vCloseDialog = vi.fn()

    cleanup()
    // render(
    //   <TestingDialog vOpenDialog={vOpenDialog} vCloseDialog={vCloseDialog} />
    // )
  })

  it(`${Dialog_D.name} is render`, (ctx_it) => {
    const vOpenDialog = vi.fn()
    const vCloseDialog = vi.fn()

    render(
      <TestingDialog vOpenDialog={vOpenDialog} vCloseDialog={vCloseDialog} />
    )
  })

  it(`${Dialog_D.name} is stablished: nothing should change`, async (ctx) => {
    const vOpenDialog = vi.fn()
    const vCloseDialog = vi.fn()

    await expect(
      render(
        <TestingDialog vOpenDialog={vOpenDialog} vCloseDialog={vCloseDialog} />
      )
    ).toMatchFileSnapshot(`./__snapshots__/${Dialog_D.name}.html`)
  })

  describe("Dialog is open plus React state for open", (ctx_describe) => {
    // !FH-Playwright → Do this with Playwright for better approach on the UI

    it("With click", async (ctx_it) => {
      const vOpenDialog = vi.fn()
      const vCloseDialog = vi.fn()

      render(
        <TestingDialog vOpenDialog={vOpenDialog} vCloseDialog={vCloseDialog} />
      )
      const getData = screen.getByText("Open Dialog")

      expect(getData).toBeInTheDocument()

      const user = userEvent.setup()

      await user.click(getData)

      expect(vOpenDialog).toHaveBeenCalledTimes(1)
    })

    it("With enter key", async (ctx_it) => {
      const vOpenDialog = vi.fn()
      const vCloseDialog = vi.fn()

      render(
        <TestingDialog vOpenDialog={vOpenDialog} vCloseDialog={vCloseDialog} />
      )

      const getData = screen.getByText("Open Dialog")
      expect(getData).toBeInTheDocument()

      const user = userEvent.setup()

      await user.tab()
      expect(getData).toHaveFocus()

      fireEvent.keyDown(getData, { key: "Enter" })
      expect(vOpenDialog).toHaveBeenCalledTimes(1)
    })
  })

  describe.todo(
    "Dialog is close plus React state for close",
    (ctx_describe) => {
      // !FH-Playwright → Do this with Playwright for better approach on the UI

      it("Clicking on X", async (ctx_it) => {})
      it("Clicking outside the modal", (ctx_it) => {})

      it("Pressing Enter on X when is focus", (ctx) => {})
      it("Pressing Escape", (ctx) => {})
    }
  )
})
