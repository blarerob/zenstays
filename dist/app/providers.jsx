"use client";
// Updated import paths
import StoreProvider from "./state/redux";
import { Authenticator } from "@aws-amplify/ui-react";
const Providers = ({ children }) => {
    return (<StoreProvider>
            <Authenticator.Provider>
                {children}
            </Authenticator.Provider>
        </StoreProvider>);
};
export default Providers;
