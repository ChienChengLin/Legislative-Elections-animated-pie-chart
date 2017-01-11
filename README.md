# 歷屆政黨立委席次

[網頁連結點此](https://chienchenglin.github.io/Legislative-Elections-animated-pie-chart/)

## 呈現目標
台灣立法委員選舉至今總共已經九屆，第九屆也在2016年與正副總統選舉共同完成，除了多數民眾所關注的中國國民黨與民主進步黨，
其實尚有一些規模較小之黨派正在逐年崛起，抑或是萎縮。本次作業之呈現目標，為將歷屆之各政黨立委選舉席次以視覺化圖形呈現，
讓使用者能夠清楚了解每一屆各政黨所獲席次之比例，進一步比較席次的變化。


## 使用技術
- [d3.js](https://d3js.org/)
- [jquery](https://jquery.com/)
- [bootstrap](http://getbootstrap.com/)


## 設計流程
### 資料來源
- [維基百科-中華民國立法委員選舉](https://zh.wikipedia.org/wiki/2016年中華民國立法委員選舉)
- 以1989年到2016年共九屆之立法委員選舉各政黨席次，作為本次視覺化作業的資料(在selection/selection.js當中)

### d3.js & jquery進行資料視覺化
- 以一屆為單位，將各政黨席次比例用Pie Chart來呈現
- Slice的顏色也同時顯現政黨的代表色，讓結果更直觀
- 點擊Pie Chart上的Slice，在中心以Liquid Fill Gauge呈現實際的席次數

## 測試瀏覽器
- Safari
- Google Chrome
