"use client";
// Updated import paths
import StoreProvider from "./state/redux";
const Providers = ({ children }) => {
    return (<StoreProvider>

                {children}

        </StoreProvider>);
};
export default Providers;
