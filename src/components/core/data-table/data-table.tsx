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
  TableCell
} from '../index'
import { type IDataTableRow, type IDataTableHeader } from './data-table-types'
import { twMerge } from 'tailwind-merge'

type IDataTableProps = {
  title: string
  headers: IDataTableHeader[]
  rows: IDataTableRow[]
}

export const DataTable: React.FC<IDataTableProps> = ({ title, headers, rows }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
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
              <TableRow key={key}>
                {row.data.map(data => <TableCell className={twMerge(
                  'text-center',
                  !data.mobileShow && 'max-lg:hidden',
                  data.styles !== undefined && data.styles.bold && 'font-bold'
                )}>{data.text}</TableCell>)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
