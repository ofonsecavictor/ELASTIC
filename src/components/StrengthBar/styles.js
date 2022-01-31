import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },

  config: {
    marginLeft: 35,
    marginRight: 'auto',
    marginTop: 10,
  },

  chart: {
    marginLeft: 'auto',
    marginRight: 35,
    marginTop: 10,
  },

  progressBar: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
  },

  timer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  reset: {
    borderWidth: 1,
    borderColor: '#fc034e',
    borderRadius: 5,
    width: 55,
    height: 25,
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  list:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'center',
    borderColor: 'grey',
  },

  numbers:{
    textAlign: 'center', alignItems: 'center', marginTop: 5,
  },

  actionButtons:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  }
});
