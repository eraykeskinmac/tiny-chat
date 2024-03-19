import { Store } from "./types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create<Store>()(devtools((set, get) => ({})));
