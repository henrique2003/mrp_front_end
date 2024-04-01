import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Input
} from '../index'
import { type IDataTableRow, type IDataTableHeader, type IDataTableDataText } from './data-table-types'
import { twMerge } from 'tailwind-merge'

type IDataTableProps = {
  title: string
  headers: IDataTableHeader[]
  rows: IDataTableRow[]
  rowCallback?: (data: IDataTableDataText, index: number) => IDataTableDataText | null
  children?: JSX.Element
}

export const DataTable: React.FC<IDataTableProps> = ({ title, headers, rows, children, rowCallback }) => {
  return (
    <div className='w-full h-fullm mt-5'>
      <CardTitle className='text-lg mb-2'>{title}</CardTitle>
      <Card>
        <CardHeader className='border-b-[1px] gap-20 border-gray-200 mb-2 flex flex-row justify-between items-center'>
          <Input
            placeholder='Filtrar...'
            className='max-w-[300px] w-full'
          />
          {children}
        </CardHeader>
        <CardContent className='p-0'>
          <Table>
            <TableHeader>
              <TableRow>
                {headers.map((header, key) => (
                  <TableHead key={key} className={twMerge(
                    'min-w-[150px] text-center',
                    !header.mobileShow && 'max-lg:hidden'
                  )}>{header.title}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, key) => (
                <TableRow key={key} className='h-10'>
                  {row.data.map((data, index) => {
                    let text = data.text

                    if (rowCallback !== null && rowCallback !== undefined) {
                      const cbData = rowCallback(data.text, index + 1)
                      if (cbData !== null && cbData !== undefined) {
                        text = cbData
                      }
                    }

                    return (
                      <TableCell className={twMerge(
                        'text-center',
                        !data.mobileShow && 'max-lg:hidden',
                        data.styles !== undefined && data.styles.bold && 'font-bold'
                      )}>{text}</TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
