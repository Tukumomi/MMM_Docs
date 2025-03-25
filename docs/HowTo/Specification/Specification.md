---
sidebar_position: 1
---

# 基本仕様

# 各機能解説
- **【FloatingMenu関連】**  
    Particle等で作成したFloatingMenuを展開し、ワールド固定するギミックです。  
    **UI色はActionMenuから変更可能です。**  
    メニュー展開後はContactを使用し、RemoteへFloat2つ(X,Y)の値を同期し各種操作を行います。  
    メニュー展開後のRemoteへのFloat2つの同期は**手/指のIKを利用することで疑似的に同期しており、EXparameterを使用しません。**  
    ※アイトラモード時は **[VRCFT](https://docs.vrcft.io/)** のparameterを利用します。

    非展開時はリング状のアクセサリーとして選択箇所に追従します。  

    - **【待機状態の固定位置の選択可能箇所】** 
        ```
        【バングルモード】
        　┗両手首

        【リングモード】
        　┗両人差し指

        【アイトラモード】
        　┗右目
        ```

- **【耳/尻尾関連】**  
    耳や尻尾をFloatingMenuやActionMenu(EXメニュー)から自由に操作します。  

    - **ActionMenu操作時のみ可能なこと**
        - 位置の固定(レイトジョイナーへの同期も対応)
        - 両手で操作することにより耳/尻尾の同時操作
        :::caution
        - 位置固定時、レイトジョイナーへの位置同期は3秒に1度行います。
        - EX Parameter圧縮の都合上、**ActionMenuによる耳/尻尾の同時操作時は同期速度が0.2sに減少します。**  
            (片方のみの操作時は通常通り0.1sで同期)
        :::

- **【Particle関連】**  
    けもみみや尻尾で触れ合った際にParticleを発生させます。  (**対象部位を操作中のみ有効**)  
    また、音符Particle(```MMM/Local/SoundVizParticle```)が有効の際は接触対象との距離により五線譜リングParticleのサイズが変動します。  
    五線譜リングParticleのサイズはもふもふ音の音量を表しています。  

    **MMM導入者同士**なら尻尾や耳同士の触れ合いでもParticleが発生します。  

    - **けもみみ…HeartParticle：💗**  
        反応箇所(Sender)：Head、Hand、Ear、Tail (※Ear/Tailは導入者同士のみ)  
        色：固定
    - **尻尾…FlowerParticle：🌸**  
        反応箇所(Sender)：上記同様  
        色：**UI色と連動**
    - **共通…音符/五線譜リングParticle：🎶**  
        反応箇所(Sender)：上記同様  
        色：固定  

- **【効果音関連】**  
    耳や尻尾で触れ合った際のもふもふ音を追加します。  
    もふもふ音は接触対象との距離により音量が変化します。  
    (もふもふ音の音量は五線譜リングParticleのサイズと比例しています。)  

    また、UI関連にも効果音を追加しています。

    MMMで再生する効果音は[**AvatarのAudioSource3つ制限**](/docs/Existing-Issue/manage-docs-versions/#アバターに含まれるAudioSourceの同時再生上限について)以内に収まるように制御しています。
　
- **【色変更機能】**  
    UI色やParticle関連の色を変更します。  
    parameter圧縮の都合上、この設定値は**耳/尻尾の操作を行っていない時のみ**Remoteへ同期されます。  
    ※ActionMenuにより**耳/尻尾の位置固定のみ**をしている場合は通常通り同期されます。

- **【アイトラ用調整機能】**  
    アイトラモード用に可動域調整値の変更/同期、LocalでのFloatingMenu位置/サイズ変更が可能です。

- **【Smoothing処理】**  
    Remoteからの見え方を綺麗にするために各種parameterにSmoothing処理を実装しています。

- **【Parameter圧縮機能】**  
    EX Parameter数を削減するため、Parameter圧縮を行っています。  
    いくつかのParameterの組み合わせや、操作状況に応じて同期方式を変更することでParameter圧縮を実現しています。

    具体的には、アイトラ可動域調整値/UI色/耳の同期、尻尾の同時操作(リアルタイム同期)には通常Float6つ(48bit)必要ですが、**Bool3つ+Float2つを組み合わせる事により19bitでFloat6つ分の同期を行っています。**  
    ※ただし**耳/尻尾の同時操作時の同期速度は0.2sに変化します。**(ActionMenuからの操作の場合、IK同期になるため通常時は0.1sで同期)  
    　これは、0.1sで耳の位置同期→0.1sで尻尾の位置同期を繰り返しているためです。