import { create } from "zustand";
import { createJSONStorage, persist} from "zustand/middleware"

type ProductStoreProps = {
  count: number;
  addCount: () => void;
  removeCount: () => void;
};

export const useProductStore = create<ProductStoreProps>()(

  persist (

    (set) => ({
    count: 0,
    addCount() {
      set((state) => ({ count: state.count + 1 }));
    },
    removeCount() {
      set((state) => ({ count: state.count - 1 }));
    },
  }), 

  {
    name: "product-store",
    storage: createJSONStorage (() => sessionStorage)
  }

  )
  
  


);
