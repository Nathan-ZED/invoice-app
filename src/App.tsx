import './App.css'
import {Navigation} from "./components/Navigation/Navigation";
import {TopBar} from "./components/TopBar/TopBar";
import {InvoiceList} from "./components/InvoiceList/InvoiceList";
import { InvoiceContext } from "./contexts/InvoiceContext";
import {useContext} from "react";
import {ShowInvoicePopup} from "./components/ShowInvoicePopup/ShowInvoicePopup";

function App() {

    const { selectedInvoice } = useContext(InvoiceContext);

  return (
        <>
            <Navigation />
            <div className='py-[32px]'>
                <TopBar />
            </div>
            <InvoiceList />
            {
                selectedInvoice
                    ? <ShowInvoicePopup />
                    : null
            }

        </>
  )
}

export default App
