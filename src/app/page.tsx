import React from 'react'
import Header from '@/components/Header'
import Company from '@/components/Company'
import Category from '@/components/Category'
import CTA from '@/components/CTA'
import FeaturedJobs from '@/components/Featuredjobs'
function page() {
  return (
    <div>
      <Header></Header>
      <Company></Company>
      <Category></Category>
      <CTA></CTA>
      <FeaturedJobs></FeaturedJobs>
    </div>
  )
}

export default page