/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Select from 'react-select';

import * as S from './styled';

interface ITem {
  value: string;
  label: string;
}

interface IProps {
  options: ITem[];
  setOption: (data: ITem | null) => void;
  defaultValue: ITem | null;
  value: ITem | null;
  className: string;
}

const Dropdown = ({
  defaultValue,
  value,
  options,
  setOption,
  className,
}: IProps) => {
  const handleChange = (currentOption: ITem | null) => {
    setOption(currentOption);
  };
  return (
    <S.Wrapper className={className}>
      <Select
        defaultValue={defaultValue}
        options={options}
        value={value}
        onChange={handleChange}
        className="selectStyle"
      />
    </S.Wrapper>
  );
};

export default Dropdown;
