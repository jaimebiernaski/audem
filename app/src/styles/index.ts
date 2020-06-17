import { StyleSheet, Dimensions, TextStyle } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export enum Colors {
  Primary = '#DB0D02',
  Secondary = '#F2830A',
  Tertiary = '#FFE014',
  Dark = '#303030',
  Grey = '#808080',
  White = '#FFF',
  Blue = '#187EDB',
}

export enum Padding {
  Tiny = 5,
  Small = 10,
  Medium = 20,
  Lange = 30,
  ExtraLarge = 40,
}

const fontFamily = 'Arial';

export enum FontWeight {
  Thin = '100',
  UltraLight = '200',
  Light = '300',
  Regular = '400',
  Medium = '500',
  Semibold = '600',
  Bold = '700',
  Heavy = '800',
  Black = '900',
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  center: {
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export const typo = StyleSheet.create({
  largeTitle: {
    fontFamily,
    fontSize: 34,
    fontWeight: FontWeight.Bold,
    color: Colors.Dark,
  },
  titleOne: {
    fontFamily,
    fontSize: 28,
    fontWeight: FontWeight.Regular,
    color: Colors.Dark,
  },
  titleTwo: {
    fontFamily,
    fontSize: 22,
    fontWeight: FontWeight.Regular,
    color: Colors.Dark,
  },
  titleThree: {
    fontFamily,
    fontSize: 20,
    fontWeight: FontWeight.Regular,
    color: Colors.Dark,
  },
  headline: {
    fontFamily,
    fontSize: 17,
    fontWeight: FontWeight.Semibold,
    color: Colors.Dark,
  },
  body: {
    fontFamily,
    fontSize: 17,
    fontWeight: FontWeight.Regular,
    color: Colors.Dark,
  },
  callout: {
    fontFamily,
    fontSize: 16,
    fontWeight: FontWeight.Regular,
    color: Colors.Dark,
  },
  subhead: {
    fontFamily,
    fontSize: 15,
    fontWeight: FontWeight.Regular,
    color: Colors.Dark,
  },
  footnote: {
    fontFamily,
    fontSize: 13,
    fontWeight: FontWeight.Regular,
    color: Colors.Dark,
  },
  captionOne: {
    fontFamily,
    fontSize: 12,
    fontWeight: FontWeight.Regular,
    color: Colors.Dark,
  },
  captionTwo: {
    fontFamily,
    fontSize: 11,
    fontWeight: FontWeight.Regular,
    color: Colors.Dark,
  },
  captionThree: {
    fontFamily,
    fontSize: 10,
    fontWeight: FontWeight.Regular,
    color: Colors.Dark,
  },
});

export const buttons = StyleSheet.create({
  regular: {
    width: 200,
    alignSelf: 'center',
    backgroundColor: Colors.Blue,
  },
  container: {
    width: 200,
    alignSelf: 'center',
  },
});
