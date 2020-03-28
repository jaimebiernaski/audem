import { StyleSheet, Dimensions, TextStyle } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export enum Colors {
  Primary = '#DB0D02',
  Secondary = '#F2830A',
  Tertiary = '#FFE014',
  TextDark = '#303030',
  TextLight = '#808080'
}

export enum Padding {
  Tiny = 5,
  Small = 10,
  Medium = 20,
  Lange = 30,
  ExtraLarge = 40
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
  Black = '900'
}

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    alignContent: 'center',
    justifyContent: 'center'
  }
});

export const typo = StyleSheet.create({
  largeTitle: {
    fontFamily,
    fontSize: 34,
    fontWeight: FontWeight.Bold,
    color: Colors.TextDark
  },
  title_1: {
    fontFamily,
    fontSize: 28,
    fontWeight: FontWeight.Regular,
    color: Colors.TextDark
  },
  title_2: {
    fontFamily,
    fontSize: 22,
    fontWeight: FontWeight.Regular,
    color: Colors.TextDark
  },
  title_3: {
    fontFamily,
    fontSize: 20,
    fontWeight: FontWeight.Regular,
    color: Colors.TextDark
  },
  headline: {
    fontFamily,
    fontSize: 17,
    fontWeight: FontWeight.Semibold,
    color: Colors.TextDark
  },
  body: {
    fontFamily,
    fontSize: 17,
    fontWeight: FontWeight.Regular,
    color: Colors.TextDark
  },
  callout: {
    fontFamily,
    fontSize: 16,
    fontWeight: FontWeight.Regular,
    color: Colors.TextDark
  },
  subhead: {
    fontFamily,
    fontSize: 15,
    fontWeight: FontWeight.Regular,
    color: Colors.TextDark
  },
  footnote: {
    fontFamily,
    fontSize: 13,
    fontWeight: FontWeight.Regular,
    color: Colors.TextDark
  },
  caption_1: {
    fontFamily,
    fontSize: 12,
    fontWeight: FontWeight.Regular,
    color: Colors.TextDark
  },
  caption_2: {
    fontFamily,
    fontSize: 11,
    fontWeight: FontWeight.Regular,
    color: Colors.TextDark
  },
  caption_3: {
    fontFamily,
    fontSize: 10,
    fontWeight: FontWeight.Regular,
    color: Colors.TextDark
  }
});
