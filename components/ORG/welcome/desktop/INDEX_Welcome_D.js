import { KEYS_VALUES_useSessionStorage, useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"
import { Welcome_D_0 } from "./Welcome_D_0"
import { Welcome_D_1 } from "./Welcome_D_1"
import { INDEX_Welcome_DWrapper } from "./styles/INDEX_Welcome_DWrapper"

const displayComponents = [
  { component: Welcome_D_0, componentName: Welcome_D_0.name },
  { component: Welcome_D_1, componentName: Welcome_D_1.name },
]

export const INDEX_Welcome_D = () => {
  const [taskCompleted, setTaskCompleted] = useState(false)
  const [whichComponentShow, setWhichComponentShow] = useState(0)

  let handleNextComponent = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setWhichComponentShow((prevState) => prevState + 1)
    }
  }

  let handlePreviousComponent = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setWhichComponentShow((prevState) => prevState - 1)
    }
  }

  let handleTaskCompleted = (e, haveAtLeastOneMatch = false, userTypeAtLeastSomething = "") => {
    if ((e.type === "click" || e.key === "Enter") && haveAtLeastOneMatch && userTypeAtLeastSomething !== "") {
      setTaskCompleted(true)
    }
  }

  let { setActualSessionStorage, setReachWelcome, reachTypedFlow, cancelWelcomePath } = useSessionStorage_typedFlow()

  const router = useRouter()

  useEffect(() => {
    setReachWelcome(true)
  }, [])

  useEffect(() => {
    return () => {
      /*
       * This prevent the user of leave the page if the codition «taskCompleted» is false &&
       * If the user do not reached the typed-flow yet */
      if (!taskCompleted && !reachTypedFlow && !cancelWelcomePath) {
        router.push("/ORG/welcome")
      }
    }
  }, [taskCompleted])

  useEffect(() => {
    /*
     * This move the user to the typed-flow page when «taskCompleted» is true &&
     * If the user do not reach the typed-flow yet */
    if (taskCompleted && !reachTypedFlow) {
      setActualSessionStorage(KEYS_VALUES_useSessionStorage.SESSION_STORAGE_SECOND)

      router.push("/ORG/typed-flow")
    }
  }, [taskCompleted])

  useEffect(() => {
    /*
     * This prevent the user of access again to /welcome if they reach the third page already  &&
     * If the user already reached once typed-flow */

    if (reachTypedFlow) {
      router.push("/ORG/typed-flow")
    }
  }, [reachTypedFlow])

  useEffect(() => {
    /*
     * Move the user to ORG if they decide to click or press enter on X button
     */

    if (cancelWelcomePath) {
      setActualSessionStorage(KEYS_VALUES_useSessionStorage.SESSION_STORAGE_SECOND)
      router.push("/")
    }
  }, [cancelWelcomePath])

  return (
    <INDEX_Welcome_DWrapper taskCompleted={taskCompleted}>
      {!reachTypedFlow &&
        displayComponents.map((x, index) => {
          if (index === whichComponentShow) {
            return (
              <>
                <Fragment key={`${x.componentName}_${index}`}>
                  <x.component
                    handleNextComponent={handleNextComponent}
                    handleTaskCompleted={handleTaskCompleted}
                    handlePreviousComponent={handlePreviousComponent}
                  />
                </Fragment>
              </>
            )
          }
        })}
    </INDEX_Welcome_DWrapper>
  )
}
