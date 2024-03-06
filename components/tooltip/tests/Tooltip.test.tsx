import "@testing-library/jest-dom/vitest"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"
import { Tooltip } from "../Tooltip"

describe(`Testing ${Tooltip.name}`, (ctx_describe) => {
  afterEach(async () => {
    cleanup()
  })

  it(`${Tooltip.name} __spanshot__`, async (ctx_it) => {
    await expect(render(<Tooltip />)).toMatchFileSnapshot(
      `./__snapshots__/${Tooltip.name}.html`
    )
  })

  it(`${Tooltip.name} data is showed when is hover`, async (ctx) => {
    let { container } = render(<Tooltip />)
    const user = userEvent.setup()

    const getContainerOfTooltip = screen.getByLabelText("tooltip showing data")
    let isHover = false

    getContainerOfTooltip.addEventListener("mouseover", () => {
      isHover = true
    })

    getContainerOfTooltip.addEventListener("mouseout", () => {
      isHover = false
    })

    getContainerOfTooltip.addEventListener("keydown", (e) => {
      if (e.key === "Escape") isHover = false
    })

    expect(isHover).toBeFalsy()

    await user.hover(getContainerOfTooltip)
    expect(isHover).toBeTruthy()
    expect(screen.getByRole("tooltip")).toBeInTheDocument()
    expect(Array.from(container.querySelectorAll("div")).length).toBe(2)

    await user.unhover(getContainerOfTooltip)
    expect(isHover).toBeFalsy()
    expect(Array.from(container.querySelectorAll("div")).length).toBe(1)

    await user.hover(getContainerOfTooltip)
    expect(isHover).toBeTruthy()
    expect(screen.getByRole("tooltip")).toBeInTheDocument()
    expect(Array.from(container.querySelectorAll("div")).length).toBe(2)

    fireEvent.keyDown(getContainerOfTooltip, { key: "Escape" })
    expect(isHover).toBeFalsy()
    expect(Array.from(container.querySelectorAll("div")).length).toBe(1)

    await user.unhover(getContainerOfTooltip)
    await user.hover(getContainerOfTooltip)
    expect(isHover).toBeTruthy()
    expect(screen.getByRole("tooltip")).toBeInTheDocument()
    expect(Array.from(container.querySelectorAll("div")).length).toBe(2)

    fireEvent.keyDown(getContainerOfTooltip, { key: "Escape" })
    expect(isHover).toBeFalsy()
    expect(Array.from(container.querySelectorAll("div")).length).toBe(1)
  })

  it(`${Tooltip.name}  data is showed when is focus`, async (ctx) => {
    render(<Tooltip />)
    const user = userEvent.setup()

    const getContainerOfTooltip = screen.getByLabelText("tooltip showing data")

    await user.tab()

    expect(getContainerOfTooltip).toHaveFocus()

    await user.tab()

    expect(getContainerOfTooltip).not.toHaveFocus()

    await user.tab()

    expect(getContainerOfTooltip).toHaveFocus()
  })
})
