import Footer from '../components/Footer';
import Header from '../components/Header';
import {ToastContainer} from 'react-toastify'
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Header />
            {/* <div style={{ flex: 1 }}>
                <Outlet />
            </div> */}


            <Outlet />
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default AppLayout;
