import {
  Badge,
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardDescription,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Separator,
  Container
} from '@/components/core'
import { Container as ContainerIcon } from 'lucide-react'

export function Dashboard(): JSX.Element {
  return (
    <Container title='Estoque' icon={<ContainerIcon className="h-6 w-6" />}>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
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
          <Card>
            <CardHeader>
              <CardTitle>Outgoing Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[150px]">Recipient</TableHead>
                    <TableHead className="hidden md:table-cell">Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="hidden sm:table-cell">Status</TableHead>
                    <TableHead className="text-right">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">
                      Acme Inc
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        1
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">Office supplies</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                    <TableCell className="hidden sm:table-cell">Paid</TableCell>
                    <TableCell className="text-right">2 hours ago</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">
                      XYZ Corp
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        1
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">Marketing services</TableCell>
                    <TableCell className="text-right">$500.00</TableCell>
                    <TableCell className="hidden sm:table-cell">Pending</TableCell>
                    <TableCell className="text-right">3 days ago</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">
                      ABC Ltd
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        1
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">Software license</TableCell>
                    <TableCell className="text-right">$1000.00</TableCell>
                    <TableCell className="hidden sm:table-cell">Unfulfilled</TableCell>
                    <TableCell className="text-right">1 week ago</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Summary</CardTitle>
            <CardDescription>Your most recent incoming and outgoing payments</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <div className="grid gap-1">
              <div className="font-semibold">Incoming</div>
              <div className="text-gray-500 dark:text-gray-400">3 payments</div>
            </div>
            <Separator className="h-12" />
            <div className="grid gap-1">
              <div className="font-semibold">Outgoing</div>
              <div className="text-gray-500 dark:text-gray-400">3 payments</div>
            </div>
            <Separator className="h-12" />
            <div className="grid gap-1">
              <div className="font-semibold">Total</div>
              <div className="text-gray-500 dark:text-gray-400">$500.00</div>
            </div>
          </CardContent>
        </Card>
      </main>
    </Container>
  )
}
