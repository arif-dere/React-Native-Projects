import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { styles } from "./components/styles";
import {
  counterPlus,
  counterNegative,
  Alertt,
  counterReset,
} from "./components/my-functions";

export default function App() {
  const [count, setCount] = useState(0);
  const handleCounterPlus = () => {
    setCount(counterPlus(count));
  };
  const handleCounterNegative = () => {
    setCount(counterNegative(count));
  };
  const handleCounterReset = () => {
    setCount(counterReset);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.childOneContainer}>
        <Text style={styles.countTextStyle}>{count}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={handleCounterPlus}
          style={styles.countStatePlusStyle}
        >
          <Text style={styles.countStatePlusTextStyle}>Arttır</Text>
        </Pressable>

        <Pressable
          onPress={handleCounterNegative}
          style={styles.countStateNegativeStyle}
        >
          <Text style={styles.countStateNegativeTextStyle}>Azalt</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Pressable onPress={handleCounterReset} style={styles.resetButtonStyle}>
          <Text style={styles.resetButtonTextStyle}>Sayacı Sıfırla</Text>
        </Pressable>
        <Pressable onPress={Alertt} style={styles.deleteButtonStyle}>
          <Text style={styles.deleteButtonTextStyle}>Sil</Text>
        </Pressable>
      </View>

    </View>
  );
}
