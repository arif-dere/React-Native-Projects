import { Alert } from "react-native";

export function counterPlus(count) {
    count++;
    if (count > 100000000000000) {
        return (count = 0);
    } else {
        return count;
    }
}

export function counterNegative(count) {
    count--;
    if (count < 0) {
        return (count = 0);
    } else {
        return count;
    }
}

export function counterReset(count) {
    if (count > 0) {
        return (count = 0);
    } else {
        return (count = 0);
    }
}

export function Alertt() {
    Alert.alert("Dikkat", "Sıfırlamak İstiyor musunuz?", [
        {
            text: "Hayır",
            onPress: () => {
                alert("İptal Edildi");
            },
        },
        {
            text: "Evet",
            onPress: () => {
                Alert.alert("Tamamlandı", "Başarıyla Sıfırlandı", [
                    { text: "Tamam" },
                ]);
            },
        },
    ]);
}
