import React, {ReactNode, useState, createContext, useEffect, SetStateAction} from 'react';
import data from '../data.json'

interface IInvoiceContext {
    invoices: any,
    setInvoices: any[],
}

export const InvoiceContext = createContext<IInvoiceContext>({} as IInvoiceContext);

interface IProps {
    children: ReactNode;
}


export function InvoiceContextProvider({ children }: IProps): JSX.Element {

    const [invoices, setInvoices] = useState<any>([...data]);

    // @ts-ignore
    return (
        <InvoiceContext.Provider value={[invoices, setInvoices]}>
            {children}
        </InvoiceContext.Provider>
        );
}

