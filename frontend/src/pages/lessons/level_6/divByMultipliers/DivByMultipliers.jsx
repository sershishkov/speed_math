import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTimer } from 'use-timer';
import { genExample__DivByMultipliers } from '../../../../utils/generateExample';
import {
  update__statistic,
  reset as resetStatistic,
} from '../../../../features/statistics/statisticSlice';

import Description1 from './Description1';

import Grid from '@mui/material/Grid';
import Header from '../../../../components/lessons/header/Header';
import Settings from '../../../../components/lessons/settings/Settings';
import ExerciseDivisionSimple from '../../../../components/lessons/exercises/ExerciseDivisionSimple';
import ReportDivisionWithRest from '../../../../components/lessons/reports/ReportDivisionWithRest';

const initialStateUserAnswers = {
  userDigit_1: '',
  userDigit_2: '',
  userDigit_3: '',
  userDigit_4: '',
  userDigit_5: '',
  userDigit_6: '',
  userDigit_7: '',
  userAnswerRem: '',

  tempUserDigit_1: '',
  tempUserDigit_2: '',
  tempUserDigit_3: '',
  tempUserDigit_4: '',
  tempUserDigit_5: '',
  tempUserDigit_6: '',
  tempUserDigit_7: '',
  tempAnswerRem_1: '',
  tempAnswerRem_2: '',

  dividentHintTemp2: '',
  dividentHintTemp3: '',
  dividentHintTemp4: '',
  dividentHintTemp5: '',
  dividentHintTemp6: '',
  dividentHintTemp7: '',

  dividentHint2: '',
  dividentHint3: '',
  dividentHint4: '',
  dividentHint5: '',
  dividentHint6: '',
  dividentHint7: '',
};

