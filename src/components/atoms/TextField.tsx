// atoms/TextField.tsx
import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';

interface TextFieldProps extends TextInputProps {
  placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({placeholder, ...rest}) => {
  return <TextInput style={styles.input} placeholder={placeholder} {...rest} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
});

export default TextField;
