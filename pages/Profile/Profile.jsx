import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {globalStyles} from '../../assets/styles/globalStyles';
import {ProfileStyles} from './Profile.style';
import UserProfileImage from '../../components/UserProfileImage/UserProfileImage';
import {ScrollView} from 'react-native-gesture-handler';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView
        contentContainerStyle={globalStyles.flexGrow}
        showsVerticalScrollIndicator={false}>
        <View style={ProfileStyles.profileImageContainer}>
          <View style={ProfileStyles.imageContainer}>
            <UserProfileImage
              profileImages={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <Text style={ProfileStyles.userName}>Emmanuel Robertsen</Text>
        <View style={ProfileStyles.statsContainer}>
          <View style={ProfileStyles.borderRight}>
            <Text style={[ProfileStyles.countText]}>50M</Text>
            <Text style={ProfileStyles.typeText}>Following</Text>
          </View>
          <View style={ProfileStyles.borderRight}>
            <Text style={[ProfileStyles.countText]}>100M</Text>
            <Text style={ProfileStyles.typeText}>Followers</Text>
          </View>
          <View>
            <Text style={ProfileStyles.countText}>100</Text>
            <Text style={ProfileStyles.typeText}>Posts</Text>
          </View>
        </View>
        <View style={globalStyles.flex}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
