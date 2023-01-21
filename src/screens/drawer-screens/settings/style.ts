import { Color } from "const";
import { Fonts } from "const/theme";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    profileCard: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 70,
      // backgroundColor: Color.Primary,
      paddingBottom: 10,
      marginTop: Platform.OS == 'android' ? 20 : 0,
      borderBottomWidth: 0.6,
      borderBottomColor: Color.GrayLite,
      marginHorizontal: 20,
    },
    userCont: {
      backgroundColor: Color.Primary,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
    },
    userInfoContainer: {
      backgroundColor: Color.White,
      width: 45,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 27.5,
    },
    nameText: {
      marginLeft: 15,
      fontSize: 16,
      fontWeight: '700',
    },
    card: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      height: 60,
      marginTop: 10,
    },
    iconStyle: {
      justifyContent: 'center',
      width: '15%',
    },
    cardHeading: {
      fontSize: 18,
      color: Color.darkBlack,
      fontFamily: Fonts.bold,
    },
    cardBottomtext: {
      fontSize: 12,
      color: Color.Gray,
    },
    switchStyle: {
      width: '20%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  