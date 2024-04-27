import React, {useId} from 'react'
import Select from 'react-select'

const options=[
    { value: "location1", label: "location1" },
    { value: "location2", label: "Location2" },
    { value: "ation", label: "ation" },
  ]

export default function SelectWithSearch() {
    const handleChange = (val: {value: string, label:string}) => {
        console.log(val);
    }
  return (
    <Select className='w-full' options={options} instanceId={useId()} value={{ value: "location1", label: "location1" }} onChange={e => handleChange({value: e?.label|| "", label: e?.label || ""})}/>
  )
}
