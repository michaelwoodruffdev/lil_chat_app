import React from 'react';
import SigninPage from './views/SigninPage';
import { ThemeProvider, darkTheme } from './context/ThemeContext';

export interface AppProps { }

const App: React.FC<AppProps> = () => {
    return (
        <ThemeProvider value={darkTheme}>
            <SigninPage />
        </ThemeProvider>
    );
}

export default App;
