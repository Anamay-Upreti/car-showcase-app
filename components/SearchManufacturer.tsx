"use client"
import  { useState, Fragment } from 'react'
import { SearchManuFacturerProps } from "@/types"
import { Combobox, Transition } from "@headlessui/react"
import  {  manufacturers } from '@/constants/index'
import Image from "next/image"
const SearchManufacturer = ( { manufacturer, setManuFacturer }: SearchManuFacturerProps) => {
    const [query, setQuery] = useState('');

    const filteredManufacturers = query === "" ? manufacturer : manufacturers.filter((item) => (
        
    ))

  return (
    <div className="search-manufacturer">
        <Combobox>
            <div className="relative w-full">
             <Combobox.Button className="absolute top-[14px]">
             <Image
             src="/car-logo.svg"
             width={20}
             height={20}
             className="ml-4"
             alt="car logo"
             />
             </Combobox.Button>

             <Combobox.Input
             className="search-manufacturer__input"
             placeholder="Volkswagen"
             displayValue={(manufacturer: string) => manufacturer}
             onChange={(e) => setQuery(e.target.value)}
             />

             <Transition
             as={Fragment}
             leave='transition ease-in duration-100'
             leaveFrom='opacity-100'
             afterLeave={() => setQuery('')}
             >
                <Combobox.Options>

                </Combobox.Options>
             </Transition>
            </div>
        </Combobox>
        </div>
  )
}

export default SearchManufacturer