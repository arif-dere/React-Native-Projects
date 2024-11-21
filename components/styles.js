import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    childOneContainer: {
        width: "100%",
        height: 100,
        backgroundColor: "#BCDFFF",
        marginBottom: 10,
        justifyContent: "center",
        borderRadius: 15,
    },
    countTextStyle: {
        textAlign: "center",
        fontSize: 75,
    },
    countStatePlusStyle: {
        width: "30%",
        height: 42,
        backgroundColor: "#DDFFaD",
        justifyContent: "center",
        borderRadius: 15,
        marginTop: 40,
        marginBottom: 12,
        marginRight: 15,
    },
    countStatePlusTextStyle: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        color: "green",
    },
    countStateNegativeStyle: {
        width: "30%",
        height: 42,
        backgroundColor: "#ee7a8b",
        justifyContent: "center",
        borderRadius: 15,
        marginLeft: 15,
        marginTop: 40
    },
    countStateNegativeTextStyle: {
        textAlign: "center",
        fontSize: 15,
        FontWeight: "bold",
        color: "#c4f4ff",
    },
    resetButtonStyle: {
        width: "30%",
        height: 42,
        backgroundColor: "#eaFb",
        justifyContent: "center",
        borderRadius: 15,
        marginTop: 30,
        marginRight: 15,
    },
    resetButtonTextStyle: {
        textAlign: "center",
        fontSize: 14.5,
        FontWeight: "bold",
        color: "black",
    },
    deleteButtonStyle: {
        width: "30%",
        height: 42,
        backgroundColor: "#aaffccff",
        justifyContent: "center",
        borderRadius: 15,
        marginTop: 30,
        marginLeft: 15,
    },
    deleteButtonTextStyle: {
        textAlign: "center",
        fontSize: 14.5,
        FontWeight: "bold",
        color: "#87a",
    },

})