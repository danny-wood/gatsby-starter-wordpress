import React from "react"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import vars from "../../styles/vars"

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col>Footer</Col>
        </Row>
      </Container>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  background: ${vars.grey_200};
  padding: 1rem 0;
  margin-top: 1.5rem;
`
