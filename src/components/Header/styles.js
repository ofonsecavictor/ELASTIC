import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        height: 120,
        width:'100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fc034e',

    },
    headertitle:{
        marginTop: 25,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
    },
    backbutton:{
        marginTop: 25,
        marginLeft:'auto',
        marginRight:'auto',
    },

    menubutton:{
        marginTop: 25,
        marginLeft:'auto',
        marginRight:15,
    }
})