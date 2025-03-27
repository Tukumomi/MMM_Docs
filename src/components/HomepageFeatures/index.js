import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '【ModularAvatar対応】',
    image: require('@site/static/img/homepage/商品サムネ_通常.png').default,    
    description: (
      <>
        MA対応で非破壊で追加、低Bitで同期！<br/>
        (通常版24bit、アイトラ機能のみの場合最小0bit)<br/><br/>
        <strong>簡単3stepでアバターへ追加！</strong><br/>
        ※改変によっては調整が必要になる場合があります。<br/>
      </>
    ),
  },
  {
    title: '【アイトラモード(VRCFT対応)】',
    image: require('@site/static/img/homepage/商品サムネ_アイトラ.png').default,
    description: (
      <>
        <strong>VRCFT対応</strong>で目線でUI/耳/尻尾を動かせる！<br/><br/>

        <strong>その他便利な調整機能も！</strong><br/>
        ・アイトラ可動域調整機能<br/>
        ・Localのみの位置/サイズ調整機能等<br/>
      </>
    ),
  },
  {
    title: '【新しいコミュニケーションツールとして！】',
    image: require('@site/static/img/homepage/商品サムネ_機能紹介.png').default,
    description: (
      <>
        <strong>コミュニケーションに便利な様々な機能を追加！</strong><br/>
        FloatingMenu/アイトラ/ActionMenuを使用した操作
        ActionMenuから操作した際は<strong>耳/尻尾の位置固定可能<br/>
        ※レイトジョイナーにも対応</strong><br/>
        耳/尻尾でもふもふした際の音やParticle等も追加！<br/>
        他にも様々な機能を追加！
      </>
    ),
  },
];

function Feature({title, image, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} role="img" />
      </div>
      <div className="text--center padding-horiz--md" style={{ color: "var(--ifm-color-primary)"}}>
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
