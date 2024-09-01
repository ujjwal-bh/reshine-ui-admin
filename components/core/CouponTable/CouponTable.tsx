import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import AddressTableRow from './CouponTableRow';
import { ICoupon } from "@/interfaces/coupons.interface";
import CouponTableRow from "./CouponTableRow";


interface IProps {
    coupons: ICoupon[]
}
export default function CouponTable({coupons}: IProps) {
  return (
    <Table className='border-2 border-gray-100'>
    <TableCaption>A list of Coupons.</TableCaption>
    <TableHeader>
      <TableRow className="bg-primaryTransparent">
      <TableHead>Title</TableHead>
        <TableHead>Description</TableHead>
        <TableHead>Coupon code</TableHead>
        <TableHead>Discount Type</TableHead>
        <TableHead>Rate / Amount</TableHead>
        <TableHead>Expiry</TableHead>
        <TableHead>status</TableHead>
        
        <TableHead className="text-center w-[400px]">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {
            coupons.map((coupon)=> (
                <CouponTableRow key={coupon.id} coupon={coupon} />
            ))
        }
    </TableBody>
  </Table>
  )
}
