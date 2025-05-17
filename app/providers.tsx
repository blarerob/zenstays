"use client";

// Updated import paths
import StoreProvider from "./state/redux";
import { Authenticator } from "@aws-amplify/ui-react";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>

                {children}

        </StoreProvider>
    );
};

export default Providers;
