import React, { ReactNode, useState, createContext, useEffect } from 'react';

interface IThemeContext {
    theme: string,
    setTheme: Function,
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

interface IProps {
    children: ReactNode;
}


export function ThemeContextProvider({ children }: IProps): JSX.Element {

    const [theme, setTheme] = useState('light')

    const toggleTheme = (theme:string) => {
        theme === 'light'
        ? document.body.dataset.theme = "light"
        : document.body.dataset.theme= "dark"
    }

    useEffect(() => {
        toggleTheme(theme)
    },[theme])
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
        );
}

