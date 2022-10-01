import { BackgroundImage, Container, createStyles } from '@mantine/core'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { NavbarMinimal as Navbar } from 'src/components/Others/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { PageView } from 'src/Utils/PageView'

import { HomeSection, SearchSection, SettingsSection, AccountSection } from 'src/components/Sections'
import { Footer } from 'src/components/Others/Footer'

const useStyles = createStyles((theme) => ({
  root: {
    margin: 0,
    // marginTop: -20,
    padding: 0,
    color: 'white',
    // height: '200vh',
    background: theme.colorScheme == 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
  }
}))

export default function HomePage() {
  const { classes } = useStyles()
  const page = useSelector((state: { page: any }) => state.page)

  return (
    <div className={classes.root}>
      <MetaTags title="Home" description="Home page" />

      <Navbar />

      <Container style={{marginLeft: '80px'}}>
        {page.value == PageView.Home && <HomeSection />}
        {page.value == PageView.Search && <SearchSection />}
        {page.value == PageView.Settings && <SettingsSection />}
        {page.value == PageView.Account && <AccountSection />}
      </Container>

      <Footer links={[{label: 'Cider', link: 'https://ciderboi.xyz'}]} />
    </div>
  )
}
