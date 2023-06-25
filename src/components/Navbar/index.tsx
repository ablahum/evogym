import { Bars3Icon } from '@heroicons/react/24/solid'
import logo from '@/assets/Logo.png'
import Link from './Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useState } from 'react'
import ActionButton from '@/shared/ActionButton'
import ResponsiveNav from './ResponsiveNav'

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
  isTopOfPage: boolean
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  const flexBetween = 'flex items-center justify-between'
  const navBg = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'

  return (
    <div className={`${navBg} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <img
            src={logo}
            alt='logo'
          />

          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page='Home'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />

                <Link
                  page='Benefits'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />

                <Link
                  page='Our Classes'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />

                <Link
                  page='Contact Us'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>

              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>

                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div>
          ) : (
            <div
              className='rounded-full bg-secondary-500 p-2'
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className='h-6 w-6 text-white' />
            </div>
          )}
        </div>
      </div>

      {!isAboveMediumScreens && isMenuToggled && (
        <ResponsiveNav
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isMenuToggled={isMenuToggled}
          setIsMenuToggled={setIsMenuToggled}
        />
      )}
    </div>
  )
}

export default Navbar
