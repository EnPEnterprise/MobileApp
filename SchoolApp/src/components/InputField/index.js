import React from 'react';
import {TextInput} from 'react-native';


import styles from './styles'

const InputField =({placeholder }) => {
    return(
        <TextInput style={styles.textInput}  placeholder={placeholder} />
    )
}
export default InputField