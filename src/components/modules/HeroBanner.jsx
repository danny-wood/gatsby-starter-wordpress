import React, { useEffect, createRef } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import { motion } from "framer-motion"
import vars from "styles/variables"
import { useNav } from "hooks/useNav"
import { convertToInternalUrl } from "utils/globalUtil"
import Button from "components/common/Button"
import { Col, Container, Row } from "reactstrap"

function HeroBanner({ data }) {
  const { slides, settings } = data
  const { navDispatch } = useNav()
  const sliderRef = createRef()
  const noSlides = slides < 1 ? true : false

  useEffect(
    function () {
      navDispatch({
        type: noSlides ? "UNFIX_NAV" : "FIX_NAV",
      })
    },
    [noSlides, navDispatch]
  )

  // If we have no hero slides, unfix the nav and return null
  if (noSlides) return null

  //   const slickReady = () => {
  //     const firstSlide = document.querySelector(`.slick-slide[data-index="0"]`)
  //     setTimeout(function () {
  //       firstSlide.setAttribute("id", "slick-transition-active")
  //     }, 200)
  //   }

  //   function slickAfterChange(next) {
  //     // Calculate the index of the previous slide
  //     const maxIndex = slides.length - 1
  //     let index = next - 1
  //     if (next === 0) index = maxIndex
  //     // Get the element in the dom
  //     const previousSlide = document.querySelector(
  //       `.slick-slide[data-index="${index}"]`
  //     )
  //     // Remove the id
  //     previousSlide.removeAttribute("id")
  //   }

  //   function slickBeforeChange(current, next) {
  //     const currentNext = document.querySelector(
  //       `.slick-slide[data-index="${next}"]`
  //     )
  //     currentNext.setAttribute("id", "slick-transition-active")
  //   }

  return (
    <StyledHeroBanner>
      <Slider
        ref={sliderRef}
        autoplay={
          settings.hero_slide_auto === "yes" && slides.length > 1 && true
        }
        dots={true}
        speed={parseInt(settings.hero_slide_duration)}
        autoplaySpeed={parseInt(settings.hero_slide_pause)}
        cssEase="ease-in-out"
        fade={true}
        //onInit={slickReady}
        //afterChange={slickAfterChange}
        //beforeChange={slickBeforeChange}
      >
        {slides.map(item => (
          <StyledHeroSlide key={item}>
            <StyledImage
              className="hero-banner-image"
              background={item.hero_slide_background.url}
            />
            <StyledHeroContent>
              <Container>
                <Row className="align-items-center">
                  <Col xs="12" md="6" xl="5">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.hero_slide_content,
                      }}
                    />
                    {item.hero_slide_link && (
                      <Button
                        to={convertToInternalUrl(item.hero_slide_link.url)}
                      >
                        {item.hero_slide_link.title}
                      </Button>
                    )}
                  </Col>
                </Row>
              </Container>
            </StyledHeroContent>
          </StyledHeroSlide>
        ))}
      </Slider>
    </StyledHeroBanner>
  )
}

export default HeroBanner

const StyledHeroBanner = styled.div`
  position: relative;
  overflow: hidden;
  height: 450px;
  margin-bottom: 1.5rem;
  color: ${vars.white};

  /* #slick-transition-active {
    .hero-banner-image {
      transform: scale(1);
    }
  } */

  .slick-dots {
    bottom: none;
    top: 410px;
  }
`

const StyledHeroSlide = styled(motion.div)`
  width: 100%;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0,
      rgba(122, 117, 157, 0) 100%
    );
    width: 50%;
    height: 100%;

    @media (max-width: ${vars.screen_md_max}) {
      width: 100%;
    }
  }
`

const StyledHeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
  height: 500px;
  width: 100%;
  top: 0;
  left: 0;

  h3 {
    font-size: 2.5rem;
  }

  h3,
  p {
    text-shadow: 0 0 6px ${vars.grey_800};
  }
`

const StyledImage = styled(motion.div)`
  width: 100%;
  height: 600px;
  background: url(${props => props.background}) no-repeat;
  background-size: cover;
  position: relative;
  /* transition: ease-in-out 12000ms;
  transform: scale(1.3); */
`
