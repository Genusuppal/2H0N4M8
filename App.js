import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, Button } from "react-native";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text>Bingo?</Text>
				<Text>Start playing NOW!</Text>
			</View>
			<View>
				<Row id={0} />
				<Row id={1} />
				<Row id={2} />
				<Row id={3} />
				<Row id={4} />
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

function Row({ id }) {
	return (
		<View style={styles.row}>
			{[1, 2, 3, 4, 5].map((item) => {
				return (
					<Button key={item} style={styles.cell} title={JSON.stringify(id * 5 + item)}/>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		height: "100%",
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	row: {
		display: "flex",
		flexDirection: "row",
		width: "80%",
		justifyContent: "space-between",
		marginBottom: 40,
	},
	cell: {
		width: "20%",
		justifyContent: "center",
	},
});
