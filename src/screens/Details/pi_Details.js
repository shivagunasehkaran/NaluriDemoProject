import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { styles } from './style';

class PiDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            piValue: ''
        };
    }

    // Showing alert for more than 20 argument
    startFromInitial = () => {
        Alert.alert(
            'Start Again', 'Argument must be between 0 and 20.',
            [
                {
                    text: 'OK', onPress: () => {
                        // go to previous screen
                        this.props.navigation.goBack();
                    }
                },
            ],
            { cancelable: false },
        );
    }

    // calculate Pi values based on the auto increment argument
    getValues = () => {
        let PI = '',
            i = 1,
            p = 0;
        while (i < 50000000) {
            p += 1 / i - 1 / (i + 2);
            i += 4;
        }
        PI = +(4 * p).toFixed(this._incrementCount());

        // set the actual Pi value to display
        this.setState({
            piValue: PI
        })

        return PI;
    }

    // increment count ++
    _incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });

        return (this.state.count <= 20 ? this.state.count : this.startFromInitial());
    }

    render() {
        let item = this.props.navigation.getParam('item');
        let value = (this.state.piValue == '') ? item : this.state.piValue;
        let result = (this.state.count <= 20 ? value : 'Argument must be between 0 and 20');
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.first}>
                    <Text style={styles.resultText}>{result}</Text>
                    <TouchableOpacity style={styles.submitButton} onPress={() => { this.getValues() }}>
                        <Text style={styles.buttonText}>{'Get Values'}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default PiDetails;

