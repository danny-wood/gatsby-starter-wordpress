import React from "react"
import { Row, Col, Container } from "reactstrap"

function FullWidthText({ data }) {
  const { content } = data
  return (
    <Container>
      <Row>
        <Col className="mb-3">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Col>
      </Row>
    </Container>
  )
}

export default FullWidthText
