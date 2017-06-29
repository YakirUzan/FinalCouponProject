import { Coupon } from "app/Core/coupon";

export class Customer {

    public constructor(
        public id: number, 
        public custName: string,
        public password: string, 
        public coupons: Coupon[]) { }
}
