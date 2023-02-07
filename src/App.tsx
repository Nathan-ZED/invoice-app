import './App.css'
import {Navigation} from "./components/Navigation/Navigation";
import {TopBar} from "./components/TopBar/TopBar";
import {InvoiceList} from "./components/InvoiceList/InvoiceList";
import { InvoiceContext } from "./contexts/InvoiceContext";
import {useContext, useEffect, useState} from "react";
import {ShowInvoicePopup} from "./components/ShowInvoicePopup/ShowInvoicePopup";
import {AddInvoicePopup} from "./components/AddInvoicePopup/AddInvoicePopup";

function App() {

    const { selectedInvoice, addMode } = useContext(InvoiceContext);

    useEffect(() => {
        selectedInvoice
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'scroll';
    }, [selectedInvoice])

  return (
        <>
            <Navigation/>
            <div className='py-[32px]'>
                <TopBar />
            </div>
            <InvoiceList />
            {
                selectedInvoice
                    ? <ShowInvoicePopup />
                    : null
            }
            {
                addMode
                    ? <AddInvoicePopup />
                    : null
            }

        </>
  )
}

export default App
