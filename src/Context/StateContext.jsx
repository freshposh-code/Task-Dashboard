import { createContext, useContext, useState } from "react";


const StateContext = createContext();


export const StateContextProvider = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };
    const [activeItem, setActiveItem] = useState(2);

    const handleClickItem = (index) => {
        setActiveItem(index);
    };

    const [isSection1Active, setIsSection1Active] = useState(true);

    const handleSectionToggle = () => {
        setIsSection1Active(!isSection1Active);
    };

    return <StateContext.Provider value={{ activeIndex, handleClick, activeItem, handleClickItem, isSection1Active, handleSectionToggle }}>
        {children}
    </StateContext.Provider>
}

export const useSetState = () => useContext(StateContext);
