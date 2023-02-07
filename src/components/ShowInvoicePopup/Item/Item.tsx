import * as React from 'react';
import trash from "../../../assets/images/icon-delete.svg";
import {useRef, useState} from "react";

type Props = {
    items: any,
    setItems: Function,
};
export const Item = (props: Props) => {

    const itemName: any = useRef();
    const quantity: any = useRef();
    const price: any = useRef();

    return (
        <div>
            <label className='text-blueGrey flex flex-col py-3'>Item Name
                <input
                    ref={itemName}
                    className='border border-blueGrey rounded-md p-2 text-md text-dark' type="text" name="item_name"
                    value=''
                    placeholder="Graphic design..."/>
            </label>
            <div className='flex items-center w-full justify-between py-3'>
                <label className='text-blueGrey flex flex-col'>Qty
                    <input
                        ref={quantity}
                        className='border border-blueGrey rounded-md p-2 text-md text-dark w-[90%]'
                        type="number"
                        name="quantity"
                        placeholder="1" />
                </label>
                <label className='text-blueGrey flex flex-col'>Price
                    <input
                        ref={price}
                        className='border border-blueGrey rounded-md p-2 text-md text-dark w-[90%]' type="text"
                        name="price" placeholder="125.00"/>
                </label>
                <label className='text-blueGrey flex flex-col'>Total
                    <input className='rounded-md p-2 text-md text-dark w-full' type="text" name="total"
                           placeholder="34332"/>
                </label>
                <button type='button'>
                    <img src={trash} className='w-5' alt='supprimer'/>
                </button>
            </div>
        </div>
    );
};