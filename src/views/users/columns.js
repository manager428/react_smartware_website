// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Icons Imports
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

// ** Table columns
export const columns = [
  {
    name: 'Name',
    sortable: true,
    sortField: 'name',
    minWidth: '100px',
    selector: row => row.email,
    cell: row => row.fullName
  },

  {
    name: 'Email',
    sortable: true,
    minWidth: '100px',
    sortField: 'email',
    selector: row => row.email,
    cell: row => row.email
  },
  {
    name: 'Phone',
    minWidth: '100px',
    cell: row => row.phone
  },
  {
    minWidth: '100px',
    name: '',
    cell: () => (
    <div className='column-action text-nowrap'>
        
        <span className='align-middle me-75'>Edit</span>
        
        <span className='align-middle me-75'>Change Password</span>
        
        <span className='align-middle'>Delete user</span>
    </div>
    )
  }
  
]
