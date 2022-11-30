// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** React Imports
import { useParams, Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Card, CardHeader, Button, Row, Col, Input, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

// ** Third Party Components
import { ChevronDown, Share, FileText, File, Grid, Copy } from 'react-feather'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Store & Actions
import { getUser, getData } from './store'

// ** Table Columns
import { columns } from './columns'

import { useSelector, useDispatch } from 'react-redux'

// ** Table Header
const CustomHeader = ({ store, toggleSidebar, handlePerPage, userRowsPerPage, handleFilter, searchTerm }) => {
    // ** Converts table to CSV
    function convertArrayOfObjectsToCSV(array) {
      let result
  
      const columnDelimiter = ','
      const lineDelimiter = '\n'
      const keys = Object.keys(store.data[0])
  
      result = ''
      result += keys.join(columnDelimiter)
      result += lineDelimiter
  
      array.forEach(item => {
        let ctr = 0
        keys.forEach(key => {
          if (ctr > 0) result += columnDelimiter
  
          result += item[key]
  
          ctr++
        })
        result += lineDelimiter
      })
  
      return result
    }
  
    // ** Downloads CSV
    function downloadCSV(array) {
      const link = document.createElement('a')
      let csv = convertArrayOfObjectsToCSV(array)
      if (csv === null) return
  
      const filename = 'export.csv'
  
      if (!csv.match(/^data:text\/csv/i)) {
        csv = `data:text/csv;charset=utf-8,${csv}`
      }
  
      link.setAttribute('href', encodeURI(csv))
      link.setAttribute('download', filename)
      link.click()
    }
    return (
      <div className='client-list-table-header w-100 me-1 ms-50 mt-2 mb-75'>
        <Row>
          <Col xl='6' className='d-flex align-items-center p-0'>
            <div className='d-flex align-items-center w-100'>
              <label htmlFor='rows-per-page' className='font-size-12'>Show</label>
              <Input
                className='mx-50'
                type='select'
                id='rows-per-page'
                value={userRowsPerPage}
                onChange={handlePerPage}
                style={{ width: '5rem' }}
              >
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
                <option value='250'>250</option>
                <option value='500'>500</option>
              </Input>
              <label htmlFor='rows-per-page' className='font-size-12'>lines</label>
            </div>
          </Col>
          <Col
            xl='6'
            className='d-flex align-items-sm-center justify-content-xl-end justify-content-start flex-xl-nowrap flex-wrap flex-sm-row flex-column pe-xl-1 p-0 mt-xl-0 mt-1'
          >
            <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
              <label className='mb-0 font-size-12' htmlFor='search-invoice'>
                Search:
              </label>
              <Input
                id='search-invoice'
                className='ms-50 w-100 font-size-12'
                type='text'
                value={searchTerm}
                onChange={e => handleFilter(e.target.value)}
              />
            </div>
  
            <div className='d-flex align-items-center table-header-actions'>
              <UncontrolledDropdown className='me-1'>
                <DropdownToggle color='secondary' caret outline>
                  <Share className='font-small-4 me-50' />
                  <span className='align-middle font-size-12'>Export</span>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className='w-100' onClick={() => downloadCSV(store.data)}>
                    <FileText className='font-small-4 me-50' />
                    <span className='align-middle font-size-12'>CSV</span>
                  </DropdownItem>
                  <DropdownItem className='w-100'>
                    <Grid className='font-small-4 me-50' />
                    <span className='align-middle font-size-12'>Excel</span>
                  </DropdownItem>
                  <DropdownItem className='w-100'>
                    <File className='font-small-4 me-50' />
                    <span className='align-middle font-size-12'>PDF</span>
                  </DropdownItem>
                  <DropdownItem className='w-100'>
                    <Copy className='font-small-4 me-50' />
                    <span className='align-middle font-size-12'>Copy</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
  
              <Button className='add-new-user font-size-12' color='primary' onClick={toggleSidebar}>
                Create new user
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    )
  }

const ClientOverview = () => {

  // ** Store Vars
  const store = useSelector(state => state.users)
  const dispatch = useDispatch()
   // ** States
   const [sort, setSort] = useState('desc')
   const [searchTerm, setSearchTerm] = useState('')
   const [currentPage, setCurrentPage] = useState(1)
   const [sortColumn, setSortColumn] = useState('id')
   const [userRowsPerPage, setUserRowsPerPage] = useState(25)
   const [sidebarOpen, setSidebarOpen] = useState(false)

   // ** Function to toggle sidebar
   const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  // ** Hooks
  const { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getUser(parseInt(id)))
  }, [dispatch])

  // ** Function in get data on page change
  const handlePagination = page => {
    dispatch(
      getData({
        sort,
        sortColumn,
        q: searchTerm,
        perPage: userRowsPerPage,
        page: page.selected + 1
      })
    )
    setCurrentPage(page.selected + 1)
  }

  // ** Function in get data on rows per page
  const handlePerPage = e => {
    const value = parseInt(e.currentTarget.value)
    dispatch(
      getData({
        sort,
        sortColumn,
        q: searchTerm,
        perPage: value,
        page: currentPage
      })
    )
    setUserRowsPerPage(value)
  }

  // ** Function in get data on search query change
  const handleFilter = val => {
    setSearchTerm(val)
    dispatch(
      getData({
        sort,
        q: val,
        sortColumn,
        page: currentPage,
        perPage: userRowsPerPage
      })
    )
  }

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Number(Math.ceil(store.total / userRowsPerPage))

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end my-2 pe-1'}
      />
    )
  }
  
  // ** Table data to render
  const dataToRender = () => {
    const filters = {
      q: searchTerm
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (store.data.length > 0) {
      return store.data
    } else if (store.data.length === 0 && isFiltered) {
      return []
    } else {
      return store.allData.slice(0, userRowsPerPage)
    }
  }

  const handleSort = (column, sortDirection) => {
    setSort(sortDirection)
    setSortColumn(column.sortField)
    dispatch(
      getData({
        sort,
        sortColumn,
        q: searchTerm,
        page: currentPage,
        perPage: userRowsPerPage
      })
    )
  }
  
  return (
    <Fragment>
      <Card>
        <div className='react-dataTable user-view-account-projects'>
        <DataTable
            noHeader
            subHeader
            sortServer
            pagination
            responsive
            paginationServer
            columns={columns}
            onSort={handleSort}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            paginationComponent={CustomPagination}
            data={dataToRender()}
            subHeaderComponent={
              <CustomHeader
                store={store}
                searchTerm={searchTerm}
                userRowsPerPage={userRowsPerPage}
                handleFilter={handleFilter}
                handlePerPage={handlePerPage}
                toggleSidebar={toggleSidebar}
              />
            }
          />
        </div>
      </Card>
    </Fragment>
  )
}

export default ClientOverview
