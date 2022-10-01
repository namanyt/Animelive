import { Container, createStyles, Image, Space, Text, Title, useMantineTheme } from "@mantine/core"
import { Carousel } from "@mantine/carousel"
import { Link } from "@redwoodjs/router";
import { IconArrowLeft, IconArrowRight, IconClock, IconPlayerPlay, IconDeviceTv } from "@tabler/icons";
import { useState } from "react";
import { TypeAnime, TypeAnimeList, URL, Genres } from "src/Utils/types/apiTypes";
import { Card } from "../Others/Card";
import { MetaTags } from "@redwoodjs/web";

const useStyle = createStyles((theme) => ({
  coverImage: {
    transition: 'all 0.3s ease',
    ':hover': {
      opacity: 0.2,
    },
  },

  playButton: {
    color: 'white'
  }
}))

export function HomeSection() {
  const theme = useMantineTheme();
  let [PopularCard, setPopularCard] = useState<any>();
  let [ActionCard, setActionCard] = useState<any>();
  let [ShounenCard, setShounenCard] = useState<any>();
  let [ThrillerCard, setThillerCard] = useState<any>();
  let [RomanceCard, setRomanceCard] = useState<any>();
  const { classes } = useStyle()

  // TODO: save the popular anime in local storage and use that instead of fetching it every time

  let popularCards = []
  let actionCards = []
  let shounenCards = []
  let thrillerCards = []
  let romanceCards = []

  fetch(`${URL}/popular`)
    .then((response) => response.json())
    .then((animelist: any[]) => {
      if (PopularCard != undefined) {
        return;
      }
      animelist.map(async (anime: TypeAnimeList, index: number) => {
        fetch(`${URL}/anime-details/${anime.animeId}`)
          .then((response) => response.json())
          .then((data: TypeAnime) => {

            popularCards.push(
              <>
                <Carousel.Slide>
                  <Card data={data} href={`/watch?id=${anime.animeId}`} />
                  {/* <Card data={data} href={``} /> FIXME: THIS IS JUST A DEV THING */}
                </Carousel.Slide>
              </>
            )

            if (popularCards.length == animelist.length) {
              setPopularCard(popularCards)
            }
          })
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  fetch(`${URL}/genre/${Genres.action}`)
    .then((response) => response.json())
    .then((animelist: any[]) => {
      if (ActionCard != undefined) {
        return;
      }
      animelist.map(async (anime: TypeAnimeList, index: number) => {
        fetch(`${URL}/anime-details/${anime.animeId}`)
          .then((response) => response.json())
          .then((data: TypeAnime) => {



            actionCards.push(
              <>
                <Carousel.Slide>
                  <Card data={data} href={`/watch?id=${anime.animeId}`} />
                  {/* <Card data={data} href={``} /> FIXME: THIS IS JUST A DEV THING */}
                </Carousel.Slide>
              </>
            )

            if (actionCards.length == animelist.length) {
              setActionCard(actionCards)
            }
          })
      });
    })

  fetch(`${URL}/genre/${Genres.shounenAi}`)
    .then((response) => response.json())
    .then((animelist: any[]) => {
      if (ShounenCard != undefined) {
        return;
      }
      animelist.map(async (anime: TypeAnimeList, index: number) => {
        fetch(`${URL}/anime-details/${anime.animeId}`)
          .then((response) => response.json())
          .then((data: TypeAnime) => {



            shounenCards.push(
              <>
                <Carousel.Slide>
                  <Card data={data} href={`/watch?id=${anime.animeId}`} />
                  {/* <Card data={data} href={``} /> FIXME: THIS IS JUST A DEV THING */}
                </Carousel.Slide>
              </>
            )

            if (shounenCards.length == animelist.length) {
              setShounenCard(shounenCards)
            }
          })
      });
    })

  fetch(`${URL}/genre/${Genres.thriller}`)
    .then((response) => response.json())
    .then((animelist: any[]) => {
      if (ThrillerCard != undefined) {
        return;
      }
      animelist.map(async (anime: TypeAnimeList, index: number) => {
        fetch(`${URL}/anime-details/${anime.animeId}`)
          .then((response) => response.json())
          .then((data: TypeAnime) => {



            thrillerCards.push(
              <>
                <Carousel.Slide>
                  <Card data={data} href={`/watch?id=${anime.animeId}`} />
                  {/* <Card data={data} href={``} /> FIXME: THIS IS JUST A DEV THING */}
                </Carousel.Slide>
              </>
            )

            if (thrillerCards.length == animelist.length) {
              setThillerCard(thrillerCards)
            }
          })
      });
    })

  // romance fetch
  fetch(`${URL}/genre/${Genres.romance}`)
    .then((response) => response.json())
    .then((animelist: any[]) => {
      if (RomanceCard != undefined) {
        return;
      }
      animelist.map(async (anime: TypeAnimeList, index: number) => {
        fetch(`${URL}/anime-details/${anime.animeId}`)
          .then((response) => response.json())
          .then((data: TypeAnime) => {



            romanceCards.push(
              <>
                <Carousel.Slide>
                  <Card data={data} href={`/watch?id=${anime.animeId}`} />
                  {/* <Card data={data} href={``} /> FIXME: THIS IS JUST A DEV THING */}
                </Carousel.Slide>
              </>
            )

            if (romanceCards.length == animelist.length) {
              setRomanceCard(romanceCards)
            }
          })
      });
    })

  const ContainerWidth = '90vw';
  const ContainerPT = '70px'
  const ContainerML = '2vw'
  const ContainerSize:any = '85vw'

  return (
    <>
      <Container style={{ width: ContainerWidth }} pt={ContainerPT} ml={ContainerML} size={ContainerSize}>
        <Title>
          Popular Anime
        </Title>

        <Carousel
          style={{
            marginTop: "20px",
            width: '100%',
          }}
          key={'carousel'}
          slideSize={'20%'}
          breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
          align="start"
          controlSize={50}
          slidesToScroll={4}
          dragFree
          styles={{
            control: {
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
            },
          }}
        >
          {PopularCard}
        </Carousel>
      </Container>

      <Container style={{ width: ContainerWidth }} pt={ContainerPT} ml={ContainerML} size={ContainerSize}>
        <Title>
          Actions
        </Title>

        <Carousel
          style={{
            marginTop: "20px",
            width: '100%',
          }}
          key={'carousel'}
          slideSize={'20%'}
          breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
          align="start"
          controlSize={50}
          slidesToScroll={4}
          dragFree
          styles={{
            control: {
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
            },
          }}
        >
          {ActionCard}
        </Carousel>
      </Container>

      <Container style={{ width: ContainerWidth }} pt={ContainerPT} ml={ContainerML} size={ContainerSize}>
        <Title>
          Shounen
        </Title>

        <Carousel
          style={{
            marginTop: "20px",
            width: '100%',
          }}
          key={'carousel'}
          slideSize={'20%'}
          breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
          align="start"
          controlSize={50}
          slidesToScroll={4}
          dragFree
          styles={{
            control: {
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
            },
          }}
        >
          {ShounenCard}
        </Carousel>
      </Container>

      <Container style={{ width: ContainerWidth }} pt={ContainerPT} ml={ContainerML} size={ContainerSize}>
        <Title>
          Thriller
        </Title>

        <Carousel
          style={{
            marginTop: "20px",
            width: '100%',
          }}
          key={'carousel'}
          slideSize={'20%'}
          breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
          align="start"
          controlSize={50}
          slidesToScroll={4}
          dragFree
          styles={{
            control: {
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
            },
          }}
        >
          {ThrillerCard}
        </Carousel>
      </Container>

      <Container style={{ width: ContainerWidth }} pt={ContainerPT} ml={ContainerML} size={ContainerSize}>
        <Title>
          Romance
        </Title>

        <Carousel
          style={{
            marginTop: "20px",
            width: '100%',
          }}
          key={'carousel'}
          slideSize={'20%'}
          breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
          align="start"
          controlSize={50}
          slidesToScroll={4}
          dragFree
          styles={{
            control: {
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
            },
          }}
        >
          {RomanceCard}
        </Carousel>
      </Container>
    </>
  )
}

function Row() {
  return (
    <>

    </>
  )
}
