import React from 'react';
import {Image, Text, View} from 'react-native';
import {PostCardStyles} from './PostCard.style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

function PostCard(props) {
  const {
    profileImages,
    firstName,
    lastName,
    location,
    postImages,
    likes,
    comments,
    bookmarks,
  } = props;
  return (
    <View style={PostCardStyles.postContainer}>
      {/* Header */}
      <View style={PostCardStyles.postHeader}>
        <View style={PostCardStyles.userDetails}>
          <View style={PostCardStyles.imageContainer}>
            <UserProfileImage profileImages={profileImages} />
          </View>
          <View>
            <Text style={PostCardStyles.userName}>
              {firstName} {lastName}
            </Text>
            <Text style={PostCardStyles.location}>{location}</Text>
          </View>
        </View>
        <View>
          <FontAwesomeIcon icon={faEllipsisH} color="#79869F" />
        </View>
      </View>
      {/* Body */}
      <View>
        <Image source={postImages} style={{width: '100%'}} />
      </View>
      {/* Footer */}
      <View style={PostCardStyles.postFooter}>
        <View style={PostCardStyles.iconContainer}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={PostCardStyles.countText}>{likes}</Text>
        </View>
        <View style={PostCardStyles.iconContainer}>
          <FontAwesomeIcon icon={faComment} color="#79869F" />
          <Text style={PostCardStyles.countText}>{comments}</Text>
        </View>
        <View style={PostCardStyles.iconContainer}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text style={PostCardStyles.countText}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
}

export default PostCard;
