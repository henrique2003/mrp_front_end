export type IDataTableHeader = {
  title: string
  mobileShow: boolean
}

export type IDataTableRow = {
  data: IDataTableRowData[]
}

export type IDataTableRowData = {
  text: string | number
  mobileShow: boolean
  styles?: IDataTableRowDataStyles
}

export type IDataTableRowDataStyles = {
  bold: boolean
}
