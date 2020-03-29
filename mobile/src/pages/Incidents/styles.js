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
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: '#737380'
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131A',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },
  
  incidentList: {
    marginTop: 30
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

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default Style;
