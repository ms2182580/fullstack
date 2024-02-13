import { HeaderProgressWrapper } from "./styles/HeaderProgressWrapper"

export const HeaderProgress = () => {
  let data = [
    {
      name: "1. Who are you",
    },
    {
      name: "2. Create profile",
    },
    {
      name: "3. Tell us your story",
    },
    {
      name: "3. Review and save",
    },
  ]
  return (
    <HeaderProgressWrapper>
      <div></div>
      <span></span>
      <div>
        {data.map((item) => (
          <div key={item.name}>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </HeaderProgressWrapper>
  )
}
