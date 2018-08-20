dfgdfg.
dfgf
# инструкция по git и linux командам
## работа с Linux
* чтобы зайти в vim -> vim README.md
 
   

## работа в "vim"
 * основной режим - просмотр содержимого файла и выбор других режимов.
 * режим редактирования - открывается с помощью клавиши i, позволяет вносить изменения в файл
## работа с "git"
* **"git add README.md"** - добавляет содержимое рабочей директории в индекс (staging area) для последующего коммита.
* **"git commit"** - берёт все данные, добавленные в индекс с помощью "git add", и сохраняет их слепок во внутренней базе данных, а затем сдвигает указатель текущей ветки на этот слепок.
* **"git push"** - используется для установления связи с удалённым репозиторием, вычисления локальных изменений отсутствующих в нём, и собственно их передачи в вышеупомянутый репозиторий. Этой команде нужно право на запись в репозиторий, поэтому она использует аутентификацию.
* **"git status"** - показывает состояния файлов в рабочей директории и индексе: какие файлы изменены, но не добавлены в индекс; какие ожидают коммита в индексе. Вдобавок к этому выводятся подсказки о том, как изменить состояние файлов.
* **"mkdir xxx"** - создаёт каталог "xxx".
* **"cd xxx"** - открывает каталог "xxx".
* **"cd .."** - переносит на каталог выше.
* **"git pull"** - закачивает все данные с удалённого репозитория.
* **"git check out -b new-branch-name" - создаёт новую ветку.

## работа с "Markdown"
**MarckDown** - язык разметки, с помощью которого можно выделять определённые части текста с помощью нескольких видов выделений.
### Заголовки
* "#xxx" - самый крупный заголовок.
* "##xxx"
* "###xxx"
* "####xxx"
* "#####xxx"
* "######xxx" - самый маленький заголовок.
### Выделения текста
* " **xxx ** " \ " __xxx __ " - делает текст **жирным**.
### Непронумерованный список
* '* пункт 1'
* '* пункт 2'
    * "* подпункт 1"
    * "* подпункт 2"



