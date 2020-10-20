import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Colors from '../constants/colors';

const Header = props =>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles =StyleSheet.create({
    header:{
        width:'100%',
        height:120,
        paddingTop:36,
        backgroundColor:Colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
        marginBottom:20,
        color:'cornsilk',
        fontSize:36,
        borderBottomWidth:2,
        borderBottomColor:'cornsilk'

        
    }
});

export default Header;