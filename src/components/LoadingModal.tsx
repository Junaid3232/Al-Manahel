import React, {FC} from 'react';
import {Modal, StyleSheet, ActivityIndicator} from 'react-native';
import {_View, _Text} from 'components';
import {Color} from 'const';

interface loadingModalProps {
  modalVisible: boolean;
  task?: string;
}
export const LoadingModal: FC<loadingModalProps> = ({modalVisible, task}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      statusBarTranslucent={true}>
      <_View style={styles.centeredView}>
        <_View style={styles.modalView}>
          <ActivityIndicator color={Color.Primary} />
          {task ? (
            <_Text style={styles.modalText}>{task}</_Text>
          ) : (
            <_Text style={styles.modalText}>Loading...</_Text>
          )}
        </_View>
      </_View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0008',
  },
  modalView: {
    margin: 20,
    width: 180,
    height: 70,
    backgroundColor: Color.PrimaryLight,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginVertical: 15,
    textAlign: 'center',
    marginLeft: 15,
  },
});
