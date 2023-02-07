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

    const [theme, setTheme] = useState<any>(localStorage.getItem('theme'))

    const setThemeInStorage = (theme: string) => {
        localStorage.setItem('theme', theme)
    }

    useEffect(() => {
        if(!theme) {
            setThemeInStorage('light');
            setTheme('light');
            document.body.dataset.theme = 'light';
        }
    },[])

    useEffect(() => {
        if(theme) {
            setThemeInStorage(theme);
            document.body.dataset.theme = theme;
        }
    },[theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
        );
}

