import {
  Badge,
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Container
} from '@/components/core'
import { BarChart } from '@/components/core/charts'
import { Container as ContainerIcon } from 'lucide-react'

export function Dashboard(): JSX.Element {
  return (
    <Container title='Estoque' icon={<ContainerIcon className="h-6 w-6" />}>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex-1 flex flex-col p-4 gap-4">
          <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Estoque em transito</h2>
                <p className="text-sm font-medium leading-none truncate">Esse mês</p>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-8">
                <BarChart data={[
                  { name: '01-06', count: 20 },
                  { name: '07-13', count: 10 },
                  { name: '13-19', count: 40 },
                  { name: '19-25', count: 80 },
                  { name: '26-30', count: 2 }
                ]} className="w-full max-w-[300px] aspect-square" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Orders</h2>
                <p className="text-sm font-medium leading-none truncate">This week</p>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-8">
                {/* <CurvedlineChart className="w-full aspect-[1.25]" /> */}
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Incoming Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[150px]">Customer</TableHead>
                    <TableHead className="hidden md:table-cell">Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="hidden sm:table-cell">Status</TableHead>
                    <TableHead className="text-right">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">
                      John Doe
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        1
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">Subscription</TableCell>
                    <TableCell className="text-right">$9.99</TableCell>
                    <TableCell className="hidden sm:table-cell">Pending</TableCell>
                    <TableCell className="text-right">2 hours ago</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">
                      Jane Smith
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        1
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">One-time purchase</TableCell>
                    <TableCell className="text-right">$19.99</TableCell>
                    <TableCell className="hidden sm:table-cell">Paid</TableCell>
                    <TableCell className="text-right">3 days ago</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">
                      Alex Johnson
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        1
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">Annual subscription</TableCell>
                    <TableCell className="text-right">$99.99</TableCell>
                    <TableCell className="hidden sm:table-cell">Unfulfilled</TableCell>
                    <TableCell className="text-right">1 week ago</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </Container>
  )
}
