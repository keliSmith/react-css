import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom'

import React, { useState } from 'react';
import Home from '@/pages/Home';
import CardList from '@/pages/CardList';
import LoveScene from '@/pages/LoveScene';
import LoveBook from '@/pages/LoveBook';

import ParticleDemo from '@/components/Particles'
import Card from '@/components/Card';
import DigitalClock from '@/components/DigitalClock';
import HoverLoad from '@/components/HoverLoad';
import MyCard from '@/components/MyCard';
import AvatarInfo from '@/components/AvatarInfo';
import CubeCraze from '@/components/CubeCraze';
import NoMatch from '@/components/404';
import { FadeInOut } from '@/components/FadeInOut';
import { Loading } from '@/components/Loading';
import AvatarBadge from '@/components/AvatarBadge';
import Button from '@/components/Button';
import Button1 from '@/components/Button1'
import { LoginPopup } from '@/components/LoginPopup';
import UserCard from '@/components/UserCard';
import { TypingScale } from '@/components/TypingScale';
import Progress from '@/components/Progress';
import TaiJi from '@/components/TaiJi';
import { ScrollAnimate } from '@/components/ScrollAnimate';
import Intervalometer from '@/components/Intervalometer';

const IntervalometerContainer = () => {
  const [isRuning, setIsRuning] = useState(true);
  return (
    <Intervalometer isRuning={isRuning}>
      <button onClick={() => setIsRuning(false)}>暂停</button>
      <button onClick={() => setIsRuning(true)}>开始</button>
    </Intervalometer>
  )
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cardList',
    element: <CardList />,
    children: [
      {
        index: true,
        element: <Navigate to='/cardList/card' />,
      },
      {
        path: 'card',
        element: <Card />,
      },
      {
        path: 'digitalClock',
        element: <DigitalClock />,
      },
      {
        path: 'hoverLoad',
        element: <HoverLoad />
      },
      {
        path: 'myCard',
        element: <MyCard />,
      },
      {
        path: 'avatarInfo',
        element: <AvatarInfo />,
      },
      {
        path: 'cubeCraze',
        element: <CubeCraze />,
      },
      {
        path: 'fadeInOut',
        element: <FadeInOut />,
      },
      {
        path: 'loading',
        element: <Loading />
      },
      {
        path: 'AvatarBadge',
        element: <AvatarBadge />
      },
      {
        path: 'Button',
        element: <Button />
      },
      {
        path: 'Button1',
        element: <Button1 />
      },
      {
        path: 'LoginPopup',
        element: <LoginPopup />
      },
      {
        path: 'UserCard',
        element: <UserCard />
      },
      {
        path: 'TypingScale',
        element: <TypingScale />
      },
      {
        path: 'Progress',
        element: <Progress size={800} radius={250} progress={60} orbitColor={{
          '0%': '#FF3440',
          '100%': '#FFDAD3',
        }} />
      },
      {
        path: 'TaiJi',
        element: <TaiJi />
      },
      {
        path: 'ScrollAnimate',
        element: <ScrollAnimate />
      },
      {
        path: 'Intervalometer',
        element: <IntervalometerContainer/>
      }
    ],
  },
  {
    path: '/loveScene',
    element: <LoveScene />,
  },
  {
    path: '/particleScene',
    element: <ParticleDemo />,
  },
  {
    path: '/loveBook',
    element: <LoveBook />,
  },
  {
    path: '*\'',
    element: <NoMatch />,
  },
];

export default routes;
