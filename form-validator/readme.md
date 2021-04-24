# memo

<img src="https://github.com/endw0901/javascript/blob/main/form-validator/img.png" width="40%">

- script_before_refactoring : リファクタリング前のシンプルな DOM での javascript

## JS クラス操作

- success/error クラス別に枠線の css を用意しておき、js でダイナミックにクラス追加して表示を分ける
- error クラスが追加されたとき（エラー発生時）にエラーメッセージを表示する(css で visibility:visible)

## 正規表現

- email validation 正規表現：
  https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

## for ループ

- 複数入力項目 => 配列引数渡し＆forEach ループ

## 文字列操作

- 変数と文字列の構文

```
`${input.id} is required`)
```

- 1 文字目だけ大文字 + 残りの文字 slice

```
 input.id.charAt(0).toUpperCase() + input.id.slice(1);
```
