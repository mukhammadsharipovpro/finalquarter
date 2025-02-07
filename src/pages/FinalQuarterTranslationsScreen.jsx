import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import FinalQuarterHeader from '../components/FinalQuarterHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <FinalQuarterHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'EPL',
          '03.03 21:00',
          'Arsenal \n' + 'Tottenham Hotspur',
        )}
        {renderBroadcast('Serie A', '06.03 19:30', 'Lazio \n' + 'Napoli')}
        {renderBroadcast(
          'La Liga',
          '09.03 20:45',
          'Villarreal \n' + 'Real Betis',
        )}
        {renderBroadcast('Ligue 1', '16.03 20:00', 'Nice \n' + 'Monaco')}
        {renderBroadcast(
          'MLS',
          '19.03 18:00',
          'New York City FC \n' + 'Chicago Fire',
        )}
        {renderBroadcast('Cricket', '22.03 16:30', 'Sri Lanka \n' + 'Pakistan')}
        {renderBroadcast('Rugby', '25.03 20:00', 'Australia \n' + 'Fiji')}
        {renderBroadcast(
          'Tennis',
          '28.03 18:00',
          'Simona Halep \n' + 'Ashleigh Barty',
        )}
        {renderBroadcast(
          'Golf',
          '31.03 10:00',
          'The Open Championship \n' + 'Final Round',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 25,
  },
  league: {
    fontSize: 40,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
