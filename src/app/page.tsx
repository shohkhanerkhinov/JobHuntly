import React from 'react'
import Header from '@/components/Header'
import Company from '@/components/Company'
import Category from '@/components/Category'
import CTA from '@/components/CTA'
import FeaturedJobs from '@/components/Featuredjobs'
import LatestJobs from '@/components/LatestJobs'
function page() {
  return (
    <div>
      <Header></Header>
      <Company></Company>
      <Category></Category>
      <CTA></CTA>
      <FeaturedJobs></FeaturedJobs>
      <LatestJobs></LatestJobs>
    </div>
  )
}

export default page