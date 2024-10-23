import { Text, View } from '@react-pdf/renderer'

type props = {
  value: string | number | null
  style?: { [key: string]: string | number }
}

export function TableCell({ value, style = {} }: props) {
  return (
    <View
      style={[
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          marginLeft: '-2px',
          marginTop: '-2px',
          border: '2px solid black',
        },
        style,
      ]}
    >
      <Text>{value}</Text>
    </View>
  )
}
