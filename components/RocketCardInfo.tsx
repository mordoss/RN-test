import React from 'react';
import { Linking } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import Description from './Description';
import {
  RocketCardInfo as RocketCardInfoContainer,
  CardItem,
  ButtonLink,
} from '../styled/cards';
import {
  MediumBold,
  SmallNormal,
  SmallBold,
  MediumNormal,
  MediumItalic,
} from '../styled/typography';
import { dark } from '../styled/colors';

interface IProps {
  name: string;
  mass: { kg: number };
  height: { meters: number };
  diameter: { meters: number };
  type: string;
  active: boolean;
  wikipedia: string;
  width: number;
  description: string;
}

const RocketCardInfo: React.FC<IProps> = ({
  name,
  mass,
  height,
  diameter,
  type,
  active,
  wikipedia,
  width,
  description,
}) => (
  <RocketCardInfoContainer
    style={{
      width: 0.9 * width,
    }}
  >
    <MediumBold>{name}</MediumBold>
    <MaterialIcons
      name={`airplanemode-${active ? 'active' : 'inactive'}`}
      size={24}
      color={active ? dark.primary : dark.light}
      style={{ marginLeft: 'auto', marginRight: 'auto' }}
    />
    <MediumItalic>{type}</MediumItalic>

    <CardItem>
      <FontAwesome5
        name="weight-hanging"
        size={24}
        color={dark.primary}
        style={{ width: 36 }}
      />
      <SmallNormal>Weight:</SmallNormal>
      <SmallBold>{mass.kg} kg</SmallBold>
    </CardItem>

    <CardItem>
      <FontAwesome5
        name="ruler-vertical"
        size={24}
        color={dark.primary}
        style={{ width: 36 }}
      />
      <SmallNormal>Height:</SmallNormal>
      <SmallBold>{height.meters} m</SmallBold>
    </CardItem>

    <CardItem>
      <FontAwesome5
        name="ruler-horizontal"
        size={24}
        color={dark.primary}
        style={{ width: 36 }}
      />
      <SmallNormal>Diameter:</SmallNormal>
      <SmallBold>{diameter.meters} m</SmallBold>
    </CardItem>
    <Description description={description} />
    <ButtonLink
      onPress={() => {
        Linking.openURL(wikipedia);
      }}
    >
      <MediumNormal>More Info on Wiki</MediumNormal>
    </ButtonLink>
  </RocketCardInfoContainer>
);

export default RocketCardInfo;
