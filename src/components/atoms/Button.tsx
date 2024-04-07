import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  buttonStyle?: object; // Add buttonStyle prop for custom styling
  textStyle?: object; // Add textStyle prop for custom text styling
}

const Button: React.FC<ButtonProps> = ({
  title,
  buttonStyle,
  textStyle,
  ...rest
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} {...rest}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20, // Adding horizontal padding for better appearance
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center', // Center the text vertically
    minWidth: 100, // Set minimum width to prevent being too small
    maxWidth: '80%', // Limit maximum width to prevent taking up the entire screen
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
