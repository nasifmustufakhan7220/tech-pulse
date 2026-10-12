import { ICategory } from '@/Types/Tech.types';
import React from 'react';

const NavLinks = ({link}:{link:ICategory}) => {
    return (
        <div className='flex items-center ml-5'>
            
            <li className='text-[#45556c] font-semibold text-[16px] hover:text-[#4f39f6] cursor-pointer'>{link.icon}{link.name}</li>
        </div>
    );
};

export default NavLinks;