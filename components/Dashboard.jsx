import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Table, Row } from "react-native-table-component";
import { upcomingIpos } from "../services/ipoData";

const Dashboard = () => {
  const navigation = useNavigation();
  const [ipos, setIpos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await upcomingIpos();
        setIpos(response); // Assuming the data is in the 'data' property of the response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const renderTable = () => {
    const tableHead = [
      "#",
      "Company",
      "Filed Date",
      "Offering Date",
      "High",
      "Low",
      "Shares",
      "Symbol",
      "Volume",
    ];
    const tableData = ipos.map((item, index) => [
      index + 1,
      item.companyName,
      item.filedDate,
      item.offeringDate,
      item.priceRangeHigh,
      item.priceRangeLow,
      item.shares,
      item.symbol,
      item.volume,
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
      {/* <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButtonContainer}
      >
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity> */}

      <Text style={styles.heading}>Upcoming Ipo list 2024 📈</Text>
      {renderTable()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  backButtonContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  backButton: {
    fontSize: 16,
    color: "#007bff", // You can use your desired color
  },
  heading: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6, textAlign: "center" },
});

export default Dashboard;
