---
sidebar_position: 1
---

# 導入方法と基本的な使い方  

----
### 導入方法
本ギミックは**WDオン/オフ両対応**です。  

①VCCに[[**ModularAvatar**](https://modular-avatar.nadena.dev/ja)][[**liltoon**](https://lilxyzw.github.io/lilToon/)]の最新版を導入  
②```MofuMofuMotion/Prefab/各アバターフォルダ内```にある任意のPrefabをアバター直下に置いてください。  
③耳や尻尾で使用しているPBの```Gravity```を0、```Is Animated```をONにしてください。  
④完了！
:::info
- 位置確認用のモデルは```EditorOnly_DisplayPositionをDisable```にすれば非表示にできます。
- **【β版テスター向け情報】**  
    アイトラ未所持の方のアイトラッキングのテスト用に**EyerackingTest Prefab**を用意しています。  
    Prefabをアバター内に入れるとActionMenuにEyerackingTestという項目が増えますので、そこからアイトラ時の動きのテストを行えます。  
    ※こちらはあくまで確認用です。このツールでは座標系のRemapを行っていない為、実際のアイトラの動きはしませんが参考程度にお使いください。  
:::
:::tip
- 対応外/自作/キメラアバターに使用したい方、デフォルトとは異なる耳/尻尾を使用している方は[**【上級者向け】改変の手引き**](/docs/ModificationGuide)を参照してください。
- アイトラ利用者も最初は通常版を導入し、各パラメータの調整値を把握してから低bit版を導入することをお勧めします。
:::
:::caution
- 本ギミックは耳/尻尾の操作時以外はAnimationを操作再生していない為他ギミックと共存が可能です。  
    他にも耳や尻尾を動かすギミックを入れている場合、**MMM(MofuMofuMotion)** がアバター配下の一番下側に来るように調整してください。  
    ※他ギミックで耳や尻尾のBoneのPositionを弄っている場合、干渉を回避出来ませんのでご注意ください。
- **シェイプキー等によって耳の形状が変形している場合、動かした際の見た目が損なわれる場合があります。**
:::

----
### 各Prefabの解説
<details>
<summary>**各Prefabの簡単な説明**</summary>
- **01_MMM**
    - **24bit**
    - 通常版です。FloatingMenuでの操作とActionMenuでの操作が可能です。
    - デスクトップモードではActionMenuでの操作のみとなります。
    <br/>
- **02_MMM_SuperLite**
    - **5bit**
    - ActionMenuからの耳/尻尾操作、UIカラー変更機能、アイトラ可動域調整機能、もふもふ音設定を外した軽量版です。  
        耳/尻尾はFloatingMenuでの操作のみ可能となります。  
        (ActionメニューはLocalのアイトラモード設定を使用可能)  
    - 各調整値は一度試して値を覚えていればMA Parametersから初期値として設定可能です。(アップロード時のみ)  
    - **デスクトップモードは非対応となります。**
    <br/>
- **03_MMM_EyeModeOnly_2bit**
    - **2bit**
    - **SuperLite**をアイトラモード限定にしたバージョンです。
    <br/>
- **04_MMM_EyeModeOnly_0bit**
    - **0bit**
    - **04_MMM_EyeModeOnly_2bit**から、更にオンオフ機能、モード切替の保存機能を外したバージョンです。
    - このPrefabのみメニュー非展開状態では待機状態のリングが表示されなくなっています。(常時表示されると視界の邪魔になるため)
    - このPrefabのみデスクトップモードでもメニュー展開も行えますが操作はできません。
    <br/>
- **05_MMM_ActionMenuOnly**
    - **20bit**
    - **通常版**からFloatingMenu機能を外し、ActionMenuからの操作のみにしたバージョンです。
    - デスクトップ/VR対応です。
    - UIカラー変更は尻尾を触れ合った際のFlowerParticleに反映されます。
    <br/>
</details>

<details>
<summary>**各Prefabの機能対応表**</summary>

**【記号解説】**  
〇：VRC内で設定可能  
△：アップロード時のみ設定可能  
**【用語】**  
AM：ActionMenu  
FM：FloatingMenu  

|**機能**|**通常版**　　　|**SuperLite**|**EyeModeOnly_2bit**|**EyeModeOnly_0bit**|**ActionMenuOnly**|
|:---|:---:|:---:|:---:|:---:|:---:|  
|最大消費パラメーター数|24bit|5bit|2bit|0bit|20bit|  
|待機状態選択可能箇所|5箇所<br/>・右目<br/>・両腕<br/>・両人差し指|5箇所<br/>・右目<br/>・両腕<br/>・両人差し指|1箇所<br/>・右目|1箇所<br/>・右目|0箇所|  
|Motion Reset(固定解除)<br/>※AM操作時のみ|◯||||◯|  
|けもみみ操作|◯||||◯|  
|尻尾操作|◯||||◯|  
|**【色変更】**<br/>ベース色変更(FM/パーティクル)|◯|△|△|△|◯|  
|**【色変更】**<br/>明度変更(FM/パーティクル)|◯|△|△|△|◯|  
|もふもふ音制御(Global)|◯|△|△|△|△|  
|もふもふ音制御(Local)|◯|◯|◯|◯|◯|  
|**【ビルド時のみ】**<br/>音符パーティクル制御|△|△|△|△|△|  
|**【アイトラ時のみ】**<br/>アイトラ可動域<br/>調整|◯|△|△|△||  
|**【アイトラ時のみ】**<br/>サブメニュー押下<br/>時間調整|◯|◯|◯|△||  
|**【アイトラ時のみ】 【Localのみ】**<br/>FMサイズ変更|〇|〇|〇|〇||  
|**【アイトラ時のみ】 【Localのみ】**<br/>FM位置変更|〇|〇|〇|〇||  
|**【アイトラ時のみ】 【Localのみ】**<br/>FM奥行き変更|〇|〇|〇|〇||  
</details>
:::tip
**【低Bit版のparameter初期値の変更方法について】**  
[**初期値設定可能なparameterについて**](/docs/ModificationGuide/#初期値設定可能なparameterについて)を参照してください。
:::
----
### 基本的な使い方
:::note 
- 各モードそれぞれ対応した手/目でしか操作が行えません。 (※ActionMenu操作は除く) 
- FloatingMenuは自身のみ操作可能です。  
- **アバター読み込みから5秒間は効果音が再生されません。**  
    ※初期同期時に音がうるさくならないようにするための処理です。
:::

<details>
<summary>**バングルモード(手首)の使い方**</summary>

※通常版/Lite/SuperLite限定  

**【バングルモード(右手)】**   
**[起動/終了]**  
```右手RockNRoll + 左手Gun```  
左手人差し指で右手首のContactに一瞬触れてください。  

**[FloatingMenu展開]**  
```左手RockNRoll + 右手Point (1秒間維持)```  
左手は起動時のみ。右手はPointにしている間FloatingMenuが展開されます。  
中央のリング内に右手人差し指を置くことで対応したモードの動作が行えます。  

**[モード切替]**  
右手人差し指でFloatingMenu右上の小さい方のアイコンを押下してください。  


**【バングルモード(左手)】**  
それぞれ **バングルモード(右手)** と逆のハンドジェスチャー/Contact位置になります。  
:::caution
本ギミックはIKを利用し同期を行うことでEXParameterの削減を行っています。  
そのため激しい動きや回線によっては同期ずれが発生することがあります。予めご了承ください。  
※特に **バングル/リングモードでメニューを展開中(ワールド固定する際)に手を動かしているとメニュー位置の同期ズレが発生します。**  
　メニュー展開中はなるべく手を動かさないようにしてください。  
:::
</details>
<details>
<summary>**リングモード(人差し指)の使い方**</summary>

※通常版/Lite/SuperLite限定  

**【リングモード(右指)】**  
**[起動/終了]**  
```右手RockNRoll + 左手Gun```  
左手人差し指で右手人差し指のContactに一瞬触れてください。  

他の操作はバングルモード(右手)と同様です。  

**【リングモード(左指)】**  
それぞれ **リングモード(右手)** と逆のハンドジェスチャー/Contactになります。  
:::caution
本ギミックはIKを利用し同期を行うことでEXParameterの削減を行っています。  
そのため激しい動きや回線によっては同期ずれが発生することがあります。予めご了承ください。  
※特に **バングル/リングモードでメニューを展開中(ワールド固定する際)に手を動かしているとメニュー位置の同期ズレが発生します。**  
　メニュー展開中はなるべく手を動かさないようにしてください。  
:::
</details>
<details>
<summary>**アイトラモード(右目)の使い方**</summary>

※ActionMenuOnly版以外

**【アイトラモード】**  
**[起動/終了]**  
```右手Gun + 左手RockNRoll```  
右手人差し指で右目横のContactに一瞬触れてください。  

**[メニュー展開]**  
```右手Point + 左手RockNRoll (1秒間維持)```  
左手は起動時のみ。右手はPointにしている間メニューが展開されます。  
メニュー展開後は自動でアイトラでの操作が有効となります。  

**[モード切替]**  
メニュー右上の小さい方のアイコンを1秒以上(設定変更可)見つめると切り替えられます。  
</details>
<details>
<summary>**ActionMenu(EXメニュー)の説明**</summary>

![ActionMenu_Icons](/img/homepage/ActionMenu_Icons.png)
- **[Motion Reset]**  
    けもみみと尻尾を動かしている際に位置をリセットします。
- **[KemoMimiMotion]/[TailMimiMotion]**  
    けもみみと尻尾をActionMenuから操作します。(FloatingMenu展開中は使用できません。)
- **[Change Color]**  
    フローティングメニュー/FlowerParticleの基本色/明度変更を行います。
    - **[Change Base Color]**  
        基本色を変更します。
    - **[Change Lightness]**  
        明度を変更します。
- **[FluffyTouchAudio]**  
もふもふ音の設定です。
    - **[FluffyTouchAudio Active]**  
        耳や尻尾で触った際の音を有効化します。  
        この音声はParticle同様、操作中の部位が何かに触れている際のみ有効になります。
    - **[Enable Self Sound]**  
        自身でも音を聞こえるようにするかの設定です。
- **[[Local] EyeMenu Adjustment]**  
    ※Localでのみアイトラモード時の見え方を変更する設定項目です。
     - **[Eye Movement Range]**  
        アイトラの可動域の調整を行います。  
        可動域を調整する際は専用オーバーレイが表示されます。  
        アイトラのParameterに合わせて、外円が1.0/内側が0.7のラインを表しています。  
        サブメニューアイコンにPointerを合わせられるように可動域を調整してください。  
        **※Remoteには設定した倍率のみが同期されます。**
    - **[SubMenu Switching Change HoldTime]**  
        アイトラ使用時のモード切替時に何秒選択し続けたら切り替わるかの時間設定です。  
        0%で1F、100%で1秒で切り替わります。
    - **[EyeMenu Resize]**  
        アイトラモード時のFloatingMenuのサイズを変更します。
    - **[EyeMenu Reposition]**  
        アイトラモード時のFloatingMenuの表示位置を変更します。
    - **[EyeMenu Redepth]**  
        アイトラモード時のFloatingMenuの奥行きを変更します。
:::tip
**【アイトラ可動域の調整について】**  
アイトラモードでメニュー展開後、ActionMenuから[Eye Movement Range]を選択し  
精一杯右上(SubMenuの位置)を向いた状態が丁度SubMenuの位置と重なる様に範囲調整します。  

**【アイトラモード時の位置調整(Local)について】**  
アイトラモード時のFloatingMenuのPointerは視線の先に動くのではなく、VRCFTから送られるOSCデータを元に動いています。  
つまり、**どこにFloatingMenuを動かしてもPointerの動き方は変わりません。**  
上記を念頭に置いて調整してください。
:::
</details>
:::tip
**【ジェスチャーの覚え方のコツ】**  
・```RockNRoll```…コントロールモード  
・```Gun```…選択(モード切替、オン/オフの切り替え)  
・```Point```…実行/メニュー展開  
:::