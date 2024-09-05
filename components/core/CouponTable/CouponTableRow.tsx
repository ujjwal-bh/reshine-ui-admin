import { useDeleteCouponMutation, useExpireCouponMutation } from '@/app/_global-redux/services/coupon-api'
import { TableCell, TableRow } from '@/components/ui/table'
import { ICoupon } from '@/interfaces/coupons.interface'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button, ButtonWithPopup } from '../../ui/button'


interface IProps {
    coupon: ICoupon
}
export default function CouponTableRow({coupon}: IProps) {

  const daysUntil = (dateString: string | undefined | null): string => {
    if (!dateString) return "Invalid date";
  
    const targetDate = new Date(dateString);
  
    if (isNaN(targetDate.getTime())) return "Invalid date";
  
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    if (daysLeft < 0) return `Expired ${Math.abs(daysLeft)} day(s) ago`;
    return `${daysLeft} day(s) left`;
  };
  const expiryDaysLeftString = daysUntil(coupon.expiry)
  const expiryDays = Number(expiryDaysLeftString.split(" ")[0])

    const [expireCoupon] = useExpireCouponMutation()
    const [deleteCoupon] = useDeleteCouponMutation()

    const handleExpireCoupon = async() => {
      if(!(expiryDays > 0)) return;
        await expireCoupon(coupon.id)
    }

    const handleDeleteCoupon = async () => {
        await deleteCoupon(coupon.id)
    }




  return (
    <TableRow>
    <TableCell>{coupon.title}</TableCell>
    <TableCell className="font-medium">{coupon.description}</TableCell>
    <TableCell>{coupon.code}</TableCell>
    <TableCell>{coupon.discountType}</TableCell>
    <TableCell>{coupon.discountType == "fixed" && "Rs"} {coupon.discount} {coupon.discountType == "percentage" && "%"}</TableCell>

    <TableCell>{daysUntil(coupon.expiry)}</TableCell>

    <TableCell><div className={cn("py-2  px-4 text-center rounded-md cursor-pointer", {"text-primary bg-primaryTransparent": expiryDays > 0 ,"text-error bg-errorTransparent": !(expiryDays > 0)})} onClick={handleExpireCoupon}>{expiryDays > 0 ? "Expire Coupon": "Expired"}</div></TableCell>

    
    <TableCell className="flex gap-2 justify-center">
      <ButtonWithPopup className="w-full border border-error text-error rounded-md" confirmClick={handleDeleteCoupon}>Delete</ButtonWithPopup>
      <Link href={`/coupons/coupon/${coupon.id}`} className='w-full'>
      <Button size={"sm"} className="w-full">Edit</Button>
      </Link>
    </TableCell>
  </TableRow>
  )
}
