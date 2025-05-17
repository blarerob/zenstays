import { Wifi, Waves, Dumbbell, Car, PawPrint, Tv, Thermometer, Cigarette, Cable, Maximize, Bath, Phone, Sprout, Hammer, Bus, Mountain, VolumeX, Home, Warehouse, Building, Castle, Trees, } from "lucide-react";
export var AmenityEnum;
(function (AmenityEnum) {
    AmenityEnum["WasherDryer"] = "WasherDryer";
    AmenityEnum["AirConditioning"] = "AirConditioning";
    AmenityEnum["Dishwasher"] = "Dishwasher";
    AmenityEnum["HighSpeedInternet"] = "HighSpeedInternet";
    AmenityEnum["HardwoodFloors"] = "HardwoodFloors";
    AmenityEnum["WalkInClosets"] = "WalkInClosets";
    AmenityEnum["Microwave"] = "Microwave";
    AmenityEnum["Refrigerator"] = "Refrigerator";
    AmenityEnum["Pool"] = "Pool";
    AmenityEnum["Gym"] = "Gym";
    AmenityEnum["Parking"] = "Parking";
    AmenityEnum["PetsAllowed"] = "PetsAllowed";
    AmenityEnum["WiFi"] = "WiFi";
})(AmenityEnum || (AmenityEnum = {}));
export const AmenityIcons = {
    WasherDryer: Waves,
    AirConditioning: Thermometer,
    Dishwasher: Waves,
    HighSpeedInternet: Wifi,
    HardwoodFloors: Home,
    WalkInClosets: Maximize,
    Microwave: Tv,
    Refrigerator: Thermometer,
    Pool: Waves,
    Gym: Dumbbell,
    Parking: Car,
    PetsAllowed: PawPrint,
    WiFi: Wifi,
};
export var HighlightEnum;
(function (HighlightEnum) {
    HighlightEnum["HighSpeedInternetAccess"] = "HighSpeedInternetAccess";
    HighlightEnum["WasherDryer"] = "WasherDryer";
    HighlightEnum["AirConditioning"] = "AirConditioning";
    HighlightEnum["Heating"] = "Heating";
    HighlightEnum["SmokeFree"] = "SmokeFree";
    HighlightEnum["CableReady"] = "CableReady";
    HighlightEnum["SatelliteTV"] = "SatelliteTV";
    HighlightEnum["DoubleVanities"] = "DoubleVanities";
    HighlightEnum["TubShower"] = "TubShower";
    HighlightEnum["Intercom"] = "Intercom";
    HighlightEnum["SprinklerSystem"] = "SprinklerSystem";
    HighlightEnum["RecentlyRenovated"] = "RecentlyRenovated";
    HighlightEnum["CloseToTransit"] = "CloseToTransit";
    HighlightEnum["GreatView"] = "GreatView";
    HighlightEnum["QuietNeighborhood"] = "QuietNeighborhood";
})(HighlightEnum || (HighlightEnum = {}));
export const HighlightIcons = {
    HighSpeedInternetAccess: Wifi,
    WasherDryer: Waves,
    AirConditioning: Thermometer,
    Heating: Thermometer,
    SmokeFree: Cigarette,
    CableReady: Cable,
    SatelliteTV: Tv,
    DoubleVanities: Maximize,
    TubShower: Bath,
    Intercom: Phone,
    SprinklerSystem: Sprout,
    RecentlyRenovated: Hammer,
    CloseToTransit: Bus,
    GreatView: Mountain,
    QuietNeighborhood: VolumeX,
};
export var PropertyTypeEnum;
(function (PropertyTypeEnum) {
    PropertyTypeEnum["Rooms"] = "Rooms";
    PropertyTypeEnum["Tinyhouse"] = "Tinyhouse";
    PropertyTypeEnum["Apartment"] = "Apartment";
    PropertyTypeEnum["Villa"] = "Villa";
    PropertyTypeEnum["Townhouse"] = "Townhouse";
    PropertyTypeEnum["Cottage"] = "Cottage";
})(PropertyTypeEnum || (PropertyTypeEnum = {}));
export const PropertyTypeIcons = {
    Rooms: Home,
    Tinyhouse: Warehouse,
    Apartment: Building,
    Villa: Castle,
    Townhouse: Home,
    Cottage: Trees,
};
// Add this constant at the end of the file
export const NAVBAR_HEIGHT = 56; // in pixels
// Test users for development
export const testUsers = {
    tenant: {
        username: "Carol White",
        userId: "us-east-2:76543210-90ab-cdef-1234-567890abcdef",
        signInDetails: {
            loginId: "carol.white@example.com",
            authFlowType: "USER_SRP_AUTH",
        },
    },
    tenantRole: "tenant",
    manager: {
        username: "John Smith",
        userId: "us-east-2:12345678-90ab-cdef-1234-567890abcdef",
        signInDetails: {
            loginId: "john.smith@example.com",
            authFlowType: "USER_SRP_AUTH",
        },
    },
    managerRole: "manager",
};
