import { create } from "zustand";

export const auth = create((set) => ({
  register: {
    email: "",
    name: "",
    password: "",
    track: "",
    major: "",
  },
  login: {
    email: "",
    password: "",
  },
  changeField: (form, key, value) =>
    set((prev) => ({
      ...prev,
      [form]: {
        ...prev[form],
        [key]: value,
      },
    })),
  initializeForm: (form) => {
    for (let key in form) {
      form[key] = "";
    }
    return set((prev) => ({
      ...prev,
      ...form,
    }));
  },
}));

export const user = create((set) => ({
  uesr: {
    email: "",
    name: "",
    password: "",
    track: "",
    major: "",
    role: "",
  },
}));
