'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

var {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Component,
  TouchableHighlight,
} = React;

var styles = StyleSheet.create({
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000000',
    height:18,
  },
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#efeff4',
    flexWrap:'wrap',
  },

  cellRow:{
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'flex-start',
  },

  phoneTitle:{
    marginTop:120,
    fontSize:22,
    fontWeight:'bold',
  },

  subTitle:{
    fontSize:16,
    fontWeight:'bold',
  },

  minSpaceLeft:{
    marginLeft:12,
  },
  maxSpaceLeft:{
    marginLeft:50,
  },
});

class Welcome extends Component {
  render() {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}

        keyboardDismissMode='interactive'
        keyboardDismissMode='on-drag'
        style={{backgroundColor:'#efeff4'}}
        >

      <View style={styles.container}>





      <Text style={[styles.phoneTitle]}> 手机号登陆 </Text>
      {/* this will be phone cell row*/}
      <View style={{flex:1,flexDirection:'row',marginTop:100,maxHeight:60,backgroundColor:'clear',justifyContent:'flex-start',alignItems:'center',width:ScreenWidth}}>
        <Text style={[styles.subTitle,styles.minSpaceLeft]}>
          用户名
        </Text>

        <View style={[styles.maxSpaceLeft]}>
            <TextInput
              style={{height: 60,width:160}}
              placeholder = '请输入用户名'
              />
        </View>

        <TouchableHighlight
            underlayColor='clear'
          >

            <Text style={{height:40,width:100,color:'white',fontWeight:'bold',backgroundColor:'#4cc0e0',textAlign:'center',paddingTop:10,borderRadius:20}}>
              获取验证码
            </Text>

        </TouchableHighlight>

      </View>

      {/* seperator */}
      <View style={{backgroundColor:'#bbbbbb',maxHeight:.5,flex:1,width:ScreenWidth}}></View>

        {/* this will be phone cell row*/}
        <View style={{flex:1,flexDirection:'row',marginTop:0,maxHeight:60,backgroundColor:'clear',justifyContent:'flex-start',alignItems:'center',width:ScreenWidth}}>
          <Text style={[styles.subTitle,styles.minSpaceLeft]}>
            验证码
          </Text>

          <View style={[styles.maxSpaceLeft]}>
              <TextInput
                style={{height: 60,width:160}}
                placeholder = '请输入验证码'
                keyboardAppearance='dark'
                tintColor='white'
                />
          </View>

        </View>

        {/* seperator */}
        <View style={{backgroundColor:'#bbbbbb',maxHeight:.5,flex:1,width:ScreenWidth}}></View>

        <View style={{width:ScreenWidth,flex:1,alignItems:'flex-end',marginTop:12,paddingRight:12}}>
          <Text style={{color:'#aaaaaa'}}>
          (验证码60s后，重新发送)
          </Text>
        </View>

        {/* login button */}

<View style={{flex:2,width:300,backgroundColor:'red'}}>
  <TouchableHighlight
      underlayColor='clear'
    >

      <Text style={{flex:0,height:40,position:'absolute',left:12,right:12,top:12,color:'white',fontWeight:'bold',backgroundColor:'#4cc0e0',textAlign:'center',paddingTop:10,borderRadius:20}}>
        登录
      </Text>

  </TouchableHighlight>
</View>


      </View>
</ScrollView>
    );
  }
}

module.exports = Welcome
