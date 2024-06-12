import {create} from 'zustand'

interface Props {
    isOpen : boolean;
    username: string;
    onOpen : (username: string) => void;
    onclose : () => void;
}

export const useModalStore = create<Props>((set) => {
    return {
        isOpen : false,
        username: "",
        onOpen : (newUsername) => set({isOpen : true, username: newUsername}),
        onclose : () => set({isOpen : false , username: undefined})
    }

    
})