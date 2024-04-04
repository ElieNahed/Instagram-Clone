// LoginForm.tsx
import React, {useState} from 'react';
import {View} from 'react-native';
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <View>
      <TextField
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextField
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;
