import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Table, Row } from "react-native-table-component";
import { useNavigation } from "@react-navigation/native";
import { latestCurrencyRates } from "../services/ipoData";

const ExchangeRates = () => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRates() {
      try {
        const data = await latestCurrencyRates();
        setRates(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    fetchRates();
  }, []);

  const formatTimestampToDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Example: "7/14/2022, 10:30:00 AM"
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderTable = () => {
    const tableHead = ["#", "Symbol", "Rate", "Last updated"];
    const tableData = rates.map((item, index) => [
      index + 1,
      item.symbol,
      item.rate,
      formatTimestampToDate(item.timestamp),
    ]);

    return (
      <Table borderStyle={{ borderColor: "#C1C0B9" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {tableData.map((rowData, index) => (
          <Row key={index} data={rowData} textStyle={styles.text} />
        ))}
      </Table>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Latest Exchange Rate List 💹</Text>
      {renderTable()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6, textAlign: "center" },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ExchangeRates;
