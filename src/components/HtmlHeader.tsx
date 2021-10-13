import React from 'react';
import { observer } from 'mobx-react-lite';

import { useAppContext } from '../store/AppContext';

export const HtmlHeader: React.FC = observer(() => {
  const { header } = useAppContext();
  document.title = `${header.title} | ${header.subtitle}`;
  return null;
});
