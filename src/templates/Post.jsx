import React from "react"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"
import { useModules } from "hooks/useModules"
import { Col, Container, Row } from "reactstrap"
import Image from "components/common/Image"
import styled from "styled-components"
import vars from "styles/variables"
import Button from "components/common/Button"
import { ButtonTypeEnum } from "utils/buttonUtil"
import { ModuleTypeEnum } from "utils/moduleUtil"
import { convertToInternalUrl } from "utils/globalUtil"
import SEO from "components/common/SEO"

function Post({ data }) {
  const { modules } = useModules()
  const moduleData = data.wordpressPost?.acf || {}
  const featuredMedia = data.wordpressPost?.featured_media?.url || null

  const blogPromoData = data.wordpressPost?.acf?.post_modules_post || []
  const blogPromos = blogPromoData.filter(
    x => x.__typename === ModuleTypeEnum.blogPromo
  )

  const { past_post } = data.wordpressPost.next_past_posts || {}
  const { yoast_title, yoast_meta, path } = data?.wordpressPost || {}

  const handleBack = e => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <>
      <SEO yoastTitle={yoast_title} yoastMeta={yoast_meta} pagePath={path} />
      <Container>
        <Row>
          <Col>
            <h1>{data.wordpressPost.title}</h1>
            {data.wordpressPost.date && (
              <StyledPostDate>{data.wordpressPost.date}</StyledPostDate>
            )}
          </Col>
        </Row>
        <Row>
          <Col className="mb-4">
            <StyledPostLeftColumn>
              {featuredMedia && (
                <div className="mb-4">
                  <Image src={featuredMedia} alt={data.wordpressPost.title} />
                </div>
              )}
              {data.wordpressPost.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.wordpressPost.content,
                  }}
                />
              )}
              <div style={{ marginLeft: "-15px", marginRight: "-15px" }}>
                {modules(moduleData)}
              </div>
              <Row>
                <Col>
                  <StyledBlogButton
                    to="/blog"
                    onClick={handleBack}
                    styleType={ButtonTypeEnum.blue}
                  >
                    Back
                  </StyledBlogButton>
                </Col>
                {past_post && (
                  <Col xs="auto">
                    <StyledBlogButton
                      to={convertToInternalUrl(past_post.Permalink)}
                      styleType={ButtonTypeEnum.black}
                    >
                      Read Next Post
                    </StyledBlogButton>
                  </Col>
                )}
              </Row>
            </StyledPostLeftColumn>
          </Col>
          <Col xs="12" lg="4">
            <h2>Right Column</h2>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Post

const StyledPostDate = styled.p`
  font-size: 1rem;
  margin-bottom: 1.3rem;
`
const StyledPostLeftColumn = styled.div`
  border-right: 1px solid ${vars.grey_400};
  padding-right: 1.5rem;
  margin-right: 0.5rem;
  @media (max-width: ${vars.screen_md_max}) {
    margin: 0;
    padding: 0;
    border: none;
  }
`

const StyledBlogButton = styled(Button)`
  min-width: 120px;
`

export const query = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      excerpt
      content
      slug
      path
      date(formatString: "DD MMMM YYYY")
      featured_media {
        url
      }
      next_past_posts {
        past_post {
          Permalink
        }
      }
      acf {
        post_modules_post {
          ...fullWidthText
        }
      }
      yoast_title
      yoast_meta {
        name
        content
        property
      }
    }
  }
`
