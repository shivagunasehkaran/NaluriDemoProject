import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import { styles } from './home.style';

class Home extends Component {

    // goto find the Pi values screen
    gotoPiDetails = item => {
        this.props.navigation.navigate('PiDetails', { item: item });
    }

    // goto find the Circumference value of sun
    gotoSunDetails = item => {
        this.props.navigation.navigate('SunDetails', { item: item });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.first} onPress={() => this.gotoPiDetails("Pi values will increase based on each click")}>
                        <Text style={styles.text}>{'Value of Pi'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.second} onPress={() => this.gotoSunDetails("Get circumference of the Sun by clicking button")}>
                        <Text style={styles.text}>{'Circumference of the Sun'}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;