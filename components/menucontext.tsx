"use client";
import { createContext, useContext, useState } from "react";

const MenuContext = createContext<{ menuClick: boolean; setMenuClick: (val: boolean) => void } | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
    const [menuClick, setMenuClick] = useState(false);

    return <MenuContext.Provider value={{ menuClick, setMenuClick }}>{children}</MenuContext.Provider>;
}

export function useMenu() {
    const context = useContext(MenuContext);
    if (!context) throw new Error("useMenu must be used within a MenuProvider");
    return context;
}