import { View, StyleSheet} from 'react-native';
import Box from './components/Box';

export default function App() {
	return (
		//<View style={{backgroundColor: "green", flex:1}}></View>
		<View style={styles.container}>
			<Box style={{ backgroundColor: '#8e9b00', top:75, left:75 }}>1</Box>
			<Box style={{ backgroundColor: '#b65d1f' }}>2</Box>
			<Box style={{ backgroundColor: '#1c4c56' }}>3</Box>
			<Box style={{ backgroundColor: '#ab9156',position: 'absolute', top:75, left:75}}>4</Box>
			<Box style={{ backgroundColor: '#6b0803' }}>5</Box>
			<Box style={{ backgroundColor: '#1c4c',  }}>6</Box>
			<Box style={{ backgroundColor: '#b95f21' }}>7</Box>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 64,
		borderWidth: 6,
		borderColor: 'red',
	},
});
