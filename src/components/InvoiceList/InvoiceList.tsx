import * as React from 'react';
import { InvoiceCard } from "../InvoiceCard/InvoiceCard";
import { InvoiceContext } from "../../contexts/InvoiceContext";
import {useContext, useEffect, useState} from "react";
import illustrationEmpty from '../../assets/images/illustration-empty.svg'
import data from '../../data.json'

type Props = {

};
export const InvoiceList = (props: Props) => {

    const { invoices, setInvoices } = useContext(InvoiceContext);
    const [items, setItems] = useState();

    useEffect(() => {
    }, []);

    const showItems = () => {
        if(invoices.length > 0) {
            return (
                invoices.map((invoice:any) => (
                    <InvoiceCard
                        key={invoice.id}
                        invoice={invoice}
                    />
                ))
            );
        }
        if(invoices.length === 0) {
            return (
                <div className='flex flex-col items-center py-20'>
                    <img src={illustrationEmpty} alt='invoice list empty' />
                    <h2 className='text-2xl text-dark font-semibold py-5'>Il n'y a rien ici</h2>
                    <p className='text-lg text-blueGrey font-light text-center w-[70%]'>Créez une nouvelle facture en cliquant sur le bouton <b>"new"</b> pour continuer</p>
                </div>
            );
        }
    }

    return (
        <div
            role='list'
            className='flex flex-col items-center justify-center w-full px-[24px]'>
            {showItems()}
        </div>
    );
};