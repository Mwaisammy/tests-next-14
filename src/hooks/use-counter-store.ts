import { create } from 'zustand'


type Props = {
    count : number;
    increase : () => void;
    decrease: () => void;
}

export const useCounterStore = create<Props>((set, get) => ({
    count: 0,
    increase: () => {
        const currentCount = get().count;

        set({ count : currentCount + 1})
    },

    decrease: () => {
        // get the current count
        const currentCount = get().count;
        set({ count: currentCount - 1 })
    }
}))