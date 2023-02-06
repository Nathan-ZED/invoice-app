import * as React from 'react';
import logo from '../../assets/images/logo.svg';
import moon from '../../assets/images/icon-moon.svg';
import sun from '../../assets/images/icon-sun.svg';
import mainAvatar from '../../assets/images/avatar.jpg';
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext} from "react";

type Props = {

};
export const Navigation = (props: Props) => {
    const { theme, setTheme } = useContext(ThemeContext);

    const checkTheme = () => {
        return theme === 'light' ? 'dark' : 'light';
    }

    return (
        <nav className='bg-lightDark flex items-center h-[72px] justify-between p-y overflow-hidden'>
            <div className='bg-mainPurple w-[72px] rounded-r-2xl min-h-full relative overflow-hidden'>
                <img src={logo} className='absolute z-10 top-5 left-5' alt='logo' />
                <div className='bg-lightPurple rounded-tl-3xl absolute top-7 z-2 w-full h-full'></div>
            </div>
            <div className='flex items-center justify-center'>
                <button
                    type='button'
                    onClick={() => setTheme(checkTheme())}
                >
                    {
                        theme === 'light'
                            ? <img src={moon} alt='go to dark mode' />
                            : <img src={sun} alt='go to light mode' />

                    }
                </button>
                <div className='border-l border-l-blueGrey max-h-full px-4 py-3 ml-3'>
                    <img src={mainAvatar} className='rounded-full w-[3.2rem] h-auto' alt='user picture' />
                </div>
            </div>
        </nav>
    );
};