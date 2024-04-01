'use client'

import { useState } from 'react'
import { Navbar, SideBar } from './index'

type IContainerProps = {
  children: React.ReactNode
  title: string
  icon: JSX.Element
}

export const Container: React.FC<IContainerProps> = ({ children, icon, title }) => {
  const [asideOpen, setAsideOpen] = useState(false)

  function handleToggleAside(): void {
    setAsideOpen(!asideOpen)
  }

  function handleBlurAside(): void {
    asideOpen && setAsideOpen(false)
  }

  return (
    <div className="min-h-screen w-full overflow-hidden flex relative">
      <SideBar open={asideOpen} handleBlurAside={handleBlurAside} />
      <div className="flex flex-col w-full relative z-10">
        <Navbar title={title} icon={icon} handleToggleAside={handleToggleAside} />
        <div className='p-4 px-6 pb-10 w-full h-full'>
          {children}
        </div>
      </div>
    </div>
  )
}
