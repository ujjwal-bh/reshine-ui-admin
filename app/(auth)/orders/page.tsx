import Filter from '@/components/core/Filter'
import OrderCard from '@/components/core/OrderCard'
import { Button } from '@/components/ui/button'
import { InputWithIcon } from '@/components/ui/input'
import MainWarapper from '@/components/ui/mainWarapper'
import SectionTitle from '@/components/ui/sectionTitle'
import { orderDetailDummyData } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Orders() {
  return (
    <MainWarapper>
              <div className="flex justify-between items-center">
        <SectionTitle>Orders</SectionTitle>
        <div className="flex gap-2">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="search order by id . . ."
            className="min-w-[15rem]"
          />
            <Filter/>
            <Link href="/orders/order">
                <Button size={"sm"} className="min-w-32">Take Order</Button>
            </Link>
        </div>
      </div>
      <div className='flex gap-x-[2%] gap-y-4 flex-wrap'>
      {
            orderDetailDummyData.map((item, index)=> {
              return <OrderCard key={index} item={item} className='w-[32%] min-w-[20rem]' />
            })
          }
      </div>
    </MainWarapper>
  )
}
