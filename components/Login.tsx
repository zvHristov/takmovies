
import { 
    Platform, 
    View, 
    TextInput, 
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    SafeAreaView
} from 'react-native';
import { useState } from 'react';
import { signIn } from '@/common/http/getCurrentUser';
import Icon from '@expo/vector-icons/MaterialIcons';
import { setAppUser } from '@/common/store/user';
import {login} from '@/common/model/auth';
import { httpRegister, httpLogin } from '@/common/http/httpUser';
// import {
//     GoogleOneTapSignIn,
//     statusCodes,
//     type OneTapUser,
//   } from '@react-native-google-signin/google-signin';
const Login = () => {
const [showLoginForm, setShowLoginForm] = useState(true);
const [email, setUsername] = useState('');
const [password, setPassword] = useState('');
const [showPass, setShowPIN] = useState(false);
const dispatch = useDispatch<AppDispatch>();
const handleLogin = async () => {
    if (email || password) {
        setShowLoginForm(false);
        const loginData = {userInfo : { email, password }}
        let getUsername =  null;
        try {
            getUsername = await httpRegister(loginData);
            console.log(getUsername, 'getUsername');

        } catch {
    
        }
        dispatch(login(loginData));
    } else {
                alert('Please fill in all fields');
        Keyboard.dismiss();
    }
}
  //TODO Refactoring
return(
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
    >
        <SafeAreaView>
            <View>
            { showLoginForm
          
            && (
            <View>
                <View
                    style={{
                    marginVertical: 14,
                }}
                >
                <ThemedView
                    style={{
                        backgroundColor: '#1F222A',
                    }}
                    lightColor="#1F222A"
                    darkColor="#fff"
                >
                <ThemedText
                    type="title"
                    style={{color: '#fff'}}
                    >Fill Your Profile</ThemedText>
                <ThemedText 
                    type="subtitle"
                    style={{color: '#fff'}}
                > Login</ThemedText>
                </ThemedView>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setUsername}
                        keyboardType="default"
                        returnKeyType="next"
                        autoFocus={true}
                        autoCapitalize="none"
                        textContentType="username"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        onSubmitEditing={handleLogin}
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
                </View>      
                <ThemedView style={{
                    ...styles.buttonContainer,
                    ...styles.bottomSheetShadow,
                    marginVertical: 18,
                    backgroundColor: 'transparent',
                    }}>
                    <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
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
            </View>
            )
            }
            </View>
        </SafeAreaView>
    </KeyboardAvoidingView>
)
}

// Styles
import loginStyles from '@/assets/styles/login';
import globalStyles from '@/assets/styles/styles';
import { AppDispatch } from '@/common/store/store';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

const styles = { ...globalStyles, ...loginStyles };
export default Login;

