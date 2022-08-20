import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

import { langs } from './langs';

export const LocaleContext = createContext({});

export const LocaleProvider = ({ children, defaultLanguage }) => {
  const [lang, setLang] = useState(defaultLanguage);

  const getLocaleText = (key) => {
    return key.split('.').reduce(
      (obj, index) => obj[index], langs[lang]
    );
  };

  return (
    <LocaleContext.Provider
      value={{
        getLocaleText,
        setLang,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultLanguage: PropTypes.string.isRequired,
};
