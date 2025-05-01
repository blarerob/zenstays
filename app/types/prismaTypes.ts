// // Utility Types
// type Nullable<T> = T | null;
// type ArrayOrSingle<T> = T | T[];
//
// // Filters
// export type IntFilter<T> = { equals?: number; in?: number[]; notIn?: number[]; };
// export type StringFilter<T> = { equals?: string; in?: string[]; notIn?: string[];  };
// export type FloatFilter<T> = { equals?: number; in?: number[]; notIn?: number[];  };
// export type BoolFilter<T> = { equals?: boolean; not?: boolean;  };
// export type DateTimeFilter<T> = { equals?: Date | string; in?: (Date | string)[];  };
// export type EnumFilter<T, E> = { equals?: E; in?: E[]; notIn?: E[];  };
//
// // Scalar Where Input
// export type ScalarWhereInput<T> = {
//   AND?: ArrayOrSingle<ScalarWhereInput<T>>;
//   OR?: ScalarWhereInput<T>[];
//   NOT?: ArrayOrSingle<ScalarWhereInput<T>>;
// };
//
// // Application Types
// export type ApplicationCreateInput = {
//   applicationDate: Date | string;
//   status: $Enums.ApplicationStatus;
//   name: string;
//   email: string;
//   phoneNumber: string;
//   message?: Nullable<string>;
//   property: PropertyCreateNestedOneWithoutApplicationsInput;
//   lease?: LeaseCreateNestedOneWithoutApplicationInput;
// };
//
// export type ApplicationUpdateInput = {
//   applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string;
//   status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus;
//   name?: StringFieldUpdateOperationsInput | string;
//   email?: StringFieldUpdateOperationsInput | string;
//   phoneNumber?: StringFieldUpdateOperationsInput | string;
//   message?: NullableStringFieldUpdateOperationsInput | string | null;
//   property?: PropertyUpdateOneRequiredWithoutApplicationsNestedInput;
//   lease?: LeaseUpdateOneWithoutApplicationNestedInput;
// };
//
// // Tenant Types
// export type TenantCreateInput = {
//   cognitoId: string;
//   name: string;
//   email: string;
//   phoneNumber: string;
//   properties?: PropertyCreateNestedManyWithoutTenantsInput;
//   favorites?: PropertyCreateNestedManyWithoutFavoritedByInput;
//   leases?: LeaseCreateNestedManyWithoutTenantInput;
// };
//
// export type TenantUpdateInput = {
//   cognitoId?: StringFieldUpdateOperationsInput | string;
//   name?: StringFieldUpdateOperationsInput | string;
//   email?: StringFieldUpdateOperationsInput | string;
//   phoneNumber?: StringFieldUpdateOperationsInput | string;
//   properties?: PropertyUpdateManyWithoutTenantsNestedInput;
//   favorites?: PropertyUpdateManyWithoutFavoritedByNestedInput;
//   leases?: LeaseUpdateManyWithoutTenantNestedInput;
// };
//
// // Property Types
// export type PropertyCreateInput = {
//   name: string;
//   description: string;
//   pricePerMonth: number;
//   securityDeposit: number;
//   applicationFee: number;
//   photoUrls?: PropertyCreatephotoUrlsInput | string[];
//   amenities?: PropertyCreateamenitiesInput | $Enums.Amenity[];
//   highlights?: PropertyCreatehighlightsInput | $Enums.Highlight[];
//   isPetsAllowed?: boolean;
//   isParkingIncluded?: boolean;
//   beds: number;
//   baths: number;
//   squareFeet: number;
//   propertyType: $Enums.PropertyType;
//   postedDate?: Date | string;
//   averageRating?: Nullable<number>;
//   numberOfReviews?: Nullable<number>;
//   location: LocationCreateNestedOneWithoutPropertiesInput;
//   manager: ManagerCreateNestedOneWithoutManagedPropertiesInput;
//   leases?: LeaseCreateNestedManyWithoutPropertyInput;
//   applications?: ApplicationCreateNestedManyWithoutPropertyInput;
//   favoritedBy?: TenantCreateNestedManyWithoutFavoritesInput;
//   tenants?: TenantCreateNestedManyWithoutPropertiesInput;
// };
//
// export type PropertyUpdateInput = {
//   name?: StringFieldUpdateOperationsInput | string;
//   description?: StringFieldUpdateOperationsInput | string;
//   pricePerMonth?: FloatFieldUpdateOperationsInput | number;
//   securityDeposit?: FloatFieldUpdateOperationsInput | number;
//   applicationFee?: FloatFieldUpdateOperationsInput | number;
//   photoUrls?: PropertyUpdatephotoUrlsInput | string[];
//   amenities?: PropertyUpdateamenitiesInput | $Enums.Amenity[];
//   highlights?: PropertyUpdatehighlightsInput | $Enums.Highlight[];
//   isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean;
//   isParkingIncluded?: BoolFieldUpdateOperationsInput | boolean;
//   beds?: IntFieldUpdateOperationsInput | number;
//   baths?: FloatFieldUpdateOperationsInput | number;
//   squareFeet?: IntFieldUpdateOperationsInput | number;
//   propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType;
//   postedDate?: DateTimeFieldUpdateOperationsInput | Date | string;
//   averageRating?: NullableFloatFieldUpdateOperationsInput | number | null;
//   numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null;
//   location?: LocationUpdateOneRequiredWithoutPropertiesNestedInput;
//   manager?: ManagerUpdateOneRequiredWithoutManagedPropertiesNestedInput;
//   leases?: LeaseUpdateManyWithoutPropertyNestedInput;
//   applications?: ApplicationUpdateManyWithoutPropertyNestedInput;
//   favoritedBy?: TenantUpdateManyWithoutFavoritesNestedInput;
//   tenants?: TenantUpdateManyWithoutPropertiesNestedInput;
// };
//
// // Lease Types
// export type LeaseCreateInput = {
//   startDate: Date | string;
//   endDate: Date | string;
//   rent: number;
//   deposit: number;
//   property: PropertyCreateNestedOneWithoutLeasesInput;
//   tenant: TenantCreateNestedOneWithoutLeasesInput;
//   application?: ApplicationCreateNestedOneWithoutLeaseInput;
//   payments?: PaymentCreateNestedManyWithoutLeaseInput;
// };
//
// export type LeaseUpdateInput = {
//   startDate?: DateTimeFieldUpdateOperationsInput | Date | string;
//   endDate?: DateTimeFieldUpdateOperationsInput | Date | string;
//   rent?: FloatFieldUpdateOperationsInput | number;
//   deposit?: FloatFieldUpdateOperationsInput | number;
//   property?: PropertyUpdateOneRequiredWithoutLeasesNestedInput;
//   tenant?: TenantUpdateOneRequiredWithoutLeasesNestedInput;
//   application?: ApplicationUpdateOneWithoutLeaseNestedInput;
//   payments?: PaymentUpdateManyWithoutLeaseNestedInput;
// };
//
// // Payment Types
// export type PaymentCreateInput = {
//   amountDue: number;
//   amountPaid: number;
//   dueDate: Date | string;
//   paymentDate: Date | string;
//   paymentStatus: $Enums.PaymentStatus;
// };
//
// export type PaymentUpdateInput = {
//   amountDue?: FloatFieldUpdateOperationsInput | number;
//   amountPaid?: FloatFieldUpdateOperationsInput | number;
//   dueDate?: DateTimeFieldUpdateOperationsInput | Date | string;
//   paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string;
//   paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus;
// };