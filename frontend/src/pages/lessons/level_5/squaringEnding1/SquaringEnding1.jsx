import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTimer } from 'use-timer';
import { genExample__SquaringEnding_1 } from '../../../../utils/generateExample';
import {
  update__statistic,
  reset as resetStatistic,
} from '../../../../features/statistics/statisticSlice';
import Description1 from './Description1';

import Header from '../../../../components/lessons/header/Header';
import Settings from '../../../../components/lessons/settings/Settings';
import ExerciseSquaringSimple from '../../../../components/lessons/exercises/ExerciseSquaringSimple';
import ReportOnlyResult from '../../../../components/lessons/reports/ReportOnlyResult';

import Grid from '@mui/material/Grid';

function SquaringEnding1() {
  const [max, set__max] = useState(200);

  const [examplesNumber, set__examplesNumber] = useState(10);
  const [example, set__example] = useState(null);
  const [userAnswer, set__userAnswer] = useState('');

  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);
  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState([]);

  const { user } = useSelector((state) => state.auth);
  const { time, start, pause, reset } = useTimer();

  const dispatch = useDispatch();

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
    set__example(new genExample__SquaringEnding_1(max));
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
      example: `${example.number_1}`,

      userAnswer,
      rightAnswer: example.resultRight,
      done: +userAnswer - +example.resultRight === 0,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswer('');

    if (numberOf_Task < examplesNumber) {
      nextTask();
      const userAnswerInput = document.getElementById('userAnswer');

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
    set__userAnswer('');
  };

  return (
    <Grid container direction='column'>
      <Header
        hrefPrev='/lessons/level_5/squaring-close-to-500'
        hrefNext='/lessons/level_5/squaring-ending-9'
        time={time}
        title='???????????????????? ?? ?????????????? ?????????? ???????????????????????????? ???? 1'
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
        displayMax={true}
        displayShowHints={false}
        // showHints={showHints}
        // onChangeShowHints={(e) => set__showHints(e.target.checked)}
      />
      <ExerciseSquaringSimple
        displayExample={displayExample}
        onStopExercise={onStopExercise}
        example={example}
        userAnswer={userAnswer}
        onChangeUserAnswer={(e) => set__userAnswer(e.target.value)}
        onAnswer={onAnswer}
        numberOf_Task={numberOf_Task}
        // showHints={showHints}
        // refNumber={refNumber}
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

export default SquaringEnding1;
