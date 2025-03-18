import { MenuItem, Select } from '@mui/material'
import { Banknote, CircleDollarSign, Globe, LanguagesIcon } from 'lucide-react'
import Image from 'next/image'
import { MasterCard, Visa, GGPay, ApplePay, Paypal, Facebook, X, Instagram, Pinterest } from '../lib/assest'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#13253F] w-full '>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 max-w-6xl mx-auto gap-20 py-20">
        <div >
          <div className='flex flex-col gap-3 mb-3 justify-center'>
            <label className='font-semibold text-white opacity-80 text-sm '>Language</label>
            <Select

              defaultValue={'en'}
              sx={{
                width: '210px',
                color: '#ffffff',
                opacity: '0.6',
                fontWeight: '300',
                border: '1px solid #778088',
              }}
            >
              <MenuItem value="en" ><Globe className='mr-2 inline' width={16} /> English (UK)</MenuItem>
              <MenuItem value="vn"><LanguagesIcon className='mr-2 inline ' width={16} />Việt Nam </MenuItem>
            </Select>
          </div>
          <div className='flex flex-col gap-3'>
            <label className='font-semibold text-white opacity-80 text-sm '>Currency</label>
            <Select
              defaultValue={'usd'}
              sx={{
                width: '210px',
                color: '#ffffff',
                fontWeight: '300',
                opacity: '0.6',
                border: '1px solid #778088',
                fontSize: '15px',
              }}
            >
              <MenuItem value="usd"><CircleDollarSign className='mr-2 inline ' width={16} />U.S.Dollar ($)</MenuItem>
              <MenuItem value="vnd"><Banknote className='mr-2 inline' width={16} />VND</MenuItem>
            </Select>
          </div>
        </div>
        <div>
          <div className='flex flex-col gap-3 justify-center'>
            <label className='font-semibold text-white text-sm opacity-80'>Company</label>
            <ul className='flex flex-col gap-3'>
              <li className='text-white font-light opacity-80 text-sm'>About Us</li>
              <li className='text-white font-light opacity-80 text-sm'>Blog</li>
              <li className='text-white font-light opacity-80 text-sm'>Press Room</li>
              <li className='text-white font-light opacity-80 text-sm'>Careers</li>
            </ul>
          </div>
        </div>
        <div>
          <div className='flex flex-col gap-3'>
            <label className='font-semibold text-white  text-sm opacity-80'>Help</label>
            <ul className='flex flex-col gap-3'>
              <li className='text-white font-light opacity-80 text-sm'>Contact Us</li>
              <li className='text-white font-light opacity-80 text-sm'>FAQs</li>
              <li className='text-white font-light opacity-80 text-sm'>Terms and conditions</li>
              <li className='text-white font-light opacity-80 text-sm'>Privacy policy</li>
              <li className='text-white font-light opacity-80 text-sm'>Sitemap</li>
            </ul>
          </div>
        </div>
        <div>
          <div className='flex flex-col gap-3'>
            <label className='font-semibold text-white  text-sm '>Payment methods possible</label>
            <div className='flex gap-[1px]'>
              <Image src={MasterCard} alt='mastercard' width={50} height={50} />
              <Image src={Visa} alt='visa' width={50} height={50} />
              <Image src={GGPay} alt='paypal' width={50} height={50} />
              <Image src={ApplePay} alt='american express' width={50} height={50} />
              <Image src={Paypal} alt='american express' width={50} height={50} />
            </div>
          </div>
          <div className='flex flex-col gap-3 mt-3'>
            <label className='font-semibold text-white  text-sm opacity-80'>Company</label>
            <p className='text-white font-light opacity-80 text-sm'>Become a Tour guide for Us</p>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#0F1E32]'>
        <div className='max-w-6xl mx-auto md:py-5'>
          <div className='flex justify-between items-center '>
            <p className='text-sm font-light text-white opacity-60 '>Copyright 2021 Tour Guide. All Rights Reserved</p>
            <div className='flex gap-1'>
              <Image src={Facebook} alt='mastercard'  />
              <Image src={X} alt='visa'  />
              <Image src={Instagram} alt='paypal'  />
              <Image src={Pinterest} alt='american express'  />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer