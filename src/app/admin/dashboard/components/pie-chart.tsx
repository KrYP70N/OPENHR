import { PieChart } from '@mui/x-charts'
import React from 'react'

type PieChartProps = {
  name: string
}

export default function PeiChart({name}: PieChartProps) {
  return (
    <div className="shadow-md p-4 relative rounded-md">
        <h2 className="text-center">{name}</h2>
        
        <div className="justify-center">
          <div className="w-[100%] h-[300px]">
            <PieChart
              margin={{left: 10, right: 10}}
              className="w-[100%]"
              series={[
                {
                  data: [
                    { id: 0, value: 10, color: '#21AD7B'},
                    { id: 1, value: 15, color: '#E60F43'},
                    { id: 2, value: 75, color: '#F69336'},
                  ],
                  innerRadius: 60,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                }
              ]}
            />
          </div>
          <ul>
            <li><span className="inline-block w-3 h-3 bg-[#21AD7B] mr-3"></span> (10) Present</li>
            <li><span className="inline-block w-3 h-3 bg-[#F69336] mr-3"></span> (75) Leave</li>
            <li><span className="inline-block w-3 h-3 bg-[#E60F43] mr-3"></span> (15) Absent</li>
          </ul>
        </div>
      </div>
  )
}
