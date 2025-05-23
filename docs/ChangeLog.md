---
sidebar_position: 4
---

# 更新履歴

<details>
<summary>**カスタムMMM製作者の方へ(改変を残したままアップデートする方法)**</summary>

    :::danger
        **backupを取ってからお試しください。**  
        ※大規模な破壊的変更を伴う更新の場合は各バージョンの更新履歴に記載した指示に従ってください。
    :::
    **最新バージョンをインポート時、設定画面から下記のチェックを外してインポートしてください。**   
    ```
    MofuMofuMotion
    　┗Prefab
    　　┗__MMM_Base
    　    ┗__MMM_Custom◀ (カスタマイズしたフォルダ)
    　┗System
    　　┗AvatarAnimation
    　　　┗__MMM_Custom◀ (カスタマイズしたフォルダ)
    ``` 
</details>

### [v1.2.8] '25.5.16 
    - **【対応アバター追加】** 
        - [真央-mao-](https://booth.pm/ja/items/6846646)  
            ┗尻尾のPBのCollidersのHipsとChestを削除してください。
        - [リナ-Lina-](https://booth.pm/ja/items/4973055)
        - [ミュリシア-Mulicia-](https://booth.pm/ja/items/3302156)
    - **【その他修正】**
        - Triturbo製のFTアドオンにてけもみみに追加されたシェイプキーの影響で動きがおかしくなっていた問題に一旦の対応を行いました。  
            引き続き問題がある場合はご報告ください。
        - キプフェル対応にて帽子を被っている状態のけもみみも動くようになりました。(パーティクル等の起点は変わらない為ご注意ください。)
        - Prefabフォルダ内の「_EMOLab」にアンダーバーがついてない問題を修正しました。
        - 「MofuMofuMotion Basic」で使用する耳/尻尾のAnimation/Blendtree/Textureを「MofuMofuMotion」のものを使用するように変更しました。  
            **※この変更によるconflictは発生しませんが、プロジェクト軽量化の為にBasicを使用されている方はクリーンインストールを推奨します。**

### [v1.2.7] '25.4.26 
    - **【対応アバター追加】** 
        - [しらつめ](https://booth.pm/ja/items/6831821)
        <details>
        <summary>**【WDオフ環境でけも耳シェイプキーを変更している場合の注意点(しらつめ)】**</summary>

            けも耳のシェイプキー、```ear_marume```, ```ear_small```, ```ear_big```以外を書き換えるため、**WDオフ環境で初期値を変更している場合**はAnimationの修正が必要になります。  
            修正する際は下記Animationに登録されているシェイプキーの数値に変更したシェイプキーの値を設定してください。
            ```
            MofuMofuMotion
            　┗System
            　　┗AvatarAnimation
            　　　┗_HARUNOPUPU
            　　　　┗Shiratsume
            　　　　　┣ResetPosition_CtrlReset_1_Shiratsume ◀
            　　　　　┗KemoMimiMotion_Shiratsume
            　　　　　　┗KemoMimiMotion_Base_Shiratsume ◀
            ```
        </details>
    - **【その他修正】**
        - 極稀に発生するVRC上でのみ一部パラメーターが書き換わってしまうバグの対策として、「MMM/Local/Var_Num」の自動リネーム  
            (MA Parameters)をオンにしました。  
            - この問題は一時的な回避手段の為、今後変更される可能性が有ります。
        - MofuMofuMotion BasicのAnimatorにレイヤー名を追加  
        - triturbo製フェイシャルトラッキングでアイトラモードが使用できなかった問題を修正。  
            VRCFTパラメーターのPrefixに起因する問題の為、個別対応という形になります。    
            **今後も動かないFTアドオンがありましたらご連絡ください。**

### [v1.2.6] '25.4.24 
    - **【対応アバター追加】** 
        - [Lasyusha〈ラシューシャ〉](https://booth.pm/ja/items/4825073)
        - [フレーナ](https://booth.pm/ja/items/6144723)
        - [ソフィナ-Sophina-](https://booth.pm/ja/items/4044305)
        - [Chalo](https://booth.pm/ja/items/5201759)

### [v1.2.5] '25.4.21 
    - **【対応アバター追加】** 
        - [ミント](https://booth.pm/ja/items/2258111)
        - [ネメシス](https://booth.pm/ja/items/5986971)  
            ┗尻尾PBの```TailCollider_2```、```TailCollider_2(1)```を消してください。

### [v1.2.4] '25.4.19 
    - **【対応アバター追加】** 
        - [灰島](https://booth.pm/ja/items/4701501)

### [v1.2.3] '25.4.18 
    - **【対応アバター追加】** 
        - [Sio](https://booth.pm/ja/items/5650156)
        - [ミミベル](https://booth.pm/ja/items/5846683)
        - [デルタフレア](https://booth.pm/ja/items/4906631)  
            ┗けもみみの代わりに```Hair_sideL1-1, Hair_sideR1-1```のPBの```Is Animated```をオンにしてください。

### [v1.2.2] '25.4.16  
    - **【対応アバター追加】** ※通常版/Basic版共通
        - [ラスク](https://booth.pm/ja/items/2559783)

### [v1.2.1] '25.4.12
    :::caution 
    ファイル名の変更を伴う更新です。  
    **本バージョンはクリーンインストール推奨です。**  
    ※conflict箇所は「_MMM_Custom」の名称変更のみの為、気にしない方はそのまま上書きしても大丈夫です。
    ::: 
    - **【対応アバター追加】** 
        - [アズキ](https://booth.pm/ja/items/6654988) 
        - [ニャスカ！](https://booth.pm/ja/items/3162874)  
    - **【その他更新】**
        - カリン対応版の耳の動きを改善しました。  
            シェイプキーを一部利用するように変更しました。
        - v1.2.0で一時的に名称を変更していた **「_MMM_Custom」** を元の名前に変更しました。  
            **この更新により、上書アップデート時にconflictが発生します。**  
    - **【MofuMofuMotion Basicを公開】**
        - MMMから耳/尻尾を動かす機能以外を全て排除した安価版です。  
            このバージョンではパラメータ圧縮を行っていない為、**EXParameterを32bit消費します。**  
            その代わりに**耳/尻尾を同時に操作する際は最速同期する**ため、他の機能は不要で耳/尻尾のみを動かしたい際はこちらをご利用ください。

### [v1.2.0] '25.4.7  
    :::caution 
    ファイル名の変更等破壊的変更を伴う更新です。  
    **本バージョンは必ずクリーンインストールしてください。**
    :::  
    <details>
        <summary>**カスタムMMM製作者の方へ(改変を残したままアップデートする方法)**</summary>
            :::danger
                **backupを取ってからお試しください。**  
            :::
            ① project内のMofuMofuMotion内の以下のフォルダのみを残し、それ以外のフォルダを削除してください。
            ```
            MofuMofuMotion
            　┗Prefab
            　　┗__MMM_Base
                ┗__MMM_Custom (カスタマイズしたフォルダ)
            　┗System
            　　┗AvatarAnimation
            　　　┗__MMM_Custom (カスタマイズしたフォルダ)
            ```
            ② v1.2.0をインストールしてください。

            ③ 「03_MMM_EyeModeOnly_2bit_Custom」のMA Menu Installerの「prefab開発者向け設定」からインストールされるEXメニューを「03_MMM_EXMenu」に変更してください。
    </details>
    - **【対応アバター追加】**
        - [萌](https://booth.pm/ja/items/4667400)  
        - [ビスキュイ・ラングドシャ](https://booth.pm/ja/items/5377257)  
        - [カルキア](https://booth.pm/ja/items/2930485)  
    - **【仕様変更】**
        - ActionMenuにFloatingMenuの有効化や場所の設定を行う、 **「FloatingMenu control」** を追加しました。  
            この修正に伴い、**既存ActionMenuの構成/名称を一部変更しました。**  
    - **【その他更新】**  
        - v1.1.1に含まれていた不要なデータを削除しました。   
            <details>
            <summary>**v1.1.1をインストールされた方へ**</summary>
                
            　　お手数ですが、Assets内に「アバター」という見覚えのないフォルダがありましたら削除して頂けますと助かります。  
            　　(個人的な改変で使用しているExParameter等が同梱されていました。)  
            </details>
### [v1.1.1] '25.4.5   
    - **【対応アバター追加】**  
        - [ミルク Re](https://komado.booth.pm/items/2953391)
### [v1.1.0] '25.4.4   
    - **【Prefab追加】**
        - 改変用Prefab **「__MMM_Custom」** を追加しました。
    - **【仕様変更】**
        - ```EditorOnly_DisplayPosition(位置調整用表示)```を通常状態で非表示になるよう変更しました。  
            **「__MMM_Custom」** のみ通常状態で表示されます。
    - **【ドキュメント更新】**
        - [**改変の手引き**](/docs/ModificationGuide)等を新規Prefabに合わせて更新しました。
    - **【その他更新】**
        - フォルダ内に含まれていたサムネの一部説明文が現行の仕様に合っていなかったため修正しました。
### [v1.0.0] '25.4.2
    :::caution 
    大幅な破壊的変更を伴う更新です。  
    **本バージョンは必ずクリーンインストールしてください。**
    :::
    - **【新機能】**
        - UI/パーティクル色変更に「明度変更」機能を追加。(ActionMenuにメニューも追加)
            - 明度変更のParameterを優先的に同期するようにし、代わりにアイトラ可動域調整値がアイトラモード時&メニュー展開時にのみ同期されるように変更。
            - この更新に伴い、同期方式の一部変更、Animatior/DBTの修正、一部Prefabの再作成、フォルダ構成の一部変更を行いました。
    - **【仕様変更】**
        - 【MMM_EyeModeOnly_0bit】のみ、FloatingMenu非展開状態では待機状態のリングが非表示になるようにしました。(視界の邪魔になるのを防止するため)
        - アイトラモード時にUI音の音量を1→0.3に変更しました。  
        - UI音のGain、Volumeを20%ほど下げました。  
        - 誤発動を防ぐため、FloatingMenu起動時に1秒間の待機時間を設定しました。
        - リングモード時にFloatingMenuの展開時、人差し指を基準として展開を行うように変更しました。  
        - 新機能追加に伴い、Lite版を廃止。Prefab数は5つになりました。
        - 新機能追加に伴い、**アイトラモード時&メニュー展開時に変更したUI色**が同期されないように変更。  
            この変更にともない、バングル/リングモード時のメニュー展開時の挙動と統一されました。
        - SubMenuの表示を```liltoon```→```Particles/Standard Unlit```を使用したParticleに変更しました。  
            バグのために一時的に変更していましたが改善したため、初期仕様に戻した形になります。  
        - 各アバターのUI色変更、及びアイトラモード時の位置調整を行いました。  
    - **【バグ修正】**
        - 特定条件下でフリーズしてしまう問題を修正
        - 特定条件下でFloatingMenuの展開が同期されない(5秒ほど遅れる)問題を修正
        - 特定条件下でContactが反応しなくなる件修正
    - **【新規アバター対応】**
        - PLUSONE-真冬(Mafuyu)
        - PLUSONE-ASH
        - IKUSA-瑞希(Mizuki)
        - あまとうさぎ-カリン(Karin)
        - ポンデロニウム研究所-しなの(Shinano)
    - **【その他更新】**
        - 【Assetフォルダ構成を変更】
            - アバター個別対応関連のフォルダを一部「ショップ名→アバター名」というように纏めました。  

<details>
<summary>**v1.0.0より前の更新履歴**</summary>

### [v0.5.2] '25.3.19
- 【ActionMenuにアイコンを追加】
- 【リングモードを追加】
    - この更新に伴い人差し指にContactを追加。
    - この更新に伴い既存のハンドモードを「バングルモード」と呼称。
- EditorOnlyの位置調整用のオブジェクトのConstraint設定が誤っていたため修正。
- ChangeColorにSmoothing処理を実装。Remoteでより滑らかに色が変わるようになりました。みんなで遊ぼう！
- フォルダ名/Animation名を一部変更。
- MMM Active用Contactに触れた後1sのクールタイムを追加
    - この更新により連続でオンオフしてしまう現象が発生しづらくなります。
:::caution 
本バージョンはクリーンインストール推奨です。
:::  
</details>