import { createContext } from 'react';

export const darkTheme = {
    background_primary: '#333343',
    text_primary: '#efefef'
} as const;

export const ThemeContext = createContext(darkTheme);
export const ThemeProvider = ThemeContext.Provider;

export default ThemeContext;
