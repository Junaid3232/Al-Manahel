import React, {FC} from 'react';
import {_View, _Text, _Icon, _Image, _Button} from 'components';
import {Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from 'const';

interface errorModalProps {
  isVisible: boolean;
  description: string;
  setVisible: (val: boolean) => void;
  details?: string;
}
export const ErrorModal: FC<errorModalProps> = ({
  isVisible,
  description,
  setVisible,
  details,
}) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <_View style={styles.container}>
        <_View style={styles.innerContainer}>
          <_View style={styles.innerview}>
            <_Icon
              family="Ionicons"
              name="warning"
              color={Color.Danger}
              size={25}
            />
            <_View style={{width: '76%'}}>
              <_Text style={styles.errorText}>{description}</_Text>
              {details && (
                <_Text style={{marginLeft: 6, color: Color.Gray}}>
                  {details}
                </_Text>
              )}
            </_View>
          </_View>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={styles.crossText}>
            <_Icon
              family="AntDesign"
              name="close"
              color={Color.Gray}
              size={20}
            />
          </TouchableOpacity>
        </_View>
      </_View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: Color.White,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: 15,
    paddingVertical: 15,
    position: 'absolute',
    top: 40,
    flexDirection: 'row',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 5.05,
    elevation: 4,
  },

  innerview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  errorText: {
    fontSize: 16,
    color: Color.Danger,
    marginLeft: 5,
  },
  crossText: {
    height: '100%',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
