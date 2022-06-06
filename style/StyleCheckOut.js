import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row:{
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'powderblue',
        
    },
    upper:{
        alignItems:'center',
        //justifyContent:'center',
        backgroundColor: 'powderblue',
        height: 150,
    },
    textSubtittle:{
        fontFamily: "Cochin",
        fontSize: 16,
        fontWeight: "bold",
    },
    textTitle:{
        fontFamily: "Cochin",
        fontSize: 32,
        fontWeight: "bold",
    },
    marginMain:{
        marginVertical: 20,
        marginHorizontal: 10,
    },
    viewCard:{
        flexDirection: "row",
        padding: 10,
    },
    viewImage:{
        flex: 1,
    },
});
export default styles;