import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
    return (
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 10, label: 'Quarter 1 Revenue' },
                        { id: 1, value: 15, label: 'Quarter 2 Revenue' },
                        { id: 2, value: 20, label: 'Quarter 3 Revenue' },
                    ],
                },
            ]}
            width={200}
            height={200}
        />
    );
}