import { createContext, useState } from "react";
export const Message_data = createContext(null);
function Context({ children }) {
    const [cartRefresh, setCartRefresh] = useState(false);
    const [compareRefresh, setCompareRefresh] = useState(false);
    const [shoppingCartData,setShoppingCartData] = useState([]);
    const [selectedLocationName, setSelectedLocationName] = useState('');
    const [selectedLocationZip, setSelectedLocationZip] = useState('');
    const [paymentInfoSuccessPage, setPaymentInfoSuccessPage] = useState({});
    const [locationUpdateFlag, setLocationUpdateFlag] = useState(false);
    return (
        <Message_data.Provider value={{ cartRefresh, setCartRefresh, compareRefresh, setCompareRefresh, shoppingCartData, setShoppingCartData,selectedLocationZip, setSelectedLocationZip, selectedLocationName, setSelectedLocationName, locationUpdateFlag, setLocationUpdateFlag, paymentInfoSuccessPage, setPaymentInfoSuccessPage }}>
        {children}
        </Message_data.Provider>
    );
}
export default Context;