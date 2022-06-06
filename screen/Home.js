import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    ScrollView,
    Button,
} from 'react-native';
import styles from '../style/StyleHomePage';
import { Icon } from 'react-native-elements';

const Home = ({navigation}) => {

    const [textKeberangkatan, onChangeKeberangkatan] = React.useState('');
    const [textTujuan, onChangeTujuan] = React.useState('');
    const [textWaktu, onChangeWaktu] = React.useState('');

    const register = () =>{
        navigation.navigate('CheckOut',{
            keberangkatan : textKeberangkatan,
            tujuan : textTujuan,
            waktu: textWaktu,
        })
    }

    return (
        <SafeAreaView >
            <ScrollView>
                <View style={styles.row}>
                    <Icon name ='menu' size={50}/>
                    <Icon name ='account-circle'size={50}/>
                </View>
                <View style={styles.centerView}>

                   <View style={styles.marginV}>
                        <Text style={styles.textTitle}>Hiling.id</Text>
                   </View>
                   <View style={styles.boxmain}>
                       <View style={styles.margins}>
                           <Text style={styles.textSubtittle}>Lokasi Keberangkatan</Text>
                           <TextInput 
                               style={styles.textInput}
                               onChangeText= {(text) => onChangeKeberangkatan(text)}
                               value={textKeberangkatan}
                               placeholder="Tulis..."/>
                            <Text style={styles.textSubtittle}>Lokasi Tujuan</Text>
                            <TextInput 
                                style={styles.textInput}
                                onChangeText= {(text) => onChangeTujuan(text)}
                                value={textTujuan}
                                placeholder="Tulis..."/>
                            <Text style={styles.textSubtittle}>Waktu Keberangkatan</Text>
                            <TextInput 
                                style={styles.textInput}
                                onChangeText= {(text) => onChangeWaktu(text)}
                                value={textWaktu}
                                placeholder="YYYY-MM-DD"/>
                            <Button
                                title="Cari"
                                onPress={register}
                                />
                       </View>
                   </View>
                </View>
                <View style={styles.copyright}>
                 <Text> Reki Selianta - 14116008</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
