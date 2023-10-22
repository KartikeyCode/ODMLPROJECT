'use client'

import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

export default function ApplicationForm() {
  
    const [name, setName] = useState('')
    const [registrationNumber, setRegistrationNumber] = useState('')
    const [department, setDepartment] = useState('')
    const [programme, setProgramme] = useState('')
    const [semester, setSemester] = useState('')
    const [reason, setReason] = useState('')
    const [durationFrom, setDurationFrom] = useState('')
    const [durationTo, setDurationTo] = useState('')
    const [typeOfLeave, setTypeOfLeave] = useState('')
    const [proof, setProof] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const pathname = usePathname()
  
    return (
        <form className="w-[1280px] h-[832px] min-w-full max-h-full py-2 md:py-0 px-4 md:sticky
         flex-col justify-start items-start inline-flex relative bg-stone-900">
        <div className="absolute left-[-9px] top-[64px]">
          <div className="w-[83px] h-[83px] absolute bg-orange-400 bg-opacity-50 rounded-full blur-[132px]" />
          <div className="w-[83px] h-[83px] left-[66px] absolute bg-blue-600 bg-opacity-50 rounded-full blur-[132px]" />
          <div className="w-[83px] h-[83px] left-[78px] top-[95px] absolute bg-rose-500 bg-opacity-50 rounded-full blur-[132px]" />
        </div>
        <div className="absolute left-[-28px] top-[-5px]">
          <div className="w-[307px] h-[840px] bg-neutral-700 bg-opacity-20 rounded-[30px]" />
        </div>
        <div className="absolute left-[37px] top-[157px] flex-col justify-start items-start gap-8 inline-flex">
          <div className="relative w-[105px] h-10">
            <div className="w-[105px] h-10 justify-start items-center gap-4 inline-flex">
              <div className="w-10 h-10 rounded-[60px] border-2 border-zinc-800" />
              <div className="text-white text-lg font-bold font-['SF Pro Display']">
              <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
            </div>
            </div>
          </div>
          <div className="relative w-[159px] h-10">
            <div className="w-[159px] h-10 justify-start items-center gap-4 inline-flex">
              <div className="w-10 h-10 rounded-[60px] border-2 border-zinc-200" />
              <div className="text-white text-lg font-bold font-['SF Pro Display']">
              <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/applications">Applications</Link></div>
            </div>
            <div className="w-6 h-6 left-[8px] top-[8px] absolute bg-zinc-200 bg-opacity-0" />
          </div>
          <div className="relative w-[109px] h-10">
            <div className="w-[109px] h-10 justify-start items-center gap-4 inline-flex">
              <div className="w-10 h-10 rounded-[60px] border-2 border-zinc-800" />
              <div className="text-white text-lg font-bold font-['SF Pro Display']">
              <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/profile">Profile</Link></div>
            </div>
          </div>
        </div>
        <div className="absolute left-[46px] top-[38px]">
          <div className="w-8 h-[36.89px] absolute" />
          <div className="w-[90px] h-[38px] left-[38px] top-0 text-white text-[10px] font-semibold font-['Poppins']">BLOCKCHAIN CLUB SRM</div>
        </div>
        <div className="absolute left-[221px] top-[157px] bg-stone-300 rounded-full blur-[400px] h-[219px] w-[223px]" />
        <div className="absolute left-[383px] top-[58px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-1">
            <div className="text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">Name</div>
            <input className="self-stretch p-3 my-2 bg-zinc-700 text-gray-200 rounded justify-start items-center gap-2.5"
              type="text" placeholder="Vedant Utage" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
        </div>
        <div className="absolute left-[386px] top-[484px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-[716px] flex-col justify-start items-start gap-1">
            <div className="text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">Reason</div>
            <input className="self-stretch text-gray-200 w-[716px] h-[130px] p-3 my-2 bg-zinc-700 rounded-[5px] border border-zinc-700"
              type="text" placeholder="Reason for leave" value={reason} onChange={(e) => setReason(e.target.value)} />
          </div>
        </div>
        <div className="absolute left-[763px] top-[162px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-1">
            <div className="text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">Department</div>
            <input className="self-stretch p-3 my-2 text-gray-200 bg-zinc-700 rounded justify-start items-center gap-2.5"
              type="text" placeholder="CINTEL" value={department} onChange={(e) => setDepartment(e.target.value)} />
          </div>
        </div>
        <div className="absolute left-[385px] top-[372px] text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">Duration</div>
        <div className="absolute left-[616px] top-[414px] text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">to</div>
        <div className="absolute left-[762px] top-[58px] flex-col justify-start items-start gap-1 inline-flex">
          <div className="flex-col justify-start items-start gap-1">
            <div className="text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">Registration Number</div>
            <input className="self-stretch p-3 my-2 text-gray-200 bg-zinc-700 rounded border border-gray-700"
              type="text" value={registrationNumber} placeholder='RA2111033010031' onChange={(e) => setRegistrationNumber(e.target.value)} />
          </div>
        </div>
        <div className="absolute left-[608px] top-[162px]">
          <label className="text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">Semester</label>
        </div>
        <div className="absolute left-[608px] top-[198px]">
          <input className="self-stretch bg-zinc-700 p-[30px] h-[48px] w-[30px] rounded border border-gray-700"
            type="text" value={semester} placeholder="6" onChange={(e) => setSemester(e.target.value)} />
        </div>
        <div className="absolute left-[383px] top-[162px]">
          <label className="text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">Programme</label>
          <div className="flex items-center gap-20 my-4">
            <div className="flex items-center my-2 gap-1">
              <input type="radio" className="w-5 h-5 bg-zinc-300 rounded-full" checked={programme === 'UG'} onChange={() => setProgramme('UG')} />
              <div className="text-gray-100 text-base font-normal font-['SF Pro Display'] leading-normal">UG</div>
            </div>
            <div className="flex items-center gap-1">
              <input type="radio" className="w-5 h-5 bg-zinc-300 rounded-full" checked={programme === 'PG'} onChange={() => setProgramme('PG')} />
              <div className="text-gray-100 text-base font-normal font-['SF Pro Display'] leading-normal">PG</div>
            </div>
          </div>
        </div>
        <div id='typeofleave'>
        <div className="absolute left-[382px] top-[267px] text-gray-200 text-lg font-semibold font-['SF Pro Display'] leading-none">Type of leave</div>
        <div className="absolute left-[411px] top-[311px] text-gray-100 text-base font-normal font-['SF Pro Display'] leading-normal">OD (Permissive)</div>
        <input type="radio" checked={typeOfLeave === 'OD (Permissive)'} onChange={() => setTypeOfLeave('OD (Permissive)')} className="w-5 h-5 absolute left-[23.75em] top-[19.625em] bg-zinc-300 rounded-full" />
        <div className="absolute left-[570px] top-[311px] text-gray-100 text-base font-normal font-['SF Pro Display'] leading-normal">OD (Personal)</div>
        <input type="radio" checked={typeOfLeave === 'OD (Personal)'} onChange={() => setTypeOfLeave('OD (Personal)')}  className="w-5 h-5 absolute left-[34em] top-[19.625em] bg-zinc-300 rounded-full" />
        <div className="absolute left-[714px] top-[311px] text-gray-100 text-base font-normal font-['SF Pro Display'] leading-normal">ML</div>
        <input type="radio" checked={typeOfLeave === 'ML'} onChange={() => setTypeOfLeave('ML')} className="w-5 h-5 absolute left-[43em] top-[19.625em] bg-zinc-300 rounded-full" />
        </div>
        <div className="absolute my-2 left-[381px] top-[396px]">
          <input className="w-[210px] h-[50px] px-1em bg-inherit text-stone-300 text-base font-normal font-['Inter'] absolute justify-center items-center inline-flex rounded-lg border border-stone-300"
            type="date" value={durationFrom} onChange={(e) => setDurationFrom(e.target.value)} placeholder="Duration From" />
        </div>
        <div className="absolute my-2 left-[665px] top-[396px]">
          <input className="w-[210px] h-[50px] px-1em bg-inherit text-stone-300 text-base font-normal font-['Inter'] absolute justify-center items-center inline-flex rounded-lg border border-stone-300"
            type="date" value={durationTo} onChange={(e) => setDurationTo(e.target.value)} placeholder="Duration To" />
        </div>
        <button className="absolute left-[582px] top-[688px] w-[324px] h-[52px] py-4 bg-blue-700 rounded-xl justify-center items-center inline-flex text-center text-white text-xl font-normal font-['Roboto'] leading-tight tracking-tight" 
        value={submitted} onClick={() => setSubmitted(!submitted)}>Submit</button>
        <button className="absolute left-[910px] top-[304px] w-[196px] h-12 py-4 bg-stone-500 rounded-[5px] justify-center items-center inline-flex text-center text-gray-200 text-lg font-normal font-['SF Pro Display'] leading-none" 
        value={proof} onClick={() => setProof(proof)}>Upload Proof</button>
      </form>
    );
};
        


