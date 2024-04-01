import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type ISidebarLinkItem = {
  icon: JSX.Element
  description: string
  href: string
  focus?: boolean
  className?: string
}

export const SidebarLinkItem: React.FC<ISidebarLinkItem> = ({ icon, description, href, className, focus }) => {
  const blurClass = 'text-gray-500 dark:text-gray-400'
  const focusClass = 'bg-gray-100 text-gray-900  dark:bg-gray-800 dark:text-gray-50'

  return (
    <Link
      className={twMerge(
        'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:hover:text-gray-50',
        focus != null && focus ? focusClass : blurClass,
        className
      )}
      href={href}
    > {icon} {description} </Link>
  )
}
