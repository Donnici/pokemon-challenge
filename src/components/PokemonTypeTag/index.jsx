import React from 'react';

import PropTypes from 'prop-types';

import * as S from './styled';

const Tag = ({ text, color }) => {
  return (
    <S.TagContent color={color}>{text}</S.TagContent>
  )
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Tag
