import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 30
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },

  incident: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 4,
    marginBottom: 15
  },

  incidentProperty: {
    fontSize: 18,
    color: '#41414d',
    fontWeight: 'bold',
  },

  incidentValue: {
    marginTop: 4,
    fontSize: 14,
    marginBottom: 10,
    color: '#737380',
  },

  contactBox: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 4,
    marginBottom: 15
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30
  },

  heroDecription: {
    fontSize: 15,
    color: '#737380'
  },

  contactBoxActions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  contactBoxAction: {
    backgroundColor: '#e02041',
    borderRadius: 5,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default Style;
