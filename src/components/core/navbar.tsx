import { Menu, User } from 'lucide-react'
import Link from 'next/link'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui'

type INavbarProps = {
  title: string
  icon: JSX.Element
  handleToggleAside: () => void
}

export const Navbar: React.FC<INavbarProps> = ({ icon, title, handleToggleAside }) => {
  return (
    <nav className="flex min-h-[60px] lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      <Link className="lg:hidden" href="#">
        {icon}
        <span className="sr-only">{title}</span>
      </Link>
      <h1 className="font-semibold text-lg">{title}</h1>
      <div className="flex-1" />
      <div className="flex gap-2 items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full p-1 border border-gray-200 w-8 h-8 dark:border-gray-800"
              size="icon"
              variant="ghost"
            >
              <User className='w-full h-full text-gray-400' />
              <span className="sr-only">Menu Usuario</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Minha Conta</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Menu className='h-5 w-5 hidden max-lg:block' onClick={handleToggleAside} />
      </div>
    </nav>
  )
}
