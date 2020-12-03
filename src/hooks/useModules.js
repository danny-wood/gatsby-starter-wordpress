import React from "react"
import HeroBanner from "components/modules/HeroBanner"
import { ModuleTypeEnum } from "utils/moduleUtil"
import FullWidthText from "components/modules/FullWidthText"
//import Form from "components/moudles/Form"
//import BlogList from "components/modules/BlogList"

// Hook containing logic to output modules to the page
export const useModules = location => {
  function modules(data, posts = null) {
    const moduleList = processModuleData(data)
    return moduleList.map((module, index) =>
      getModule(module, index, posts, location)
    )
  }

  function modulesWithPosts(data, posts) {
    return modules(data, posts)
  }

  return {
    modules,
    modulesWithPosts,
  }
}

function getModule(module, key, posts = null, location) {
  switch (module.__typename) {
    case ModuleTypeEnum.heroSlides:
      return <HeroBanner key={key} data={module} />
    case ModuleTypeEnum.fullWidthText:
      return <FullWidthText key={key} data={module} />
    // case ModuleTypeEnum.form:
    //   return <Form key={key} data={module} location={location} />
    // case ModuleTypeEnum.blogList:
    //   return <BlogList key={key} data={module} posts={posts} />
    default:
      return null
  }
}

function processModuleData(data) {
  // Combine modules into a single list, this is because our hero slider
  // is not part of the page module data that is returned from the CMS
  const heroData = {
    __typename: ModuleTypeEnum.heroSlides,
    slides: data.page_hero_slides ? [...data.page_hero_slides] : [],
    settings: { ...data.page_hero_settings },
  }

  // Return our modules in a single list, spreading the hero settings, then hero slides and finally all page modules, if page modules are null we return an empty array.
  return [
    { ...heroData },
    ...(data?.modules_page || []),
    ...(data?.post_modules_post || []),
  ]
}
