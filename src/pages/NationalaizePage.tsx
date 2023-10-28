import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Text } from "react-native";
import axios from "axios";


const NationalizePage = () => {
    const [nationality, setNationality] = useState('A');
    const [userName, setUserName] = useState('');

    const SubmitHandler = () => {
        axios.get(`https://api.nationalize.io?name=${userName}`).then((res) => {
            if (res.data.country.length) {
                setNationality(res.data.country[0]["country_id"])
            }
        })
    }
    return (
        <View style={style.mainContainer}>
            <Text style={style.mainText}>
                {nationality}
            </Text>
            <View>
                <TextInput style={style.inputStyle} value={userName} onChangeText={setUserName}></TextInput>
            </View>
            <Button title='Submit' onPress={SubmitHandler}></Button>
        </View>
    )
}




const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    mainText: {
        fontSize: 80,
        fontWeight: "700",
        color: "red"
    },
    inputStyle: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
        borderRadius: 4
    }
})

export default NationalizePage;