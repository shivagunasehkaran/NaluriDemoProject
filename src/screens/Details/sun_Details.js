import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { styles } from './style';

class SunDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circumValue: ''
        };
    }

    // calculate circumference of sun based on assumption radius value
    calculateCircumference = () => {
        // assumption of radius value assigned
        let radius = 100000;
        let value = 2 * Math.PI * radius;

        // set the actual circumference value to display
        this.setState({
            circumValue: value
        })

        return value;
    }

    render() {
        let item = this.props.navigation.getParam('item');
        let result = (this.state.circumValue == '') ? item : this.state.circumValue + ' km';
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.second}>
                    <Text style={styles.resultText}>{result}</Text>
                    <TouchableOpacity style={styles.submitButton} onPress={() => { this.calculateCircumference() }}>
                        <Text style={styles.buttonText}>{'Get Values'}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default SunDetails;

