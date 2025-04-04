---
sidebar_position: 1
---

# 改変の手引き  
----
### 【Prefab構成について】  
MMMの5つのPrefabは、以下のVariant関係として作成されています。  
アバターに合わせた変更を加えたい際は```01_MMM_○○○_(アバター名)```を変更し、Prefab Overrideを行えば**Variant(子)の全Prefabに適用されます。**  
```
01_MMM_Base
　┗01_MMM_○○○_(アバター名)
　　┗02_MMM_SuperLite_○○○
　　　┗03_MMM_EyeModeOnly_2bit_○○○
　　　　┗04_MMM_EyeModeOnly_0bit_○○○
　　┗05_MMM_ActionMenuOnly_○○○
```

### 【初期値設定可能なParameterについて】
アップロード状態での各パラメータ変更はMA Parametersから行ってください。
<details>
<summary>**parameter詳細**</summary>

- **[MMM/Local/ChangeColor]**
        - UI/パーティクル色のベース色変更の値です。
        - 初期設定はアバターに応じて異なります。初期設定は0.1です。
- **[MMM/Local/ChangeColor_Lightness]**  
        - UI/パーティクル色の明度変更の値です
        - 初期設定はアバターに応じて異なります。初期設定は0.55です。
- **[MMM/Sync/FluffyTouchAudio_ON]**
        - 耳/尻尾で触れた際の音の設定です。
        - 初期設定はONです。
- **[MMM/Local/Self_FluffyTouchAudio]**
        - 耳/尻尾で触れた際の音をLocalで聞こえるようにするかの設定です。
        - 初期設定はONです。
- **[MMM/Local/SoundVizParticle]**
        - 音符/五線譜Particleを表示するかどうかの設定です。  
        この設定は**アップロード時のみ有効**です。
        - 初期設定はONです。
- **[MMM/Local/EyeMode_SubMenu_SetHoldTime]**
        - アイトラ使用時のモード切替時に何秒選択し続けたら切り替わるかの時間設定です。
        - 初期設定は1です。
- **[MMM/Local/EyeMovementRange_Multiplvalue]**
        - アイトラ使用時の可動範囲の調整倍率です。
        - 初期設定は0.5です。
- **[MMM/Local/EyeMenu_Resize]**
        - Localのアイメニューのサイズです。
        - 初期設定は0.5です。
- **[MMM/Local/EyeMenu_Redepth]**
        - Localのアイメニューの奥行の調整です。
        - 初期設定は0.5です。
- **[MMM/Local/EyeMenu_Reposition_X]**
        - Localのアイメニューの表示位置調整のX軸の値です。
        - 初期設定は0です。
- **[MMM/Local/EyeMenu_Reposition_Y]**
        - Localのアイメニューの表示位置調整のY軸の値です。
        - 初期設定は0です。
</details>

### 【フローティングメニューの色変更について】
フローティングメニューの色は通常版/Lite/ActionMenuOnlyのみActionMenuから変更可能です。  
上記以外では```MMM/Local/ChangeColor```の値を変更することで色を変えられます。  

Particleについて詳しい方なら各Particle設定のColor over Lifetimeに好みの色を設定することで更に綺麗にすることが可能です。  
(色変えを簡単にするために表現力を落としています)  
**※この設定を行った場合、ActionMenuからの色変更を行わないでください。**

### 【Particleのtextureを変更したい】  
Project欄の```MofuMofuMotion/System/Material```内の以下Material Textureを変更してください。  
- **【Particle_Default】**  
        Idle時のParticle等です。(Trailのみを使用しているため変更は非推奨です。)
- **【Particle_Ring】**  
        メニュー展開時等のリング状のParticleです。
- **【Particle_EyeMovementRange】**  
        アイトラ可動域調整値時に表示されるUIです。
- **【Particle_Triangle】**  
        FloatingMenuにタッチしたときに舞い散るParticleです。  
        4つのtextureが結合しており、4枚のtextureがランダムに表示されます。  
        ┗例：花と花びらのtextureに変更
