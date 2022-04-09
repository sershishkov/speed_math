import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTimer } from 'use-timer';
import { generateExample__AddMultSub } from '../../../utils/generateExample';
import {
  update__statistic,
  reset as resetStatistic,
} from '../../../features/statistics/statisticSlice';

import { operators } from '../../../utils/constants';
import Header from '../../../components/lessons/header/Header';
import Settings from '../../../components/lessons/settings/Settings';
import ExerciseSimple from '../../../components/lessons/exercises/ExerciseSimple';
import ReportOnlyResult from '../../../components/lessons/reports/ReportOnlyResult';

import Grid from '@mui/material/Grid';

function SimpleSubtraction() {
  const [min, set__min] = useState(1);
  const [max, set__max] = useState(100);
  const [examplesNumber, set__examplesNumber] = useState(10);
  const [example, set__example] = useState(null);
  const [userAnswer, set__userAnswer] = useState('');
  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);
  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState([]);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { time, start, pause, reset } = useTimer();
  const userAnswerInput = document.getElementById('userAnswer');

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
    set__userAnswer('');
  };

  const nextTask = () => {
    set__example(new generateExample__AddMultSub(min, max));
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
    set__userAnswer('');
  };

  const onAnswer = () => {
    const obj = {
      example: `${example.numberLeft} ${operators[1]} ${example.numberRight}`,
      userAnswer,
      rightAnswer: example.resultSub,
      done: +userAnswer === +example.resultSub,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswer('');

    if (numberOf_Task < examplesNumber) {
      nextTask();

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
    set__userAnswer('');
  };

  return (
    <Grid container direction='column'>
      <Header
        hrefPrev='/lessons/level_1/simple-addition'
        hrefNext='/lessons/level_1/simple-division'
        time={time}
        title='Простое вычитание'
      />
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
      />

      <ExerciseSimple
        onStopExercise={onStopExercise}
        onChangeUserAnswer={(e) => set__userAnswer(e.target.value)}
        onAnswer={onAnswer}
        example={example}
        operator={operators[1]}
        userAnswer={userAnswer}
        numberOf_Task={numberOf_Task}
        displayExample={displayExample}
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

export default SimpleSubtraction;
