import * as React from 'react';
import { FilterBtn } from "../FilterBtn/FilterBtn";
import {AddBtn} from "../AddBtn/AddBtn";
import {useContext} from "react";
import {InvoiceContext} from "../../contexts/InvoiceContext";

type Props = {

};
export const TopBar = (props: Props) => {
    const { invoices } = useContext(InvoiceContext);

    return (
        <div className='flex items-center justify-between px-[24px]'>
            <div>
                <h1 className='font-semibold font-dark text-[20px]'>Invoices</h1>
                <span>{invoices.length} invoices</span>
            </div>
            <div className='flex items-center justify-between'>
                <div className='pr-[18px]'>
                    <FilterBtn />
                </div>
                <AddBtn />
            </div>
        </div>
    );
};