- **【FluffyEffect】**  
        尻尾でもふもふした際のParticleです。(花)
- **【HeartEffect】**  
        耳でもふもふした際のParticleです。(ハート)
- **【MMM_Icon_Kemomimi】**  
        FloatingMenuのSubMenuにある、けもみみアイコンです。
- **【MMM_Icon_Tail】**  
        FloatingMenuのSubMenuにある、尻尾アイコンです。
- **【MusicalNoteEffect】**  
        もふもふ音有効時に耳/尻尾でもふもふした際に現れる音符Particleです。
- **【StaffNotationCircle】**  
        もふもふ音有効時に耳/尻尾でもふもふした際に現れる五線譜Particleです。

### 【耳/尻尾のBoneの初期状態の角度(Rotation)を変更している/キメラアバターの場合】
Project欄の下記Animationを```TransformのRotation```や```Pass```が一致するように書き換えてください。  
```
MofuMofuMotion
┗System
　┗AvatarAnimation
　　┗【各アバター名】
　　　┗KemoMimiMotion_【アバター名】
　　　　┗KemoMimiMotion_Base_【アバター名】
　　　┗TailMotion_【アバター名】
　　　　┗TailMotion_Base_【アバター名】
　　　┗ResetPosition_CtrlReset_1_【アバター名】
```
### 【初期対応以外のアバター対応について】
:::caution
**MMMの改変にはアバター改変、Animation作成の基礎知識が必要になります。**
:::
:::info
MMMは2D BlendTreeの操作をFloatingMenuを利用して手やアイトラで動かせるようにするギミックです。  
そのため、下記設定方法を応用すると耳/尻尾以外にも、**翼や触手等特殊なもの**も動かせるようになります。
:::
対応外アバターに対応させる場合は下記の手順を行ってください。  

**① Project欄の```MofuMofuMotion/Prefab/__MMM_Custom/01_MMM_Custom```Prefabをアバターに導入**  

