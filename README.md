Тестовое задание на вакансию разработчика HTML/CSS

Используемые методологии: БЭМ. Используется препроцессор Sass со сборкой на Gulp.
Работа со шрифтами вынесена в миксины, подключаются они в файле _base. В переменных живут списки используемые шрифтов, их начертаний и цвета состояний карточек (также возможно туда стоит вынести breakpoints и цвета текста).
На данный момент страница разбита на четыре блока (по сути на три) : _main, _product-card, _products.
JS и CSS минифицированны. Вероятно стоит использовать инструменты для сжатия картинок.
Изменения элементов при разных состояниях сделаны по-разному - изменения при выборе карточки сделанны через js, при наведении через миксин visually-hidden в css.
Для обрезания карточки использовался clip-path. Нужен фикс для IE11.
ТЗ реализованно не в полной мере: условие применения состояния при наведении после выбора карточки и повторного наведения не выполнено.(пока)
Искренне старалась делать семантично и доступно.