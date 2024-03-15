import Link from 'next/link'
import {
  Button,
  Badge,
  Input,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
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
  SideBar
} from '@/components/core'

export function Dashboard(): JSX.Element {
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <SideBar />
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <h1 className="font-semibold text-lg">Payments</h1>
          <div className="flex-1" />
          <form className="w-full max-w-md lg:max-w-xs">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-8 bg-gray-100/40 rounded-lg dark:placeholder-gray-300/40 dark:bg-gray-800/40"
                placeholder="Search..."
                type="search"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: '32/32',
                    objectFit: 'cover'
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
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
      </div>
    </div>
  )
}

function Package2Icon(props: any): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}

function SearchIcon(props: any): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
