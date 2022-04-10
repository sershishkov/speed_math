import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTimer } from 'use-timer';
import { generateExample__ForCheckMultiplication } from '../../../../utils/generateExample';
import {
  update__statistic,
  reset as resetStatistic,
} from '../../../../features/statistics/statisticSlice';

import Description from './Description';

import { operators } from '../../../../utils/constants';
import Header from '../../../../components/lessons/header/Header';
import Settings from '../../../../components/lessons/settings/Settings';
import ExerciseCheck from '../../../../components/lessons/exercises/ExerciseCheck';
import ReportOnlyCheck from '../../../../components/lessons/reports/ReportOnlyCheck';

import Grid from '@mui/material/Grid';

function CheckingAnswers() {
  const [min, set__min] = useState(101);
  const [max, set__max] = useState(999);
  const [examplesNumber, set__examplesNumber] = useState(10);
  const [example, set__example] = useState(null);
  const [userAnswer_CheckNumberLeft, set__userAnswer_CheckNumberLeft] =
    useState('');
  const [userAnswer_CheckNumberRight, set__userAnswer_CheckNumberRight] =
    useState('');
  const [userAnswer_CheckResultLeft, set__userAnswer_CheckResultLeft] =
    useState('');
  const [userAnswer_CheckResultRight, set__userAnswer_CheckResultRight] =
    useState('');

  const [displayExample, set__displayExample] = useState(false);
  const [displaySettings, set__displaySettings] = useState(true);
  const [displayStatistics, set__displayStatistics] = useState(false);
  const [disableStartButton, set__disableStartButton] = useState(false);
  const [displayStopButton, set__displayStopButton] = useState(false);
  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState([]);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { time, start, pause, reset } = useTimer();

  const onStart = () => {
    set__displayExample(true);
    set__displayStopButton(true);
    set__displaySettings(false);
    set__disableStartButton(true);

    nextTask();
    start();
  };

  const onStopExercise = () => {
    set__displayStopButton(false);
    set__displayExample(false);
    set__displaySettings(true);
    reset();
    set__displayStatistics(false);
    set_numberOf_Task(0);
    set__disableStartButton(false);
    set__resultsList([]);

    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');
  };

  const nextTask = () => {
    set__example(new generateExample__ForCheckMultiplication(min, max));

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
    set__disableStartButton(false);
    set__resultsList([]);

    set__displayStopButton(false);
    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');
  };

  const onAnswer = () => {
    const obj = {
      example: `${example.numberLeft} ${operators[2]} ${example.numberRight} ${operators[4]} ${example.resultRight} `,

      userAnswer_CheckNumberLeft,
      userAnswer_CheckNumberRight,
      userAnswer_CheckResultLeft,
      userAnswer_CheckResultRight,

      checkNumberLeft: example.checkNumberLeft,
      checkNumberRight: example.checkNumberRight,
      checkResultLeft: example.checkResultLeft,
      checkResultRight: example.checkResultRight,

      doneCheck:
        +userAnswer_CheckNumberLeft === +example.checkNumberLeft &&
        +userAnswer_CheckNumberRight === +example.checkNumberRight &&
        +userAnswer_CheckResultLeft === +example.checkResultLeft &&
        +userAnswer_CheckResultRight === +example.checkResultRight,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');

    if (numberOf_Task < examplesNumber) {
      nextTask();
      const userAnswer_CheckNumberLeftInput = document.getElementById(
        'userAnswer_CheckNumberLeft'
      );
      userAnswer_CheckNumberLeftInput.focus();
    } else {
      set__displayExample(false);
      set__displayStatistics(true);
      pause();
      set__displayStopButton(false);
    }
  };
  const onSaveResults = () => {
    let rightTasks = 0;
    resultsList.forEach((item) => {
      if (item.doneCheck) {
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
    set__disableStartButton(false);
    set__resultsList([]);

    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');
  };

  return (
    <Grid container direction='column'>
      <Header
        hrefPrev='/lessons/level_2/ref-number-100-mix'
        hrefNext='/lessons/level_3/ref-number-20'
        time={time}
        title=' Проверка ответов'
      />
      <Description />
      <Settings
        onChangeExamplesNumber={(e) => set__examplesNumber(e.target.value)}
        onChangeMin={(e) => set__min(e.target.value)}
        onChangeMax={(e) => set__max(e.target.value)}
        onStart={onStart}
        examplesNumber={examplesNumber}
        min={min}
        max={max}
        displaySettings={displaySettings}
        displayMin={false}
        displayMax={false}
        // displayShowHints={true}
        // showHints={showHints}
        // onChangeShowHints={(e) => set__showHints(e.target.checked)}
      />
      <ExerciseCheck
        displayExample={displayExample}
        onStopExercise={onStopExercise}
        example={example}
        operator={operators[2]}
        userAnswer_CheckNumberLeft={userAnswer_CheckNumberLeft}
        userAnswer_CheckNumberRight={userAnswer_CheckNumberRight}
        userAnswer_CheckResultLeft={userAnswer_CheckResultLeft}
        userAnswer_CheckResultRight={userAnswer_CheckResultRight}
        setAnswer_CheckNumberLeft={(e) =>
          set__userAnswer_CheckNumberLeft(e.target.value)
        }
        setAnswer_CheckNumberRight={(e) =>
          set__userAnswer_CheckNumberRight(e.target.value)
        }
        setAnswer_CheckResultLeft={(e) =>
          set__userAnswer_CheckResultLeft(e.target.value)
        }
        setAnswer_CheckResultRight={(e) =>
          set__userAnswer_CheckResultRight(e.target.value)
        }
        onAnswer={onAnswer}
        numberOf_Task={numberOf_Task}
      />
      <ReportOnlyCheck
        displayStatistics={displayStatistics}
        resultsList={resultsList}
        user={user}
        onSaveResults={onSaveResults}
        onContinue={onContinue}
      />
    </Grid>
  );
}

export default CheckingAnswers;
