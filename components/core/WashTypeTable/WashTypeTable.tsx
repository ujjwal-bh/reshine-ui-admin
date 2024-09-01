import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import WashTypeTableRow from './WashTypeTableRow';


interface IProps {
  washTypes: any[]
}
export default function WashTypeTable({washTypes}: IProps) {
  console.log(washTypes, "Wash type data")

  return (
    <Table className='border-2 border-gray-100'>
    <TableCaption>A list of wash types.</TableCaption>
    <TableHeader>
      <TableRow className="bg-primaryTransparent">
        <TableHead className=''>Name</TableHead>
        <TableHead>Description</TableHead>
        <TableHead>Active</TableHead>
        <TableHead className="text-center w-[400px]">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        washTypes?.map((washType)=> (
          <WashTypeTableRow key={washType.id} id={washType.id} description={washType.description} active={washType.active} name={washType.name}/>
        ))
      }
    </TableBody>
  </Table>
  )
}
