import React from 'react'
import { Button } from '../../ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'

export default function IssueTableRow() {
  return (
    <TableRow>
    <TableCell>1</TableCell>
    <TableCell>Ujjwal Bhattarai</TableCell>
    <TableCell>Payment</TableCell>
    <TableCell className='max-w-[400px] text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, autem commodi? Laborum cumque sit iste odit tenetur rem id facere ab, vitae aperiam cum quas ex non pariatur quasi in ducimus autem? Culpa aut aliquid nemo rem ex eius amet quos sit exercitationem, blanditiis at recusandae ipsam officia explicabo beatae.</TableCell>
    <TableCell>
      <Button className='w-full'>Close Issue</Button>
    </TableCell>
  </TableRow>
  )
}
