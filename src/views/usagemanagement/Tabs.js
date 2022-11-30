// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'


// ** User Components
import CompanyProflle from '../companyprofile'
import UsgManage from '../usgManage'
import InvoiceList from '../invoices'
import Users from '../users'
import Language from '../language'
import PcMarkup from '../ppcmackup'
import Subscription from '../subscription'


const UseManagementTab = ({ active, toggleTab }) => {

  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <span className='fw-bold'>Subscription</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <span className='fw-bold'>Company profile</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <span className='fw-bold'>Invoices</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
            <span className='fw-bold'>Users</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '5'} onClick={() => toggleTab('5')}>
            <span className='fw-bold'>Language</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '6'} onClick={() => toggleTab('6')}>
            <span className='fw-bold'>Usage Management</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '7'} onClick={() => toggleTab('7')}>
            <span className='fw-bold'>PPC Markup</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
          <Subscription />
        </TabPane>
        <TabPane tabId='2'>
          <CompanyProflle />
        </TabPane>
        <TabPane tabId='3'>
          <InvoiceList />
        </TabPane>
        <TabPane tabId='4'>
          <Users />
        </TabPane>
        <TabPane tabId='5'>
          <Language />
        </TabPane>
        <TabPane tabId='6'>
          <UsgManage />
        </TabPane>
        <TabPane tabId='7'>
          <PcMarkup />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default UseManagementTab
