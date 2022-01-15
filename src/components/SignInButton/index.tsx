import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

import {signIn, signOut, useSession} from 'next-auth/react'


export function SignInButton () {

  //criei essa variavel para verificar se o usuário ta logado
  // deixando icone do github verde se tiver e amarelo se não tiver
  const {data:session} = useSession()
  console.log(session)

  return session ? (
    <button 
      type="button"
      className={styles.botaoSingIn}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361"/>
      {session.user.name}
      <FiX className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
      type="button"
      className={styles.botaoSingIn}
      onClick={ () => signIn('github')}
    >
      <FaGithub color="#eba417"/>
      Sing in with Github
    </button>
  )
}