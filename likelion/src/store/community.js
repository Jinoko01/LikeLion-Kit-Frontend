import { create } from "zustand";

export const community = create((set) => ({
  category: {
    track: "",
    group: "",
  },
  write: {
    title: "",
    content: "",
  },
  changeField: (type, name, value) =>
    set((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [name]: value,
      },
    })),
  initializeCommunity: () =>
    set((prev) => ({
      category: {
        track: "",
        group: "",
      },
      write: {
        title: "",
        content: "",
      },
    })),
}));
