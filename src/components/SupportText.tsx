import React, {FC} from 'react';
import {_View, _Text, _Icon, _Image} from 'components';
import {Color} from 'const';

export const SupportText: FC = () => {
  return (
    <_View style={{alignSelf: 'center'}}>
      <_Text style={{color: Color.Gray, fontSize: 16}}>
        Having a problem?{' '}
        <_Text
          style={{
            color: '#0D6EFD',
            textDecorationLine: 'underline',
            fontSize: 16,
          }}>
          Support
        </_Text>
      </_Text>
    </_View>
  );
};
