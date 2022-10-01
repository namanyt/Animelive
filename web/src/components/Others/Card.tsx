import { createStyles, Image, useMantineTheme } from "@mantine/core";
import { Link } from "@redwoodjs/router";
import { IconPlayerPlay } from "@tabler/icons";
import { TypeAnime } from "src/Utils/types/apiTypes";

interface AnimeCardProps {
  data: TypeAnime,
  href: string,
}

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

export function Card(props: AnimeCardProps) {
  const { classes } = useStyle()
  const theme = useMantineTheme();

  const { data, href } = props;

  return (
    <Link to={href}>
      <div
        style={{
          padding: 2,
          transform: 'scale(1)',
          transition: 'all 0.3s ease-out',
        }}
      >
        <div
          style={{
            position: 'relative',
          }}
        >
          <Image
            alt="Cover Image"
            src={data.animeImg != null ? data.animeImg : 'https://i.imgur.com/6Y5YXZS.png'}
            width={'200px'}
            height={'300px'}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 10,
            }}
            className={classes.coverImage}
            radius={'md'}
            placeholder="blur"
          />

          <div style={{
            backgroundColor: 'rgba(255,255,255,0.3)',
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            marginTop: '-200px',
            position: 'absolute',
            zIndex: -1,
            left: '50px',
          }}>
            <IconPlayerPlay
              width={'50px'}
              height={'50px'}

              style={{
                color: 'white',
                marginTop: '25px',
                marginLeft: '25px',
              }}
            />
          </div>
        </div>

        <div>
          <p
            style={{
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
              lineHeight: 1.2,
              fontSize: 14,
              marginTop: theme.spacing.xs,
              overflow: 'hidden',
              color: theme.white,
            }}
          >
            {data.animeTitle ? data.animeTitle : 'Loading...'}
          </p>

          <div
            style={{
              color: theme.white,
              opacity: 0.7,
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
          >
            {
              data.totalEpisodes > 0 &&
              <p>{data.totalEpisodes != undefined ? data.totalEpisodes : 0} Episodes</p>
            }
          </div>
        </div>
      </div>
    </Link>
  )
}
