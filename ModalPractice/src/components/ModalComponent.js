import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, FlatList, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';



const ModalComponent = () => {

    // const [participants, setParticipants] = useState([]);
    // const AddParticipant = () => {
    //     setParticipants([...participants, IncreaseCount()]);
    // }
    // const RemoveParticipant = () => {
    //     DecreaseCount();
    //     const NewParticipants = participants.slice(0,-1);
    //     setParticipants(NewParticipants);
    
    // }
    // console.log(participants);

    // const [count, setCount] = useState(1);
    // const IncreaseCount = () => {
    //     setCount(count+1);
    //     return `Participant: ${count}`;
    // }
    // const DecreaseCount = () => {
    //     setCount(count-1);
    // }
    

    const [visibility, setVisibility] = useState(true);

    const PARTICIPANTS = [{name: "Priti B"},
                      {name: "Priti A"},
                      {name: "Girish S"},
                      {name: "Manish K"},
                      {name: "Manish G"},
                      {name: "Bhanu K"},
                      {name: "Prakash N"},
                      {name: "Pragati J"},
                      {name: "Sagar S"},
                      {name: "Gibraan J"},];


    return(
        <View>
            <Modal 
                animationType = {"slide"}
                transparent = {false}
                visible={visibility}
            >       
                <View
                    style = {{alignItems: "stretch",
                              flexDirection: "row"}}
                >
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => {
                         setVisibility(false);   
                        }}
                    >
                       <Text style={styles.buttonText} > Close </Text>
                    </TouchableOpacity>

                    <Text style={styles.participantsText}> Participants </Text>
                </View>

                <View style={styles.UserContainer}>
                    <Text style={styles.UsersText}>
                        Users (10)
                    </Text>
                    <FlatList
                        keyExtractor={participant => participant.name}
                        data={PARTICIPANTS}
                        renderItem={({item}) => {
                            return (
                                <View style={styles.ParticipantsFlatListContainer}>
                                    <Icon name="contacts" size={30} color="black" style={{flex: 2}}/>
                                    <Text style={styles.ParticipantsFlatList}>{item.name}</Text>
                                    <Icon name="message1" size={25} color="black" style={{flex: 1}}/>
                                    <Feather name="mic-off" size={25} color="black" style={{flex: 1}}/>
                                    <Feather name="video" size={25} color="red" style={{flex: 1}}/>

                                </View>
                            );
                        }}
                    />
                </View>
                    
             
            </Modal>


            {/* <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                        AddParticipant();
                        //console.log(count);
                    }
                }
            >
                <Text style={styles.buttonText} > Add Participant </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                        RemoveParticipant();
                        //console.log(count);
                    }
                }
            >
                <Text style={styles.buttonText} > Remove Participant </Text>
            </TouchableOpacity> */}

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                   console.log("Open the Modal");
                   setVisibility(true);
                    }
                }
            >
                <Text style={styles.buttonText} > Check Participants </Text>
            </TouchableOpacity> 

            {/* <View
                style={{
                    alignItems: "stretch",
                    flexDirection: "row",
                    borderColor: "red",
                    borderWidth: 2,
                    height: 200,
                    justifyContent: 'flex-start'
                }}
            >
            <Text style={{
                borderColor: "blue",
                borderWidth: 2,
                padding: 5,
                flex: 1
            }}>Text 1</Text>

            <Text style={{
                borderColor: "blue",
                borderWidth: 2,
                padding: 5,
                flex: 1
            }}>Text 2</Text>

            <Text style={{
                borderColor: "blue",
                borderWidth: 2,
                padding: 5,
                
            }}>Text 3</Text>
            </View> */}
            

        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        //borderWidth: 1,
        borderColor: 'red',
        //elevation: 8,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingTop : 17,
        paddingHorizontal: 12,
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        color: "blue",
        alignSelf: "center",
        textTransform: "uppercase"
      },
    participantsText: {
        fontWeight: "bold",
        //borderWidth: 1,
        //borderColor: "black",
        fontSize: 20,
        marginTop: 5,
        marginRight: 5,
        paddingVertical: 10,
        paddingLeft: 45,
        flex: 4,
        //textAlign: 'center',
    },
    UserContainer: {
        padding: 10,
        //borderColor: 'purple',
        //borderWidth: 1
    },
    UsersText: {
        //borderColor: 'blue',
        //borderWidth: 1,
        fontWeight: 'bold',
        paddingTop: 35,
        paddingBottom: 5, 
        height: 60
    },
    ParticipantsFlatListContainer: {
        height: 50,
        //borderColor: "pink",
        //borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ParticipantsFlatList: {
        paddingVertical: 15,
        paddingLeft: 10,
        //borderColor: 'green',
        //borderWidth: 1,
        flex: 5,
    }
});

export default ModalComponent;

/* IMPROVEMENTS
1) Make Participants array like :
    [{name:"Participant 1",id:"1"},{name:"Participant 2",id:"2"}]

2) Provide margin and padding to flatlist elements
*/