import React from 'react';

import { IFieldProps } from './types';

import { Container, StyledInput, Label, InputCount, InputControl } from './styles';

export const Field: React.FC<IFieldProps> = ({
  type,
  name,
  label,
  placeholder,
  value,
  max,
  withCount,
  note,
  isValid,
  isInvalid,
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const [focus, setFocus] = React.useState(false);
  const inputRef = React.createRef<HTMLInputElement>();

  React.useEffect(() => {
    value && setInputValue(value);
  }, [value]);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = max ? e.target.value.slice(0, max) : e.target.value;

    setInputValue(value);
  };

  const inputFocus = () => {
    inputRef.current?.focus();
  };

  const handleFocus = (value: boolean) => setFocus(value);

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputControl isFocused={focus} isValid={isValid} isInvalid={isInvalid} >
        <StyledInput
          ref={inputRef}
          type={type}
          name={name}
          onBlur={() => handleFocus(false)}
          onFocus={() => handleFocus(true)}
          onChange={handleChanges}
          placeholder={placeholder}
          value={inputValue}
        />
        {(withCount || max) && (
          <InputCount onClick={inputFocus}>
            {inputValue.length}
            {max && `/${max}`}
          </InputCount>
        )}
      </InputControl>
      {note && <span>{note}</span>}
    </Container>
  );
};

Field.defaultProps = {
    type: 'text'
}
