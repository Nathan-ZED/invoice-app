import * as React from 'react';
import backIcon from '../../assets/images/icon-arrow-left.svg'
import { InvoiceContext } from "../../contexts/InvoiceContext";
import {useContext} from "react";

type Props = {

};
export const ShowInvoicePopup = (props: Props) => {

    const { selectedInvoice, setSelectedInvoice } = useContext(InvoiceContext);
    const {
        id,
        description,
        clientName,
        clientEmail,
        senderAddress,
        clientAddress,
        createdAt,
        paymentDue,
    } = selectedInvoice;
    const { city, street, postCode, country } = senderAddress;

    return (
        <div className='fixed top-0 left-0 w-full h-full bottom-0'>
            <div className='bg-veryDark/30 backdrop-blur-sm w-full h-full absolute top-0 left-0 z-15'></div>
            <div className='w-full h-full absolute top-0 left-0 z-20 py-10 px-5'>
                <div className='bg-fullWhite rounded-md p-8'>
                    <button onClick={() => setSelectedInvoice(null)} type='button' className='font-semibold text-xl flex items-center'>
                        <img src={backIcon} alt='back' className='h-auto w-[12px] mr-2' />
                        <span className='h-auto'>Go Back</span>
                    </button>
                    <div className='flex items-center justify-between'>
                        <span>Status</span>
                        {
                            selectedInvoice.status === 'paid'
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
                        <p>#<span className='font-semibold'>{id}</span></p>
                    <span className='text-blueGrey'>{description}</span>

                    <div className='flex flex-col py-5'>
                        <span className='text-blueGrey'>{street}</span>
                        <span className='text-blueGrey'>{city}</span>
                        <span className='text-blueGrey'>{postCode}</span>
                        <span className='text-blueGrey'>{country}</span>
                    </div>

                    <div className='flex items-start justify-between'>
                        <div className="flex flex-col">
                            <div className='flex flex-col pb-5'>
                                <h3 className='text-blueGrey'>Invoice Date</h3>
                                <span className='font-bold text-xl'>{createdAt}</span>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-blueGrey'>Payment Due</h3>
                                <span className='font-bold text-xl'>{paymentDue}</span>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-blueGrey'>Bill To</span>
                            <span className='font-bold text-xl pb-7'>{clientName}</span>
                            <span className='text-blueGrey'>{clientAddress.street}</span>
                            <span className='text-blueGrey'>{clientAddress.city}</span>
                            <span className='text-blueGrey'>{clientAddress.postCode}</span>
                            <span className='text-blueGrey'>{clientAddress.country}</span>
                        </div>
                    </div>

                    <div className='flex flex-col py-10'>
                        <span className='text-blueGrey'>Sent To</span>
                        <span className='text-dark font-bold text-xl'>{clientEmail}</span>
                    </div>

                    <div className=''>
                        <div className='px-3 py-5 bg-white rounded-t-lg'>
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex flex-col py-2'>
                                    <span className='font-medium text-xl mb-2'>Banner Design</span>
                                    <span className='text-grey'>1 x 200€</span>
                                </div>
                                <span>200 €</span>
                            </div>
                        </div>
                        <div className='bg-veryDark text-fullWhite flex items-center rounded-b-lg justify-between px-3 py-5'>
                            <span className='text-xl'>Grand total</span>
                            <span className='text-xl font-medium py-5 leading-[5px]'>300 €</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-fullWhite fixed bottom-0 left-0 right-0 py-5 flex items-center justify-between px-3'>
                <button
                    type='button'
                    className='bg-lightBlueGrey text-grey rounded-full px-5 py-2 text-2xl'>
                    Edit
                </button>
                <button
                    type='button'
                    className='bg-red text-fullWhite rounded-full px-5 py-2 text-2xl'>
                    Delete
                </button>
                <button
                    type='button'
                    className='bg-mainPurple text-fullWhite rounded-full px-5 py-2 text-2xl'>
                    Mark as paid
                </button>
            </div>
        </div>
    );
};