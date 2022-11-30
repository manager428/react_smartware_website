// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import {
  Check
} from 'react-feather'

// ** Table columns
export const columns = [
  {
    name: 'Activity',
    sortable: true,
    sortField: 'id',
    minWidth: '100px',
    selector: row => row.id,
    cell: row => <Link className='fw-bolder' to={`#`}>{`#${row.id}`}</Link>
  },

  {
    name: 'Client',
    sortable: true,
    minWidth: '100px',
    sortField: 'client',
    selector: row => row.total,
    cell: row => <span>${row.total || 0}</span>
  },
  {
    minWidth: '100px',
    name: 'Date',
    cell: row => row.dueDate
  },
  {
    minWidth: '100px',
    name: 'Duration',
    cell: () => ''
  },
  {
    name: <div><Check /></div>,
    minWidth: '20px',
    maxWidth: '20px',
    cell: () => ''
  }
  
]
