import { type BumpDatum, type BumpSerie, type BumpSerieExtraProps } from '@nivo/bump'
import { type IBumpChartData } from '../bump-chart-types'

export function bumpChartDataConverter(data: IBumpChartData[]): Array<BumpSerie<BumpDatum, BumpSerieExtraProps>> {
  const bumpData: Array<BumpSerie<BumpDatum, BumpSerieExtraProps>> = []

  data.map(d => {
    bumpData.push({
      id: d.name,
      data: d.data
    })
  })

  return bumpData
}
