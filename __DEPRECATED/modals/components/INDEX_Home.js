import {
  KEYS_VALUES_useSessionStorage,
  useSessionStorage_typedFlow,
} from "../context/Ctx_sessionStorage_typedFlow_Provider"

export const INDEX_Home = () => {
  let { actualSessionStorage } = useSessionStorage_typedFlow()

  if (
    actualSessionStorage !== KEYS_VALUES_useSessionStorage.SESSION_STORAGE_FIRST
  ) {
    return (
      <>
        <h1>HOME HERE</h1>
      </>
    )
  }

  return null
}
