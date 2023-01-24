import React, {FC} from 'react';
import {_View, _Text, _Icon, _Image} from 'components';
import {Color} from 'const';
import {t} from 'i18next';

export const SupportText: FC = () => {
  return (
    <_View style={{alignSelf: 'center'}}>
      <_Text style={{color: Color.Gray, fontSize: 16}}>
        {t('common:havingProblem')}
        <_Text
          style={{
            color: '#0D6EFD',
            textDecorationLine: 'underline',
            fontSize: 16,
          }}>
          {t('common:support')}
        </_Text>
      </_Text>
    </_View>
  );
};
