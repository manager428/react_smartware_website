// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, Form, CardBody, Button, Badge, Modal, Input, Label, ModalBody, ModalHeader } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const Language = () => {
  return (
    <Fragment>
      <Card>
        <CardBody>
            <Row className='mb-2'>
                <Col sm='9'>
                    <h4 className='fw-bolder border-bottom'>Media channel</h4>
                </Col>
                <Col sm='3'>
                    <h4 className='fw-bolder border-bottom'>Markup</h4>
                </Col>
            </Row>
          
          <div className='info-container'>
            <Row>
                <Col sm='9' className='mb-2'>
                    <span className='fw-bolder me-25'>Facebook Ads</span>
                </Col>
                <Col sm='3' className='mb-2'>
                    <span> 0.00 %</span>
                </Col>
                <Col sm='9' className='mb-2'>
                    <span className='fw-bolder me-25'>Google Ads</span>
                </Col>
                <Col sm='3' className='mb-2'>
                    <span> 0.00 %</span>
                </Col>
                <Col sm='9' className='mb-2'>
                    <span className='fw-bolder me-25'>LinkedIn Ads</span>
                </Col>
                <Col sm='3' className='mb-2'>
                    <span> 0.00 %</span>
                </Col>
                <Col className='mb-2 d-flex align-items-center'>
                    <span className='avatar-pill d-inline-block rounded-circle'></span> &nbsp; <span>Include PPC Markup in all costs on the dashboard</span>
                </Col>
            </Row>
          </div>
          <div className='d-flex justify-content-start pt-2'>
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
