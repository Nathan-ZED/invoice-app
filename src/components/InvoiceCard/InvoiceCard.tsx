import * as React from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";
import { InvoiceContext } from "../../contexts/InvoiceContext";
import {useContext, useEffect} from "react";

type Props = {
    invoice: {
        id: string,
        clientName: string,
        paymentDue: string,
        items: [{total: string}],
        status: string }
    ;
};
export const InvoiceCard = ({ invoice }:Props) => {
    const { setSelectedInvoice, selectedInvoice } = useContext(InvoiceContext);
    const { theme } = useContext(ThemeContext)

    return (
        <div
            role='listitem'
            className={`${theme === 'dark' ? 'bg-veryDark' : 'bg-fullWhite'} w-full p-[24px] rounded-lg shadow-lg shadow-blueGrey/10 mb-5`}>
            <button type="button"
                    className='w-full'
                    onClick={() =>  setSelectedInvoice(invoice)}>
                <div className='flex items-center justify-between w-full'>
                    <p className='font-semibold text-blueGrey'>#<span className={`${theme === 'dark' ? 'text-white' : 'text-dark'}`}>{invoice.id}</span></p>
                    <span className='font-regular text-blueGrey pb-7'>{invoice.clientName}</span>
                </div>
                <div className='flex items-end justify-between'>
                    <div className='flex flex-col items-start justify-center'>
                        <span className='font-regular text-blueGrey'>Due {invoice.paymentDue}</span>
                        <span className={`text-[20px] font-bold ${theme === 'dark' ? 'text-white' : 'text-dark'} pb-6`}>{invoice.items[0].total} €</span>
                    </div>
                    {
                        invoice.status === 'paid'
                            ?   <span className='bg-lightGreen px-[20px] py-[20px] rounded-md flex items-center'>
                                    <div className='rounded-full bg-green w-[8px] h-[8px] mr-3'></div>
                                    <span className='text-green'>Paid</span>
                                </span>
                            :   <span className='bg-lightOrange px-[20px] py-[20px] rounded-md flex items-center'>
                                    <div className='rounded-full bg-orange w-[8px] h-[8px] mr-3'></div>
                                    <span className='text-orange'>Pending</span>
                                </span>
                    }
                </div>
            </button>
        </div>
    );
};