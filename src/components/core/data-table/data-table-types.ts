export type IDataTableHeader = {
  title: string
  mobileShow: boolean
}

export type IDataTableRow = {
  data: IDataTableRowData[]
}

export type IDataTableDataText = string | number | React.ReactNode | null

export type IDataTableRowData = {
  text: IDataTableDataText
  mobileShow: boolean
  styles?: IDataTableRowDataStyles
}

export type IDataTableRowDataStyles = {
  bold: boolean
}
