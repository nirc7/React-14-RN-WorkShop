import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';

export default function Rider(props) {
    return (
        <View>
            <TouchableOpacity
                style={stylesHP.listItem}
                onPress={() => {
                    props.getItemClicked(props.item);
                }}>
                <View style={{
                    flexDirection: 'row-reverse',
                    height: 80
                }}>
                    <View style={{ flex: 0.7, justifyContent: 'center' }}>
                        <Image
                            style={{ alignSelf: 'center', width: 60, height: 77, borderRadius: 30 }}
                            source={props.item.imgSrc} />
                    </View>
                    <View style={{ flex: 1, padding: 15, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20 }}>{props.item.key}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, margin: 2 }}>{props.item.lat}</Text>
                        <Text style={{ fontSize: 18, margin: 2 }}>{props.item.long}</Text>
                    </View>
                </View>
            </TouchableOpacity> 
            {/* {this.state.showDialog &&
                    <View style={{ position: 'absolute', bottom: 50, alignSelf: 'center' }}>
                        <Dialog>
                            <Dialog.Title><Text>Hello {this.state.dialogName}</Text></Dialog.Title>
                            <Dialog.Content>
                                <Image
                                    style={{ alignSelf:'center', width: 150, height: 150 }}
                                    source={this.state.dialogSrc}
                                />
                            </Dialog.Content>
                            <Dialog.Actions>
                                <DialogDefaultActions
                                    actions={['cancel', 'we\'re good']}
                                    onActionPress={(data) => {
                                        this.setState({ showDialog: false });
                                    }}
                                />
                            </Dialog.Actions>
                        </Dialog>
                    </View>
                } */}
        </View>
    );
}


const stylesHP = StyleSheet.create({
    listItem: {
        backgroundColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        margin: 5,
        height: 80,
        width: Dimensions.get('window').width - 20,
        borderRadius: 10,
        borderColor: '#111111',
        borderWidth: 1
    },
});