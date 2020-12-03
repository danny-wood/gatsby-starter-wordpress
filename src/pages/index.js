import React from "react"
import Button from "components/common/Button"
import { Col, Row, Container } from "reactstrap"
import { Link } from "gatsby"
import { MdMenu, MdPersonOutline, MdPhone, MdSearch } from "react-icons/md"
import { ButtonTypeEnum } from "utils/buttonUtil"

function IndexPage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Gatsby Starter Wordpress</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>Paragraph</p>
          <p>
            <strong>Strong</strong>
          </p>
          <p>
            <em>Italic</em>
          </p>
        </Col>
        <Col>
          <Row>
            <Col>
              <p>
                <Button to="/">Internal Primary</Button>
              </p>
              <p>
                <Button
                  to="https://www.google.co.uk"
                  styleType={ButtonTypeEnum.secondary}
                >
                  External Secondary
                </Button>
              </p>
            </Col>
            <Col>
              <p>
                <Button isLoading={true}>Loading</Button>
              </p>
              <p>
                <Button type="submit" styleType={ButtonTypeEnum.secondary}>
                  Button Submit
                </Button>
              </p>
            </Col>
          </Row>
          <p>
            <Link to="/">Default Link</Link>
          </p>
          <p>
            <Link to="/" className="primary-link">
              Primary Link
            </Link>
          </p>
          <Row>
            <Col xs="auto">
              <MdMenu fontSize={40} />
            </Col>
            <Col xs="auto">
              <MdPersonOutline fontSize={40} />
            </Col>
            <Col xs="auto">
              <MdPhone fontSize={40} />
            </Col>
            <Col xs="auto">
              <MdSearch fontSize={40} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default IndexPage
