import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'


export function SignInButton () {

  //criei essa variavel para verificar se o usuário ta logado
  // deixando icone do github verde se tiver e amarelo se não tiver
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button 
      type="button"
      className={styles.botaoSingIn}
    >
      <FaGithub color="#04d361"/>
      Jorge Lucas Lima
      <FiX className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      type="button"
      className={styles.botaoSingIn}
    >
      <FaGithub color="#eba417"/>
      Sing in with Github
    </button>
  )
}