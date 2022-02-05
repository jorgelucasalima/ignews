import { apiBaseUrl } from 'next-auth/client/_utils';
import { useSession, signIn } from 'next-auth/react';
import styles from './styles.module.scss';

import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';


interface SubscribeButtonProps {
  priceId: string;
}


export function SubscribeButton( {priceId}: SubscribeButtonProps ) {
  

  const {data: session, status} = useSession();

  async function handleSubscribe() {

      if (!session) {
        signIn('github')
        return
      }

      try {
        const response = await api.post('/subscribe')
        const { sessionId } = response.data
        const stripe = await getStripeJs()

        await stripe.redirectToCheckout({sessionId})

      } catch (error) {
        alert(error.message)
      }
  }
  
  return (
    <button
      type="button"
      className={styles.botaoSubscribe}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}