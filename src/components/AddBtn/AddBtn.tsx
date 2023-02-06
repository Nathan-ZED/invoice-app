import * as React from 'react';
import plusIcon from '../../assets/images/icon-plus.svg'

type Props = {

};
export const AddBtn = (props: Props) => {
    return (
        <button type='button'
                className='h-[44px] flex items-center justify-between bg-mainPurple text-white p-1 rounded-full'>
            <div className='w-[32px] h-[32px] bg-lightBlueGrey rounded-full flex justify-center items-center'>
                <img src={plusIcon} className='w-[10px]' alt="add an invoice" />
            </div>
            <span className='font-[15px] px-2'>New</span>
        </button>
    );
};