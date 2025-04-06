import { Text, View, TouchableOpacity, Image } from "react-native";
import { gStyle } from '../styles/style'
import Tags from './Tags'

export default function NewsItem({item, navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)} style={gStyle.newsCard}>
        <Tags items={item.tags} />
        <Image 
          style={gStyle.previewImage}
          source={
            {uri: item.previewImage}
          } 
        />
        <Text style={gStyle.newsCardTitle}>{item.name}</Text>
        <Text style={gStyle.newsCardText}>{item.previewText}</Text>
      </TouchableOpacity>
    </View>
  )
}