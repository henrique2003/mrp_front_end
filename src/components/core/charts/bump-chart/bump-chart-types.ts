export type IBumpChartData = {
  name: string
  data: IBumpLocationData[]
}

export type IBumpLocationData = {
  x: number | string
  y: number
}
