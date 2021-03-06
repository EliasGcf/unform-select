import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
  StylesConfig,
  Theme,
} from 'react-select';
import { useField } from '@unform/core';

export interface Option {
  value: string;
  label: string;
}

interface SelectInputProps extends SelectProps<OptionTypeBase> {
  name: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const colourStyles: StylesConfig = {
    control: styles => ({
      ...styles,
      borderRadius: 10,
      borderColor: '#232129',
      fontSize: 18,
      height: 46,
    }),
    option: styels => ({
      ...styels,
      color: '#F4EDE8',
    }),
  };

  const themeProps = (theme: Theme): Theme => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: '#666360',
        neutral0: '#232129',
        primary25: '#666360',
        primary50: '#999591',
        neutral80: '#F4EDE8',
        neutral30: '#FBC131',
      },
    };
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) return [];

          return ref.state.value.map((option: Option) => option.value);
        }

        if (!ref.state.value) return '';

        return ref.state.value.value;
      },
      setValue: (ref: ReactSelect, value: Option | Option[]) => {
        ref.select.setValue(value, 'select-option');
      },
      clearValue: (ref: ReactSelect) => {
        ref.select.clearValue();
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <ReactSelect
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      styles={colourStyles}
      theme={themeProps}
      maxMenuHeight={250}
      {...rest}
    />
  );
};

export default SelectInput;
