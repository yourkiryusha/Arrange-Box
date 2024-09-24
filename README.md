# Задание

## Нужно реализовать классический контрол ArrangeBox. Обычно он представляет собой два поля, расположенных на одном горизонтальном уровне, и позволяет выбрать несколько значений из списка

Приблизительный пример можно увидеть тут: https://primevue.org/picklist/ 

Функциональные требования:
* левое поле контрола определяет список возможных значений, правое поле - список выбранных значений;
* возможность выбора и сортировки значений пользователем;
* пользовательский поиск;

Технические требования:
* писать код необходимо без использования фреймворков;
* в html-коде определён только тег-контейнер, куда контрол будет добавлен после загрузки страницы;
* в глобальной области видимости должен остаться только конструктор контрола и объект, соответствующий экземпляру контрола;
* реализовать программные возможности:
    * изменение списка возможных значений,
    * установка списка выбранных значений,
    * получение текущего значения контрола,
    * сброс значения к начальному состоянию;

Тестирование:
* разместить на странице дополнительные элементы управления, позволяющие протестировать программные возможности контрола;
* кнопка для создания на текущей странице новых экземпляров контролов с рандомными начальными значениям.

# Задание со "звёздочкой"
Реализовать простейший web-сервер на чистом Python, обеспечивающий работу формы с ArrangeBox-ом

# Формирование файла конфигурации для расширения ESLint

1. Установить ESLint в ваш проект с помощью команды:
npm install eslint -D
2. Установить расширение ESLint в IDE VS Code и перезапустить проект для отображения ошибок:
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

# Запуск web-сервера на Python

1. Открыть командную строку в корневой директории проекта и запустить скрипт с помощью команды:
python server.py
2. Открыть браузер и перейти по адресу для доступа к содержимому сервера:
http://localhost:8080/

# Описание работы с препроцессором стилей SASS

1. Установить расширение Live Sass Compiler в IDE VS Code
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass
2. Нажать на "Watch Sass" в строке состояния в правом нижнем углу для live компиляции файлов из .scss в .css

# Бандлинг проекта

1. Установить Webpack в ваш проект с помощью команды:
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin -D
2. Сформировать директорию /dist для бандлинга проекта с помощью команды:
npx webpack --config webpack.config.js
3. Запустить сервер с помощью команды:
npx webpack serve
4. Открыть браузер и перейти по адресу для доступа к содержимому сервера:
http://localhost:8080/

# Настройка OpenServer в качестве локального сервера для текущего проекта

1. Установить OpenServer:
https://ospanel.io/download/
Ознакомиться с документацией можно по следующей ссылке:
https://github.com/OSPanel/OpenServerPanel/wiki/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F
2. В панели управления(ПУ) перейти в раздел Модули->PHP->PHP-8.3->Включить
3. Перейти в директорию \home
Путь до необходимой директории может выглядеть следующим образом:
C:\OSPanel\home
4. Создать директорию с названием нашего домена, например, arrange-box.local
5. Клонировать проект с arrangeBox в текущую директорию; URL-адрес на репозиторий, использующий протокол SSH:
git@gitlab-ce.int.alarislabs.com:js_interns_4th_flow/arrangebox.git
6. Перезапустить OpenServer
7. Перейти по адресу для доступа к содержимому сервера:
https://arrange-box.local/