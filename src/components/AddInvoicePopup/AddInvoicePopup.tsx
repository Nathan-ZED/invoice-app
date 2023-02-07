import * as React from 'react';
import backIcon from '../../assets/images/icon-arrow-left.svg'
import { InvoiceContext } from "../../contexts/InvoiceContext";
import {useContext, useRef, useState} from "react";
import {ThemeContext} from "../../contexts/ThemeContext";
import {Item} from "../ShowInvoicePopup/Item/Item";
import trash from '../../assets/images/icon-delete.svg'

type Props = {

};
export const AddInvoicePopup = (props: Props) => {

    const { addMode, setAddMode } = useContext(InvoiceContext);
    const [items, setItems] = useState([
        {
            id: 1,
            createdAt: '',
            paymentDue: '',
            description: '',
            paymentTerms: '',
            clientName: '',
            clientEmail: '',
            status: '',
            senderAddress: {
                street: '',
                city: '',
                postCode: '',
                country: ''
            },
            clientAddress: {
                street: '',
                city: '',
                postCode: '',
                country: ''
            },
            items: [
                {
                    name: '',
                    quantity: '',
                    price: '',
                    total: ''
                }
            ],
            total: ''
        },
    ]);

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        console.log(e)
        setItems((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(items);
    }

    const form: any = useRef();
    //const inputs = form.current.querySelectorAll('input');

    const theme = document.body.dataset.theme;

    const addInvoice = () => {
        const local: any = localStorage.getItem('invoices');
        const json = JSON.parse(local);
        //unshift le nouvel item a local
        //setInvoices(local)
    }

    return (
        <div className='fixed z-20 top-0 left-0 w-full h-full bottom-0 transition-all'>
            <div className='bg-veryDark/30 backdrop-blur-sm w-full h-full absolute top-0 left-0 z-20'></div>
            <div className='w-full h-full absolute top-0 left-0 z-30 py-10 px-5 overflow-y-scroll'>
                <div className={`${theme === 'dark' ? 'bg-veryDark' : 'bg-fullWhite'} mb-20 overflow-y-scroll rounded-md p-8 z-30`}>
                    <button onClick={() => setAddMode(!addMode)} type='button' className='font-semibold text-xl flex items-center'>
                        <img src={backIcon} alt='back' className='h-auto w-[12px] mr-2' />
                        <span className='h-auto'>Go Back</span>
                    </button>
                    <h1 className='font-semibold text-3xl py-3'>New Invoice</h1>
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                        ref={form}>
                        <label className='text-blueGrey flex flex-col'>Street Adress
                            <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark' type="text" name="street" placeholder="12 avenue street" />
                        </label>
                        <div className='flex items-center w-full justify-between py-3'>
                            <label className='text-blueGrey flex flex-col'>City
                                <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark w-[90%]' type="text" name="city" placeholder="London" />
                            </label>
                            <label className='text-blueGrey flex flex-col'>Post Code
                                <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark w-full' type="text" name="postCode" placeholder="34332" />
                            </label>
                        </div>
                        <label className='text-blueGrey flex flex-col pb-5'>Country
                            <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark' type="text" name="country" placeholder="United Kingdom" />
                        </label>
                        <span className='text-mainPurple font-medium'>Bill To</span>
                        <label className='text-blueGrey flex flex-col py-3'>Client Name
                            <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark' type="text" name="clientName" placeholder="John doe" />
                        </label>
                        <label className='text-blueGrey flex flex-col py-3'>Client Email
                            <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark' type="email" name="clientEmail" placeholder="email@email.com" />
                        </label>
                        <label className='text-blueGrey flex flex-col py-3'>Street Address
                            <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark' type="text" name="client_street_address" placeholder="email@email.com" />
                        </label>
                        <div className='flex items-center w-full justify-between py-3'>
                            <label className='text-blueGrey flex flex-col'>City
                                <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark w-[90%]' type="text" name="client_city" placeholder="London" />
                            </label>
                            <label className='text-blueGrey flex flex-col'>Post Code
                                <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark w-full' type="text" name="client_post_code" placeholder="34332" />
                            </label>
                        </div>
                        <label className='text-blueGrey flex flex-col py-3'>Country
                            <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark' type="text" name="client_country" placeholder="London" />
                        </label>
                        <label className='text-blueGrey flex flex-col py-3'>Invoice date
                            <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark' type="date" name="createdAt" placeholder="21 Aug 2023" />
                        </label>
                        <label className='text-blueGrey flex flex-col py-3'>Payment Terms
                            <select onChange={() => handleChange} className='border border-blueGrey rounded-md p-3 text-md text-dark' name="paymentDue" id="payment_terms">
                                <option value="Net 30 Days">Net 30 Days</option>
                                <option value="Net 15 Days">Net 15 Days</option>
                            </select>
                        </label>
                        <label className='text-blueGrey flex flex-col py-3'>Project description
                            <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark' type="text" name="project_description" placeholder="Graphic design..." />
                        </label>
                        <h1 className='font-semibold text-grey text-3xl py-3'>Item List</h1>
                        <div>
                            <label className='text-blueGrey flex flex-col py-3'>Item Name
                                <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark' type="text" name="item_name" placeholder="Graphic design..." />
                            </label>
                            <div className='flex items-center w-full justify-between py-3'>
                                <label className='text-blueGrey flex flex-col'>Qty
                                    <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark w-[90%]' type="number" name="quantity" placeholder="1" />
                                </label>
                                <label className='text-blueGrey flex flex-col'>Price
                                    <input onChange={() => handleChange} className='border border-blueGrey rounded-md p-2 text-md text-dark w-[90%]' type="text" name="price" placeholder="125.00" />
                                </label>
                                <label className='text-blueGrey flex flex-col'>Total
                                    <input onChange={() => handleChange} className='rounded-md p-2 text-md text-dark w-full' type="text" name="total" placeholder="34332" />
                                </label>
                                <button type='button'>
                                    <img className='w-5' src={trash} alt='supprimer'  />
                                </button>
                            </div>
                        </div>
                        {
                            items.length === 0
                                ? null
                                : items.map((item:any) => (
                                    <Item
                                        key={item.id+1}
                                        items={items}
                                        setItems={setItems}/>
                                ))

                        }
                        <div className={`${theme === 'dark' ? 'bg-lightDark' : 'bg-fullWhite'} fixed bottom-0 left-0 right-0 py-5 flex items-center justify-between px-3 z-30`}>
                            <button
                                type='submit'
                                className='bg-mainPurple text-fullWhite rounded-full px-5 py-2 w-full text-2xl'>
                                Add Invoice
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};