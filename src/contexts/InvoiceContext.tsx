import React, {ReactNode, useState, createContext, useEffect, SetStateAction} from 'react';
import data from '../data.json'

interface IInvoiceContext {
    invoices: any,
    setInvoices: Function,
    selectedInvoice: any,
    setSelectedInvoice: Function,
    addMode: boolean,
    setAddMode: Function,
}

export const InvoiceContext = createContext<IInvoiceContext>({} as IInvoiceContext);

interface IProps {
    children: ReactNode;
}

    const getInitialStorage = () => {
        const invoiceStorage = localStorage.getItem('invoices')
        return invoiceStorage ? JSON.parse(invoiceStorage) : [];
    }

export function InvoiceContextProvider({ children }: IProps): JSX.Element {

    const [invoices, setInvoices] = useState<any>(getInitialStorage());
    const [selectedInvoice, setSelectedInvoice] = useState();
    const [addMode, setAddMode] = useState(false);


    useEffect(() => {
        if(invoices.length === 0) {
            setInvoices(data)
            localStorage.setItem('invoices', JSON.stringify(data))
        } else {
            localStorage.setItem('invoices', JSON.stringify(invoices))
        }
    }, [invoices]);

    return (
        <InvoiceContext.Provider value={{
                invoices,
                setInvoices,
                selectedInvoice,
                setSelectedInvoice,
                addMode,
                setAddMode,
        }}>
            {children}
        </InvoiceContext.Provider>
        );
}

