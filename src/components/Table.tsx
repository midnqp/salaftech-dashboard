'use client'

import React, { useMemo, useState } from 'react'
import { CheckCircle, Cancel, Visibility, Check, Close } from '@mui/icons-material'
import { Chip, IconButton, Tooltip, Dialog, DialogContent } from '@mui/material'

interface TableRow {
  adAccount: {
    name: string
    id: string
  }
  connectedBM: {
    name: string
    id: string
  }
  requestedBMId: string
  actionType: 'Share' | 'Remove'
}

const Table = (props: any) => {
  // Randomized mock data (stable per render)
 const tableData = props.tableData 

 const handleApproveClick = (id:any) => {
  setOpen(true)
  setDdata(tableData.find(t => t.adAccount.id == id))
  setStatus('approved')

 }
 const handleRejectClick = (id:any) => {
  setOpen(true)
  setDdata(tableData.find(t => t.adAccount.id == id))
  setStatus('rejected')
 }

  const [isOpen, setOpen] = useState(false)
  const [dData, setDdata] = useState({})
  const [status, setStatus ] = useState('')

  return (
    <div className="bg-white rounded-lg shadow-card border border-gray-200">
      {/* Table Header 
      <div className="px-6 py-4 border-b border-gray-200">
       
      </div>*/}

      {/* Tab Navigation */}
      <div className="px-6 py-3 border-b border-gray-200">
        <div className="flex space-x-6">
          {[
            { label: 'Ad Accounts', count: 0 },
            { label: 'Clients', count: 0 },
            { label: 'Deposits', count: 0 },
            { label: 'Share & Remove BM', count: 18, active: true },
            { label: 'Account Review', count: 0 },
            { label: 'Vendor Transfer', count: 0 },
            { label: 'Withdrawal', count: 0 },
          ].map((tab) => (
            <button
              key={tab.label}
              className={`px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                tab.active
                  ? 'bg-primary-100 text-primary-700 border border-primary-200'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="table-header">Ad Account</th>
              <th className="table-header">Connected BM</th>
              <th className="table-header">Requested BM ID</th>
              <th className="table-header">Action Type</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {row.adAccount.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {row.adAccount.id}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {row.connectedBM.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {row.connectedBM.id}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {row.requestedBMId}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <Chip
                      label={row.actionType}
                      size="small"
                      color={row.actionType === 'Share' ? 'success' : 'error'}
                      sx={{
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        height: '24px',
                      }}
                    />
                    <div className="flex items-center space-x-1 ml-2">
                      <Tooltip title="Approve">
                        <IconButton
                        onClick={() => {handleApproveClick(row.adAccount.id)}}
                          size="small"
                          className="text-green-600 hover:text-green-700"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Reject">
                        <IconButton
                          size="small"
                          className="text-red-600 hover:text-red-700"
                          onClick={() => {handleRejectClick(row.adAccount.id)}}
                        >
                          <Cancel className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="View Details">
                        <IconButton
                          size="small"
                          className="text-gray-600 hover:text-gray-700"
                        >
                          <Visibility className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog   className=''  open={isOpen}  >
        
        <DialogContent className='w-sm h-[31vh] no-scrollbar bg-white'>
          <div className='flex justify-end'>
            <div className='cursor-pointer' onClick={() => {setOpen(false)}}><Close /></div>
          </div>
          {status == 'approved' ? <Good dData={dData} />   : <Bad dData={dData} />}
        
        </DialogContent>
      </Dialog>
    </div>
  )
}

function Bad(props:any) {
  const dData = props.dData
  return (
    <div className='pb-8 pt-4 flex justify-center '>
    <div className='flex flex-col'>
    <div className='mb-4'>
    <div className='flex gap-2 items-center '>
      <div><span className='bg-red-500 rounded-full p-1 text-white '><Close fontSize='small'/></span> 
      </div>
    <span className='font-extrabold text-lg'>Request Denied</span></div>
    </div>

    <div className='flex flex-col [&>*]:flex  [&>*]:justify-center text-sm'>
      <p>{dData.adAccount.name}</p>
      <p>{dData.connectedBM.id}</p>
    </div>
    </div>
    </div>
  )
}

function Good (props:any) {
  const dData = props.dData
  return (
    <div className='pb-8 pt-4 flex justify-center '>
    <div className='flex flex-col'>
    <div className='mb-4'>
    <div className='flex gap-2 items-center '>
      <div><span className='bg-green-500 rounded-full p-1 text-white '><Check fontSize='small'/></span> 
      </div>
    <span className='font-extrabold text-lg'>Request Approved</span></div>
    </div>

    <div className='flex flex-col [&>*]:flex  [&>*]:justify-center text-sm'>
      <p>{dData.adAccount.name}</p>
      <p>{dData.connectedBM.id}</p>
    </div>
    </div>
    </div>
  )
}

export default Table
