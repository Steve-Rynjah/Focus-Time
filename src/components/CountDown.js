import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { FONT_SIZES, SPACING } from '../utils/sizes';
import { COLORS } from '../utils/colors';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 0.5, isPaused, onProgress, onEnd }) => {
  const interval = useRef(null);
  const [millis, setMillis] = useState(minutesToMillis(minutes));

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000; //1000 === 1sec
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
    if (millis === 0) {
      onEnd();
    }
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <View>
      <Text style={styles.text}>
        {formatTime(minute)} : {formatTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.white,
    padding: SPACING.lg,
    backgroundColor: 'rgba(94,132,226,0.3)',
  },
});
