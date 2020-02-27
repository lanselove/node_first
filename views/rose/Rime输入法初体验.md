## Rime基础配置

### 1、小狼毫界面设置: "weasel.custom.yaml"
```yaml
  "style/color_scheme": lost_temple  #孤寺皮肤
  "style/horizontal": true  #候选横排
  "style/font_point": 14  #字体大小
  "style/display_tray_icon": false  #关闭托盘图标
```

https://www.ifanr.com/app/714177 — https://github.com/Astrian/appso-rime-skin
小狼毫也就是windows平台的Rime不支持边框圆角`"style/corner_radius": 6`


### 2、全局默认设置: "default.custom.yaml"
```yaml
  "schema_list":
    - {schema: luna_pinyin_simp}  #明月-简体
    - {schema: terra_pinyin}  #地球拼音
  "menu/page_size": 7  #候选个数
  "ascii_composer/good_old_caps_lock": true  #开启大写
  "ascii_composer/switch_key":
    Caps_Lock: clear  #清除输入
    Shift_L: commit_code  #提交输入
    Shift_R: commit_code  #提交输入
    Control_L: noop  #无操作
    Control_R: inline_ascii  #插入模式
  "switcher/hotkeys":
    - F4  #默认的"Ctrl + `"会与大部分软件的关键按键冲突，只留"F4"键即可
  "punctuator/half_shape":
    "!": {commit: "！"}
    "\"": {pair: ["“", "”"]}
    "#": "#"
    "$": "$"
    "%": "%"
    "&": "&"
    "'": {pair: ["‘", "’"]}
    "(": "（"
    ")": "）"
    "*": "*"
    "+": "+"
    ",": {commit: "，"}
    "-": "-"
    .: {commit: "。"}
    "/": ["/", "÷"]  #利用"/"快捷匹配自定义词组必须有候选
    ":": {commit: "："}
    ";": {commit: "；"}
    "<": "《"
    "=": "="
    ">": "》"
    "?": {commit: "？"}
    "@": "@"
    "[": "【"
    "\\": "、"
    "]": "】"
    "^": {commit: "……"}
    _: "——"
    "`": "·"
    "{": "{"
    "|": "|"
    "}": "}"
    "~": "~"
```

中文半角输入符号时候选太多，得按次空格才能提交选中的符号，所以需要全盘覆盖 punctuator/half_shape 的设定


### 3、输入方案设置: "luna_pinyin_simp.custom.yaml" (ps: 需要自己创建)
```yaml
patch:
  "switches/@0/reset": 1  #默认英文
  "translator/dictionary": luna_pinyin.extended  #扩展词库
  "recognizer/patterns/punct": "/([a-z]+)$"  #增强标点符号计算规则，以便通过"/"输入自定义词组
  "punctuator/symbols":  #自定义词组
    "/k": [甲, 乙, 丙, 丁, 戊, 己, 庚, 辛, 壬, 癸]
    "/emoji": [:), :(, ~_~]
    '/xz': [ 白羊座, 金牛座, 雙子座, 巨蟹座, 獅子座, 室女座, 天秤座, 天蠍座, 人馬座, 摩羯座, 寶瓶座, 雙魚座 ]
    "/yf": [Jan, Feb, Mar, Apr, May, June, July, Aug, Sept, Oct, Nov, Dec]
    "/h": ["https://www.", "https://", "http://"]
```

Rime词库增强
  - 搜狗整合词库 — https://github.com/Iorest/rime-dict
  - 现代汉语常用词表 — https://github.com/alswl/Rime (https://awesomeopensource.com/project/alswl/Rime)

自定义的 symbols 死活不生效，终于在这里(https://www.cnblogs.com/zlog/p/5389834.html)找到了关键所在，必须在 patterns 下设置 punct 才行

---

### 阅读资料
最新版 Rime 输入法使用 — https://jdhao.github.io/2019/02/18/rime_configuration_intro/
rime定制指南 — https://zhuanlan.zhihu.com/p/91129641
为什么用Rime — https://www.jianshu.com/p/cffc0ea094a7
我的 Rime — https://blog.dwx.io/my-rime/
Rime扼要科普 — https://clt6.com/post/the-best-chinese-input-method-squirrel/
