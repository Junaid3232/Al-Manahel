import {Color} from 'const';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Color.black + 90,
  },
  innerContainer: {
    backgroundColor: Color.White,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: 50,
  },
  headerStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    width: 20,
    height: 20,
    backgroundColor: Color.PrimaryLight,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // right: 20,
    alignSelf: 'flex-start',
    marginBottom: -15,
    marginLeft: 20,
  },
  flagContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageCard: {
    flexDirection: 'row',
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 10,
    width: '80%',
  },
  textStyle: {
    fontSize: 18,
    fontFamily: 'JF Flat Regular',
    color: Color.LanguageChange,
    textAlign: 'left',
  },
  checkBox: {
    // marginBottom: 20,
  },
});
