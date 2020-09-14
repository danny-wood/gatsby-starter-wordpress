import React from "react"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import vars from "../../styles/vars"

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Row>
          <Col>Header</Col>
        </Row>
      </Container>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  background: ${vars.grey_200};
  padding: 1rem 0;
  margin-bottom: 1.5rem;
`
