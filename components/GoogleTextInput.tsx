import {Image, Text, View} from "react-native";
import {GoogleInputProps} from "@/types/type";

const GoogleTextInput = ({ icon, containerStyle }: { icon: any, containerStyle: any}) => {
    return (
        <View className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}>
            <Text>Google Text Input</Text>
            <Image source={icon}/>
        </View>
    )
}

export default GoogleTextInput