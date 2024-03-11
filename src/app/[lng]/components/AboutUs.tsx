import { useTranslation } from '../../i18n/index';
import styles from './styles.module.css';

const AboutUs = async ({params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng, 'about-us');

  return (
    <>
      <h2 className={styles['second-page']}>{t('titleAbout')}</h2>
      <p className={styles['desc']}>{t('description')}</p>
    </>
  )
}

export default AboutUs;