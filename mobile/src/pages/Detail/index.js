import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import * as MailComposer from "expo-mail-composer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import logo from "../../assets/logo.png";

function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá, ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)} `;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+55${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo}></Image>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={18} color="#E82041"></Feather>
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>Organização</Text>
        <Text style={styles.incidentValue}>
          {incident.name} de {incident.city}/{incident.uf}
        </Text>

        <Text style={styles.incidentProperty}>Caso</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>

        <Text style={styles.incidentProperty}>Valor</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia</Text>
        <Text style={styles.heroTitle}>Seja o herói deste caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato conosco:</Text>

        <View style={styles.contactBoxActions}>
          <TouchableOpacity
            style={styles.contactBoxAction}
            onPress={sendWhatsapp}
          >
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactBoxAction} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Detail;
