import React, { useReducer, createContext, useContext } from "react"

const initialState = {
  activeSlug: null,
  navFixed: true,
}

const navContext = createContext(initialState)
const { Provider } = navContext

export const useNav = () => {
  const { state: navState, dispatch: navDispatch } = useContext(navContext)

  const closeSubNav = () => {
    navDispatch({
      type: "CLOSE_SUBNAV",
    })
  }

  const openSubNav = activeSlug => {
    navDispatch({
      type: "OPEN_SUBNAV",
      activeSlug,
    })
  }

  return {
    navState,
    navDispatch,
    closeSubNav,
    openSubNav,
  }
}

export function NavProvider({ children }) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "OPEN_SUBNAV": {
        return {
          ...state,
          activeSlug: action.activeSlug,
        }
      }
      case "CLOSE_SUBNAV": {
        return {
          ...state,
          activeSlug: null,
        }
      }
      case "FIX_NAV": {
        return {
          ...state,
          navFixed: true,
        }
      }
      case "UNFIX_NAV": {
        return {
          ...state,
          navFixed: false,
        }
      }
      default:
        throw new Error(`Invalid action for navigation context: ${action.type}`)
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
