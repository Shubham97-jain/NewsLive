import React from 'react';
import { View, Linking, TouchableNativeFeedback,Headers } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

 class Article extends React.Component {
  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;
    const { noteStyle, featuredTitleStyle } = styles;
    const time = moment(publishedAt || moment.now()).fromNow();
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

    return (

      
    
        <View style={{height:hp('30'),width:wp('100')}}>
          
      <TouchableNativeFeedback
        useForeground
        onPress={() => Linking.openURL(url)}
      >
      
        <Card
         style={{width:67}}
          featuredTitle={title}
          // featuredTitleStyle={featuredTitleStyle}
    
          image={{
             uri: urlToImage || defaultImg,
           
          }}
        >
          <Text style={{ marginBottom: wp('6') }}>
            {description || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#000000'}} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
            <Text style={noteStyle}>{time}</Text>
          </View>
        </Card>
      </TouchableNativeFeedback>
      </View> 
    );

  }
}

const styles = {
  noteStyle: {
    margin: wp('1'),
    fontStyle: 'italic',
    color: '#000000',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width:wp('2'), height:hp('3') },
    textShadowRadius: 3
  },
  imagge:
  {
    width:wp('60'),
    height:hp('6')

  }
};

export default Article;