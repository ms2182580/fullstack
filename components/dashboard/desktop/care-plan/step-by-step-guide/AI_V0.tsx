import { KeyboardEvent, useRef, useState } from "react"
// import "./TextContainer.css"

interface Entry {
  id: number
  text: string
}

export const AI_V0 = () => {
  const [entries, setEntries] = useState<Entry[]>([])
  const editorRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      const selection = window.getSelection()
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        const text = range.toString().trim()
        if (text) {
          const newEntry: Entry = { id: Date.now(), text }
          setEntries([...entries, newEntry])
          range.deleteContents()

          const container = document.createElement("span")
          container.className = "entry-container"
          container.setAttribute("data-id", newEntry.id.toString())

          const textNode = document.createTextNode(text)
          container.appendChild(textNode)

          const deleteButton = document.createElement("button")
          deleteButton.className = "delete-button"
          deleteButton.textContent = "×"
          deleteButton.onclick = () => handleDelete(newEntry.id)
          container.appendChild(deleteButton)

          range.insertNode(container)

          // Move cursor to the end
          const newRange = document.createRange()
          newRange.setStartAfter(container)
          newRange.collapse(true)
          selection.removeAllRanges()
          selection.addRange(newRange)
        }
      }
    }
  }

  const handleDelete = (id: number) => {
    setEntries(entries.filter((entry) => entry.id !== id))
    const container = editorRef.current?.querySelector(`[data-id="${id}"]`)
    if (container) {
      container.remove()
    }
  }

  return (
    <div className="text-container">
      <div
        ref={editorRef}
        className="editor"
        contentEditable={true}
        onKeyDown={handleKeyDown}
        suppressContentEditableWarning={true}
      />
    </div>
  )
}
