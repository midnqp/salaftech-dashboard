import { AccountCircle } from '@mui/icons-material';
import Layout from '../components/Layout';
import Table from '../components/Table';
import { Divider } from '@mui/material';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Overview</h1>
        <div className='flex [&>*]:w-[20%] justify-between '>
        <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard />
        </div>
        <NumCard/>
        <h2>Pending Requests</h2>
        <Table/>
      </div>
    </Layout>
  );
}

function ChartCard(props:any) {
  return (
    <div className='border-[1px] border-black p-4 rounded-xl'>
    <div className='flex gap-2'>
      <AccountCircle/>
      <p>Client Balance</p>
    </div>
    <div>
      $5,14,480.00
    </div>
  </div>
  )
}

function NumCard(props:any) {
  const data = [
    {text: 'Clients', value: 100},
    {text: 'Ad Accounts', value: 100},
    {text: 'unsettled ad accounts', value: 100},
    {text: 'total amount', value: 100},
  ]
  return (
    <div className='p-4 rounded-xl border-[1px] border-black flex justify-between [&>*]:w-[20%]'>
      {data.map((item, i) => (
        <div className='flex gap-4'>
        <div className='flex-col flex'>
        <p>{item.text}</p>
        <p>{item.value}</p>
        </div>
        {data.length-1 !== i && <Divider  orientation='vertical'  />}
        </div>
      ))}
    </div>
  )
}