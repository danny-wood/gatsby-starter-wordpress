import React from "react"
import { Container, Row, Col } from "reactstrap"
import styled from "styled-components"
import styleUtil from "utils/styleUtil"

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
  background: ${styleUtil.grey_300};
  padding: 1rem 0;
  margin-bottom: 1.5rem;
`