function DivByMultipliers() {
  const showMiddleRow = true;
  // const [min, set__min] = useState(100);
  const [max, set__max] = useState(9999999);

  const [examplesNumber, set__examplesNumber] = useState(10);
  const [example, set__example] = useState(null);
  const [arrOfDivident, set__arrOfDivident] = useState([]);
  const [userAnswers, set__userAnswers] = useState(initialStateUserAnswers);

  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);
  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState([]);

  const { user } = useSelector((state) => state.auth);
  const { time, start, pause, reset } = useTimer();

  const dispatch = useDispatch();
  const {
    userDigit_1,
    userDigit_2,
    userDigit_3,
    userDigit_4,
    userDigit_5,
    userDigit_6,
    userDigit_7,
    userAnswerRem,
    tempUserDigit_1,
    tempUserDigit_2,
    tempUserDigit_3,
    tempUserDigit_4,
    tempUserDigit_5,
    tempUserDigit_6,
    tempUserDigit_7,
    tempAnswerRem_1,
    tempAnswerRem_2,

    dividentHintTemp2,
    dividentHintTemp3,
    dividentHintTemp4,
    dividentHintTemp5,
    dividentHintTemp6,
    dividentHintTemp7,

    dividentHint2,
    dividentHint3,
    dividentHint4,
    dividentHint5,
    dividentHint6,
    dividentHint7,
  } = userAnswers;

  const onChangeUserAnswers = (e) => {
    set__userAnswers({
      ...userAnswers,
      [e.target.name]: e.target.value,
    });
  };

  const onStart = () => {
    set__displayExample(true);
    set__displaySettings(false);
    nextTask();
    start();
  };

  const onStopExercise = () => {
    set__displayExample(false);
    set__displaySettings(true);
    reset();
    set__displayStatistics(false);
    set_numberOf_Task(0);
    set__resultsList([]);
    set__userAnswers(initialStateUserAnswers);
    set__arrOfDivident([]);
  };

  const nextTask = () => {
    const newExample = new genExample__DivByMultipliers(max);
    const newArrOfDivident = newExample.divident.toString().split('');
    set__example(newExample);
    set__arrOfDivident(newArrOfDivident);
    set_numberOf_Task((prevState) => prevState + 1);
  };
  const onContinue = () => {
    nextTask();

    dispatch(resetStatistic());
    reset();

    set__displayExample(false);
    set__displayStatistics(false);
    set_numberOf_Task(0);
    set__displaySettings(true);
    set__resultsList([]);
    set__userAnswers(initialStateUserAnswers);
    set__arrOfDivident([]);
  };

  const onAnswer = () => {
    const userResult = Number(
      `${userDigit_1}${userDigit_2}${userDigit_3}${userDigit_4}${userDigit_5}${userDigit_6}${userDigit_7}`
    );
    const doneResult = +userResult - +example.resultRight === 0;
    const doneReminder = +userAnswerRem - +example.reminderOfDivision === 0;

    const obj = {
      example: `${example.divident}/${example.divider_Total}`,
      userResult,
      userAnswerRem,
      resultRight: example.resultRight,
      reminderOfDivision: example.reminderOfDivision,
      doneExcercise: doneResult && doneReminder,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswers(initialStateUserAnswers);
    set__arrOfDivident([]);
    if (numberOf_Task < examplesNumber) {
      nextTask();
      if (showMiddleRow) {
        const tempUserDigit_1__input =
          document.getElementById('tempUserDigit_1');
        tempUserDigit_1__input.focus();
      } else {
        const userDigit_1_Input = document.getElementById('userDigit_1');

        userDigit_1_Input.focus();
      }
    } else {
      set__displayExample(false);
      set__displayStatistics(true);
      pause();
    }
  };
  const onSaveResults = () => {
    let rightTasks = 0;
    resultsList.forEach((item) => {
      if (item.doneExcercise) {
        rightTasks++;
      }
    });

    const statisticData = {
      totalTasks: resultsList.length,
      rightTasks,
      wrongTasks: resultsList.length - rightTasks,
      totalTime: time,
    };
    dispatch(update__statistic(statisticData));
    dispatch(resetStatistic());
    reset();

    set__displayExample(false);
    set__displayStatistics(false);
    set_numberOf_Task(0);
    set__displaySettings(true);
    set__resultsList([]);
    set__userAnswers(initialStateUserAnswers);
    set__arrOfDivident([]);
  };

  return (
    <Grid container direction='column'>
      <Header
        hrefPrev='/lessons/level_6/division-by-single-number'
        hrefNext='/lessons/level_6/division-by-multipliers'
        time={time}
        title='Деление в столбик по множителям'
      />
      <Description1 />
      <Settings
        onChangeExamplesNumber={(e) => set__examplesNumber(e.target.value)}
        // onChangeMin={(e) => set__min(e.target.value)}
        onChangeMax={(e) => set__max(e.target.value)}
        onStart={onStart}
        examplesNumber={examplesNumber}
        // min={min}
        max={max}
        displaySettings={displaySettings}
        displayMin={false}
        displayMax={false}
        displayShowHints={false}
        // showHints={showHints}
        // onChangeShowHints={(e) => set__showHints(e.target.checked)}
      />
      <ExerciseDivisionSimple
        displayExample={displayExample}
        onStopExercise={onStopExercise}
        example={example}
        onAnswer={onAnswer}
        numberOf_Task={numberOf_Task}
        arrOfDivident={arrOfDivident}
        onChangeUserAnswers={onChangeUserAnswers}
        tempUserDigit_1={tempUserDigit_1}
        tempUserDigit_2={tempUserDigit_2}
        tempUserDigit_3={tempUserDigit_3}
        tempUserDigit_4={tempUserDigit_4}
        tempUserDigit_5={tempUserDigit_5}
        tempUserDigit_6={tempUserDigit_6}
        tempUserDigit_7={tempUserDigit_7}
        tempAnswerRem_1={tempAnswerRem_1}
        tempAnswerRem_2={tempAnswerRem_2}
        userAnswerRem={userAnswerRem}
        userDigit_1={userDigit_1}
        userDigit_2={userDigit_2}
        userDigit_3={userDigit_3}
        userDigit_4={userDigit_4}
        userDigit_5={userDigit_5}
        userDigit_6={userDigit_6}
        userDigit_7={userDigit_7}
        dividentHintTemp2={dividentHintTemp2}
        dividentHintTemp3={dividentHintTemp3}
        dividentHintTemp4={dividentHintTemp4}
        dividentHintTemp5={dividentHintTemp5}
        dividentHintTemp6={dividentHintTemp6}
        dividentHintTemp7={dividentHintTemp7}
        dividentHint2={dividentHint2}
        dividentHint3={dividentHint3}
        dividentHint4={dividentHint4}
        dividentHint5={dividentHint5}
        dividentHint6={dividentHint6}
        dividentHint7={dividentHint7}
        showMiddleRow={showMiddleRow}
      />
      <ReportDivisionWithRest
        displayStatistics={displayStatistics}
        resultsList={resultsList}
        user={user}
        onSaveResults={onSaveResults}
        onContinue={onContinue}
      />
    </Grid>
  );
}

export default DivByMultipliers;
