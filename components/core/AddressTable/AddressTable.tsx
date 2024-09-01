import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import AddressTableRow from './AddressTableRow';
import { IAddress } from "@/interfaces/address.interface";


interface IProps {
    addresses: IAddress[]
}
export default function AddressTable({addresses}: IProps) {
  return (
    <Table className='border-2 border-gray-100'>
    <TableCaption>A list of pickup addresses.</TableCaption>
    <TableHeader>
      <TableRow className="bg-primaryTransparent">
      <TableHead>Landmark</TableHead>
        <TableHead>Address</TableHead>
        <TableHead>City</TableHead>
        <TableHead>State</TableHead>
        <TableHead>Pin Code</TableHead>
        <TableHead>Delivery Charge</TableHead>
        <TableHead>Status</TableHead>
        <TableHead className="text-center w-[400px]">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {
            addresses.map((address)=> (
                <AddressTableRow key={address.id} address={address} />
            ))
        }
    </TableBody>
  </Table>
  )
}
