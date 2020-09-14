import React, { useReducer, createContext } from "react"

export const NavigationStateContext = createContext()
export const NavigationDispatchContext = createContext()

const initialState = {
  activeSlug: null,
  mobileNavOpen: false,
}

function reducer(state, action) {
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
}

const useNavigation = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <NavigationStateContext.Provider value={state}>
      <NavigationDispatchContext.Provider value={dispatch}>
        {children}
      </NavigationDispatchContext.Provider>
    </NavigationStateContext.Provider>
  )
}

export default useNavigation
