import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_with-love_rs1k.svg').default,
    description: (
      <>
        OmnichainL2 was designed from the ground up to be easily used for everyone building for consumers.
      </>
    ),
  },
  {
    title: 'A friendly chain',
    Svg: require('@site/static/img/undraw_modern-design_yur1.svg').default,
    description: (
      <>
        Incredible inteoperability and composability.
      </>
    ),
  },
  {
    title: 'For Builders & Users',
    Svg: require('@site/static/img/undraw_pair-programming_9jyg.svg').default,
    description: (
      <>
        Extend or customize your Dapps from all EVM-comaptible chains.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
