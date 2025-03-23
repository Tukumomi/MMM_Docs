---
sidebar_position: 1
---

# 基本仕様

# 各機能解説
- **【FloatingMenu関連】**  
    Particle等で作成したFloatingMenuを展開し、ワールド固定するギミックです。  
    メニュー展開後はContactを使用し、RemoteへFloat2つの値を同期し各種操作を行います。  
    メニュー展開後のRemoteへのFloat2つの同期は**手や指のIKを利用することで疑似的に同期しており、EXparameterを使用しません。**  
    ※アイトラモード時は **[VRCFT](https://docs.vrcft.io/)** のparameterを利用します。

    非展開時はリング状のアクセサリーとして選択箇所に追従します。  

    アイドル状態の固定位置の選択可能箇所は下記です。
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
        EX parameterの圧縮を行っているため、ActionMenuによる耳/尻尾の同時操作時は同期速度が0.2s(片方のみの操作時は0.1s)に減少します。
        :::

- **【Particle関連】**  
    けもみみや尻尾で触れ合った際にParticleを発生させます。  (**各部位を操作中のみ有効**)  
    また、音符Particle(```MMM/Local/SoundVizParticle```)が有効の際は接触対象との距離により五線譜リングParticleのサイズが変動します。  
    五線譜リングParticleのサイズはもふもふ音の音量を表しています。  

    **MMM導入者同士**なら尻尾や耳同士の触れ合いでもParticleが発生します。  

    - **けもみみ…HeartParticle(色固定)：💗**  
        反応箇所(Sender)：Head、Hand、Ear、Tail  
    - **尻尾…FlowerParticle(UI色と連動)：🌸**  
        反応箇所(Sender)：上記同様  
    - **共通…音符/五線譜リングParticle(色固定)：🎶**  
        反応箇所(Sender)：上記同様  
        ※Ear/Tailは導入者同士のみ

- **効果音関連**  
    耳や尻尾で触れ合った際のもふもふ音を追加します。もふもふ音は接触対象との距離により音量が変化します。  
    また、UI関連にも効果音を追加しています。
　
- **【カラー変更機能】**  
    UIカラーやParticle関連の色を変更します。  
    parameter圧縮の都合上、この設定値は**耳/尻尾の操作を行っていない時のみ**Remoteへ同期されます。  
    ※ActionMenuにより**耳/尻尾の位置固定のみ**をしている場合は通常通り同期されます。

- **【Smoothing処理】**  
    Remoteからの見え方を綺麗にするために各種parameterにSmoothing処理を実装しています。

- **【その他アイトラ用調整機能】**
    アイトラモード用に可動域調整値の同期、LocalでのFloatingMenu位置/サイズ変更が可能です。
    