// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const Language = ({ selectedUser }) => {
  return (
    <Fragment>
      <Card>
        <CardBody>
          <h4 className='fw-bolder border-bottom pb-50 mb-1'>Language</h4>
          <div className='info-container'>
            {selectedUser !== null ? (
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>Language</span>
                  <span> English</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25'>Timezone:</span>
                  <span>(UTC+01:00) Brussels, Copenhagen, Madrid, Paris </span>
                </li>
              </ul>
            ) : null}
          </div>
          <div className='d-flex justify-content-center pt-2'>
            <Button color='primary'>
              Edit
            </Button>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default Language
