import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export function formatEnumString(str) {
    return str.replace(/([A-Z])/g, " $1").trim();
}
export function formatPriceValue(value, isMin) {
    if (value === null || value === 0)
        return isMin ? "Any Min Price" : "Any Max Price";
    if (value >= 1000) {
        const kValue = value / 1000;
        return isMin ? `$${kValue}k+` : `<$${kValue}k`;
    }
    return isMin ? `$${value}+` : `<$${value}`;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cleanParams(params) {
    return Object.fromEntries(Object.entries(params).filter(([_, value] // eslint-disable-line @typescript-eslint/no-unused-vars
    ) => value !== undefined &&
        value !== "any" &&
        value !== "" &&
        (Array.isArray(value) ? value.some((v) => v !== null) : value !== null)));
}
export const withToast = async (mutationFn, messages) => {
    const { success, error } = messages;
    try {
        const result = await mutationFn;
        if (success)
            toast.success(success);
        return result;
    }
    catch (err) {
        if (error)
            toast.error(error);
        throw err;
    }
};
