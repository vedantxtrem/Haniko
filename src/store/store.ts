import { create } from 'zustand';

interface ColorState {
    color: string | null;
    changeColor: (newColor: string) => void;
}

const useStoreColor = create<ColorState>((set) => ({
    color: null,
    changeColor: (newColor: string) => set({ color: newColor }),
}));

export default useStoreColor;
