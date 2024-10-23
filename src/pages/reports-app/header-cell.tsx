import { Text, View } from '@react-pdf/renderer'

type props = {
  title: string
  style?: { [key: string]: string | number }
}

export function HeaderCell({ title, style = {} }: props) {
  return (
    <View
      style={[
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#A9A9A9',
          marginLeft: '-2px',
          marginTop: '-2px',
          border: '2px solid black',
        },
        style,
      ]}
    >
      <Text>{title}</Text>
    </View>
  )
}
