import { hotjar } from 'react-hotjar';

const hotjarSettings ={
  hjid: 2227379,
  hjsv: 6
}

export const hotjarInitialization = () => {
  hotjar.initialize(hotjarSettings.hjid, hotjarSettings.hjsv);
}