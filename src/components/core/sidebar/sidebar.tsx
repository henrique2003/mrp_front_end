import { AlignHorizontalDistributeCenter, CircuitBoard, Container } from 'lucide-react'
import Link from 'next/link'
import { SidebarLinkItem } from './components'
import { twMerge } from 'tailwind-merge'

type ISideBarProps = {
  open?: boolean
  handleBlurAside: () => void
}

export const SideBar: React.FC<ISideBarProps> = ({ open, handleBlurAside }) => {
  return (
    <>
      <aside
        className={
          twMerge(
            'border-r bg-gray-100/40 dark:bg-gray-800/40 w-[300px] max-lg:fixed max-lg:bg-gray-50 max-lg:min-h-screen top-0 z-50 ease duration-200',
            open === true ? 'left-0' : 'left-[-300px]'
          )
        }
      >
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] max-lg:h-[55px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <AlignHorizontalDistributeCenter className="h-6 w-6" />
              <span>MRP</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium gap-2">
              <SidebarLinkItem
                href='/estoque'
                icon={<Container className='h-4 w-4' />}
                description='Estoque'
                focus
              />
              <SidebarLinkItem
                href='/fabrica'
                icon={<CircuitBoard className='h-4 w-4' />}
                description='Fábrica'
              />
            </nav>
          </div>
        </div>
      </aside>
      {open === true && (
        <div className='fixed top-0 left-0 z-20 bg-[#00000030] w-screen h-screen' onClick={handleBlurAside}></div>
      )}
    </>
  )
}
