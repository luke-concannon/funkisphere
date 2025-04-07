"use client"

import { createContext, use, useRef, type ReactNode } from "react"
import { useStore } from "zustand"
import { createStore } from "zustand/vanilla"

interface HeaderState {
  showHeader: boolean
}

interface HeaderActions {
  setShowHeader: (show: boolean) => void
}

type HeaderStore = HeaderState & HeaderActions

const initHeaderStore = (): HeaderState => {
  return { showHeader: false }
}

const defaultInitState: HeaderState = {
  showHeader: false,
}

const createHeaderStore = (initState: HeaderState = defaultInitState) => {
  return createStore<HeaderStore>()((set) => ({
    ...initState,
    setShowHeader: (show: boolean) => {
      set({ showHeader: show })
    },
  }))
}

type HeaderStoreApi = ReturnType<typeof createHeaderStore>

const HeaderStoreContext = createContext<HeaderStoreApi | undefined>(undefined)

interface HeaderStoreProviderProps {
  children: ReactNode
}

export const HeaderStoreProvider = ({ children }: HeaderStoreProviderProps) => {
  const storeRef = useRef<HeaderStoreApi | null>(null)
  storeRef.current ??= createHeaderStore(initHeaderStore())

  return (
    <HeaderStoreContext value={storeRef.current}>{children}</HeaderStoreContext>
  )
}

export const useHeaderStore = <T,>(selector: (store: HeaderStore) => T): T => {
  const headerStoreContext = use(HeaderStoreContext)

  if (!headerStoreContext) {
    throw new Error(`useHeaderStore must be used within HeaderStoreProvider`)
  }

  return useStore(headerStoreContext, selector)
}
