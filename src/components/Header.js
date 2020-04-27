import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Constant from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation()

    return (
        <View style={styles.root}>
            <View style={styles.logo}>
                <AntDesign style={styles.logoImg} name='youtube' size={32} color='red' />
                <Text style={styles.logoText}>YouTube</Text>
            </View>

            <View style={styles.actions}>
                <Ionicons style={styles.logoImg} name='md-videocam' size={30} color='#212121' />
                <Ionicons style={styles.logoImg} name='md-search' size={30} color='#212121'
                onPress={()=>navigation.navigate('search')}
                />
                <MaterialCommunityIcons style={styles.logoImg} name='nintendo-switch' size={30} color='#212121' />
                {/* <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4, //Works only android
        marginTop: Constant.statusBarHeight,
    },
    logo: {
        flexDirection: 'row',
        margin: 5
    },
    logoImg: {
        marginLeft: 15
    },
    logoText: {
        fontSize: 22,
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#212121'
    },
    actions: {
        flexDirection: 'row',
        margin: 5
    }
})