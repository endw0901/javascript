# memo

<img src="https://github.com/endw0901/javascript/blob/main/new-year-countdown/img/img.png" width="40%">

## css

- image に overlay をかける：body::after
- 背景に文字が薄く表示される

## javascript

- 1 秒ごと起動：

```
setInterval(updateCounddown, 1000);
```

### 日付

- 年：

```
new Date().getFullYear();
```

### 文字列操作

- 一桁のときゼロ埋め：

```
hours.innerHTML = h < 10 ? '0' + h : h;
```
