import DescAccent from '../../../../components/ui/description/DescAccent';
import DescrBody from '../../../../components/ui/description/DescrBody';
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
          Возвести число в квадрат — значит умножить его на самого себя. Хороший
          способ представить себе это состоит в следующем. Если у вас во дворе
          нужно выложить плиткой квадратный участок и необходимо узнать, сколько
          для этого потребуется материала, то достаточно посчитать, сколько
          плитки пойдет на одну сторону, а затем умножить это число на самого
          себя. Если сторону участка занимают З плитки, тогда 9 плиток составят
          всю площадь участка (З х З = 9). Если сторона составлена из 5•плиток,
          то весь квадрат состоит из 25 плиток (5 х 5 25).
        </DescrBody>
        <DescrBody>
          5 в квадрате означает 5 х 5. Мы записываем это как 5<sup>2</sup> .
          Маленькая 2, записанная после 5, означает, Что речь идет о
          перемножении двух пятерок. А что Означает маленькая З, записанная
          после 5? Она Означает, что надо перемножить подряд три пятерки. Это
          общепринятое математическое обозначение, и каждому человеку положено
          его знать. Вот несколько примеров:
        </DescrBody>
        <DescAccent>
          5<sup>3</sup>= 5 х 5 х 5
        </DescAccent>
        <DescAccent>
          4<sup>5</sup>= 4 х 4 х 4 х 4 х 4
        </DescAccent>
        <DescAccent>
          7<sup>3</sup>= 7 х 7 х 7
        </DescAccent>
        <DescrBody>
          6<sup>2</sup> (произносится как «шесть в квадрате») = 36, по. тому что
          6 х 6 = 36. Мы говорим, что 36 — это квадрат числа 6.
        </DescrBody>
        <DescAccent>
          13<sup>2</sup> = 13 х 13 = 169
        </DescAccent>
        <DescrBody>
          Мы легко можем вычислять подобные примеры, используя изученный выше
          метод перемножения чисел больше 10 и меньше 20. В частности, метод
          умножения с использованием кружков особенно легко применять в
          отношении квадратов чисел, поскольку он лучше всего работает, когда
          перемножаемые числа являются близкими по значению. Добавлю, что все
          способы возведения в квадрат, представленные в настоящей главе,
          используют общий принцип перемножения чисел, рассмотренный нами ранее.
        </DescrBody>
        <DescAccent>Возведение в квадрат чисел, оканчивающихся на 5</DescAccent>
        <DescrBody>
          Метод возведения в квадрат чисел, которые оканчиваются на 5,
          использует ту же формулу, что и общий метод перемножения, освоенный
          нами ранее.
        </DescrBody>
        <DescrBody>
          Если нам необходимо найти квадрат числа, оканчивающегося на 5, отделим
          прежде всего последнюю цифру 5 от находящейся перед ней цифры (ИЛИ
          цифр). Прибавьте 1 к числу, состоящему из отделенной цифры (цифр), а
          затем перемножьте результаТ сложения и число. Припишите 25 справа к
          результату умножения, и вы получите окончательный ответ! Например:
        </DescrBody>
        <DescAccent>
          35<sup>2</sup> =
        </DescAccent>
        <DescrBody>
          Отделим 5 от цифр впереди нее. В данном случае речь идет всего лишь о
          цифре З, стоящей перед 5. прибавим 1 к З и получим в результате 4.
        </DescrBody>
        <DescAccent>3 + 1 = 4</DescAccent>
        <DescrBody>Перемножим числа:</DescrBody>
        <DescAccent>3 х 4 = 12</DescAccent>
        <DescrBody>
          Припишем 25 (5 в квадрате) справа к 12. Полученное число и есть
          искомый ответ: 1225.
        </DescrBody>
        <DescAccent>
          35<sup>2</sup> = 1225
        </DescAccent>
        <DescrBody>Попробуем решить еще один пример:</DescrBody>
        <DescAccent>
          75<sup>2</sup> (или 75 в квадрате) =
        </DescAccent>
        <DescrBody>
          Отделим 7 от 5. Прибавим 1 к 7 и получим 8.8 умножить на 8 равно 56.
          Это первая часть нашего ответа. Припишем 25 справа и получим искомый
          ответ: 5625.
        </DescrBody>
        <DescAccent>
          75<sup>2</sup> = 5625
        </DescAccent>
        <DescrBody>
          Сочетание этого метода с изученными ранее позволит получить еще более
          впечатляющие результаты. Рассмотрим это на примере:
        </DescrBody>
        <DescAccent>
          135<sup>2</sup> =
        </DescAccent>
        <DescrBody>
          Отделим 5 от 13. Прибавим 1 к 13 и получим 14. Произведение 13 х 14
          дает 182 (используем метод, изученный в главе 2). Припишем 25 справа к
          182 и Получим ответ: 18225. Все эти расчеты можно легко произвести в
          уме.
        </DescrBody>
        <DescAccent>
          135<sup>2</sup> = 18225
        </DescAccent>
        <DescrBody>Еще один пример:</DescrBody>
        <DescAccent>
          965<sup>2</sup> =
        </DescAccent>
        <DescrBody>
          96 плюс 1 дает 97. Умножим 96 на 97 и получим 9312. Теперь припишем 25
          справа к результату и получим ответ: 931225
        </DescrBody>
        <DescAccent>
          965<sup>2</sup> = 931225
        </DescAccent>
        <DescrBody>
          Данный метод применим также к числам с десятичной запятой. Например, в
          случае 6,5 х 6,5 мы просто «забываем» о запятой и находим ей место
          лишь в самом конце вычислений.
        </DescrBody>
        <DescAccent>
          6,5<sup>2</sup> =
        </DescAccent>
        <DescAccent>
          65<sup>2</sup> = 4225
        </DescAccent>
        <DescrBody>
          В сумме у множителей в данном примере имеютсЯ две цифры после запятой,
          если квадрат записать в виде произведения двух одинаковых чисел, и в
          ответе после запятой также должно быть две цифры. Поэтому искомый
          ответ равен 42,25.
        </DescrBody>
        <DescAccent>
          6,5<sup>2</sup> = 42,25
        </DescAccent>
        <DescrBody>
          Тот же метод работает и для произведения 6,5 х 65, которое
          соответственно будет равно 422,5.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
