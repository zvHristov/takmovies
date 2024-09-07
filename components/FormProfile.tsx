import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
interface FormProps {
    label: string;
    placeholder: string;
    onChangeText?: (text: string) => void;
  }
  
  const FormProfile: React.FC = () => {
    // ...
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPIN] = useState(false);
    const handleChangeText = () => {
        setText(text);
    };
    return (
      <GradientBackground colors={['#F7FB00', '#C9A483', '#311FD8']}>
      <ThemedView 
      style={{
        ...styles.formContainer,
        ...styles.bottomSheetShadow,
        backgroundColor: 'rgba(255, 255, 255, .2)',
      }}
      >
      <ThemedView style={{
        ...styles.labelContainer,
        backgroundColor: 'rgba(255, 255, 255, .2)',
      }}>
        <ThemedText type='link' style={{
          ...styles.labelText,

        }}>{'Email'}</ThemedText>
      </ThemedView>
      <ThemedView  style={{
        ...styles.inputContainer,
        backgroundColor: 'rgba(255, 255, 255, .2)',
      }}>
          <TextInput
            style={{
              ...styles.input,
              paddingLeft: 10,
            }}
            placeholder={'account contact'}
            value={text}
            onChangeText={setText}
            keyboardType="default"
            returnKeyType="next"
            autoFocus={true}
            autoCapitalize="none"
            textContentType="username"
          />
        </ThemedView>
        <ThemedView style={{
        ...styles.labelContainer,
        backgroundColor: 'rgba(255, 255, 255, .2)',
      }}>
        <ThemedText type='link'  style={styles.labelText}>{'Password'}</ThemedText>
      </ThemedView>
      <ThemedView style={{
          ...styles.inputContainer,
          marginTop: 8,
          backgroundColor: 'rgba(255, 255, 255, .2)',
        }}>
 
          <TextInput
              style={{
                ...styles.input,
                paddingLeft: 10,
              }}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              onSubmitEditing={handleChangeText}
              secureTextEntry={!showPass}
              keyboardType="default"
              returnKeyType="send"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect={false}
              textContentType="password"
          />
          <TouchableOpacity
            onPress={() => setShowPIN(!showPass)}
            style={styles.showPasswordButton}
            >
            <Icon
                name={showPass ? 'pan-tool' : 'password'}
                style={styles.icon}
            />
          </TouchableOpacity>
        </ThemedView>  
        <ThemedView>
        <ThemedView style={{
                    ...styles.buttonContainer,
                    ...styles.bottomSheetShadow,
                    marginVertical: 18,
                    backgroundColor: 'transparent',
                    }}>
                    <TouchableOpacity style={styles.buttonLogin} >
                        <ThemedText
                            type="defaultSemiBold"
                            style={{
                                color: '#fff',
                                backgroundColor: 'rgba(216, 31, 38, 1)',
                            }}
                        >
                            Sign In
                        </ThemedText>
                    </TouchableOpacity>
                </ThemedView>
        </ThemedView>
      </ThemedView>
      </GradientBackground>
     
    );
  };
  import globalStyles from '@/assets/styles/styles';
  import loginStyles from '@/assets/styles/login';
  import GradientBackground from './GradientBackground';
  const styles = { ...loginStyles, ...globalStyles };
  export default FormProfile;