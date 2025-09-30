'use client'
import {
  AccountBalance,
  AccountCircle,
  CurrencyExchange,
  Money,
  Search,
} from '@mui/icons-material'
import Layout from '../components/Layout'
import Table from '../components/Table'
import { Autocomplete, Button, Divider, TextField } from '@mui/material'
import * as recharts from 'recharts'
import { useMemo } from 'react'
const { Line, LineChart, ResponsiveContainer } = recharts

export default function Home() {
  const tableData = [
    {
        "adAccount": {
            "name": "FL_Retail_Solutions_409",
            "id": "0530348577812810"
        },
        "connectedBM": {
            "name": "Safiyah Store",
            "id": "1522303874878596"
        },
        "requestedBMId": "2587926153878642",
        "actionType": "Remove"
    },
    {
        "adAccount": {
            "name": "FL_Nupem_Ads_418",
            "id": "6341872548430001"
        },
        "connectedBM": {
            "name": "BlueSky Mart",
            "id": "9027812546433568"
        },
        "requestedBMId": "9144090180014372",
        "actionType": "Share"
    },
    {
        "adAccount": {
            "name": "FL_Retail_Solutions_484",
            "id": "3049279233917234"
        },
        "connectedBM": {
            "name": "CityLine Retail",
            "id": "5665385743452997"
        },
        "requestedBMId": "8514778881682010",
        "actionType": "Share"
    },
    {
        "adAccount": {
            "name": "FL_Safiyah_Marketing_455",
            "id": "2583331135897988"
        },
        "connectedBM": {
            "name": "Arafah Traders",
            "id": "1149069868654268"
        },
        "requestedBMId": "5228904463444174",
        "actionType": "Remove"
    },
    {
        "adAccount": {
            "name": "FL_Retail_Solutions_458",
            "id": "6401884295411060"
        },
        "connectedBM": {
            "name": "CityLine Retail",
            "id": "1232510516938834"
        },
        "requestedBMId": "4542582084505799",
        "actionType": "Share"
    },
    {
        "adAccount": {
            "name": "FL_Nupem_Ads_483",
            "id": "7504172406143974"
        },
        "connectedBM": {
            "name": "Safiyah Store",
            "id": "5952810354346664"
        },
        "requestedBMId": "7054753837585876",
        "actionType": "Remove"
    },
    {
        "adAccount": {
            "name": "FL_Safiyah_Marketing_517",
            "id": "3991598695272912"
        },
        "connectedBM": {
            "name": "CityLine Retail",
            "id": "1768180969339879"
        },
        "requestedBMId": "3950458031201254",
        "actionType": "Remove"
    },
    {
        "adAccount": {
            "name": "FL_Safiyah_Marketing_466",
            "id": "2323687537762641"
        },
        "connectedBM": {
            "name": "BlueSky Mart",
            "id": "6660306825977490"
        },
        "requestedBMId": "8166091720578233",
        "actionType": "Remove"
    }
]

  return (
    <Layout>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Overview</h3>
        <div className="flex [&>div]:w-[24%] justify-between mb-4">
          <ChartCard
            text="Client Balance"
            icon={<AccountCircle fontSize="small" />}
          />
          <ChartCard text="Add Acc Balance" icon={<Money fontSize="small" />} />
          <ChartCard
            text="Vendor Balance"
            icon={<AccountBalance fontSize="small" />}
          />
          <ChartCard
            text="Pending Deposit"
            icon={<CurrencyExchange fontSize="small" />}
          />
        </div>
        <NumCard />

        <div className="w-full mb-4 flex justify-between ">
          <h3 className="text-lg font-semibold text-gray-900">
            Pending Request
          </h3>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
            </div>
            <Button>See All</Button>
          </div>
        </div>

        <Table tableData={tableData}/>
      </div>
    </Layout>
  )
}

function ChartCard(props: any) {
  const data = [
    {
      name: 'JAN',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'FEB',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'MAR',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'APR',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'MAY',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'JUN',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'JUL',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  return (
    <div className="w-full border-[1px] bg-white border-gray-200 p-4 rounded-xl">
      <div className="w-full flex gap-2 mb-2">
        {props.icon}
        <p className='text-sm'>{props.text}</p>
      </div>
      <div className="mb-2 text-2xl">$5,14,480.00</div>
      <div className="w-full h-24">
        <ResponsiveContainer>
          <LineChart data={data}>
            <recharts.XAxis className="text-[8px]" dataKey="name" />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function NumCard(props: any) {
  const data = [
    { text: 'Clients', value: 100 },
    { text: 'Ad Accounts', value: 84 },
    { text: 'Unsettled Ad Accounts', value: 0 },
    { text: 'Admins', value: 26 },
  ]
  return (
    <div className="mb-12 4 p-4 rounded-xl border-[1px] bg-white border-gray-200  flex justify-between [&>div]:w-[24%]">
      {data.map((item, i) => (
        <div key={i} className="w-full flex gap-4">
          <div className="w-full flex-col flex">
            <p className='mb-2 text-sm'>{item.text}</p>
            <div className="flex justify-between">
              <p className='text-2xl'>{item.value}</p> <Button>View All</Button>{' '}
            </div>
          </div>
          {data.length - 1 !== i && <Divider orientation="vertical" />}
        </div>
      ))}
    </div>
  )
}
