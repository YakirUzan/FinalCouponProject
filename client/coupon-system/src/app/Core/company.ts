import { Coupon } from "app/Core/coupon";

export class Company {

    public constructor(
        public id: number, 
        public compName: string, 
        public email: string, 
        public password: string, 
        public coupons: Coupon[]) { }
}
