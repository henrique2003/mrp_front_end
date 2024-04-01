import { Container, DataTable, PlusLink } from '@/components/core'
import { materialsData, materialsHeader } from '@/mocks'
import { Container as ContainerIcon, Edit } from 'lucide-react'
import Link from 'next/link'

export const MateriaisView: React.FC = () => {
  return (
    <Container title='Estoque | Materiais' icon={<ContainerIcon className="h-6 w-6" />}>
      <div className="flex flex-1 flex-col gap-4">
        <DataTable
          title='Lista de Materiais'
          headers={materialsHeader}
          rows={materialsData}
          rowCallback={(data, i) => {
            if (i === 3) {
              return (
                <Link href={`/estoque/materiais/editar/${data as number}`} className='flex justify-center items-center'>
                  <Edit className='w-4 h-4' />
                </Link>
              )
            }
          }}
        >
          <PlusLink href='/estoque/materiais/criar' />
        </DataTable>
      </div>
    </Container>
  )
}
