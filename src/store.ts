import { create } from "zustand";
import { persist } from "zustand/middleware";

const useWalletStore = create(persist(
  (set) => ({
    isConnectedToWallet: false,
    balance: 0,

    connectToWallet: () => set({ isConnectedToWallet: true }),
    disconnectFromWallet: () => set({ isConnectedToWallet: false }),
    setBalance: (balance: number) => set({ balance: balance })
  }),
  {
    name: 'wallet-storage',
    getStorage: () => localStorage,
  }
));

const useMachineStore = create(persist(
  (set) => ({
    machines: [],
    setMachines: (machines: any) => set({ machines: machines })
  }),
  {
    name: 'machine-storage',
    getStorage: () => localStorage
  }
))


export { useWalletStore, useMachineStore };