import { useLocation } from 'react-router-dom';
import TermsAndConditions from '../components/TermsAndConditions';
import ShippingPolicy from '../components/ShippingPolicy';
import PrivacyPolicy from '../components/PrivacyPolicy';
const Help = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div>
      {location.pathname === '/terms-and-conditions' ? <TermsAndConditions/> : location.pathname === '/shipping-policy' ? <ShippingPolicy/> : location.pathname === '/privacy-policy' ? <PrivacyPolicy/> : <></>}
    </div>
  )
}

export default Help
