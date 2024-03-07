import { create } from 'zustand'

const useModalStore = create(set => ({
  openModal: '',
  actions: {
    setOpenModal: (modalName: string) => set(() => ({ openModal: modalName })),
  },
}))

export const useOpenModal = () => useModalStore((state: any) => state.openModal)
export const useModalStoreActions = () =>
  useModalStore((state: any) => state.actions)
