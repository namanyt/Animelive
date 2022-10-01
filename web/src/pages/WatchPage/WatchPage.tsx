import { Box, Container, Paper, useMantineTheme } from '@mantine/core'
import { Link, routes, useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import { TypeAnime, URL } from 'src/Utils/types/apiTypes'



const WatchPage = () => {
  const { id } = useParams()
  const [video, setVideo] = useState<any>();

  // obtain episode list from id
  // get the first element of the episode list
  // obtain video url from episode id
  // set video url to video
  fetch(`${URL}/anime-details/${id}`)
    .then((res) => res.json())
    .then((anime: TypeAnime) => {
      fetch(`${URL}/vidcdn/watch/${anime.episodesList[0].episodeId}`)
        .then((res) => res.json())
        .then((data) => {
          setVideo(<iframe src={data.Referer} frameBorder={0} style={{ height: '720px', width: '1270px' }} scrolling="no" />)
        })
    })

  return (
    <Box style={{
      // flex box center
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: useMantineTheme().colors.dark[8],
    }}>
      {video}
    </Box>
  )
}

export default WatchPage
