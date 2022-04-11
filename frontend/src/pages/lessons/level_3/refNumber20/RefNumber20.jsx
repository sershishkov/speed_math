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
import ExercieMultWithHintsCheck from '../../../../components/lessons/exercises/ExercieMultWithHintsCheck';
import ReportResultAndCheck from '../../../../components/lessons/reports/ReportResultAndCheck';

import Grid from '@mui/material/Grid';

function RefNumber20() {
  const [min, set__min] = useState(11);
  const [max, set__max] = useState(35);

  const [examplesNumber, set__examplesNumber] = useState(10);
  const [example, set__example] = useState(null);
  const [userAnswer, set__userAnswer] = useState('');
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
  const [numberOf_Task, set_numberOf_Task] = useState(0);
  const [resultsList, set__resultsList] = useState([]);
  const [showHints, set__showHints] = useState(true);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { time, start, pause, reset } = useTimer();

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
    set__resultsList([]);
    set__userAnswer('');
    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');
  };

  const onAnswer = () => {
    const doneExample = +userAnswer === +example.resultRight;
    const doneCheck =
      +userAnswer_CheckNumberLeft === +example.checkNumberLeft &&
      +userAnswer_CheckNumberRight === +example.checkNumberRight &&
      +userAnswer_CheckResultLeft === +example.checkResultLeft &&
      +userAnswer_CheckResultRight === +example.checkResultRight;

    const obj = {
      example: `${example.numberLeft} ${operators[2]} ${example.numberRight}`,

      userAnswer,
      userAnswer_CheckNumberLeft,
      userAnswer_CheckNumberRight,
      userAnswer_CheckResultLeft,
      userAnswer_CheckResultRight,

      resultRight: example.resultRight,
      checkNumberLeft: example.checkNumberLeft,
      checkNumberRight: example.checkNumberRight,
      checkResultLeft: example.checkResultLeft,
      checkResultRight: example.checkResultRight,

      doneExample,
      doneCheck,
      doneExcercise: doneExample && doneCheck,
    };
    set__resultsList((prevState) => [...prevState, obj]);

    set__userAnswer('');
    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');

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
    set__userAnswer_CheckNumberLeft('');
    set__userAnswer_CheckNumberRight('');
    set__userAnswer_CheckResultLeft('');
    set__userAnswer_CheckResultRight('');
  };

  return (
    <Grid container direction='column'>
      <Header
        hrefPrev='/lessons/level_2/checking-answers'
        hrefNext='/lessons/level_3/ref-number-50'
        time={time}
        title='Умножение чисел с опорным числом 20 (над и под опорным числом)'
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
        displayShowHints={true}
        showHints={showHints}
        onChangeShowHints={(e) => set__showHints(e.target.checked)}
      />
      <ExercieMultWithHintsCheck
        displayExample={displayExample}
        onStopExercise={onStopExercise}
        example={example}
        operator={operators[2]}
        userAnswer={userAnswer}
        onChangeUserAnswer={(e) => set__userAnswer(e.target.value)}
        onAnswer={onAnswer}
        numberOf_Task={numberOf_Task}
        showHints={showHints}
        showPlusHints={true}
        showMinusHints={true}
        refNumber={20}
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
      />
      <ReportResultAndCheck
        displayStatistics={displayStatistics}
        resultsList={resultsList}
        user={user}
        onSaveResults={onSaveResults}
        onContinue={onContinue}
      />
    </Grid>
  );
}

export default RefNumber20;
