// Dependencies
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
  },
  logo: {
    height: 140,
    marginBottom: 20,
    width: 'auto',
  },
  textInput: {
    color: '#FFFFFF',
    flex: 1,
    fontWeight: 'bold',
    marginTop: 12,
    paddingLeft: 4,
  },
  inputError: {
    borderBottomColor: '#FF0000',
    borderBottomWidth: 1,
    color: '#FF0000',
  },
  alert: {
    backgroundColor: '#fff1f0',
    borderColor: '#ffa39e',
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 12,
    paddingVertical: 4,
  },
  separator: {
    height: 12,
  },
  marquee: {
    color: '#000000',
    fontSize: 14,
  },
  buttons: {
    height: 80,
    marginTop: 12,
  },
  flatButton: {
    alignItems: 'center',
    height: 20,
    justifyContent: 'center',
    marginTop: 12,
  },
  flatButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
