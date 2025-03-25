import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '新しいコミュニケーションツールとして',
    image: require('@site/static/img/homepage/test_img_01.png').default,    
    description: (
      <>
        低Bit(通常版24bit、<strong>アイトラ機能のみの場合最小0bit</strong>)で同期！<br/>
        ActionMenuからの操作の場合は<strong>耳/尻尾の位置固定も可能(レイトジョイナー対応)</strong><br/>
        耳/尻尾でもふもふした際の音やParticle等も追加されます。<br/>
      </>
    ),
  },
];

function Feature({title, image, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={image} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Spacer size={50}/>
        <h3>{title}</h3>
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

export const Spacer = ({ size, horizontal }) => {
  return (
    <div
      style={
        horizontal
          ? { width: size, height: 'auto', display: 'inline-block', flexShrink: 0 }
          : { width: 'auto', height: size, flexShrink: 0  }
      }
    />
  )
}
