import { create } from "zustand";

export const community = create((set) => ({
  category: "",
  changeCategory: (select) => set((prev) => ({
    ...prev,
    category: select
  })),
  initializeCategory: () => set((prev) => ({
    ...prev,
    category: ""
  }))
}))