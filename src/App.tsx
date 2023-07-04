import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import { SelectedPage } from './shared/types'
import Header from './components/Header'
import Benefits from './components/Benefits'
import OurClasses from '@/components/OurClasses'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Header)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Header)
      }

      if (window.scrollY !== 0) setIsTopOfPage(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // useEffect(() => {
  //   console.log(selectedPage)
  // }, [selectedPage])

  return (
    <div className='app bg-gray-20'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Header setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
