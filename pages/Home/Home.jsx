import {View, StatusBar, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import IndividualStory from '../../components/IndividualStory/IndividualStory';
import PostCard from '../../components/PostCard/PostCard';
import {HomeStyle} from './Home.style';
import {globalStyles} from '../../assets/styles/globalStyles';

const Home = props => {
  const userPosts = useMemo(
    () => [
      {
        id: 1,
        firstName: 'Allison',
        lastName: 'Bocker',
        location: 'Boston MA',
        likes: 12,
        comments: 24,
        bookmarks: 55,
        profileImages: require('../../assets/images/default_profile.png'),
        postImages: require('../../assets/images/default_post.png'),
      },
      {
        id: 2,
        firstName: 'Jennifier',
        lastName: 'Bocker',
        location: 'Wilkson, MA',
        likes: 1340,
        comments: 23,
        profileImages: require('../../assets/images/default_profile.png'),
        postImages: require('../../assets/images/default_post.png'),
        bookmarks: 89,
      },
      {
        id: 3,
        firstName: 'Adam',
        lastName: 'Spera',
        location: 'Worcester MA',
        likes: 134,
        comments: 3,
        profileImages: require('../../assets/images/default_profile.png'),
        postImages: require('../../assets/images/default_post.png'),
        bookmarks: 3,
      },
      {
        id: 4,
        firstName: 'Vaibhav',
        lastName: 'Varshney',
        location: 'Los Ang MA',
        likes: 1234,
        comments: 43,
        profileImages: require('../../assets/images/default_profile.png'),
        postImages: require('../../assets/images/default_post.png'),
        bookmarks: 234,
      },
      {
        id: 5,
        firstName: 'Nicolas',
        lastName: 'Namoradze',
        location: 'German MA',
        likes: 1245,
        comments: 64,
        profileImages: require('../../assets/images/default_profile.png'),
        postImages: require('../../assets/images/default_post.png'),
        bookmarks: 543,
      },
      {
        id: 6,
        firstName: 'Steve',
        lastName: 'Smith',
        location: 'Aus MA',
        likes: 324,
        comments: 332,
        profileImages: require('../../assets/images/default_profile.png'),
        postImages: require('../../assets/images/default_post.png'),
        bookmarks: 3221,
      },
    ],
    [],
  );

  const userStories = useMemo(
    () => [
      {
        firstName: 'Joseph',
        id: 1,
        profileImages: require('../../assets/images/default_profile.png'),
      },
      {
        firstName: 'Angel',
        id: 2,
        profileImages: require('../../assets/images/default_profile.png'),
      },
      {
        firstName: 'White',
        id: 3,
        profileImages: require('../../assets/images/default_profile.png'),
      },
      {
        firstName: 'Oivier',
        id: 4,
        profileImages: require('../../assets/images/default_profile.png'),
      },
      {
        firstName: 'Nita',
        id: 5,
        profileImages: require('../../assets/images/default_profile.png'),
      },
      {
        firstName: 'Nicolas',
        id: 6,
        profileImages: require('../../assets/images/default_profile.png'),
      },
      {
        firstName: 'Nina',
        id: 7,
        profileImages: require('../../assets/images/default_profile.png'),
      },
      {
        firstName: 'Vaibhav',
        id: 8,
        profileImages: require('../../assets/images/default_profile.png'),
      },
      {
        firstName: 'Sachin',
        id: 9,
        profileImages: require('../../assets/images/default_profile.png'),
      },
    ],
    [],
  );
  const userStoriesPageSize = 4;
  const userPostPageSize = 2;
  const [userFetchedCounter, setUserFetchedCounter] = useState(1);
  const [userStoryRender, setUserStoryRender] = useState([]);
  const [isLoadingStories, setIsloadingStories] = useState(false);
  const [postFetchedCounter, setPostFetchedCounter] = useState(1);
  const [postRender, setPostRender] = useState([]);
  const [isLoadingPost, setIsloadingPost] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startedIndex = (currentPage - 1) * pageSize;
    const endingIndex = currentPage * pageSize;
    if (database?.length <= startedIndex) {
      return [];
    } else {
      return database?.slice(startedIndex, endingIndex);
    }
  };

  useEffect(() => {
    setIsloadingStories(true);
    const getInitialData = pagination(
      userStories,
      userFetchedCounter,
      userStoriesPageSize,
    );
    setUserStoryRender(state => [...state, ...getInitialData]);
    setIsloadingStories(false);
  }, [userFetchedCounter, userStories]);

  useEffect(() => {
    setIsloadingPost(true);
    const getInitialData = pagination(
      userPosts,
      postFetchedCounter,
      userPostPageSize,
    );
    setPostRender(state => [...state, ...getInitialData]);
    setIsloadingPost(false);
  }, [postFetchedCounter, userPosts]);

  return (
    <SafeAreaView style={[HomeStyle.container, globalStyles.backgroundWhite]}>
      <StatusBar backgroundColor="#ffbde0" />
      <View style={HomeStyle.titleContainer}>
        <HomeHeader {...props} />
      </View>
      <View style={HomeStyle.storyContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={userStoryRender}
          renderItem={({item}) => <IndividualStory key={item.id} item={item} />}
          keyExtractor={item => item.id}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            setUserFetchedCounter(state => state + 1);
          }}
        />
      </View>
      <View style={HomeStyle.postContainer}>
        <FlatList
          data={postRender}
          keyExtractor={item => item.id}
          renderItem={({item}) => <PostCard key={item.id} {...item} />}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            setPostFetchedCounter(state => state + 1);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
