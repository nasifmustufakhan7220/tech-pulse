import { IProducts } from '@/Types/Tech.types';
import Image from 'next/image';
import React from 'react';

const ProductCard = ({card}:{card:IProducts}) => {
    return (
        <div>
            <div className='bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full cursor-pointer'>
                <div className='w-full h-40 rounded-lg bg-slate-100 flex items-center justify-center mb-4 overflow-hidden relative'>
                    {/* Image */}
                    <Image className='w-full h-full object-contain p-3' src={card.image} alt={card.brand} width={50} height={50} />

                    {/*  */}

                    <div className='absolute top-2.5 right-2.5'>
                        <span className='text-[0.72rem] font-bold px-2 py-1 rounded-md bg-red-50 border border-red-200 text-red-600'>
                        ▼ {card.trendPercent} %
                        </span>
                    </div>

                    <div className='absolute top-2.5 left-2.5 px-2 py-1 rounded-md bg-emerald-100 border border-emerald-200 text-emerald-800 text-[0.7rem] font-bold'>
                        Save ৳{card.previousPrice - card.currentPrice}
                    </div>
                </div>
                <div className='mb-2'>
                    <span className='text-[0.7rem] font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded'>{card.category}</span>
                </div>
                <h3 className='text-sm font-semibold color-slate-900 leading-snug mb-3 grow text-slate-800'>{card.name}</h3>
                <div className='flex items-baseline gap-2.5 mb-3'>
                    <span className='text-xl font-extrabold text-slate-900 tracking-tight'>৳ {card.currentPrice}</span>
                    <span className='text-xs text-slate-400 line-through'>৳ {card.previousPrice}</span>
                </div>
                <div className='flex items-center justify-between pt-3 border-t border-slate-100 mt-auto'>
                    <span className='text-xs text-slate-500'>🏪 {card.stores.length} stores</span>
                    <span className='text-xs font-semibold text-indigo-600 group-hover:text-indigo-700'>View Details →</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;