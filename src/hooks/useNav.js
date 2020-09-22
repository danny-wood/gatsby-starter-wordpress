import React, { useReducer, createContext, useContext } from "react"

const initialState = {
  activeSlug: null,
  mobileNavOpen: false,
}

const navContext = createContext(initialState)
const { Provider } = navContext

export const useNav = () => {
  const { state: navState, dispatch: navDispatch } = useContext(navContext)
  return {
    navState,
    navDispatch,
  }
}

export function NavProvider({ children }) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "TOGGLE_SUBNAV": {
        return {
          ...state,
          activeSlug: action.slug,
        }
      }
      case "TOGGLE_MOBILE_NAV": {
        return {
          ...state,
          mobileNavOpen: !state.mobileNavOpen,
        }
      }
      case "CLOSE_MOBILE_NAV": {
        return {
          ...state,
          mobileNavOpen: false,
        }
      }
      default:
        throw new Error(`Invalid action for navigation context: ${action.type}`)
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
