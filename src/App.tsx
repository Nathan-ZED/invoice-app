import './App.css'
import {Navigation} from "./components/Navigation/Navigation";
import {TopBar} from "./components/TopBar/TopBar";
import {InvoiceList} from "./components/InvoiceList/InvoiceList";
function App() {

  return (
        <>
            <Navigation />
            <div className='py-[32px]'>
                <TopBar />
            </div>
            <InvoiceList />
        </>
  )
}

export default App
