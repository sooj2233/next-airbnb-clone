'use client'

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { FC, useCallback } from 'react'
import { IconType } from "react-icons";

interface CategoryBoxProps {
    icon: IconType,
    label: string;
    selected?: boolean;
}

const CategoryBox: FC<CategoryBoxProps> = ({selected,label,icon:Icon  }) => {

    const router = useRouter();  // will match a set of child routes from the current location.
    const params = useSearchParams(); // used to read and modify the query string in the URL for the current location.

    const handleClick = useCallback(() => { // returns a memoized callback function,runs when one of its dependencies update.
        let currentQuery ={};

        if(params){
            currentQuery = qs.parse(params.toString()) 
            console.log(currentQuery)//getQueryString, parse {key:value,...}
        }

        const updatedQuery: any = {         //update query
            ...currentQuery,
            category: label
        }

        if (params?.get('category') === label) {
            delete updatedQuery.category;
          }

          const url = qs.stringifyUrl({    //qs.stringifyUrl" method is then called with an options object that specifies the base URL as "/" and the query object as "updatedQuery". 
            url: '/',
            query: updatedQuery
          }, { skipNull: true });     //"skipNull" option is set to true to exclude properties with a value of null or undefined
      
          router.push(url);

    }, [label,router,params]); 

  return (
    
    <div onClick={handleClick} className={`flex place-items-center p-3 gap-2 border-b-2 transition cursor-pointer hover: text-na 
                    ${selected ? 'border-b-neutral-800' : 'border-transparent'}
                    ${selected ? 'text-neutral-800' : 'text-neutral-500'}
                    `}
    >
        <Icon size={26} />
        <div className="font-medium text-sm"> {label}</div>
    </div>
  )
}

export default CategoryBox;