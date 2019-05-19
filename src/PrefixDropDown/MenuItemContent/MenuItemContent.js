import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { countryCodes } from '../data';

import {
  Content,
  ContentLeft,
  ContentLeftText,
} from './styles';
import FlagFallBack from './icons/Fallback';

const MenuItemContent = ({ title, codeNumber, iconFlag }) => {
  const Flag = React.lazy(() => import(`./icons/${iconFlag}`));
  return (
    <Content>
      <ContentLeft>
        <Suspense fallback={<FlagFallBack />}>
          <Flag />
        </Suspense>
        <ContentLeftText>{title}</ContentLeftText>
      </ContentLeft>
      <span>
        +
        {codeNumber}
      </span>
    </Content>
  );
};

MenuItemContent.propTypes = {
  title: PropTypes.string.isRequired,
  codeNumber: PropTypes.string.isRequired,
  iconFlag: PropTypes.oneOf([
    countryCodes.spain,
    countryCodes.chile,
    countryCodes.mexico,
    countryCodes.colombia,
    countryCodes.peru,
    countryCodes.argentina,
    countryCodes.brazil,
    countryCodes.bolivia,
    countryCodes.uruguay,
    countryCodes.portugal,
    countryCodes.ecuador,
    countryCodes.panama,
    countryCodes.costarica,
    countryCodes.dominican,
    countryCodes.japan,
  ]).isRequired,
};

export default MenuItemContent;
