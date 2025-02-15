import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import ImageViewer from './components/imageViewer.js';
import Button from './components/Button.js';

import {useState} from 'react';

const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {
    const [selectedImage, setSelectedImage] = useState(null);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });

        if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
          console.log(result);
        } else {
          alert('You did not select any image!');
        }
    };
  return (
    <View style={styles.container}>
      <View>
        <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo!"/>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
   footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
});
