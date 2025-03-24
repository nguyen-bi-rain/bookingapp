'use client'
import { Box, Button, Card, CardContent, CardMedia, Chip, Rating, Typography } from '@mui/material';
import { Car, Clock, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

interface RoomProps {
    id: string;
    title: string;
    roomType: string;
    price: number;
    rate: number;
    reviewCount: number;
    imageUrl: string;
}

const Room: React.FC<RoomProps> = ({
    id,
    title,
    roomType,
    imageUrl,
    price,
    rate,
    reviewCount
}) => {

    return (
        <Card sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#ffffff',
        
        }}>
            <Image
                src="/assets/Rectangle 130.png"
                alt={title}
                width={150}
                height={140}
                className='w-[150px] h-[140px] object-cover'
            />
            <CardContent className='flex justify-between items-center w-full '>
                <div className='flex flex-col gap-3 '>
                    <Box sx={{
                        display: "flex",
                        gap: '1rem',
                        alignItems: 'center'
                    }}>
                        <Typography
                            variant='body2'
                            sx={{
                                backgroundColor: "#7BBCB0",
                                padding: '0.375rem 0.75rem',
                                borderRadius: "1.5rem 1.5rem",
                                color: '#ffffff',
                                fontWeight: 600,
                                textTransform: 'uppercase'
                            }}
                        >{roomType}</Typography>
                        <span className='block w-[1px] h-[14px] bg-[#C7CDD0]'></span>
                        <div className='flex items-center gap-1'>
                            <Rating
                                name='read-only'
                                value={rate}
                                readOnly
                                size='small'
                                sx={{
                                    color: '#FFB833'
                                }}
                                precision={0.5}
                            />
                            <Typography variant='body2' sx={{ color: '#778088' }}>({reviewCount} reviews)</Typography>
                        </div>

                    </Box>
                    <Typography variant='h6' sx={{ fontWeight: 600, color: 'var(--text-color)' }}>{title}</Typography>
                    <div>
                        <Chip
                            icon={<Clock size={20}/>}
                            label='2 hours'
                            size='small'
                            sx={{
                                backgroundColor :'#fff'
                            }}
                        />
                         <Chip
                            icon={<Car size={20}/>}
                            label='Transport'
                            size='small'
                            sx={{
                                backgroundColor :'#fff',
                                borderLeft: '1px solid #C7CDD0',
                                borderRight: '1px solid #C7CDD0',
                                borderRadius: 0
                            }}

                        />
                         <Chip
                            icon={<Users size={20}/>}
                            label='Family Plan'
                            size='small'
                            sx={{
                                backgroundColor :'#fff'
                            }}
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                <Typography variant='h6' sx={{ fontWeight: 600, color: '#7BBCB0' ,fontFamily :"Volkhov" }}>${price}</Typography>
                <span className='block text-sm text-[#778088]'>per person</span>
                </div>
            </CardContent>
        </Card>
    )
}

export default Room