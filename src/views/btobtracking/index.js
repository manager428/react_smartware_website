// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
import toast from 'react-hot-toast'
import { CopyToClipboard } from 'react-copy-to-clipboard'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Button, Input, CardText } from 'reactstrap'

const Btobtracking = () => {
  // ** State
  const [value, setValue] = useState('<!-- Start of Agency360 script --><script src="https://smartware.philomedia.ie/JavascriptClick/Tracker?cid=1720636" defer></script><!-- End of Agency360 script -->')
  const [copied, setCopied] = useState(false)

  const handleCopy = ({ target: { value } }) => {
    setValue(value)
    if (copied) {
      setCopied(false)
    }
  }

  const onCopy = () => {
    setCopied(true)
    toast.success('Copied To Clipboard !')
  }

  return (
    <Fragment>
      <Row>
        <Col sm='12'>
          <Card>
            <CardHeader>
              <CardTitle tag='h4'>2. Send an e-mail to your developer</CardTitle>
            </CardHeader>
            <CardBody>
            <CardText>Integrate our tracking pixel on your website to get improved data about your customers' inquiries.</CardText>
            <CardText>Copy the following script snippet and paste it into the HTML source code of your website <b>&lt;head&gt;</b> tags.</CardText>
              <Row>
                <Col sm='12' className='pe-sm-0 mb-md-0 mb-1'>
                  <Input type="textarea" value={value} onChange={handleCopy} />
                </Col>
                <Col className='mt-2'>
                  <CopyToClipboard onCopy={onCopy} text={value}>
                    <Button color='primary' outline>
                    Copy tracking pixel code to clipboard
                    </Button>
                  </CopyToClipboard>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col sm='12'>
          <Card>
            <CardHeader>
              <CardTitle tag='h4'>1. Integrate tracking pixel.</CardTitle>
            </CardHeader>
            <CardBody>
            <CardText>If you are unsure what you should do, you can send an e-mail to your developer.</CardText>
              <Row>
                <Col className='pe-sm-0 mb-md-0 mb-1'>
                  <Input placeholder='E-mail address' />
                </Col>
                <Col >
                    <Button color='primary' outline>
                        Send
                    </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Btobtracking
