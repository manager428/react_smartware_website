// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Table columns
export const columns = [
  {
    name: 'Client',
    sortable: true,
    sortField: 'id',
    minWidth: '100px',
    selector: row => row.id,
    cell: () => ''
  },

  {
    name: 'Report',
    sortable: true,
    minWidth: '100px',
    sortField: 'client',
    selector: row => row.total,
    cell: () => ''
  },
  {
    minWidth: '100px',
    name: 'Interval',
    cell: row => row.dueDate
  },
  {
    minWidth: '100px',
    name: 'Latest',
    cell: () => ''
  },
  {
    minWidth: '100px',
    name: 'Next',
    cell: () => ''
  },
  {
    minWidth: '100px',
    name: 'Action',
    cell: () => ''
  }
  
]
