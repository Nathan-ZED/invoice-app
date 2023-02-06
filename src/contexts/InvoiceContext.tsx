import React, {ReactNode, useState, createContext, useEffect, SetStateAction} from 'react';
import data from '../data.json'

interface IInvoiceContext {
    invoices: any,
    setInvoices: Function,
    selectedInvoice: any,
    setSelectedInvoice: Function,
}

export const InvoiceContext = createContext<IInvoiceContext>({} as IInvoiceContext);

interface IProps {
    children: ReactNode;
}


export function InvoiceContextProvider({ children }: IProps): JSX.Element {

    const [invoices, setInvoices] = useState<any>([...data]);
    const [selectedInvoice, setSelectedInvoice] = useState();

    useEffect(() => {
        localStorage.setItem('invoices', JSON.stringify(invoices))
    }, [invoices]);


    return (
        <InvoiceContext.Provider value={{
                invoices,
                setInvoices,
                selectedInvoice,
                setSelectedInvoice
        }}>
            {children}
        </InvoiceContext.Provider>
        );
}

