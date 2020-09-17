import React from "react"
import { Row, Col } from "reactstrap"

function FullWidthText({ data }) {
  const { content } = data
  return (
    <Row>
      <Col>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Col>
    </Row>
  )
}

export default FullWidthText
