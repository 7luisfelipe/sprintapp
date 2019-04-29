import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, AsyncStorage, Alert, TouchableOpacity } from 'react-native';
import { Spinner } from 'native-base';
import MapView from 'react-native-maps';
import Modal from "react-native-simple-modal";
import rest from '../service/rest';

//Pega largura e altura da tela
const { width, height } = Dimensions.get('window');

const imgs = {
    whiteIcon: require('../imgs/white_sprint.png'),
    greenIcon: require('../imgs/green_sprint.png'),
    yellowIcon: require('../imgs/yellow_sprint.png'),
    redIcon: require('../imgs/red_sprint.png')
};

export default class App extends React.Component {
    state = {
        isLoading: false,
        isOpenModal: false,
        token: null,
        lights: [
            {
                id: 1,
                title: 'Cedup HH',
                description: 'O início...',
                latitude: -26.893721,
                longitude: -49.098394,
                icon: imgs.greenIcon
            },
            {
                id: 2,
                title: 'Senac',
                description: 'A saga continua...',
                latitude: -26.915203,
                longitude: -49.064200,
                icon: imgs.yellowIcon
            },
            {
                id: 3,
                title: 'aHoy',
                description: 'tempo livre...',
                latitude: -26.899241,
                longitude: -49.077292,
                icon: imgs.redIcon
            }
        ],
        lightPressed: []
    }

    modalDidOpen = () => console.log("Modal did open.");

    modalDidClose = () => {
        this.setState({ isOpenModal: false });
        console.log("Modal did close.");
    };

    onPressModal = (press) => {
        console.log()
    }

    closeModal = () => this.setState({ isOpenModal: false });


    //Simula dados
    fakeState = async () => {
        const lst = [];
        this.state.lights.map(light => {

            //Simulação
            if (light.id == 1)
                light.icon = imgs.greenIcon;
            if (light.id == 2)
                light.icon = imgs.yellowIcon;
            if (light.id == 3)
                light.icon = imgs.redIcon;

            lst.push(light);
        });

        await this.setState({
            lights: lst
        });

    };

    refreshState = async () => {
        if (!this.state.isLoading) {
            this.setState({
                isLoading: true
            });
            const lst = [];
            this.state.lights.map(l => {

                if (l.icon) {
                    if (l.icon == 1) // Branco
                        l.icon = imgs.greenIcon;

                    else if (l.icon == 2) //Verde
                        l.icon = imgs.yellowIcon;

                    else if (l.icon == 3) //Amarelo
                        l.icon = imgs.redIcon;

                    else if (l.icon == 4) //Vermelho
                        l.icon = imgs.greenIcon;
                } else {
                    l.icon = imgs.whiteIcon
                }
                console.log(l.icon);
                lst.push(l);
            });

            await this.setState({
                lights: lst
            });

            await this.setState({
                isLoading: false
            });
        }
    };

    loadInfos = async () => {
        try {
            const token = await AsyncStorage.getItem('@sprint:token');
            console.log('1')
            
            //Se já está logado...
            if (token) {
                if (token != '') {
                    this.setState({ token: token });
                }
            }
            console.log('2')
            const response = await rest.get('/light/user/lights');
            console.log('3')
            
            const lights = response.data;

            await this.setState({
                lights
            });

            await this.setState({
                lights
            });

            // await this.fakeState();

        } catch (err) {
            Alert.alert(err);
        }
    }; //Fecha a função    

    componentDidMount() {
        this.loadInfos();
    }

    render() {
        //Desestruturação
        const { latitude, longitude } = this.state.lights[0];

        return (
            <View style={styles.container}>
                <Modal
                    offset={this.state.offset}
                    open={this.state.isOpenModal}
                    modalDidOpen={this.modalDidOpen}
                    modalDidClose={this.modalDidClose}
                    style={styles.modal}
                >

                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 20, marginBottom: 10 }}>Solicitar Preferência</Text>
                        <TouchableOpacity onPress={() => this.openModal()} style={styles.button}>
                            {
                                this.state.isLoading ?
                                    <Spinner color='#04B45F' />
                                    :
                                    <Text style={styles.txtButton} hidden={true}>Atualizar</Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 5 }} onPress={this.closeModal}>
                            <Text>Fechar</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>

                <MapView
                    ref={map => this.MapView = map}
                    style={styles.map}
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    rotateEnabled={false} //Rotação
                    scrollEnabled={true} //Scroll
                    zoomEnabled={true} //Zoom
                    showsPointsOfInterest={false} //Ponstos de interesse
                    showsBuildings={false} //Informações de construções
                >

                    {
                        //Cria as marcações (Percorre o array)
                        this.state.lights.map(light => (
                            <MapView.Marker
                                ref={mark => light.mark = mark} //cria uma referência desse mapview.marker (e joga ela para cada uam das informações no array places)
                                title={light.title ? light.title : ''}
                                description={light.description}
                                key={light.id}
                                image={light.icon ? light.icon : imgs.whiteIcon}
                                coordinate={{
                                    latitude: light.latitude,
                                    longitude: light.longitude
                                }}
                                onPress={value => this.setState({ lightPressed: value })}
                            />
                        ))
                    }

                </MapView>
                <ScrollView
                    style={styles.lightsContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false} //Não mostra a scroll
                    pagingEnabled //Pega o tamanho do elemento, e permite scroll apenas inteiro, sem parar na metade
                >

                    <View style={styles.lightBox}>
                        <Text style={styles.titleBox}>
                            {/* Cedup HH */}
                            {
                                this.lightPressed ? this.lightPressed.title : ''
                            }
                </Text>
                        <Text style={styles.informationBox}>
                            Acompanhe a situação das sinaleiras.
                </Text>
                        <TouchableOpacity onPress={() => this.refreshState()} style={styles.button}>
                            {//openModal
                                this.state.isLoading ?
                                    <Spinner color='#04B45F' />
                                    :
                                    <Text style={styles.txtButton} hidden={true}>Solicitar Preferência</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    lightsContainer: {
        width: '100%',
        maxHeight: 200,

        backgroundColor: '#FFF',
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        borderWidth: 3,
        borderColor: '#d6d7da'
    },
    lightBox: {
        width: width - 40,
        maxHeight: 200,
        backgroundColor: '#fafafa',
        borderRadius: 10,
        padding: 5,
        // marginHorizontal: 20
    },
    titleBox: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    informationBox: {
        color: '#999',
        marginTop: 5,
        lineHeight: 25
    },
    button: {
        borderColor: '#04B45F',
        padding: 10,
        marginTop: 20,
        color: '#04B45F',
        // backgroundColor: '#04B45F',
        borderRadius: 10,
        fontSize: 14,
        borderWidth: 2,
        alignItems: 'center'
    },
    txtButton: {
        color: '#04B45F',
        fontSize: 14,
        fontWeight: 'bold'
    },
    modal: {
        alignItems: "center",
        position: 'absolute'
    }
});
