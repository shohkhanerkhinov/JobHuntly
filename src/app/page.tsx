import React from 'react'
import Header from '@/components/Header'
import Company from '@/components/Company'
import Category from '@/components/Category'
import CTA from '@/components/CTA'
import FeaturedJobs from '@/components/Featuredjobs'
import LatestJobs from '@/components/LatestJobs'
import Footer from '@/components/Footer'

function page() {
  return (
    <div>
      <Header></Header>
      <Company></Company>
      <Category></Category>
      <CTA></CTA>
      <FeaturedJobs></FeaturedJobs>
      <LatestJobs></LatestJobs>
      <Footer></Footer>
    </div>
  )
}

export default page