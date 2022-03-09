import React, { useState } from 'react'
import { m } from 'framer-motion'
import { useRouter } from 'next/router'
import cx from 'classnames'

import { isBrowser } from '../lib/helpers'

import { useSiteContext, useToggleMegaNav } from '../lib/context'

import Menu from '../components/menu'
import MegaNavigation from '../components/menu-mega-nav'

const Header = ({ data = {}, onSetup = () => {} }) => {
  // expand our header data
  const {
    menuDesktopLeft,
    menuDesktopRight,
    menuMobilePrimary,
    menuMobileSecondary,
  } = data

  // setup states
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const router = useRouter()

  // setup menu toggle event
  const toggleMobileNav = (state) => {
    setMobileNavOpen(state)

    if (isBrowser) {
      document.body.classList.toggle('overflow-hidden', state)
    }
  }

  // context helpers
  const { meganav } = useSiteContext()
  const toggleMegaNav = useToggleMegaNav()

  return (
    <>
      <header className={cx('header')}>
        <div className="header--outer">
          <div className="header--inner">
            <div className="header--content">
              <div className="logo">
                {router.pathname === '/' ? 'Already home' : 'Logo'}
              </div>

              <nav className="main-navigation" role="navigation">
                {/* Mobile Header Menu */}
                <div id="mobile-nav" className="main-navigation--mobile">
                  <div>
                    <button
                      onClick={() => toggleMobileNav(!isMobileNavOpen)}
                      className={cx('menu-toggle', {
                        'is-open': isMobileNavOpen,
                      })}
                      aria-expanded={isMobileNavOpen}
                      aria-controls="mobile-nav"
                      aria-label="Toggle Menu"
                    >
                      <span className="hamburger">
                        <span className="hamburger--icon"></span>
                      </span>
                    </button>
                    <m.div
                      initial="hide"
                      animate={isMobileNavOpen ? 'show' : 'hide'}
                      variants={{
                        show: {
                          x: '0%',
                        },
                        hide: {
                          x: '-100%',
                        },
                      }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="menu-mobile"
                    >
                      <div className="menu-mobile--inner">
                        <div className="menu-mobile--primary">
                          {menuMobilePrimary?.items && (
                            <Menu
                              items={menuMobilePrimary.items}
                              onClick={() => toggleMobileNav(false)}
                            />
                          )}
                        </div>

                        <div className="menu-mobile--secondary">
                          {menuMobileSecondary?.items && (
                            <Menu
                              items={menuMobileSecondary.items}
                              onClick={() => toggleMobileNav(false)}
                            />
                          )}
                        </div>
                      </div>
                    </m.div>

                    <div
                      className={cx('menu-mobile--backdrop', {
                        'is-active': isMobileNavOpen,
                      })}
                      onClick={() => toggleMobileNav(false)}
                    />
                  </div>
                </div>

                {/* Desktop Header Menu */}
                <div className="main-navigation--desktop">
                  <div className="menu-left">
                    {menuDesktopLeft?.items && (
                      <Menu
                        items={menuDesktopLeft.items}
                        onClick={() => toggleMegaNav(false)}
                        useMegaNav
                      />
                    )}
                  </div>

                  <div className="menu-right">
                    {menuDesktopRight?.items && (
                      <Menu
                        items={menuDesktopRight.items}
                        onClick={() => toggleMegaNav(false)}
                        useMegaNav
                      />
                    )}
                  </div>
                </div>
              </nav>
            </div>

            <div
              className={cx('header--border', {
                'is-hidden': meganav.isOpen,
              })}
            />
          </div>

          <MegaNavigation
            items={[
              ...(menuDesktopLeft?.items || []),
              ...(menuDesktopRight?.items || []),
            ]}
          />
        </div>
      </header>

      <span className="header--observer" />
    </>
  )
}

export default Header
