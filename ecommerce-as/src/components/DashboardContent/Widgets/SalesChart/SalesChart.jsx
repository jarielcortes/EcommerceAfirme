import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { formatCurrency } from '../../../../utils/Format';
import './SalesChart.css';

export function SalesChart({ data }) {

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Ventas</h2>
        <div className="h-40">
          <ResponsiveBar
            data={data.map(item => ({
              month: item.month,
              Polizas: item.data.Polizas.sales,
              Cotizaciones: item.data.Cotizaciones.sales
            }))}
            keys={['Polizas', 'Cotizaciones']} // Keys for types
            indexBy="month" // Month on the X-axis
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            colors={{ scheme: 'nivo' }}
            groupMode="stacked" // Stacked mode
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Mes',
              legendPosition: 'middle',
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Cantidad Vendida',
              legendPosition: 'middle',
              legendOffset: -40,
            }}
            label={(data) => formatCurrency(data.value)} // Format labels as currency
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            tooltip={({ id, value }) => (
              <div style={{ padding: '5px', background: '#fff', border: '1px solid #ccc' }}>
                <strong>{id}</strong>: Total Ventas {formatCurrency(value)}
              </div>
            )} // Inline tooltip
            legends={[
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
      </div>
    );
  }

  export default SalesChart;