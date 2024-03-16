import { AlignHorizontalDistributeCenter, CircuitBoard, Container } from 'lucide-react'
import Link from 'next/link'
import { SidebarLinkItem } from './components'

export const SideBar: React.FC = () => {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <AlignHorizontalDistributeCenter className="h-6 w-6" />
            <span className="">MRP</span>
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
    </div>
  )
}
