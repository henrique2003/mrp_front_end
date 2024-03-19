import { Container as ContainerIcon } from 'lucide-react'

import {
  CardHeader,
  CardContent,
  Card,
  Container,
  BarChart,
  BumpChart,
  DataTable
} from '@/components/core'

import { purchaseOrder, stockData, stockHeader, stockInTransitData } from '@/mocks'

export function Dashboard(): JSX.Element {
  return (
    <Container title='Estoque' icon={<ContainerIcon className="h-6 w-6" />}>
      <main className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-4 max-md:flex-col">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Estoque em transito</h2>
                <p className="text-sm font-medium leading-none truncate">Esse mês</p>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-8">
                <BarChart data={stockInTransitData} className="w-[300px] aspect-square" />
              </CardContent>
            </Card>
            <Card className='w-full'>
              <CardHeader>
                <h2 className="text-lg font-semibold">Ordens de compra</h2>
                <p className="text-sm font-medium leading-none truncate">Essa semana</p>
              </CardHeader>
              <CardContent className="flex w-full items-center justify-center p-8">
                <BumpChart data={purchaseOrder} className="w-full aspect-square max-h-[300px]" />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="grid">
          <DataTable
            title='Lista de Estoques'
            headers={stockHeader}
            rows={stockData}
          />
        </div>
      </main>
    </Container>
  )
}
