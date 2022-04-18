import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTimer } from 'use-timer';
import { generateExample__MultBy } from '../../../../utils/generateExample';
import {
  update__statistic,
  reset as resetStatistic,
} from '../../../../features/statistics/statisticSlice';

import { operators } from '../../../../utils/constants';
import Header from '../../../../components/lessons/header/Header';
import Settings from '../../../../components/lessons/settings/Settings';
import ExerciseMultBy from '../../../../components/lessons/exercises/ExerciseMultBy';
import ReportOnlyResult from '../../../../components/lessons/reports/ReportOnlyResult';
import Description1 from './Description1';
import Grid from '@mui/material/Grid';
const initialStateUserAnswers = {
  userDigit_1: '',
  userDigit_2: '',
  userDigit_3: '',
  userDigit_4: '',
  userDigit_5: '',
  userDigit_6: '',
  userDigit_7: '',
};

function MultiplyBy9() {
  const numberRight = 9;
  const [min, set__min] = useState(10000);
  const [max, set__max] = useState(99999);
  const [examplesNumber, set__examplesNumber] = useState(10);
  const [example, set__example] = useState(null);
  const [userAnswers, set__userAnswers] = useState(initialStateUserAnswers);
  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);
  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState([]);

  const {
    userDigit_1,
    userDigit_2,
    userDigit_3,
    userDigit_4,
    userDigit_5,
    userDigit_6,
    userDigit_7,
  } = userAnswers;

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { time, start, pause, reset } = useTimer();

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
  };

  const nextTask = () => {
    set__example(new generateExample__MultBy(min, max, numberRight));
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
  };

  const onAnswer = () => {
    const userAnswer = Number(
      `${userDigit_1}${userDigit_2}${userDigit_3}${userDigit_4}${userDigit_5}${userDigit_6}${userDigit_7}`
    );
    const obj = {
      example: `${example.numberLeft} ${operators[2]} ${example.numberRight}`,
      userAnswer,
      rightAnswer: example.resultMult,
      done: +userAnswer === +example.resultMult,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswers(initialStateUserAnswers);

    if (numberOf_Task < examplesNumber) {
      nextTask();
      const userAnswerInput = document.getElementById('userDigit_7');
      userAnswerInput.focus();
    } else {
      set__displayExample(false);
      set__displayStatistics(true);
      pause();
    }
  };
  const onSaveResults = () => {
    let rightTasks = 0;
    resultsList.forEach((item) => {
      if (item.done) {
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
  };

  return (
    <Grid container direction='column'>
      <Header
        hrefPrev='/lessons/level_7/myltiply-by-5'
        hrefNext='/lessons/level_7/myltiply-by-8'
        time={time}
        title='Умножение на 9'
      />
      <Description1 />
      <Settings
        onChangeExamplesNumber={(e) => set__examplesNumber(e.target.value)}
        onChangeMin={(e) => set__min(e.target.value)}
        onChangeMax={(e) => set__max(e.target.value)}
        onStart={onStart}
        examplesNumber={examplesNumber}
        min={min}
        max={max}
        displaySettings={displaySettings}
        displayMin={true}
        displayMax={true}
        displayShowHints={false}
        // showHints={showHints}
        // onChangeShowHints={onChangeShowHints}
      />

      <ExerciseMultBy
        displayExample={displayExample}
        onStopExercise={onStopExercise}
        example={example}
        onAnswer={onAnswer}
        onChangeUserAnswers={onChangeUserAnswers}
        numberOf_Task={numberOf_Task}
        userDigit_1={userDigit_1}
        userDigit_2={userDigit_2}
        userDigit_3={userDigit_3}
        userDigit_4={userDigit_4}
        userDigit_5={userDigit_5}
        userDigit_6={userDigit_6}
        userDigit_7={userDigit_7}
      />

      <ReportOnlyResult
        onSaveResults={onSaveResults}
        onContinue={onContinue}
        resultsList={resultsList}
        user={user}
        display={displayStatistics}
      />
    </Grid>
  );
}

export default MultiplyBy9;
