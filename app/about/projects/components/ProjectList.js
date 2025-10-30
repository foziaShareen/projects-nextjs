// export const dynamic = 'force-dynamic'


const ProjectList = async() => {
    const res = await fetch('http://localhost:3001/repos', {cache: 'no-store'})
    const repos = await res.json()
    console.log(repos)
  return (
    <div className='p-20 mb-2'>
        <h1 className='text-3xl font-bold underline'>Projects Page</h1>
        <ul >
            {repos.map(repo => (
                <div key={repo.id}className='mt-5 p-2 border-2'>
                <li className='text-2xl font-bold'key={repo.id}>{repo.title}</li>
                <li key={repo.id}>{repo.description}</li>
                <li key={repo.id}>{repo.title}</li>
                <li key={repo.id}>{repo.stargazers_count}</li>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default ProjectList