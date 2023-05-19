import { View, Text, ScrollView, Image, } from "react-native";
import { useAsync } from 'react-async';
import ComponentStyles from '../ComponentStyles';

const sleepyGatorImage = require('./../assets/images/sleepy_gator2.png');

const NoAssignments = () => {

    return (
        <ScrollView>

            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 40 }}>
                <Text style={ComponentStyles.header_text}>Take a Rest.</Text>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
                <View style={ComponentStyles.question_image_view}>
                    <Image source={sleepyGatorImage} style={ComponentStyles.question_image} />
                </View>
            </View>


            <Text style={ComponentStyles.noActiveAssignments_text}>There are currently no active assignments due.</Text>


            {/* <View style={ComponentStyles.question_image_view}>
                <Image source={sleepyGatorImage} style={ComponentStyles.question_image} />
            </View> */}

        </ScrollView>


        // <ScrollView>
        //     <Text style={ComponentStyles.header_text}>Take a Rest.</Text>
        // </ScrollView>


    );
}

export default NoAssignments;