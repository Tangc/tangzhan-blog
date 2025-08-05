interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Baby Health Care App',
    description: `take a photo of babypoo,and get the anylysis infomation`,
    imgSrc: '/static/images/babypoo.icon',
    href: 'https://babypoo.tangzhanx.com',
  }
]

export default projectsData
