import React, {FC, useEffect, useState} from 'react';
import {_View, _Text, _Input, _Icon} from 'components';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from 'const';
import {shadow} from 'global-styles';

interface EnumItem {
  name: string;
}
interface Props extends Array<EnumItem> {
  storeData: any;
  title: string;
  setSelectedItem: any;
  selectedItem: any;
}
export const _Dropdown: FC<Props> = ({
  storeData,
  title,
  setSelectedItem,
  selectedItem,
}) => {
  const [showDropdown, setShowdropdown] = useState<boolean>(false);
  const [stores, setStores] = useState<Array<EnumItem>>(storeData);
  console.log('storeData----', storeData);
  useEffect(() => {
    setStores(storeData);
  }, [storeData]);

  const onSelect = async (item: {}) => {
    setSelectedItem(item);
    setShowdropdown(false);
  };

  return (
    <_View>
      <_View width={'100%'}>
        <TouchableOpacity
          style={styles.mainContainer}
          onPress={() => setShowdropdown(!showDropdown)}>
          <_Text>{selectedItem?.name ? selectedItem.name : title}</_Text>
          <_View style={styles.downIcon}>
            <_Icon
              name={showDropdown ? 'up' : 'down'}
              family="AntDesign"
              color={Color.black}
            />
          </_View>
        </TouchableOpacity>
      </_View>
      {showDropdown && (
        <ScrollView style={styles.dropContainer}>
          <_View style={{marginBottom: 20, ...shadow, zIndex: 3}}>
            {stores?.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropItem}
                onPress={() => {
                  onSelect(item);
                }}>
                <_Text>{item.name}</_Text>
              </TouchableOpacity>
            ))}
            {Boolean(stores?.length <= 0) && (
              <_Text style={{marginTop: 10}}>{'No Results Found'}</_Text>
            )}
          </_View>
        </ScrollView>
      )}
    </_View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: Color.White,
    width: '100%',
  },
  dropContainer: {
    zIndex: 1,
    width: '100%',
    maxHeight: 300,
    backgroundColor: Color.White,
    borderRadius: 15,
    position: 'absolute',
    top: 60,
    paddingHorizontal: 20,
    paddingTop: 10,
    borderWidth: 0.3,
    borderColor: Color.Secondary,
  },
  dropItem: {
    borderBottomWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: Color.PrimaryLight,
  },
  mainContainer: {
    width: '100%',
    height: 50,
    backgroundColor: Color.White,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: 10,
    ...shadow,
  },
  downIcon: {
    width: 80,
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 1,
  },
});
