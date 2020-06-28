import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
  InputContainer,
  TextInput,
  Icon,
} from 'components/StyledComponents';

function SearchBar({ onChange }) {
  const [search, setSearch] = useState('');
  const onSearch = useCallback(
    (value) => {
      setSearch(value);
      if (onChange) onChange(value);
    },
    [onChange],
  );
  return (
    <InputContainer marginBottom="0">
      <Icon icon={faSearch} size={20} />
      <TextInput
        placeholder="Search..."
        onChangeText={onSearch}
        underlineColorAndroid="transparent"
        value={search}
        fontSize={18}
      />
    </InputContainer>
  );
}

SearchBar.propTypes = {
  onChnage: PropTypes.func,
};

export default SearchBar;
