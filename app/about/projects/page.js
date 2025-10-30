// export const dynamic = 'force-dynamic'

import { Suspense } from "react"
import ProjectList from "./components/ProjectList"
import LoadingList from "./loadinglist"


const ProjectPage = async() => {
    const res = await fetch('http://localhost:3001/repos', {cache: 'no-store'})
    const repos = await res.json()
    console.log(repos)
  return (
    <div className='p-20 mb-2'>
        <h1 className='text-3xl font-bold underline'>Projects  List</h1>
        <ul >
          <Suspense fallback={<LoadingList/>}>  
            <ProjectList/>
          </Suspense>
        </ul>
    </div>
  )
}

export default ProjectPage