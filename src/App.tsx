import Navbar from '@/scenes/Navbar'
import { useEffect, useState } from 'react'
import { SelectedPage } from './shared/types'

function App() {
  const [selectedPage, setselectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setselectedPage(SelectedPage.Home)
      }

      if (window.scrollY !== 0) setIsTopOfPage(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='app bg-gray-20'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setselectedPage={setselectedPage}
      />
    </div>
  )
}

export default App
