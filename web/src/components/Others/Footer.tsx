import { createStyles, Container, Group, Anchor, Title } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 40,
    borderTop: `.5px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function Footer({ links }: FooterSimpleProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="lg"
      style={{
        textShadow: '3px 3px 5px  rgba(255, 255, 255, .5)',
      }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Title style={{ fontSize: '30px', fontWeight: '100', textShadow: '3px 5px 5px rgba(255, 255, 255, 1)'}}>
          Anime Live
        </Title>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
