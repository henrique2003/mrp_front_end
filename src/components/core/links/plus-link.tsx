import { Plus } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/core'

type IPlusLinkProps = {
  href: string
}

export const PlusLink: React.FC<IPlusLinkProps> = ({ href }) => {
  return (
    <Link href={href}>
      <Button className='p-1 w-10 h-10'>
        <Plus className='w-6 h-6' />
      </Button>
    </Link>
  )
}
