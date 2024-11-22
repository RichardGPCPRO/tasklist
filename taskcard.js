import { CircleCheck } from "lucide-react-native";
import { StyleSheet, TouchableOpacity, Button, ImageBackground, View } from "react-native";
const TaskCard = ({ title, dest, status, onClick }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={style.title}>
                    {title}
                </Text>
                <CircleCheck color="green" size={32} />
            </View>
            <Text style={styles.description}>{desc} </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={onClick}>
                <Text styles={styles.buttonText}>
                    {status === "Done" ? 'Deletar' : 'Check'}
                </Text>
            </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        ImageBackground: '#fff',
        padding: 15,
        borderRadius: '10',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        elignItems: 'Center',
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'
    },
    status: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10
    },
    button: {
        backgroundColor: '#d33f49',
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'certer'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default TaskCard;