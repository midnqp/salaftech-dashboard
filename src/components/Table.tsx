'use client';

import React from 'react';
import {
  CheckCircle,
  Cancel,
  Visibility,
} from '@mui/icons-material';
import { Chip, IconButton, Tooltip } from '@mui/material';

interface TableRow {
  adAccount: {
    name: string;
    id: string;
  };
  connectedBM: {
    name: string;
    id: string;
  };
  requestedBMId: string;
  actionType: 'Share' | 'Remove';
}

const Table: React.FC = () => {
  // Mock data based on the image
  const tableData: TableRow[] = [
    {
      adAccount: {
        name: 'FL_Rahnuma_Prokashoni_431',
        id: '4633632086861133'
      },
      connectedBM: {
        name: 'Safiyah Store',
        id: '4633632086861133'
      },
      requestedBMId: '4633632086861133',
      actionType: 'Share'
    },
    {
      adAccount: {
        name: 'FL_Rahnuma_Prokashoni_431',
        id: '4633632086861133'
      },
      connectedBM: {
        name: 'Safiyah Store',
        id: '4633632086861133'
      },
      requestedBMId: '4633632086861133',
      actionType: 'Share'
    },
    {
      adAccount: {
        name: 'FL_Rahnuma_Prokashoni_431',
        id: '4633632086861133'
      },
      connectedBM: {
        name: 'Safiyah Store',
        id: '4633632086861133'
      },
      requestedBMId: '4633632086861133',
      actionType: 'Remove'
    },
    {
      adAccount: {
        name: 'FL_Rahnuma_Prokashoni_431',
        id: '4633632086861133'
      },
      connectedBM: {
        name: 'Safiyah Store',
        id: '4633632086861133'
      },
      requestedBMId: '4633632086861133',
      actionType: 'Share'
    },
    {
      adAccount: {
        name: 'FL_Rahnuma_Prokashoni_431',
        id: '4633632086861133'
      },
      connectedBM: {
        name: 'Safiyah Store',
        id: '4633632086861133'
      },
      requestedBMId: '4633632086861133',
      actionType: 'Share'
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-card border border-gray-200">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Pending Request</h3>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <span className="text-sm text-gray-600">281 results</span>
            <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
              See All
            </button>
          </div>
        </div>
      </div>

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
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ad Account
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Connected BM
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Requested BM ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action Type
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{row.adAccount.name}</div>
                    <div className="text-sm text-gray-500">{row.adAccount.id}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{row.connectedBM.name}</div>
                    <div className="text-sm text-gray-500">{row.connectedBM.id}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{row.requestedBMId}</div>
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
                        <IconButton size="small" className="text-green-600 hover:text-green-700">
                          <CheckCircle className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Reject">
                        <IconButton size="small" className="text-red-600 hover:text-red-700">
                          <Cancel className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="View Details">
                        <IconButton size="small" className="text-gray-600 hover:text-gray-700">
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
    </div>
  );
};

export default Table;
