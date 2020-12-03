import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useNav } from "hooks/useNav"

function PageTitle({ title }) {
  const { navState } = useNav()

  if (navState.navFixed) return null

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">{title}</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default PageTitle
