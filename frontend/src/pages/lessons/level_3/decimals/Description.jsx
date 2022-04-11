import DescAccent from '../../../../components/ui/description/DescAccent';
import DescrBody from '../../../../components/ui/description/DescrBody';
import ExampleTableMult from '../../../../components/lessons/description/ExampleTableMult';
import DescAccordion from '../../../../components/ui/description/DescAccordion';
import Grid from '@mui/material/Grid';

function Description() {
  return (
    <Grid
      item
      sx={{
        width: '100%',
      }}
    >
      <DescAccordion title='Введение'>
        <DescrBody>
          Числа состоят из цифр: 0, 1, 2, З, 4, 5, 6, 7, 8 и 9. Цифры подобны
          буквам, из которых мы составляем слова. 23 — это двузначное число,
          состоящее из цифр 2 и З. Положение цифры в числе определяет разряд,
          соответствующий этой цифре. Например, цифра 2 в числе 23 соответствует
          разряду десятков и обозначает 2 десятка, а цифра З — разряду единиц и
          обозначает З единицы. 435 — это трехзначное число. Цифра 4
          соответствует разряду сотен и обозна чает 4 сотни, или 400. Цифра З
          соответствует числу десятков и обозначает З десятка, или 30. Цифра 5
          соответствует числу единиц и обозначает 5 единиц, или просто 5. Когда
          мы записываем число, порядок, в котором в нем расположены цифры, имеет
          нема ловажное значение.
        </DescrBody>
        <DescrBody>
          Когда мы записываем цену, или число, соответствующее количеству денег,
          мы используем десятичную запятую, чтобы отделить доллары от центов.
          Например, 1,25 доллара обозначает 1 доллар и 25 сотых доллара (25
          центов). Первая цифра после Запятой обозначает десятые доллара (10
          монет по 1 0 центов составляют 1 доллар). Вторая цифра после запятой
          обозначает сотые доллара (100 центов составляют 1 доллар).
        </DescrBody>
        <DescrBody>
          Перемножение десятичных дробей* не более сложная операция, чем
          перемножение любых других чисел. Рассмотрим на примерах. Например:
        </DescrBody>
        <DescAccent>1,3 х 1,4 =</DescAccent>
        <DescrBody>
          Перемножение десятичных дробей* не более сложная операция, чем
          перемножение любых других чисел. Рассмотрим на примерах. Например:
        </DescrBody>
        <DescrBody>
          (1,3 — одна целая и три десятых; 1,4 — одна целая и четыре десятых.)
          Записываем пример как есть; однако не обращаем внимания на запятые:
        </DescrBody>
        <DescrBody>
          Хотя мы и записали 1,3 х 1,4, пример будем решать так, будто он
          выглядит следуюфим образом:
        </DescrBody>
        <DescAccent>13 х 14 =</DescAccent>
        <DescrBody>
          Забудьте про запятую и скажите про себя: «Тринадцать плюс четыре равно
          семнадцать... умножим на десять... сто семьдесят. Четырежды три —
          двенадать... плюс сто семьдесят... сто восемьдесят два». Решение
          примера выглядит так:
        </DescrBody>
        <DescAccent>1,3 х 1,4 = 182</DescAccent>
        <DescrBody>
          Однако нашим искомым произведением являлось 1,3 х 1,4, а мы пока
          вычислили только 13 х 14. Пример решен не до конца. Нам необходимо
          выяснить, где расположить десятичную запятую в полученном ответе.
          Чтобы это сделать, посмотрим на множители и отсчитаем количество цифр
          после запятой. Имеются две цифры после запятой: З в числе 1,3 и 4 в
          числе 1,4. Поскольку имеем в сумме две цифры после запятой в
          множителях, в ответе также должно быть две цифры после запятой.
          Отсчитываем две цифры с конца и ставим запятую между цифрами 1 и 8.
        </DescrBody>
        <DescAccent>1,3 х 1,4 = 1,82</DescAccent>
        <DescrBody>
          Простым способом проверки полученного ответа является оценка
          приближением. Это означает, что вместо того, чтобы использовать
          исходные числа (1,3 и 1,4), мы округлим их до 1 и 1,5 соответственно.
          Произведение 1 х 1,5 дает 1,5. Таким образом, искомый ответ должен
          находиться где-то между 1 и 2, а не, скажем, 20 или 200. Это дает нам
          понять, что мы правильно определили место десятичной запятой.
          Попробуем решить такой пример:
        </DescrBody>
        <DescAccent>9,6 х 97 =</DescAccent>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='100'
          numberLeft='9,6'
          numberRight='97'
          valueIntermediate=''
          hintMinusLeft='4'
          hintMinusRight='3'
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={false}
        />

        <DescAccent>96 - 3 = 93</DescAccent>
        <DescAccent>93 х 100 (опорное число) = 9300</DescAccent>
        <DescAccent>4 х 3 = 12</DescAccent>

        <DescAccent>9300 + 12 = 9312</DescAccent>
        <DescrBody>Промежуточное решение выглядит так:</DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='100'
          numberLeft='9,6'
          numberRight='97'
          valueIntermediate='9300'
          hintMinusLeft='4'
          hintMinusRight='3'
          valueToAdd=''
          valueToMinus='+12'
          valueResult='9312'
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={true}
        />

        <DescrBody>
          Где нам поставить десятичную запятую? Сколько всего цифр после запятой
          имеется в множителях примера? Одна. Столько же цифр после запятой
          должно быть и в ответе. Окончательный ответ
        </DescrBody>
        <DescAccent>9,6 х 97 = 931,2</DescAccent>
        <DescrBody>
          Для того чтобы определить, где поставить десятичную запятую, мы должны
          подсчитать общее количество цифр после запятой у обоих чисел, которые
          мы перемножаем. Не забудьте проследить, чтобы такое же число цифр
          после запятой было и в ответе. Можно дополнительно проверить ответ,
          умножив 10 (округленное значение числа 9,6 в сторону увеличения) на 90
          (округленное значение числа 97 в сторону уменьшения), что дает 900.
          Теперь мы знаем, что ответ должен быть где-то в районе.числа 900, а не
          9000 или 90.
        </DescrBody>
        <DescrBody>
          Если бы требовалось перемножить 9,6 и 9,7, мы получили бы в ответе
          93,12. Данный факт может помочь нам найти пути еще большего упрощения
          вычислений, которые иначе были бы не так очевидны. Мы скоро рассмотрим
          эти возможности
        </DescrBody>
        <DescrBody>
          Предположим, что вам надо было бы решить следующий пример:
        </DescrBody>
        <DescAccent>0,13 x 0,14 =</DescAccent>
        <DescrBody>Вспомним, что:</DescrBody>
        <DescAccent>13 х 14 = 182</DescAccent>
        <DescrBody>
          Где нам поставить запятую? Сколько всего цифр после запятой у обоих
          множителей? Четыре: цифры 1 и З в первом множителе и цифры 1 и 4 во
          втором. Стало быть, необходимо отсчитать четыре цифры в ответе,
          начиная с конца. Нам придется добавить одну цифру, поскольку у нас
          получился трехзначный ответ (182). Поэтому отсчитываем три цифры и
          добавляем 0. Наш ответ теперь выглядит следующим образом:
        </DescrBody>
        <DescAccent>0,13 x 0,14 =0,0182</DescAccent>
        <DescrBody>
          Нам также необходимо поставить 0 и перед запятой, поскольку перед ней
          всегда должна стоять хотя бы одна цифра. В нашем случае мы добавляем 0
          в качестве четвертой цифры после запятой, а также ставим 0 перед
          запятой.
        </DescrBody>
        <DescrBody>
          Рассмотрим еще один пример, чтобы закрепить усвоенное:
        </DescrBody>
        <DescAccent>0,014 x 1,4 =</DescAccent>
        <DescAccent>14 x 14 = 196</DescAccent>

        <DescrBody>
          Где должна стоять запятая? У множителей в сумме четыре цифры после
          запятой, а именно: 0, 1 и 4 — У первого множителя и 4 — у второго.
          Поэтому и в ответе после запятой должны стоять четыре цифры. Поскольку
          цифр в ответе всего три, мы добавляем 0 в качестве четвертой цифры
          после запятой. Ответ таков:
        </DescrBody>
        <DescAccent>0,014 x 1,4 = 0,0196</DescAccent>
        <DescrBody>
          Знание этого простого принципа поможет нам решить некоторые задачи,
          которые могут показаться трудными, если применить к ним изученный нами
          метод. После некоторой модификации условия задачи можно значительно
          упростить решение. Рассмотрим пример:
        </DescrBody>
        <DescAccent>8 х 68 =</DescAccent>
        <DescrBody>
          Какое опорное число нам использовать в данном случае? Можно было бы
          взять 10 в качестве опорного для множителя 8, но для 68 лучше взять
          100, поскольку эти числа ближе друг к другу. Может быть, попробовать
          50? Однако наш метод работает лучше, могда числа расположены недалеко
          друг от друга. В таком случае как нам решать задачу? А почему не
          написать 8,0 вместо 8?
        </DescrBody>

        <DescrBody>
          Между 8 и 8,0 нет никакой разницы. Первое число (8) означает, что мы
          имеем 8 единиц, а второе (8,0) — что у нас есть 8 единиц с точностью
          до одного десятичного знака. Однако этот знак, будучи нулевым, ничего
          ни прибавляет, ни убавляет от целой части (8). Итак, мы получили:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='100'
          numberLeft='8,0'
          numberRight='68'
          valueIntermediate=''
          hintMinusLeft='20'
          hintMinusRight='32'
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={false}
        />

        <DescrBody>Теперь задача решается легко. Вычитаем накрест:</DescrBody>
        <DescAccent>68 - 20 = 48</DescAccent>

        <DescrBody>
          Умножаем 48 на опорное число 100 и получаем 4800. Перемножим числа в
          кружках.
        </DescrBody>
        <DescAccent>20 х 32 = 640</DescAccent>
        <DescrBody>
          (Чтобы умножить на 20, умножаем сначала на 2, а затем на 10, поскольку
          2 х 10 = 20.) 4800 + 640 = 5440. Таким образом:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='100'
          numberLeft='8,0'
          numberRight='68'
          valueIntermediate='4800'
          hintMinusLeft='20'
          hintMinusRight='32'
          valueToAdd=''
          valueToMinus='+640'
          valueResult='5440'
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={true}
        />

        <DescrBody>
          Теперь необходимо правильно расположить десятичную запятую. Сколько
          цифр после запятой в множителях в условии задачи? Одна, тот нуль, что
          мы прибавили сами. Таким образом, мы отсчитываем одну цифру справа в
          ответе.
        </DescrBody>
        <DescAccent>8,0 х 68 = 544,0</DescAccent>
        <DescrBody>
          Решение примеров не составило труда, не так ли? Применив немного
          воображения, вы сможете использовать данные подходы для решения любой
          задачи на умножение.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
