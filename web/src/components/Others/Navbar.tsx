import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, useMantineTheme, useMantineColorScheme, Switch, Group, ActionIcon } from '@mantine/core';
import {
  TablerIcon,
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconDeviceTv,
  IconSearch,
  IconTrendingUp,
  IconSun,
  IconMoon,
  IconMoonStars,
} from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';

import { useDispatch, useSelector } from 'react-redux'
import { setPageView } from 'src/Utils/store/pageView'

import { PageView } from 'src/Utils/PageView';

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home', page: PageView.Home },
  { icon: IconSearch, label: 'Search', page: PageView.Search },
];


export function NavbarMinimal() {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch()

  const links = mockdata.map((link, index) => {
    return <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        dispatch(setPageView(link.page))
        if (link.page === PageView.Home) {
          window.location.href = '/'
        }
      }}
    />
  });

  return (
    <Navbar style={{ position: 'fixed' }} height={'100vh'} width={{ base: 80 }} p="md">
      <Navbar.Section grow mt={20}>
        <Stack justify="center" spacing={30}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section mt={20}>
        <Stack justify="center" spacing={0}>
          <NavbarLink active={4 == active} icon={IconUser} onClick={() => {
            setActive(4)
            dispatch(setPageView(PageView.Account))
          }} label="Profile" />
          <NavbarLink active={5 == active} icon={IconSettings} onClick={() => { setActive(5); dispatch(setPageView(PageView.Settings)) }} label="Settings" />
          <NavbarLink icon={IconLogout} onClick={() => { setActive(-1); dispatch(setPageView(PageView.Logout)) }} label="Logout" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
