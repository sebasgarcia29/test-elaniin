import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50,
  },
  containerFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#475A95',
    borderColor: '#757575',
    borderWidth: 2,
    marginVertical: 10,
  },
  containerGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#757575',
    borderWidth: 2,
    marginVertical: 10,
  },
  textFacebook: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  textGoogle: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  img: {
    width: 30,
    height: 30,
  },
  pokebolaBG: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: -100,
    right: -100,
    opacity: 0.2,
  },
});
