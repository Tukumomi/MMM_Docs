---
sidebar_position: 1
---

# 改変の手引き
----
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


### 【耳/尻尾のBoneの初期状態の角度(Rotation)を変更している/キメラアバターの場合】
Project欄の下記Animationを```TransformのRotation```や```Pass```が一致するように書き換えてください。  
```
MofuMofuMotion
┗AvatarAnimation
　┗【各アバター名】
　　┗KemoMimiMotion_【アバター名】
　　　┗KemoMimiMotion_Base_【アバター名】
　　┗TailMotion_【アバター名】
　　　┗TailMotion_Base_【アバター名】
　　┗ResetPosition_CtrlReset_1_【アバター名】
```
### 【初期対応以外のアバター対応について】
**※通常版のみの解説となります。**  
対応外アバターに対応させる場合は下記の手順を行ってください。  

- Project欄の```MofuMofuMotion/Prefab/01_MMM_Base```Prefabを使用  
- [**[メニュー位置等の調整方法]**](/docs/ModificationGuide/#メニュー位置等の調整方法) を参考に各位置を調整  
- ```Target/BoneProxy```の対象箇所に耳/尻尾のBoneを指定  
- project欄の```MofuMofuMotion/AvatarAnimation/【各アバター名】```のいずれかを複製  
各ファイルの名称変更後に中身のBlendtree/Animator内のAnimation再割り当てを行ってください。  
**※Blendtreeは複製しても依存関係の自動修正が行われない為**
- アバターのRootに上記で作成したAnimatorを割り当て、耳/尻尾/その他の動きのAnimationを更新してください。
- HierarchyのMMMのRootにある空の```MA Merge Animator```に上記で作成した```MofuMofuMotion_Controller_○○_FX```を割り当ててください。
:::caution
- 尻尾等を動かすAnimationを製作する場合は**アバターのRoot**を基準として製作してください。  
- **Blendtree**への多少の理解が必要です。  
- 他アバターのフォルダごと複製してもBlendtree内の**Animation等の参照が更新されません。**  
手動で再割り当てしてください。(FX内のBlendtreeも同様)
:::
:::info
MMMはActionMenuの```Two Axis操作```をFloatingMenuを利用して手やアイトラで動かせるようにするギミックです。  
そのため、上記設定方法を応用すると耳/尻尾以外にも、**翼や触手等特殊なもの**も動かせるようになります。
:::

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