**② 以下のMA Bone Proxyに耳/尻尾のboneを設定してください。(一時的に耳/尻尾の[**Contact**](/docs/ModificationGuide/#メニュー位置等の調整方法)を有効化し、その位置を目安にしてください。)**  
  分からない場合、設定済みのPrefabを参考にしてください。  
  耳の場合はEnd boneの一個下、尻尾は先端から少し下辺りを設定することが多いです。
  
        ```
        MofuMofuMotion～
        ┗Target
        　┗BoneProxy
        　　┗Target_Ear_L◀
        　　┗Target_Ear_R◀
        　　┗Target_Tail◀
        ```
**③ [**[メニュー位置等の調整方法]**](/docs/ModificationGuide/#メニュー位置等の調整方法) を参考に各位置を調整**  
        調整箇所は下記です。  
        ```
        【メニュー位置調整】
        　・リングモード 位置/サイズ
        　・バングルモード 位置/サイズ
        　・リング/バングルモードメニュー展開 位置/サイズ
        　・アイトラモード 位置/サイズ

        【Contact位置調整】
        　※指先以外のSenderは基本変更不要
        　・左右人差し指 Receiver
        　　┗指先位置調整 Sender
        　・左右手首 Receiver
        　・右目(アイトラ用) Receiver
        ```
**④ ```MofuMofuMotion/System/AvatarAnimation/__MMM_Custom```の各Animationを編集してください。**  
        **※アバターのRootからのパスになるように設定してください。(表情Animation作成時と同様)**  
        まとめて変更したい場合は、**一時的に**上記フォルダ内の```MofuMofuMotion_Controller_Custom_FX```をアバターControllerに割り当ててAnimationタブで編集すると楽です。  
        (編集終了後に割り当てを解除してください。)
        <details>
        <summary>**各Animationの説明**</summary>

        ```ResetPosition_CtrlReset_1``` …   耳/尻尾の動きのリセット用(**※既に設定してあるキーフレーム(AAP)を消さないでください**)  
        　┗```KemoMimiMotion_Base```、```TailMotion_Base```のキーフレームをコピーして貼り付けてください。

        **【/KemoMimiMotion】**  
        ```KemoMimiMotion_Base``` … 通常時の耳の形です。  
        ```KemoMimiMotion_Stand``` … 正面を向いている時の耳の形です。  
        ```KemoMimiMotion_Flattened``` … リラックスしている時の耳の形です。  
        ```KemoMimiMotion_Fear``` … 怖がっている時の耳の形です。(耳ペタ)  
        ```KemoMimiMotion_Left``` … 左を向いている時の耳の形です。   
        　┗```KemoMimiMotion_Flattened```+```KemoMimiMotion_Stand```(対象の耳を少しだけ外側を向くように修正)  
        ```KemoMimiMotion_Right``` … 右を向いている時の耳の形です。  
        　┗```KemoMimiMotion_Flattened```+```KemoMimiMotion_Stand```(対象の耳を少しだけ外側を向くように修正)  

        **【/TailMotion】**  
        ```TailMotion_Base``` … 通常時の尻尾の形です。  
        ```TailMotion_Up``` … 尻尾が立っている時の形です。  
        ```TailMotion_Down``` … 尻尾が垂れ下がり、股下入っている時の形です。(怖がっている時)  
        ```TailMotion_LeftUp``` … 尻尾が左上の時の形です。(尻尾の長い子なら抱き枕の様に作成可)  
        ```TailMotion_Left``` … 尻尾が左側の時の形です。(尻尾の長い子なら隣にいる人抱きしめるように作成可)  
        ```TailMotion_LeftDown``` … 尻尾が左下の時の形です。(左右にブンブン振っている時)  
        ```TailMotion_RightUp``` … 尻尾が右上の時の形です。(尻尾の長い子なら抱き枕の様に作成可)  
        ```TailMotion_Right``` …   尻尾が右側の時の形です。(尻尾の長い子なら隣にいる人抱きしめるように作成可)  
        ```TailMotion_RightDown``` … 尻尾が右下の時の形です。(左右にブンブン振っている時)  
        
        </details>
:::caution
- 尻尾等を動かすAnimationを製作する場合は**アバターのRootを基準**として製作してください。   
:::
**⑤ その他設定**  
- UI/パーティクル色等の初期値を変更したい場合はMMMのPrefabの```MA Parameters```から設定してください。  
- FloatingMenuのサブメニューアイコンを変更したい場合  
        - ```MofuMofuMotion/System/Material```内の```MMM_Icon_Kemomimi```か```MMM_Icon_Tail```を複製&名称変更  
        - 下記の変更したい方の```ParticleSystemのRenderer```に上記で作成したMaterialを割り当て  
                ```
                01_MMM_Custom
                　┗Main
                　　┗MenuSystem
                　　　┗MMM_Menu_Center
                　　　　┗Menu_Circle
                　　　　　┗SubMenu
                　　　　　　┗SubMenu_Kemomimi
                　　　　　　　┗Icon_Kemomimi◀
                　　　　　　┗SubMenu_Tail
                　　　　　　　┗Icon_Tail◀
                ```
**⑥ アバターに割り当てたカスタムMMMを選択し、InspectorからPrefabのOverrideを行ってください**  
　※```01_MMM_Base```を更新しないこと！  
　Overrideが完了すると```__MMM_Custom```内の全Prefabに変更が適用されます。

**✨🎉以上で対応外アバターへの対応完了です！🎉✨**  

<details>
<summary>**⚠️複数のカスタムMMMを作成したい場合**</summary>
:::danger
**BlendtreeやUnityの仕様へのある程度の理解が必要です。**   
※通常版対応方法のみの説明です。
:::
① ```MofuMofuMotion/System/AvatarAnimation/__MMM_Custom```を```Ctrl+D```で複製してください。  
② 複製したフォルダ内の全てのファイルの名称を変更してください。(例: MofuMofuMotion_Controller_FX_Custom**2**)  
③ 複製したフォルダ内のFXやBlendTreeのAnimationを手動で再割り当てしてください。(FX内のBlendtreeも同様)  
　※Blendtreeは複製しても**Blendtree内のAnimation等の参照が更新されない**為。  
④ アバターに```Project欄のMofuMofuMotion/Prefab/01_MMM_Base```Prefabを導入  
⑤ 01_MMM_BaseのRootにある空のMA Merge Animatorに上記で作成したMofuMofuMotion_Controller_○○_FXを割り当ててください。 
⑥ 後は初期対応以外のアバター対応と同様の設定を行えば対応完了です。  

</details>

### 【メニュー位置等の調整方法】
<details>
<summary>**メニュー位置等の調整方法**</summary>

- **【メニュー位置/サイズ変更】**  
    下記にある各Targetの位置を調整してください。  
    各Targetには**EditorOnly設定のメニューの大きさや位置が分かるモデル**を追加しているのでそちらを参考に位置調整してください。  
    ```
    MofuMofuMotion～
    ┗Target
    　┗Target_LowerArm
    　　┗Idle_Position◀　…バングルモード時の待機状態位置/サイズ変更
    　┗Target_IndexProximal
    　　┗Ring_Idle_Position◀　…リングモード時の待機状態位置/サイズ変更
    　┗Target_Menu_Position
    　　┗Hand_Menu_Position◀　…バングル/リングモード時のメニュー出現位置/サイズ変更
    　┗Target_HeadMenu_Position
    　　┗RightEye_Menu_Position◀　アイトラモード時のメニュー出現位置/サイズ変更
    ```
    :::info
        **バングル/リングモードの位置調整時、X軸は反転することにご注意ください。**  
        その際は各メニュー位置設定の親オブジェクトにある```VRC Parent Constraint```の```Position Offset```を設定してください。  

        - **【設定方法】**  
        ① ```VRC Parent Constraint```のIs Activeをオフ  
        ② ```Constraint Settings```のLockを解除  
        ③ Sourceの```Position Offset```を設定  
        ④ ①,②を再度オンにする  
    :::
    - RightEye_Menu_PositionはViewPointによって大きく見え方が変わるため、細かい調整が必要になるかと思われます。  
        **VR内で確認し、全体が視界に映るよう位置/サイズ調整してください。**  
    - Localで細かい位置調整は行えるため、見た目を優先して設定しても大丈夫です。
    :::info
    位置確認用のモデルは```EditorOnly_DisplayPositionをDisable```にすれば非表示にできます。
    :::

- **【Sender】**  
    下記にあるTargetから位置調整してください。(人差し指の指先の位置)
    ```
    MofuMofuMotion～
    ┗Target
    　┗BoneProxy
    　　┗Target_IndexDistal_L
    　　　┗IndexDistal_L_End◀
    　　┗Target_IndexDistal_R
    　　　┗IndexDistal_R_End◀
    　┗Target_IndexDistal_End(ここからSenderの位置確認が可能)
    ```

- **【Contact】**  
    ギミック起動/終了時のトリガーとなる個所です。  
    下記の各Contact Receiverから位置調整してください。  
    ```
    MofuMofuMotion～
    　┗PB_AD
    　　┗Rx_RightEye◀
    　　┗Rx_Hand_L◀
    　　┗Rx_Hand_R◀
    　　┗Rx_Finger_L◀
    　　┗Rx_Finger_R◀
    ```

- **【Audio】**  
    UIの効果音及び耳/尻尾で触れた際の音の設定です。  
    下記にあるAudioSource、及びVRC Spatial Audio Sourceの設定を変更してください。  
    VolumeはAnimatorで管理しているため、**変更する際はVRC Special Audio SourceのGainを変更**してください  
    ```
    MofuMofuMotion～
    　┗Sound
    ```
</details>

### 【音符Particleの色変更】
Project欄の```MofuMofuMotion/System/Material```にある、```MusicalNoteEffect```、```StaffNotationCircle```の色を変更してください  
※このMaterialはActionMenuの色変更の影響は受けません。