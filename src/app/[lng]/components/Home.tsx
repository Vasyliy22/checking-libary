'use client';

import { FC, FormEvent, useState } from 'react';
import styles from './styles.module.css';
import { useTranslation } from '../../i18n/client';
import { languages, defaultNS } from '../../i18n/settings';
import { useRouter } from 'next/navigation';
import i18next from 'i18next';

const URL = 'http://localhost:3000/api/handleform';

const createUser = async (user: Data) => {
  const result = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json'
    }
  });

  return result.json();
}

type Data = {
  userId: string,
  userName: string,
  email: string,
  password: string,
  lang: string,
}

type Props = {
  params: {
    lng: string,
  },
}

const Home: FC<Props> = ({ params: { lng } }) => {
  const [data, setData] = useState<Data[]>([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lang, setLang] = useState('Eng');
  const [userName, setUserName] = useState('');
  const { t } = useTranslation(lng, defaultNS);
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData: Data = {
      userId: `${Math.random()}`,
      userName,
      email,
      password,
      lang,
    }

    createUser(newData).then(resolve => {
      setData([...data, resolve]);
    });

    setEmail('');
    setPassword('');
    setLang('');
    setUserName('');
 };

  const switchLanguage = () => {
    languages.map(l => {
      if (l !== lng) {
        router.push(`/${l}`);
      }
    })
  }

  return (
    <div className={styles.main}>
      <div className="block-lang">
        <button className="lang" onClick={() => i18next.changeLanguage('en')}>EN</button>
        <button className="lang" onClick={() => i18next.changeLanguage('uk')}>UA</button>
      </div>
      <h1 className={styles['title']}>{t('title')}</h1>
      <form name='form' className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="Email">
          {t('email')}:
          <input
            className={styles.input}
            placeholder={t('email')}
            type="email"
            value={email}
            id='Email'
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label className={styles.label} htmlFor="Password">
        {t('password')}:
          <input
            className={styles.input}
            placeholder={t('password')}
            type="password"
            id='Password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
        <label className={styles.label} htmlFor="name">
        {t('userName')}:
          <input
            className={styles.input}
            placeholder={t('userName')}
            type="text"
            id='name'
            value={userName}
            onChange={({ target }) => setUserName(target.value)}
          />
        </label>
        <label className={styles.label} htmlFor="Language">
        {t('language')}:
          <select
            className={styles.input}
            name="language"
            id="Language"
            value={lang}
            onChange={({ target }) => setLang(target.value)}
          >
            <option value="Eng">En</option>
            <option value="Ua">Ua</option>
          </select>
        </label>
        <button type='submit'>{t('btnSubmit')}</button>
      </form>
      <button onClick={() => router.push(`/about-us`)} className={styles.about}>{t('about')}</button>
    </div>
  );
}

export default Home;