import { Text, View } from "react-native"

const ItemDetailScreen = ({route}) => {
  const { itemId } = route.params

  return (
    <View>
      <Text>detail data: {itemId}</Text>
    </View>
  )
}

export default ItemDetailScreen
