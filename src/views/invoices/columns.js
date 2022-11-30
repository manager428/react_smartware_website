// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Icons Imports
import { Download, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'

// ** Table columns
export const columns = [
  {
    name: 'Date',
    sortable: true,
    sortField: 'name',
    minWidth: '100px',
    selector: row => row.email,
    cell: row => (
      <div>
        {row.fullName}
        &nbsp;&nbsp;
        <Link
            to={`/companies/${row.id}`}
            className='user_name text-body'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <span className='fw-bolder'>{row.fullName}</span>
          </Link>
      </div>
    )
  },
  {
    minWidth: '100px',
    name: '',
    cell: () => (
    <div className='column-action text-nowrap'>
        <Button color='primary'><Download className='stroke-white' /> Download</Button>
    </div>
    )
  }
  
]
