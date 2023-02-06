import * as React from 'react';
import {useContext, useState} from "react";
import dropIcon from '../../assets/images/icon-arrow-down.svg'
import { ThemeContext } from "../../contexts/ThemeContext";

type Props = {
    
};
export const FilterBtn = (props: Props) => {

    const theme = document.body.dataset.theme
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative'>
            <button type='button'
                    className='flex items-center justify-center'
                    onClick={() => setIsOpen(!isOpen)}>
                <span className='pr-[12px]'>Filter</span>
                <img src={dropIcon} className={`transition-all duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} alt='dropdown icon' />
            </button>
            {
                isOpen
                    ? <div className={`flex-col items-center justify-between absolute translate-y-2 rounded-2xl ${theme === 'dark' ? 'bg-veryDark' : 'bg-white'} p-3`}>
                        <button type='button' className='flex items-center w-full justify-between pb-2'>
                            <span className='text-green pr-3'>Paid</span>
                            <div className='rounded-full bg-green w-[8px] h-[8px]'></div>
                        </button>
                        <button type='button' className='flex items-center w-full justify-between pb-2'>
                            <span className='text-orange pr-3'>Pending</span>
                            <div className='rounded-full bg-orange w-[8px] h-[8px]'></div>
                        </button>
                    </div>
                    : null
            }

        </div>
    );
};