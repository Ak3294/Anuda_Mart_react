import React from 'react'
import InputSearch from './InputSearch'
import { CiBellOn , CiSearch } from "react-icons/ci";
import Avatar from './Avatar';
import { useDispatch } from 'react-redux';
import { toggleAdminSidenavbar } from '../slices/AdminSideNavSlice';

export default function AdminNavbar() {

  const dispatch = useDispatch();




  return (
    <>
      <nav className='bg-white h-16'>
           <div className="nav flex justify-between items-center px-4 sm:px-6 lg:px-8 h-full">
                <div className="toggleAndSearch flex items-center gap-3">
                    <span className='toggleSidenav flex flex-col items-center justify-center h-16 gap-1 cursor-pointer' onClick={()=>dispatch(toggleAdminSidenavbar())}>
                        <span className='w-4 border-[#878A99]  border-1 self-start rounded-3xl'></span>
                        <span className='w-6 border-[#878A99]  border-1'></span>
                        <span className='w-4 border-[#878A99]  border-1 rounded-3xl self-start'></span>
                    </span>

                    <div className="searchBox ">

                        <InputSearch placeholder={'Search'} searchboxClassname='px-2 py-1.5 w-56' icon={<CiSearch />}/>

                    </div>


                </div>


                <div className="profileDetails flex items-center gap-5">
                    <div className="notification text-2xl text-black">
                    <CiBellOn />
                    </div>

                    <div className="avatar flex items-center gap-2">

                        <Avatar src={'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg'}
                                height={'40px'} width={'40px'} borderRadius={'50%'} className={'object-cover'}  
                        />

                        <span>Richard Shah</span>    
                    </div>

                </div>
        
            </div> 
      </nav>

    </>
  )
}
